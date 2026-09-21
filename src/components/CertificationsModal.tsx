/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { X, ShieldCheck, Heart, Leaf, CloudSnow } from 'lucide-react';
import { motion } from 'motion/react';
import ModalShell from './ModalShell';

interface CertificationsModalProps {
  onClose: () => void;
}

export default function CertificationsModal({ onClose }: CertificationsModalProps) {
  /*
   * Os quatro selos: o que a loja garante sobre o que vende.
   *
   * São afirmações comerciais — homologação, garantia, protocolo, transporte.
   * PENDENTE: confirmar cada uma com a Macsym antes de publicar; prazo de
   * garantia e política de CNPJ saem daqui direto para a página do produto.
   */
  const certs = [
    {
      title: 'Equipamento Homologado',
      desc: 'Câmeras, microfones e controladoras com certificação do fabricante e compatibilidade declarada com Zoom, Teams, Meet, WebEx, OBS e vMix — a sala funciona com o software que a empresa já usa.',
      icon: ShieldCheck,
      color: 'text-blue-500 bg-blue-50',
    },
    {
      title: 'Garantia e Nota Fiscal',
      desc: 'Todo pedido sai com nota fiscal e garantia do fabricante. Para compra com CNPJ, pode haver diferencial de alíquota de ICMS ou substituição tributária — consulte antes de fechar.',
      icon: Heart,
      color: 'text-red-500 bg-red-50',
    },
    {
      title: 'Protocolos Abertos',
      desc: 'VISCA, PELCO-D/P, ONVIF, NDI e RTSP: o equipamento conversa com mesas de corte, gravadores e sistemas de terceiros, em vez de prender o cliente a um ecossistema só.',
      icon: Leaf,
      color: 'text-emerald-500 bg-emerald-50',
    },
    {
      title: 'Embalagem e Transporte',
      desc: 'Câmera PTZ é ótica de precisão: cada peça sai embalada com proteção reforçada e despachada para todo o Brasil, com troca e devolução em até 7 dias.',
      icon: CloudSnow,
      color: 'text-indigo-500 bg-indigo-50',
    },
  ];

  return (
    <ModalShell
      onClose={onClose}
      labelledBy="certs-modal-title"
      overlayClassName="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
      className="max-w-xl w-full"
    >
      <motion.div
        id="certs-modal-container"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-xl shadow-2xl w-full overflow-hidden animate-fade-in border border-gray-100 flex flex-col"
      >
        {/* Header */}
        <div className="bg-primary-blue text-white px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-5.5 h-5.5 text-yellow-400" />
            <h2 id="certs-modal-title" className="text-base font-bold font-sans">Qualidade & Garantia</h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar"
            className="text-white/80 hover:text-white hover:bg-white/10 p-1.5 rounded-lg transition"
          >
            <X size={18} aria-hidden="true" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 overflow-y-auto max-h-[65vh] text-left">
          <p className="text-xs text-gray-500 leading-relaxed font-sans mb-4">
A Macsym trabalha com equipamento de áudio e vídeo para uso profissional: o que chega até aqui passou por compatibilidade, garantia e suporte — não é só a ficha técnica do fornecedor.
          </p>

          <div className="space-y-4">
            {certs.map((cert, idx) => {
              const Icon = cert.icon;
              return (
                <div key={idx} className="flex gap-4 p-4 rounded-xl border border-gray-150 bg-gray-50/30">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${cert.color}`}>
                    <Icon size={20} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold text-gray-800 leading-tight">
                      {cert.title}
                    </h4>
                    <p className="text-[11px] text-gray-500 leading-relaxed">
                      {cert.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Bottom */}
        <div className="bg-gray-50 py-4 px-6 border-t border-gray-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-primary-container hover:bg-primary-blue text-white text-xs font-semibold cursor-pointer transition shadow-sm"
          >
            Entendido
          </button>
        </div>
      </motion.div>
    </ModalShell>
  );
}
