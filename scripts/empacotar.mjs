/**
 * Monta a pasta `deploy/` pronta para subir no gerenciador de Node.js da
 * Hostinger.
 *
 *   npm run build && npm run build:server && npm run empacotar
 *
 * Resultado:
 *   deploy/app.js          → o servidor inteiro num arquivo (entrada da aplicação)
 *   deploy/migrate.js      → instalador do banco, rodado uma vez pelo SSH
 *   deploy/diagnostico.js  → checagem da instalação, para quando algo não sobe
 *   deploy/package.json    → só as 4 dependências de runtime, para o npm install
 *   deploy/public/         → a vitrine compilada (index.html, assets, imagens)
 *   deploy/db/             → schema.sql e catalog.json, usados pelo migrate
 *   deploy/.env.example    → modelo das variáveis de ambiente
 *
 * O `.env` de verdade NÃO vai no pacote: guarda a senha do banco e a chave de
 * cifra das integrações. Ele é criado no servidor (ou preenchido na interface
 * do hPanel) e nunca é versionado.
 */

import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { builtinModules } from 'node:module';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, '..');
const dist = resolve(root, 'dist');
const build = resolve(root, '.build');
const out = resolve(root, 'deploy');

if (!existsSync(dist)) {
  console.error('dist/ não existe. Rode `npm run build` antes.');
  process.exit(1);
}
if (!existsSync(resolve(build, 'app.js'))) {
  console.error('.build/app.js não existe. Rode `npm run build:server` antes.');
  process.exit(1);
}

/*
 * Compilado velho é o acidente mais provável aqui: o pacote vai versionado, e
 * empacotar sem rebuildar publica a versão anterior sem avisar ninguém. Este
 * check compara a data do código-fonte com a do compilado e falha se o
 * compilado ficou para trás.
 */
function maisRecente(dir, filtro) {
  let quando = 0;
  for (const item of readdirSync(dir, { withFileTypes: true })) {
    const caminho = resolve(dir, item.name);
    if (item.isDirectory()) {
      quando = Math.max(quando, maisRecente(caminho, filtro));
    } else if (filtro(item.name)) {
      quando = Math.max(quando, statSync(caminho).mtimeMs);
    }
  }
  return quando;
}

const ehFonte = (nome) => /\.(ts|tsx|css|html)$/.test(nome);
const desatualizados = [
  { o: 'servidor', fonte: maisRecente(resolve(root, 'server/src'), ehFonte),
    build: statSync(resolve(build, 'app.js')).mtimeMs, comando: 'npm run build:server' },
  { o: 'front', fonte: maisRecente(resolve(root, 'src'), ehFonte),
    build: maisRecente(dist, (n) => n.endsWith('.js')), comando: 'npm run build' },
].filter(({ fonte, build: quando }) => fonte > quando);

if (desatualizados.length > 0) {
  console.error('O compilado está mais velho que o código-fonte:\n');
  for (const { o, comando } of desatualizados) {
    console.error(`  ${o.padEnd(9)} rode \`${comando}\``);
  }
  console.error('\nEmpacotar assim publicaria a versão anterior. Rebuilde e tente de novo.');
  process.exit(1);
}

rmSync(out, { recursive: true, force: true });
mkdirSync(out, { recursive: true });

/*
 * ---- servidor ----
 *
 * Sem os .map: o pacote é versionado (o deploy da Hostinger é por Git), e são
 * ~300 KB de sourcemap que mudam a cada build e só servem para depurar. Para
 * investigar um erro de produção, o rastro de pilha já traz os nomes das
 * funções — o build usa `keepNames`.
 */
for (const f of ['app.js', 'migrate.js', 'diagnostico.js']) {
  const src = resolve(build, f);
  if (existsSync(src)) cpSync(src, resolve(out, f));
}

// ---- vitrine ----
cpSync(dist, resolve(out, 'public'), { recursive: true });

// ---- assets do banco ----
cpSync(resolve(root, 'server/db'), resolve(out, 'db'), { recursive: true });

