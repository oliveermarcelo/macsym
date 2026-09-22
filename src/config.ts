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
 * Contato e identificação legal SAÍRAM daqui.
 *
 * Eram constantes de código, o que obrigava um deploy para trocar um telefone
 * — e fez a loja nascer publicando "(00) 00000-0000". Agora vivem em
 * Painel → Configurações, chegam à vitrine junto com o catálogo
 * (`GET /api/catalog` → `settings`) e são lidos pelo `useCatalog()`.
 *
 * O que estiver vazio não aparece: rodapé sem endereço é melhor que rodapé
 * com endereço inventado.
 *
 * Helpers para montar os links a partir do que a lojista digitou.
 */

/** "(11) 99867-0049" → "tel:+5511998670049". Vazio quando não há número. */
export function telLink(telefone: string): string {
  const digitos = (telefone ?? '').replace(/\D/g, '');
  if (digitos.length < 10) return '';
  // Sem DDI digitado, assume Brasil — é o público da loja.
  return `tel:+${digitos.length > 11 ? digitos : '55' + digitos}`;
}

/** "5511999999999" → "https://wa.me/5511999999999". Vazio quando não há. */
export function whatsappLink(numero: string): string {
  const digitos = (numero ?? '').replace(/\D/g, '');
  if (digitos.length < 10) return '';
  return `https://wa.me/${digitos.length > 11 ? digitos : '55' + digitos}`;
}
