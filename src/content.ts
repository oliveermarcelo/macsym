/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Conteúdo editorial da loja (institucional, diferenciais).
 *
 * Separado de `data.ts` de propósito: aquele arquivo é a semente do catálogo,
 * e importá-lo só para ler a história da empresa arrastava todo o catálogo
 * para dentro do bundle.
 */

import type { ValueProp } from './types';

export const VALUE_PROPS: ValueProp[] = [
  {
    id: 'especialista',
    title: 'Especialistas em Videoconferência',
    description: 'Câmeras PTZ, microfones e mesas controladoras escolhidos para salas de reunião e transmissão.',
    icon: 'Video',
  },
  {
    id: 'entrega',
    title: 'Envio para Todo o Brasil',
    description: 'Equipamento embalado com proteção reforçada e despachado para todo o território nacional.',
    icon: 'Truck',
  },
  {
    id: 'suporte',
    title: 'Suporte Técnico de Verdade',
    description: 'Atendimento em horário comercial por quem conhece protocolo VISCA, NDI, PoE e integração.',
    icon: 'Headset',
  },
];

/*
 * Texto do "Sobre nós".
 *
 * PENDENTE DO CLIENTE: o site atual não tem página institucional escrita — o
 * texto abaixo foi redigido a partir do catálogo e das chamadas da home, e
 * precisa do aval da Macsym. Os números em `stats` são os únicos que dá para
 * sustentar hoje (contagem do próprio catálogo); trocar por dados reais de
 * anos de mercado e clientes atendidos assim que a loja informar.
 */
export const COMPANY_HISTORY = {
  title: 'Imagem Profissional em Cada Reunião',
  paragraphs: [
    'A Macsym Tecnologia Eletrônica trabalha com equipamentos de áudio e vídeo para videoconferência: câmeras PTZ com zoom óptico, microfones de lapela, mesa e 360°, mesas controladoras e os acessórios que fazem a sala funcionar.',
    'O catálogo é montado em torno do uso real — sala de reunião, auditório, culto, sala de aula e estúdio de transmissão —, com marcas como Macsym, BOYA e iSmart e modelos que vão do plug-and-play USB ao NDI sobre IP com PoE.',
    'Mais do que vender a peça, a proposta é entregar a solução completa: a câmera certa para o tamanho da sala, o microfone que cobre a mesa inteira e o controle que o operador consegue usar sem manual.',
  ],
  stats: [
    { label: 'Produtos no Catálogo', value: '70+' },
    { label: 'Envio Nacional', value: '100%' },
    { label: 'Troca e Devolução', value: '7 dias' },
    { label: 'Suporte', value: 'Seg a Sex' },
  ],
};
