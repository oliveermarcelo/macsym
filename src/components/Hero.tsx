/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Truck, Tag } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { BANNERS } from '../media';

interface HeroProps {
  onOpenProducts: () => void;
  onSelectCategory: (categoryId: string, subcategoryId?: string) => void;
}

interface Slide {
  id: string;
  kicker: string;
  title: string;
  highlight: string;
  subtitle: string;
  cta: string;
  action: () => void;
  image: string;
  /**
   * Véu sobre a foto, da esquerda (escuro, onde fica o texto) para a direita
   * (claro). Cada slide percorre um trecho diferente da escala de grafite, para
   * a família de tons ficar visível no banner e não só nas seções de baixo.
   */
  tint: string;
}

export default function Hero({ onOpenProducts, onSelectCategory }: HeroProps) {
  const slides: Slide[] = [
    {
      id: 'cameras-ptz',
      kicker: 'Câmeras PTZ · zoom óptico até 20x',
      title: 'Imagem Profissional',
      highlight: 'em cada reunião',
      subtitle: 'Câmeras PTZ com zoom óptico, saída USB, HDMI, SDI e IP — do plug-and-play ao NDI sobre rede com PoE.',
      cta: 'Ver câmeras PTZ',
      action: () => onSelectCategory('cameras-ptz'),
      image: BANNERS.heroCameras,
      tint: 'from-brand-900/95 from-30% via-brand-700/85 via-58% to-brand-300/60',
    },
    {
      id: 'microfones',
      kicker: 'Captação que cobre a mesa inteira',
      title: 'Microfones',
      highlight: 'de lapela, mesa e 360°',
      subtitle: 'Linha BOYA e Macsym: lapela com e sem fio, condensadores de mesa, shotgun e captação omnidirecional.',
      cta: 'Ver microfones',
      action: () => onSelectCategory('microfones'),
      image: BANNERS.heroMicrofones,
      tint: 'from-brand-900/95 from-42% via-brand-600/85 via-68% to-brand-200/58',
    },
    {
      id: 'mesa-controladora',
      kicker: 'Controle na mão do operador',
      title: 'Mesas Controladoras',
      highlight: 'IP e analógicas',
      subtitle: 'Joystick 4D, protocolos VISCA, PELCO-D/P e ONVIF, com display LCD e controle de até 255 câmeras.',
      cta: 'Ver controladoras',
      action: () => onSelectCategory('mesa-controladora'),
      image: BANNERS.heroControladoras,
      tint: 'from-brand-900/94 from-30% via-brand-500/80 via-62% to-brand-300/52',
    },
  ];

  const [index, setIndex] = useState(0);
  const count = slides.length;

  const go = useCallback((dir: number) => {
    setIndex((prev) => (prev + dir + count) % count);
  }, [count]);

  useEffect(() => {
    const t = setInterval(() => setIndex((p) => (p + 1) % count), 6000);
    return () => clearInterval(t);
  }, [count]);

  const slide = slides[index];

  return (
    <section id="hero-section" className="bg-brand-bg pt-40 lg:pt-44 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">

          {/* Main rotating banner */}
          <div className="lg:col-span-8 relative rounded-2xl overflow-hidden h-[260px] sm:h-[360px] lg:h-[420px] shadow-sm group">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <img
                  src={slide.image}
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-cover"
                  loading="eager"
                  decoding="async"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${slide.tint}`} />

                <div className="absolute inset-0 flex flex-col justify-center px-6 sm:px-10 lg:px-14 max-w-xl">
                  <span className="inline-block w-fit text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-brand-accent-300 mb-3">
                    {slide.kicker}
                  </span>
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] tracking-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg sm:text-2xl font-semibold text-white/90 mt-1">
                    {slide.highlight}
                  </p>
                  <p className="hidden sm:block text-sm text-white/90 mt-3 max-w-md leading-relaxed">
                    {slide.subtitle}
                  </p>
                  <button
                    onClick={slide.action}
                    className="group/btn mt-5 w-fit inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-primary-blue text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-brand-accent-300 hover:text-white transition-all duration-300 shadow-lg cursor-pointer"
                  >
                    {slide.cta}
                    <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Arrows */}
            <button
              onClick={() => go(-1)}
              aria-label="Anterior"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100 cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Próximo"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100 cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setIndex(i)}
                  aria-label={`Ir para banner ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === index ? 'w-6 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/80'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Side mini-banners */}
          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4 lg:gap-5">
            {/* Free shipping */}
            <button
              onClick={onOpenProducts}
              className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-brand-900 via-brand-700 to-brand-500 text-white p-5 sm:p-6 text-left flex flex-col justify-between h-[120px] sm:h-[170px] lg:h-[200px] hover:shadow-xl transition-shadow group cursor-pointer"
            >
              <Truck size={120} className="absolute -right-5 -bottom-6 text-white/10 group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-brand-accent-300/10 blur-2xl pointer-events-none" />
              <div className="relative w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center text-brand-accent-300">
                <Truck size={20} />
              </div>
              <div className="relative">
                <p className="text-base sm:text-lg font-extrabold leading-tight">Enviamos para todo o Brasil</p>
                <p className="text-xs text-white/80 mt-0.5">embalagem reforçada para equipamento óptico e eletrônico</p>
              </div>
            </button>

            {/* Destaques */}
            <button
              onClick={() => onSelectCategory('destaques')}
              className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-brand-accent-600 via-brand-accent-400 to-brand-accent-300 text-brand-ink p-5 sm:p-6 text-left flex flex-col justify-between h-[120px] sm:h-[170px] lg:h-[200px] hover:shadow-xl transition-shadow group cursor-pointer"
            >
              <Tag size={120} className="absolute -right-5 -bottom-6 text-brand-ink/10 group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute -top-8 -left-8 w-32 h-32 rounded-full bg-white/25 blur-2xl pointer-events-none" />
              <div className="relative w-10 h-10 rounded-full bg-white/35 backdrop-blur-sm flex items-center justify-center">
                <Tag size={20} />
              </div>
              <div className="relative">
                <p className="text-base sm:text-lg font-extrabold leading-tight">Destaques da loja</p>
                <p className="text-xs text-brand-ink/75 mt-0.5">os equipamentos que mais saem</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
