/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * SEMENTE do catálogo — não é lida pela loja em tempo de execução.
 *
 * A vitrine e o painel consomem o banco (`GET /api/catalog`). Este arquivo
 * alimenta a carga inicial: `npm run seed:catalogo` transforma estes arrays em
 * `server/db/catalog.json`, que o `npm run migrar` importa.
 *
 * As seções abaixo são a taxonomia acordada para a Macsym. A lista de
 * PRODUTOS está vazia de propósito: ela é GERADA a partir do WooCommerce atual
 * com
 *
 *     node scripts/importar-woocommerce.mjs
 *
 * que reescreve este arquivo inteiro (inclusive as subcategorias, mantendo no
 * menu só as que têm produto). Rode isso antes do primeiro `npm run migrar`.
 */

import { Product, Category, ValueProp, MenuCategory } from './types';

export const CATEGORIES: Category[] = [
  { id: 'all', name: 'Início', description: 'Catálogo completo' },
  { id: 'cameras-ptz', name: 'Câmeras PTZ', description: 'Câmeras com zoom óptico, saída USB, HDMI, SDI e IP para videoconferência' },
  { id: 'microfones', name: 'Microfones', description: 'Lapela, mesa, shotgun e captação 360° — com e sem fio' },
  { id: 'mesa-controladora', name: 'Mesas Controladoras', description: 'Controladoras IP e analógicas com joystick para operar câmeras PTZ' },
  { id: 'webcam', name: 'Webcams e 360°', description: 'Webcams e câmeras de captação panorâmica para mesa de reunião' },
  { id: 'acessorios', name: 'Acessórios', description: 'Suportes, cabos, lâmpadas e o que completa a instalação' },
];

// Mega-menu — seções e as características que viram subcategoria.
export const MENU_CATEGORIES: MenuCategory[] = [
  { id: 'destaques', name: 'Destaques', icon: 'Star', featured: true, subcategories: [] },
  {
    id: 'cameras-ptz',
    name: 'Câmeras PTZ',
    icon: 'Video',
    home: true,
    blurb: 'Zoom óptico de 3x a 20x, 4K, PoE e NDI',
    subcategories: [
      { id: 'zoom-optico-3x', name: 'Zoom Óptico 3x' },
      { id: 'zoom-optico-10x', name: 'Zoom Óptico 10x' },
      { id: 'zoom-optico-12x-cameras', name: 'Zoom Óptico 12x' },
      { id: 'zoom-optico-20x', name: 'Zoom Óptico 20x' },
      { id: 'resolucao-4k', name: 'Resolução 4K' },
      { id: 'resolucao-1080p', name: 'Full HD 1080p' },
      { id: 'poe', name: 'Alimentação PoE' },
      { id: 'protocolos-ndi', name: 'Protocolo NDI' },
      { id: 'auto-tracking-movimento', name: 'Auto Tracking' },
      { id: 'auto-tracking-speaker', name: 'Rastreamento de Fala' },
    ],
  },
  {
    id: 'microfones',
    name: 'Microfones',
    icon: 'Mic',
    home: true,
    blurb: 'Lapela, mesa, shotgun e captação 360°',
    subcategories: [
      { id: 'lapela-1-microfone', name: 'Lapela' },
      { id: 'lapela-2-microfone', name: 'Lapela Dupla' },
      { id: 'microfone-de-mesa', name: 'De Mesa' },
      { id: 'microfone-360-graus', name: 'Captação 360°' },
      { id: 'sem-fio', name: 'Sem Fio' },
      { id: 'com-fio', name: 'Com Fio' },
      { id: 'uhf', name: 'UHF' },
      { id: 'microfone-p-camera-dlsr', name: 'Para Câmera' },
      { id: 'boya', name: 'Linha BOYA' },
    ],
  },
  {
    id: 'mesa-controladora',
    name: 'Mesas Controladoras',
    icon: 'Gamepad2',
    home: true,
    blurb: 'Joystick 4D, VISCA, PELCO e ONVIF',
    subcategories: [
      { id: 'ip', name: 'Controladoras IP' },
      { id: 'audio-mixer', name: 'Mixers de Áudio' },
    ],
  },
  {
    id: 'webcam',
    name: 'Webcams e 360°',
    icon: 'Webcam',
    home: true,
    blurb: 'Captação panorâmica para a mesa inteira',
    subcategories: [
      { id: 'camera-360-graus', name: 'Câmeras 360°' },
      { id: 'al-face-tracking', name: 'Rastreamento de Face' },
      { id: 'resolucao-4k-webcam', name: 'Resolução 4K' },
      { id: 'resolucao-2k-webcam', name: 'Resolução 2K' },
      { id: 'resolucao-1080p-webcam', name: 'Full HD 1080p' },
    ],
  },
  {
    id: 'acessorios',
    name: 'Acessórios',
    icon: 'Cable',
    home: true,
    blurb: 'Suportes, cabos e lâmpadas',
    subcategories: [
      { id: 'suporte', name: 'Suportes' },
      { id: 'lampada', name: 'Lâmpadas' },
    ],
  },
  { id: 'novidades', name: 'Novidades', icon: 'Sparkles', featured: true, subcategories: [] },
];

/*
 * Vazio de propósito: `node scripts/importar-woocommerce.mjs` preenche.
 *
 * Uma lista vazia não apaga o que já estiver no banco — `npm run migrar` só
 * acrescenta —, então rodar o seed antes da importação é inofensivo.
 */
export const PRODUCTS: Product[] = [];
