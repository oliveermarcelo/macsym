# Imagem da loja Macsym.
#
# Dois estágios de propósito: o de build tem o projeto inteiro (Vite, Tailwind,
# TypeScript, esbuild — ~200 pacotes) e produz o pacote de produção; o final
# leva só esse pacote e as QUATRO dependências que o servidor usa em runtime.
# É a diferença entre uma imagem de ~600 MB e uma de ~180 MB, e entre ter ou
# não um compilador dentro do container que fica exposto na internet.

FROM node:22-alpine AS build
WORKDIR /app

# package.json e lock primeiro: enquanto eles não mudam, o Docker reaproveita
# a camada do npm ci, e um deploy de mudança de código não reinstala nada.
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

COPY . .
# Gera dist/ (vitrine), .build/ (servidor) e monta deploy/ com os dois.
RUN npm run build && npm run empacotar

FROM node:22-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production

COPY --from=build /app/deploy/ ./
RUN npm install --omit=dev --no-audit --no-fund && npm cache clean --force

# Fotos enviadas pelo painel. Fica FORA de public/ de propósito: a atualização
# substitui a vitrine compilada inteira, e as fotos iriam junto. É volume no
# compose — o que está aqui não existe em nenhum outro lugar.
RUN mkdir -p /app/midia

EXPOSE 8080
CMD ["node", "app.js"]
