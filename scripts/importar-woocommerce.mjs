/**
 * Importa o catálogo do WooCommerce da Macsym (camerasdevideo.com.br) para a
 * SEMENTE `src/data.ts`.
 *
 *   node scripts/importar-woocommerce.mjs
 *   node scripts/importar-woocommerce.mjs --base=https://outro-site.com.br
 *
 * Depois:
 *   npm run seed:catalogo   # data.ts  -> server/db/catalog.json
 *   npm run sync:midia      # baixa as fotos e troca as URLs por caminhos locais
 *   npm run migrar          # carrega no banco
 *
 * Usa a Store API pública do WooCommerce (`/wp-json/wc/store/v1`), que não
 * pede chave: é a mesma resposta que a vitrine do WordPress consome. Rode
 * ENQUANTO o site antigo estiver no ar — é dele que vêm textos e fotos.
 *
 * O que este script NÃO traz, porque a Store API não expõe: estoque numérico
 * (só "em estoque"/"esgotado"), custo, e os atributos que o tema não publica.
 * Depois da carga, quem manda é o painel.
 */

import { writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..');

const arg = (nome, padrao) => {
  const hit = process.argv.find((a) => a.startsWith(`--${nome}=`));
  return hit ? hit.slice(nome.length + 3) : padrao;
};

const BASE = arg('base', 'https://camerasdevideo.com.br').replace(/\/+$/, '');

/*
 * Taxonomia da loja nova.
 *
 * O WooCommerce da Macsym tem 60 categorias no mesmo balaio: seção de verdade
 * ("Câmeras PTZ"), característica técnica ("Saída HDMI", "PoE") e marca
 * ("Boya", "Ismart"). Aqui existem cinco SEÇÕES, e a seção de um produto sai
 * dos `marcadores` — é o que evita um menu de sessenta irmãs no primeiro
 * nível.
 *
 * A ORDEM de MAES importa: um produto costuma cair em várias listas, e fica na
 * primeira que casar. Por isso a câmera 360 é webcam e não PTZ, e por isso
 * Acessórios vem antes de Câmeras PTZ: um suporte de parede é marcado também
 * como "Câmeras PTZ" lá no WooCommerce, e sem essa ordem ele entrava na
 * vitrine como se fosse câmera.
 *
 * `subs` deixou de ser a lista do que VIRA subcategoria — hoje toda categoria
 * do WooCommerce vira uma (ver `subcategoriasDoCatalogo`, mais abaixo). O que
 * ela continua sendo é a ORDEM DE PREFERÊNCIA para escolher a subcategoria
 * PRINCIPAL do produto, que é a que vai no rótulo do cartão. Sem essa
 * preferência, o rótulo de uma câmera sairia "Boya" ou "PoE" — o que a API
 * devolver primeiro —, em vez de "Zoom Óptico 20x".
 *
 * "outros" e "uncategorized" NÃO são marcadores de Acessórios: metade do
 * catálogo carrega uma dessas por descuido de cadastro, inclusive câmeras.
 * Quem não casa com nenhuma seção cai na última da lista, que é Acessórios.
 */
const MAES = [
  {
    id: 'mesa-controladora',
    name: 'Mesas Controladoras',
    icon: 'Gamepad2',
    description: 'Controladoras IP e analógicas com joystick para operar câmeras PTZ',
    marcadores: ['mesa-controladora', 'audio-mixer'],
    subs: [
      ['ip', 'Controladoras IP'],
      ['audio-mixer', 'Mixers de Áudio'],
    ],
  },
  {
    id: 'webcam',
    name: 'Webcams e 360°',
    icon: 'Webcam',
    description: 'Webcams e câmeras de captação panorâmica para mesa de reunião',
    marcadores: ['webcam', 'camera-360-graus'],
    subs: [
      ['camera-360-graus', 'Câmeras 360°'],
      ['al-face-tracking', 'Rastreamento de Face'],
      ['resolucao-4k-webcam', 'Resolução 4K'],
      ['resolucao-2k-webcam', 'Resolução 2K'],
      ['resolucao-1080p-webcam', 'Full HD 1080p'],
    ],
  },
  {
    id: 'acessorios',
    name: 'Acessórios',
    icon: 'Cable',
    description: 'Suportes, cabos, lâmpadas e o que completa a instalação',
    marcadores: ['suporte', 'lampada'],
    subs: [
      ['suporte', 'Suportes'],
      ['lampada', 'Lâmpadas'],
    ],
  },
  {
    id: 'cameras-ptz',
    name: 'Câmeras PTZ',
    icon: 'Video',
    description: 'Câmeras com zoom óptico, saída USB, HDMI, SDI e IP para videoconferência',
    marcadores: ['cameras-ptz'],
    subs: [
      ['zoom-optico-3x', 'Zoom Óptico 3x'],
      ['zoom-optico-10x', 'Zoom Óptico 10x'],
      ['zoom-optico-12x-cameras', 'Zoom Óptico 12x'],
      ['zoom-optico-20x', 'Zoom Óptico 20x'],
      ['resolucao-4k', 'Resolução 4K'],
      ['resolucao-1080p', 'Full HD 1080p'],
      ['poe', 'Alimentação PoE'],
      ['protocolos-ndi', 'Protocolo NDI'],
      ['auto-tracking-movimento', 'Auto Tracking'],
      ['auto-tracking-speaker', 'Rastreamento de Fala'],
    ],
  },
  {
    id: 'microfones',
    name: 'Microfones',
    icon: 'Mic',
    description: 'Lapela, mesa, shotgun e captação 360° — com e sem fio',
    marcadores: ['microfones', 'microfone-360-graus', 'microfone-com-fio', 'microfone-sem-fio', 'boya'],
    subs: [
      ['lapela-1-microfone', 'Lapela'],
      ['lapela-2-microfone', 'Lapela Dupla'],
      ['microfone-de-mesa', 'De Mesa'],
      ['microfone-360-graus', 'Captação 360°'],
      ['sem-fio', 'Sem Fio'],
      ['com-fio', 'Com Fio'],
      ['uhf', 'UHF'],
      ['microfone-p-camera-dlsr', 'Para Câmera'],
      ['boya', 'Linha BOYA'],
    ],
  },
];

const limpar = (html) =>
  String(html || '')
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<\/(p|li|div|h[1-6])>/gi, ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/&#8211;/g, '–')
    .replace(/&#8217;/g, '’')
    .replace(/&#8220;|&#8221;/g, '"')
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/\s+/g, ' ')
    .trim();

const corta = (txt, max) => (txt.length <= max ? txt : `${txt.slice(0, max - 1).trimEnd()}…`);

/*
 * Tira do começo do texto o que é aviso de cadastro, não descrição.
 *
 * Vários produtos abrem com "Descrição" (rótulo do tema que virou conteúdo) e
 * com o aviso de ICMS/substituição tributária EM CAIXA ALTA. Na vitrine nova
 * esse aviso já aparece no bloco de garantias, e como primeira frase da ficha
 * ele empurra para baixo a única coisa que o cliente quer ler ali: o que o
 * equipamento faz. O aviso continua no texto longo, onde é informação; só
 * deixa de ser a abertura.
 */
const AVISO_FISCAL =
  /FATURAMENTO PARA CNPJ.*?(REALIZAR A COMPRA\.|FINALIZAR A COMPRA\.|COMPRA\.)/is;
const semRuido = (txt) =>
  txt
    .replace(/^Descrição\s+/i, '')
    .replace(AVISO_FISCAL, '')
    .replace(/\s+/g, ' ')
    .trim();

async function buscarTudo(rota) {
  const itens = [];
  for (let page = 1; page <= 20; page++) {
    const res = await fetch(`${BASE}/wp-json/wc/store/v1/${rota}?per_page=100&page=${page}`, {
      headers: { 'User-Agent': 'macsym-import/1.0' },
    });
    if (!res.ok) throw new Error(`${rota}: HTTP ${res.status}`);
    const lote = await res.json();
    itens.push(...lote);
    if (lote.length < 100) break;
  }
  return itens;
}

console.log(`Lendo o catálogo de ${BASE} …`);
const [produtos, categorias] = await Promise.all([
  buscarTudo('products'),
  buscarTudo('products/categories'),
]);
console.log(`  ${produtos.length} produtos, ${categorias.length} categorias.`);

const nomeDaCategoria = new Map(categorias.map((c) => [c.slug, c.name]));

/*
 * TODA categoria do WooCommerce vira subcategoria — menos duas.
 *
 * A curadoria anterior escolhia à mão umas poucas por seção, e o efeito era o
 * oposto do pretendido: o cliente que procura "Saída HDMI" ou "Controle por
 * aplicativo" não encontrava nada, porque a informação existia no catálogo de
 * origem e era jogada fora na importação.
 *
 * Ficam de fora:
 *  · "uncategorized" e "outros" — não descrevem nada; metade do catálogo
 *    carrega uma delas por descuido de cadastro;
 *  · os slugs que JÁ SÃO seção ("cameras-ptz", "microfones"…) — virariam uma
 *    subcategoria com o nome da própria seção que a contém, e o menu leria
 *    "Câmeras PTZ › Câmeras PTZ".
 */
const IDS_DE_SECAO = new Set(MAES.map((m) => m.id));
const DESCARTADAS = new Set(['uncategorized', 'outros']);
const viraSub = (slug) => !DESCARTADAS.has(slug) && !IDS_DE_SECAO.has(slug);

/*
 * A seção declarada à mão para as subcategorias curadas.
 *
 * Ela ganha da contagem por produto: "Linha BOYA" é de Microfones por decisão,
 * mesmo que um dia apareça um acessório da marca e a maioria escorregue.
 */
const secaoCurada = new Map();
for (const m of MAES) {
  for (const [slug] of m.subs) if (!secaoCurada.has(slug)) secaoCurada.set(slug, m.id);
}

/** O nome vem da API; o da lista curada é só rede de segurança. */
const nomeCurado = new Map();
for (const m of MAES) {
  for (const [slug, nome] of m.subs) if (!nomeCurado.has(slug)) nomeCurado.set(slug, nome);
}
const nomeDaSub = (slug) => nomeDaCategoria.get(slug) ?? nomeCurado.get(slug) ?? slug;

const semPreco = [];
const semFoto = [];
const produtosSaida = [];

for (const p of produtos) {
  const slugs = (p.categories || []).map((c) => c.slug);
  // Quem não casa com nenhuma seção vai para Acessórios — o balaio honesto.
  const mae =
    MAES.find((m) => m.marcadores.some((s) => slugs.includes(s))) ??
    MAES.find((m) => m.id === 'acessorios');

  /*
   * A subcategoria PRINCIPAL continua saindo da lista curada, na ordem dela.
   *
   * É ela que vira o rótulo do cartão e a trilha da página. A API devolve as
   * categorias do produto em ordem própria, então pegar "a primeira" faria o
   * rótulo de uma câmera sair "Boya" ou "PoE". Sem nenhuma curada casando, o
   * produto fica sem principal e o rótulo é o nome da seção — que é o
   * comportamento de antes.
   */
  const principal = mae.subs.find(([slug]) => slugs.includes(slug))?.[0];
  // Todas a que o produto pertence, com a principal na frente.
  const subsDoProduto = [...new Set([principal, ...slugs].filter((x) => x && viraSub(x)))];

  const preco = Number(p.prices?.price ?? 0) / 100;
  const de = Number(p.prices?.regular_price ?? 0) / 100;
  const capa = p.images?.[0]?.src ?? '';

  if (!preco) semPreco.push(p.name);
  if (!capa) semFoto.push(p.name);
  // Sem preço ou sem foto o produto não pode ir para a vitrine, mas some do
  // catálogo se for simplesmente descartado. Entra desativado: aparece no
  // painel, com o que falta à vista, e a lojista publica quando completar.
  const publicavel = Boolean(preco && capa);

  const curta = semRuido(limpar(p.short_description) || limpar(p.description));
  const longa = limpar(p.description);

  produtosSaida.push({
    id: `wc-${p.id}`,
    name: limpar(p.name),
    category: mae.id,
    subcategory: principal,
    subcategories: subsDoProduto,
    categoryLabel: principal ? nomeDaSub(principal) : mae.name,
    description: corta(curta, 220),
    longDescription: longa ? corta(longa, 2000) : undefined,
    price: preco,
    oldPrice: de > preco ? de : undefined,
    image: capa,
    images: (p.images || []).slice(1, 8).map((i) => i.src),
    sku: p.sku?.trim() || `MCS-${p.id}`,
    weight: Number(p.weight) || 1,
    weightLabel: p.formatted_dimensions || undefined,
    active: publicavel,
    highlight: false,
  });
}

/*
 * Etiquetas: é o que alimenta "Destaques" e "Novidades" na vitrine.
 *
 * A vitrine decide por `tag`: 'NOVIDADE' vai para Novidades, qualquer outra
 * etiqueta vai para Destaques. Sem isso as duas seções da home nascem vazias,
 * com o menu levando a uma lista sem nada.
 *
 * Novidade é o que foi cadastrado por último — o id do WooCommerce é
 * incremental, então os maiores são os mais recentes. Oferta é quem tem preço
 * "de/por" de verdade.
 */
const NOVIDADES = 4;
// Acessório não é novidade de vitrine: um suporte de parede recém-cadastrado
// não vale a seção. Novidade é equipamento.
const publicaveis = produtosSaida.filter((p) => p.active && p.category !== 'acessorios');
const recentes = new Set(
  [...publicaveis]
    .sort((a, b) => Number(b.id.slice(3)) - Number(a.id.slice(3)))
    .slice(0, NOVIDADES)
    .map((p) => p.id),
);
for (const p of produtosSaida) {
  if (!p.active) continue;
  if (recentes.has(p.id)) p.tag = 'NOVIDADE';
  else if (p.oldPrice) p.tag = 'OFERTA';
  if (p.tag) p.highlight = true;
}

/*
 * Só entra no menu a subcategoria que tem produto: item de menu que leva a uma
 * lista vazia é o erro mais fácil de cometer numa migração de catálogo.
 *
 * Agora a conta é sobre TODAS as subcategorias do produto, e não só a
 * principal — era exatamente por isso que 55 das 60 categorias do WooCommerce
 * nasciam vazias: cada produto só conseguia declarar uma.
 */
const usoPorSub = new Map();
for (const p of produtosSaida) {
  for (const slug of p.subcategories) {
    const porSecao = usoPorSub.get(slug) ?? new Map();
    porSecao.set(p.category, (porSecao.get(p.category) ?? 0) + 1);
    usoPorSub.set(slug, porSecao);
  }
}
const usadasMae = new Set(produtosSaida.map((p) => p.category));

/*
 * Em qual seção cada subcategoria fica pendurada.
 *
 * Uma característica atravessa seções — "PoE" vale para câmera e para
 * acessório —, mas o menu precisa pendurá-la em UMA. Vence a seção onde ela
 * tem mais produto, porque é onde o cliente vai procurar; a ordem de MAES
 * desempata, e a lista curada decide sozinha o que foi decidido à mão.
 *
 * Pendurar em um galho só não esconde produto nenhum: quem filtra por
 * subcategoria compara com a lista do produto, e a seção do produto continua
 * sendo a dos marcadores.
 */
const secaoDaSub = new Map();
for (const [slug, porSecao] of usoPorSub) {
  const curada = secaoCurada.get(slug);
  if (curada !== undefined && usadasMae.has(curada)) {
    secaoDaSub.set(slug, curada);
    continue;
  }
  let melhor = null;
  let maior = -1;
  for (const m of MAES) {
    const n = porSecao.get(m.id) ?? 0;
    if (n > maior) {
      maior = n;
      melhor = m.id;
    }
  }
  secaoDaSub.set(slug, melhor);
}

/**
 * As subcategorias de uma seção: as curadas primeiro, na ordem da curadoria, e
 * depois as demais em ordem alfabética.
 *
 * A curadoria é a leitura que alguém fez do catálogo ("Zoom Óptico 3x, 10x,
 * 12x, 20x", nessa ordem); jogar tudo em ordem alfabética junto desfaria isso
 * e deixaria "Zoom Óptico 10x" antes de "3x".
 */
const subsDaSecao = (m) => {
  const curadas = m.subs.map(([slug]) => slug).filter((slug) => secaoDaSub.get(slug) === m.id);
  const resto = [...usoPorSub.keys()]
    .filter((slug) => secaoDaSub.get(slug) === m.id && !curadas.includes(slug))
    .sort((a, b) => nomeDaSub(a).localeCompare(nomeDaSub(b), 'pt-BR'));
  return [...curadas, ...resto].map((slug) => ({ id: slug, name: nomeDaSub(slug) }));
};

const ts = (v) => JSON.stringify(v, null, 2).replace(/"([a-zA-Z_][\w]*)":/g, '$1:');

const categoriesOut = [
  { id: 'all', name: 'Início', description: 'Catálogo completo' },
  ...MAES.filter((m) => usadasMae.has(m.id)).map((m) => ({
    id: m.id,
    name: m.name,
    description: m.description,
  })),
];

const menuOut = [
  { id: 'destaques', name: 'Destaques', icon: 'Star', featured: true, subcategories: [] },
  ...MAES.filter((m) => usadasMae.has(m.id)).map((m) => ({
    id: m.id,
    name: m.name,
    icon: m.icon,
    home: true,
    blurb: m.description,
    subcategories: subsDaSecao(m),
  })),
  { id: 'novidades', name: 'Novidades', icon: 'Sparkles', featured: true, subcategories: [] },
];

const arquivo = `/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * SEMENTE do catálogo — não é lida pela loja em tempo de execução.
 *
 * A vitrine e o painel consomem o banco (\`GET /api/catalog\`). Este arquivo
 * alimenta a carga inicial: \`npm run seed:catalogo\` transforma estes arrays em
 * \`server/db/catalog.json\`, que o \`npm run migrar\` importa.
 *
 * GERADO por \`node scripts/importar-woocommerce.mjs\` a partir de ${BASE}
 * em ${new Date().toISOString().slice(0, 10)}. Editar à mão aqui só faz sentido
 * antes da primeira carga: depois dela, quem manda é o painel.
 */

import { Product, Category, ValueProp, MenuCategory } from './types';

export const CATEGORIES: Category[] = ${ts(categoriesOut)};

export const MENU_CATEGORIES: MenuCategory[] = ${ts(menuOut)};

export const PRODUCTS: Product[] = ${ts(produtosSaida)};
`;

writeFileSync(resolve(root, 'src/data.ts'), arquivo, 'utf8');

console.log(
  `\nsrc/data.ts gerado: ${produtosSaida.length} produtos em ${categoriesOut.length - 1} seções `
  + `e ${usoPorSub.size} subcategorias.`,
);
if (semPreco.length) console.log(`  sem preço (entraram desativados): ${semPreco.join(', ')}`);
if (semFoto.length) console.log(`  sem foto  (entraram desativados): ${semFoto.join(', ')}`);
console.log('\nPróximo passo:  npm run seed:catalogo && npm run sync:midia');
