/**
 * API pública v1 — para automações (n8n, Make, Zapier) e integrações próprias.
 * Autentica por chave gerada no painel, em
 * `Authorization: Bearer qp_live_...`, e não usa cookie nem CSRF: é
 * comunicação servidor-a-servidor, então não há requisição forjada pelo
 * navegador a barrar.
 *
 * Escopo deliberadamente pequeno: ler catálogo, pedidos e clientes, e mudar o
 * status de um pedido. Criar pedido continua sendo caminho do checkout, que
 * recalcula preço e baixa estoque em transação.
 */

import { Router } from 'express';

import { requireApiKey } from '../auth.ts';
import { placeholders, q, type Row } from '../db.ts';
import { fail } from '../errors.ts';
import { body, bodyFloat, bodyStr, iso, jsonOk, queryStr } from '../http.ts';
import { fireWebhooks } from '../providers.ts';
import { fetchProducts, orderRowToApi, productRowToApi, transicaoDeStatus } from '../store.ts';
import { h } from './helpers.ts';

export const v1Routes = Router();

const STATUS_PEDIDO = ['pending', 'paid', 'shipped', 'delivered', 'canceled'];

// GET /api/v1/products
v1Routes.get('/products', h(async (req, res) => {
  await requireApiKey(req);
  /*
   * Aqui os produtos sem categoria APARECEM, ao contrário da vitrine: quem
   * integra precisa enxergar o cadastro incompleto para poder completá-lo.
   */
  jsonOk(res, { products: await fetchProducts() });
}));

// GET /api/v1/products/:id
v1Routes.get('/products/:id', h(async (req, res) => {
  await requireApiKey(req);
  const row = await q.one('SELECT * FROM products WHERE id = ?', [req.params.id]);
  if (row === null) fail('Produto não encontrado.', 404, 'not_found');
  jsonOk(res, { product: productRowToApi(row) });
}));

/**
 * PATCH /api/v1/products/:id/stock — a automação sincroniza o estoque.
 *
 * O valor é absoluto (saldo, não variação), e é isso que torna a chamada
 * idempotente: repetir o mesmo envio depois de um timeout não soma nem subtrai
 * nada. Só mexe no saldo — o resto do cadastro é do painel.
 */
v1Routes.patch('/products/:id/stock', h(async (req, res) => {
  await requireApiKey(req);
  const id = String(req.params.id ?? '');
  /*
   * Saldo pode ter fração — a loja vende por peso e por metro.
   *
   * Era lido com `bodyInt`, que trunca: mandar 7,5 gravava 7 e a resposta
   * confirmava "stock: 7" sem apontar nada de errado. Os dois sistemas
   * passavam a discordar do saldo, cada um convicto, e a diferença só
   * apareceria num inventário meses depois.
   */
  const stock = bodyFloat(body(req), 'stock', -1);
  if (!Number.isFinite(stock) || stock < 0) {
    fail('Informe "stock" como um número não negativo (aceita decimais).', 422, 'invalid_stock');
  }

  // Este endpoint não cria produto: id desconhecido é 404, como sempre foi.
  if ((await q.one('SELECT id FROM products WHERE id = ?', [id])) === null) {
    fail('Produto não encontrado.', 404, 'not_found');
  }

  // Três casas é o que a coluna guarda; mandar mais é arredondado aqui.
  await q.run(
    'UPDATE products SET stock = ? WHERE id = ?',
    [Math.round(stock * 1000) / 1000, id],
  );

  /*
   * A resposta devolve o saldo GRAVADO, lido do banco — não o que veio no
   * corpo. Ecoar o valor enviado seria confirmar uma gravação que pode não ter
   * acontecido exatamente como pedida: 7,5005 é gravado como 7,501, e a
   * resposta precisa dizer o número que ficou lá.
   */
  const depois = await q.one('SELECT stock FROM products WHERE id = ?', [id]);
  jsonOk(res, { ok: true, id, stock: Number(depois?.stock ?? 0) });
}));

