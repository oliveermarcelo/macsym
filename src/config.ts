/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 *
 * Constantes comerciais da vitrine que não vêm do painel.
 *
 * Existe um único lugar para elas de propósito: a página do produto anunciava
 * "3x sem juros" e o checkout, "em até 6x" — números diferentes cravados em
 * arquivos diferentes.
 */

/**
 * Número máximo de parcelas sem juros no cartão.
 *
 * ATENÇÃO: o servidor tem o seu próprio limite, em `server/src/routes/public.ts`
 * (`INSTALLMENTS_MAX`), e é ELE que decide o que o Mercado Pago aceita. Os dois
 * precisam andar juntos: se a vitrine anunciar mais do que o servidor permite,
 * o cliente escolhe uma parcela que o pagamento recusa. Há um teste que compara
 * os dois valores justamente para isso não passar despercebido.
 */
export const INSTALLMENTS = 10;

/**
 * Contato da loja.
 *
 * Ficam aqui porque o telefone aparecia escrito à mão em três formatos
 * diferentes — no topo, no rodapé e no link do WhatsApp.
 *
 * PENDENTE DO CLIENTE: telefone, WhatsApp, e-mail e endereço abaixo são
 * provisórios — o site atual (camerasdevideo.com.br) não publica nenhum deles,
 * e a página "Contato" de lá ainda está com o texto de exemplo do tema.
 * Confirme com a Macsym antes de publicar: um telefone que não chama ninguém
 * custa venda, e o endereço do fornecedor é exigência do Código de Defesa do
 * Consumidor numa loja virtual.
 */
export const LOJA = {
  /** Como o número é lido por uma pessoa. */
  telefone: '(00) 00000-0000',
  /** O mesmo número no formato que o `tel:` exige. */
  telefoneLink: 'tel:+550000000000',
  /** E no formato do WhatsApp: código do país, DDD e número, sem sinais. */
  whatsapp: 'https://wa.me/550000000000',
  email: 'contato@camerasdevideo.com.br',
  horario: 'Seg a Sex, 9h às 18h',
  endereco: 'Endereço a confirmar',
  cidade: 'Cidade/UF — CEP a confirmar',
  /*
   * Razão social e CNPJ, como constam nos documentos legais da loja.
   *
   * Estes dois vieram do rodapé do site atual e são os únicos dados de
   * identificação que a Macsym publica hoje.
   */
  razaoSocial: 'Macsym Tecnologia Eletrônica',
  cnpj: 'CNPJ 59.312.165/0001-41',
} as const;
