# Subir a loja na VPS (Docker)

Três containers: `db` (MariaDB), `app` (a loja) e `web` (nginx na porta 80).
Só o nginx publica porta para fora.

Testado com Docker 24+ e o plugin `compose` v2 (`docker compose`, sem hífen).

---

## 1. Clonar

```bash
mkdir -p /opt && cd /opt
git clone https://github.com/oliveermarcelo/macsym.git
cd macsym
```

## 2. Criar o `.env`

O mesmo arquivo serve para o compose (nomes do banco) e para a aplicação.

```bash
cat > .env <<'ENV'
DB_NAME=macsym
DB_USER=macsym
DB_PASS=TROQUE_ESTA_SENHA
DB_PORT=3306

APP_KEY=
APP_URL=http://89.167.30.86
APP_ENV=production

# HTTP puro, sem domínio ainda: cookie marcado como seguro NÃO trafega em
# HTTP, e o painel aceitaria a senha e voltaria para a tela de login sem
# explicar por quê. Vire para true no mesmo dia em que o HTTPS entrar.
SECURE_COOKIES=false
ENV

# APP_KEY (32 bytes em base64). GUARDE: trocá-la depois torna ilegíveis as
# credenciais de Mercado Pago, ERP e WhatsApp já salvas no banco.
sed -i "s|^APP_KEY=.*|APP_KEY=$(openssl rand -base64 32)|" .env
grep APP_KEY .env
```

## 3. Subir

```bash
docker compose up -d --build
docker compose ps
```

O primeiro build leva alguns minutos (instala o projeto inteiro no estágio de
build). Os próximos reaproveitam as camadas.

## 4. Criar tabelas, catálogo e o administrador

Uma vez só:

```bash
docker compose exec app node migrate.js \
  --admin-email=voce@dominio.com.br \
  --admin-pass='UmaSenhaBemForte'
```

Deve terminar com `Produtos importados: 71.` e `Migração concluída.`

> `--demo` existe e cria 140 pedidos fictícios para o dashboard ter histórico.
> Não use em produção: eles entram no faturamento das telas.

## 5. Conferir

```bash
curl -sI http://localhost | head -3
curl -s http://localhost/api/catalog | head -c 200
docker compose exec app node diagnostico.js
```

E no navegador: `http://89.167.30.86` (loja) e `http://89.167.30.86/admin`
(painel).

---

## Atualizar depois

```bash
cd /opt/macsym
git pull
docker compose up -d --build
docker compose exec app node migrate.js   # só quando o esquema mudar
```

O `migrate.js` sem argumentos acrescenta colunas/índices novos e recarrega o
catálogo; não apaga nada.

## Quando o domínio apontar para cá

1. Aponte `camerasdevideo.com.br` (A) para `89.167.30.86` e espere propagar.
2. Emita o certificado:

```bash
docker run --rm -p 80:80 -v /opt/macsym/certs:/etc/letsencrypt \
  certbot/certbot certonly --standalone \
  -d camerasdevideo.com.br -d www.camerasdevideo.com.br \
  --agree-tos -m contato@camerasdevideo.com.br --no-eff-email
```

(pare o `web` antes: `docker compose stop web`, e suba de novo depois)

3. Em `docker/nginx.conf`, acrescente o bloco 443 com
   `ssl_certificate /etc/letsencrypt/live/camerasdevideo.com.br/fullchain.pem`
   e redirecione a 80 para 443; monte `./certs:/etc/letsencrypt:ro` no serviço
   `web` e publique `"443:443"`.
4. No `.env`: `APP_URL=https://camerasdevideo.com.br` e `SECURE_COOKIES=true`.
5. `docker compose up -d`.

A renovação é um cron chamando o mesmo `certbot renew` e um
`docker compose exec web nginx -s reload`.

---

## Antes de vender

Duas coisas travam o checkout e não são do servidor:

- **Mercado Pago.** Sem credencial cadastrada em Painel → Integrações, o
  `POST /api/orders` recusa com 503 antes de gravar qualquer coisa. É proposital:
  a loja não cria pedido que ninguém pode pagar. Cadastre as chaves de produção
  (ou as `TEST-` para ensaiar) e refaça uma compra de ponta a ponta.
- **Contato e endereço.** `src/config.ts` ainda tem `(00) 00000-0000` e
  "Endereço a confirmar". O CDC exige a identificação do fornecedor na loja
  virtual, e o WhatsApp do rodapé é por onde o cliente pergunta antes de
  comprar.

## Backup

O que não se recompila:

```bash
docker compose exec db mysqldump -u$DB_USER -p$DB_PASS $DB_NAME > backup-$(date +%F).sql
docker run --rm -v macsym_midia:/m -v $PWD:/out alpine tar czf /out/midia-$(date +%F).tar.gz -C /m .
```

O resto (código, catálogo, fotos do catálogo) está no repositório.
