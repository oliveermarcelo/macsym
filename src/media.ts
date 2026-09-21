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