// GET /api/v1/orders?status=&since=
v1Routes.get('/orders', h(async (req, res) => {
  await requireApiKey(req);

  const where: string[] = [];
  const params: unknown[] = [];

  const status = queryStr(req, 'status', '', 20);
  if (STATUS_PEDIDO.includes(status)) {
    where.push('status = ?');
    params.push(status);
  }

  /*
   * Dois filtros de data, e a diferença entre eles é o que salva pedido pago.
   *
   *   ?since=          compara com a CRIAÇÃO — "o que entrou depois de X";
   *   ?updatedSince=   compara com a ATUALIZAÇÃO — "o que MUDOU depois de X".
   *
   * A varredura periódica que existe para cobrir webhook perdido precisa do
   * segundo. Com o primeiro, um pedido criado ontem e pago hoje nunca
   * reaparece: a criação continua sendo ontem, e a varredura de hoje não o
   * enxerga. O pedido pago fica parado e ninguém percebe — que é o pior
   * defeito possível numa integração de pedido.
   *
   * `since` continua existindo e com o mesmo significado, porque já está
   * documentado e em uso. Quem faz varredura de segurança deve usar
   * `updatedSince`; quem faz carga inicial, `since`.
   */
  const emHoraLocal = (iso8601: string): string | null => {
    const t = Date.parse(iso8601);
    if (!Number.isFinite(t)) return null;
    // Convertido para a hora de São Paulo, que é o fuso da sessão MySQL.
    return new Date(t - 3 * 3_600_000).toISOString().slice(0, 19).replace('T', ' ');
  };

  const since = queryStr(req, 'since', '', 40);
  if (since !== '') {
    const quando = emHoraLocal(since);
    if (quando !== null) {
      where.push('created_at >= ?');
      params.push(quando);
    }
  }

  const updatedSince = queryStr(req, 'updatedSince', '', 40);
  if (updatedSince !== '') {
    const quando = emHoraLocal(updatedSince);
    if (quando !== null) {
      where.push('updated_at >= ?');
      params.push(quando);
    }
  }

  /*
   * Ordenado pela atualização quando é isso que se está buscando: uma
   * varredura que pagina precisa que a ordem case com o filtro, senão o
   * pedido que acabou de mudar pode cair fora dos 200 primeiros por ser
   * antigo — justamente o pedido que a varredura existe para encontrar.
   */
  const ordem = updatedSince !== '' ? 'updated_at DESC' : 'created_at DESC';
  const orders = await q.all(
    `SELECT * FROM orders${where.length ? ' WHERE ' + where.join(' AND ') : ''}
      ORDER BY ${ordem} LIMIT 200`,
    params,
  );

  const items = new Map<string, Row[]>();
  if (orders.length) {
    const ids = orders.map((o) => o.id);
    for (const i of await q.all(
      `SELECT * FROM order_items WHERE order_id IN (${placeholders(ids.length)}) ORDER BY id ASC`,
      ids,
    )) {
      const key = String(i.order_id);
      const list = items.get(key);
      if (list) list.push(i);
      else items.set(key, [i]);
    }
  }

  jsonOk(res, { orders: orders.map((o) => orderRowToApi(o, items.get(String(o.id)) ?? [])) });
}));

// GET /api/v1/orders/:id
v1Routes.get('/orders/:id', h(async (req, res) => {
  await requireApiKey(req);
  const o = await q.one('SELECT * FROM orders WHERE id = ?', [req.params.id]);
  if (o === null) fail('Pedido não encontrado.', 404, 'not_found');
  const items = await q.all('SELECT * FROM order_items WHERE order_id = ? ORDER BY id ASC', [req.params.id]);
  jsonOk(res, { order: orderRowToApi(o, items) });
}));

// PATCH /api/v1/orders/:id — muda o status (a automação confirma faturamento/envio)
v1Routes.patch('/orders/:id', h(async (req, res) => {
  await requireApiKey(req);
  const status = bodyStr(body(req), 'status', '', 20);
  if (!STATUS_PEDIDO.includes(status)) fail('Status inválido.', 422, 'invalid_status');

  /*
   * Quem mudou é "api": quem chega por aqui está usando a chave de API.
   *
   * A mesma função do painel grava as datas de transição, para o pedido que a
   * automação marcou como enviado ter `shippedAt` igual ao que a lojista teria
   * gravado pela tela. Um dos dois caminhos esquecer a data é um pedido que a
   * varredura seguinte não consegue explicar.
   */
  const t = transicaoDeStatus(status, bodyStr(body(req), 'cancelReason', '', 200), 'api');
  if ((await q.run(
    `UPDATE orders SET ${t.sql} WHERE id = ?`,
    [...t.params, req.params.id],
  )) === 0) {
    fail('Pedido não encontrado.', 404, 'not_found');
  }
  fireWebhooks('order.status_changed', { orderId: req.params.id, status });
  jsonOk(res, { ok: true });
}));

// GET /api/v1/customers
v1Routes.get('/customers', h(async (req, res) => {
  await requireApiKey(req);
  const rows = await q.all(
    `SELECT c.id, c.name, c.email, c.phone, c.created_at,
            COUNT(o.id) AS orders_count,
            COALESCE(SUM(CASE WHEN o.status <> 'canceled' THEN o.total ELSE 0 END), 0) AS total_spent
       FROM customers c
       LEFT JOIN orders o ON o.customer_id = c.id
      GROUP BY c.id, c.name, c.email, c.phone, c.created_at
      ORDER BY c.created_at DESC
      LIMIT 500`,
  );
  jsonOk(res, {
    customers: rows.map((c) => ({
      id: String(c.id),
      name: c.name,
      email: c.email,
      phone: c.phone,
      ordersCount: Number(c.orders_count) || 0,
      totalSpent: Number(c.total_spent) || 0,
      createdAt: iso(c.created_at),
    })),
  });
}));
