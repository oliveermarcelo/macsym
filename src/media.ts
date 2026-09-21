/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Imagens editoriais (banners da home e capas de categoria).
 *
 * Todas apontam para arquivos servidos pelo próprio domínio, em
 * `public/banners/`. As artes de origem estão listadas em
 * `scripts/banner-sources.json` e vêm do site atual da Macsym — se ele sair do
 * ar, a home continua de pé, porque o arquivo já está aqui.
 *
 * Para (re)baixar os arquivos originais:  `npm run sync:midia`
 */

/**
 * Logo oficial da Macsym, como está no site atual.
 *
 * Vem de `public/`, e não de `src/assets/`, de propósito: é arte do cliente.
 * Trocar a marca passa a ser substituir um arquivo — não recompilar a loja.
 *
 * O arquivo tem fundo transparente e letra escura, pensado para fundo claro.
 * Por isso, sobre os fundos escuros (rodapé, painel), ele é apresentado dentro
 * de uma "plaquinha" branca em vez de uma versão invertida inventada por nós:
 * clarear um logo à força costuma estragar justamente o que a marca cuidou.
 */
export const LOGO = '/banners/logo-macsym.png';

export const BANNERS = {
  heroCameras: '/banners/hero-cameras.jpg',
  heroMicrofones: '/banners/hero-microfones.jpg',
  heroControladoras: '/banners/hero-controladoras.jpg',
  promo: '/banners/promo.jpg',
} as const;

export const CATEGORY_COVERS = {
  'cameras-ptz': '/banners/categoria-cameras-ptz.jpg',
  microfones: '/banners/categoria-microfones.jpg',
  'mesa-controladora': '/banners/categoria-mesa-controladora.jpg',
  webcam: '/banners/categoria-webcam.jpg',
  acessorios: '/banners/categoria-acessorios.jpg',
} as const;