/*
 * package.json mínimo.
 *
 * As versões vêm do package.json da raiz, para não haver duas listas para
 * manter em sincronia. Só as dependências de RUNTIME entram: nada de React,
 * Vite ou TypeScript — o front já vem compilado em public/, e instalar o
 * ferramental de build no servidor só gastaria disco e tempo de deploy.
 */
const raiz = JSON.parse(readFileSync(resolve(root, 'package.json'), 'utf8'));

/*
 * As dependências do pacote são LIDAS do código gerado, não escritas à mão.
 *
 * Aqui havia uma lista fixa com quatro nomes. Quando o Mercado Pago entrou no
 * servidor, ninguém lembrou de acrescentá-lo: o esbuild deixa todo pacote como
 * externo (`packages: 'external'`), então `app.js` passou a exigir um módulo
 * que o `npm install` do servidor não instalava. O deploy subia, o processo
 * morria no primeiro require com "Cannot find module 'mercadopago'" e o
 * supervisor ficava reiniciando — erro que só aparece em produção, porque em
 * desenvolvimento o node_modules da raiz tem tudo.
 *
 * Lendo os `require(...)` do bundle, a lista não tem como divergir de novo.
 */
const gerados = ['app.js', 'migrate.js', 'diagnostico.js']
  .map((f) => resolve(out, f))
  .filter((f) => existsSync(f));

const detectadas = new Set(['express', 'mysql2', 'bcryptjs', 'compression']);
for (const arquivo of gerados) {
  const codigo = readFileSync(arquivo, 'utf8');
  for (const [, especificador] of codigo.matchAll(/require\(\s*["']([^"']+)["']\s*\)/g)) {
    if (especificador.startsWith('.') || especificador.startsWith('/')) continue;
    if (especificador.startsWith('node:')) continue;
    // "@scope/pkg/sub" → "@scope/pkg"; "pkg/sub" → "pkg"
    const partes = especificador.split('/');
    const nome = especificador.startsWith('@') ? partes.slice(0, 2).join('/') : partes[0];
    if (builtinModules.includes(nome)) continue;
    detectadas.add(nome);
  }
}

const dependencies = {};
const faltando = [];
for (const nome of [...detectadas].sort()) {
  const versao = raiz.dependencies?.[nome];
  if (!versao) {
    faltando.push(nome);
    continue;
  }
  dependencies[nome] = versao;
}
if (faltando.length) {
  console.error(
    `O servidor compilado exige ${faltando.join(', ')}, que não está em "dependencies" do package.json da raiz.`,
  );
  process.exit(1);
}

writeFileSync(
  resolve(out, 'package.json'),
  JSON.stringify(
    {
      name: 'macsym-server',
      version: raiz.version ?? '1.0.0',
      private: true,
      description: 'Loja Macsym — servidor Node/Express + MySQL (pacote de produção).',
      // Sem "type": "module" — o app.js gerado é CommonJS, que é o que o
      // Passenger da Hostinger carrega sem configuração extra.
      main: 'app.js',
      engines: { node: '>=20' },
      scripts: {
        start: 'node app.js',
        migrar: 'node migrate.js',
        diagnostico: 'node diagnostico.js',
      },
      dependencies,
    },
    null,
    2,
  ) + '\n',
);

cpSync(resolve(root, '.env.example'), resolve(out, '.env.example'));

console.log('deploy/ pronto.\n');
console.log('  1. hPanel → Bancos de Dados → crie o banco e o usuário MySQL');
console.log('  2. hPanel → Avançado → Node.js → crie a aplicação');
console.log('       Application root:         macsym        (a pasta onde você vai subir isto)');
console.log('       Application startup file: app.js');
console.log('  3. Suba TODO o conteúdo de deploy/ para essa pasta');
console.log('  4. Preencha as variáveis de ambiente (veja .env.example)');
console.log('  5. Clique em "Run NPM Install" e depois em "Restart"');
console.log('  6. Pelo SSH, uma vez só:');
console.log('       node migrate.js --admin-email=voce@dominio.com.br --admin-pass=SenhaForte');
console.log('\n  Detalhes e solução de problemas: DEPLOY.md');
