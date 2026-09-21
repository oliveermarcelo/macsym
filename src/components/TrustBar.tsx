/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Truck, ShieldCheck, CreditCard, Headphones } from 'lucide-react';

import { INSTALLMENTS } from '../config';

const ITEMS = [
  { icon: Truck, title: 'Envio para todo o Brasil', sub: 'Despacho rápido' },
  // O número vem da constante: escrito à mão aqui, ficaria para trás na
  // próxima vez que o parcelamento mudar — foi o que acabou de acontecer.
  { icon: CreditCard, title: `Até ${INSTALLMENTS}x sem juros`, sub: 'Ou 5% OFF no Pix' },
  { icon: ShieldCheck, title: 'Garantia do fabricante', sub: 'Nota fiscal em todo pedido' },
  { icon: Headphones, title: 'Suporte técnico', sub: 'Seg a Sex, horário comercial' },
];

export default function TrustBar() {
  return (
    <section className="bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 grid grid-cols-2 lg:grid-cols-4 gap-y-5 gap-x-4">
        {ITEMS.map((it) => (
          <div key={it.title} className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-brand-100 text-brand-700 flex items-center justify-center flex-shrink-0">
              <it.icon size={20} />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-bold text-gray-800">{it.title}</p>
              <p className="text-xs text-gray-600">{it.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
