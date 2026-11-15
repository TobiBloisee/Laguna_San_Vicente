import { useState } from 'react';
import { motion } from 'motion/react';
import { Building2, Leaf, Sun, Waves } from 'lucide-react';
import {
  HERO_PANORAMA_SRC,
  LOGO_SYMBOL_ELEMENTS,
  OFFICIAL_LOGO_SRC,
} from '../data/districtContent';
import { getRecommendedTextTone, type SymbolKey } from '../utils/brandLogic';
import { PerchingBenteveo, SwayingCeiboCluster } from './WildBotanicalDecor';

interface ProjectAndLogoSectionProps {
  activeSymbol: SymbolKey;
  onSelectSymbol: (symbol: SymbolKey) => void;
}

export function ProjectAndLogoSection({
  activeSymbol,
  onSelectSymbol,
}: ProjectAndLogoSectionProps) {
  const [activeMode, setActiveMode] = useState<'proyecto' | 'isologo'>('proyecto');

  const selectedElement =
    LOGO_SYMBOL_ELEMENTS.find((el) => el.key === activeSymbol) ?? LOGO_SYMBOL_ELEMENTS[0];

  const objectives = [
    {
      icon: Waves,
      title: 'Recuperar el espejo de agua',
      detail: 'Puesta en valor del recurso hídrico central de San Vicente y sus bordes costeros.',
      bg: '#E8F6FD',
      iconBg: '#96D5F4',
    },
    {
      icon: Leaf,
      title: 'Preservar humedales y flora',
      detail: 'Protección activa de la vegetación ribereña y los ecosistemas naturales.',
      bg: '#EDF7E9',
      iconBg: '#8CBF75',
    },
    {
      icon: Building2,
      title: 'Mejorar la infraestructura',
      detail: 'Ordenamiento en cuatro sectores con accesibilidad y servicios equilibrados.',
      bg: '#E3F3FC',
      iconBg: '#329FD8',
    },
    {
      icon: Sun,
      title: 'Turismo y encuentro comunitario',
      detail: 'Nuevos espacios para la recreación familiar, la gastronomía y la cultura local.',
      bg: '#FEF7DF',
      iconBg: '#F2C53D',
    },
  ];

  return (
    <section
      id="proyecto"
      className="relative scroll-mt-20 overflow-hidden border-b border-[#8CBF75]/35 bg-[#EFF8EC] py-16 lg:py-22"
    >
      {/* Subtle countryside botanical illustration tucked behind the left copy */}
      <SwayingCeiboCluster className="pointer-events-none absolute top-10 left-2 sm:left-6 h-40 w-40 opacity-28" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="grid grid-cols-1 gap-10 lg:grid-cols-12"
        >
          {/* Left: PDF Section B "Conocé el proyecto - ¿Qué es Distrito Laguna?" */}
          <div className="lg:col-span-5">
            <p className="text-sm font-bold text-[#2E6B30]">
              01 · Conocé el proyecto
            </p>
            <h2
              className="mt-2 font-display text-3xl font-bold leading-tight text-[#102A3A] sm:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              ¿Qué es Distrito Laguna?
            </h2>

            <div className="mt-5 space-y-4 text-base leading-relaxed text-[#2C4759]">
              <p>
                Distrito Laguna es una propuesta de planificación territorial que busca transformar
                el entorno de la Laguna de San Vicente, poniendo en valor sus recursos naturales,
                históricos y recreativos.
              </p>
              <p>
                El proyecto contempla una planificación a largo plazo, con el objetivo de recuperar
                el espejo de agua, preservar los humedales y la vegetación, mejorar la
                infraestructura y generar nuevos espacios destinados al turismo, la recreación y el
                encuentro comunitario.
              </p>
              <p>
                A través de una organización en cuatro sectores, se busca integrar las actividades
                recreativas y comerciales con la conservación del ambiente, promoviendo un
                desarrollo equilibrado para el distrito.
              </p>
            </div>

            <div className="relative mt-8">
              <PerchingBenteveo className="pointer-events-none -mb-4 ml-auto mr-4 h-24 w-32 opacity-90" />
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                className="relative rounded-2xl border border-[#65A366]/40 bg-white p-5 shadow-xs"
              >
                <p className="text-sm font-bold leading-relaxed text-[#102A3A]">
                  Un proyecto que busca construir nuevas oportunidades sin perder de vista la
                  identidad natural e histórica de San Vicente.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Right: Interactive Dual-Tab Explorer (Visión Territorial vs Anatomía del Isologo) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border-2 border-[#8CBF75]/45 bg-white p-6 sm:p-8 shadow-sm">
              <div
                role="tablist"
                aria-label="Explorar objetivos del proyecto o simbología del isologo"
                className="flex flex-wrap gap-1.5 rounded-2xl liquid-glass-bar p-1.5"
              >
                <motion.button
                  role="tab"
                  type="button"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  aria-selected={activeMode === 'proyecto'}
                  onClick={() => setActiveMode('proyecto')}
                  className={`flex-1 rounded-xl px-4 py-2.5 text-xs font-bold transition-colors whitespace-nowrap shrink-0 ${
                    activeMode === 'proyecto'
                      ? 'bg-[#65A366] text-white shadow-xs'
                      : 'text-[#244E26] hover:bg-white/60'
                  }`}
                >
                  Objetivos y Planificación
                </motion.button>
                <motion.button
                  role="tab"
                  type="button"
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.97 }}
                  aria-selected={activeMode === 'isologo'}
                  onClick={() => setActiveMode('isologo')}
                  className={`flex-1 rounded-xl px-4 py-2.5 text-xs font-bold transition-colors whitespace-nowrap shrink-0 ${
                    activeMode === 'isologo'
                      ? 'bg-[#329FD8] text-[#072130] shadow-xs'
                      : 'text-[#244E26] hover:bg-white/60'
                  }`}
                >
                  Significado del Isologo
                </motion.button>
              </div>

              {activeMode === 'proyecto' ? (
                <motion.div
                  key="proyecto"
                  role="tabpanel"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.24, ease: 'easeOut' }}
                  className="mt-6"
                >
                    <div className="overflow-hidden rounded-2xl border border-[#102A3A]/8">
                      <div className="relative aspect-16/9 w-full">
                        <img
                          src={HERO_PANORAMA_SRC}
                          alt="Vista panorámica de la Laguna de San Vicente y su entorno natural"
                          referrerPolicy="no-referrer"
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-x-3 bottom-3 rounded-xl liquid-glass-dark-strip px-4 py-2 text-white">
                          <p className="text-xs font-bold">
                            Planificación a largo plazo · Desarrollo equilibrado en cuatro sectores
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {objectives.map((obj, idx) => {
                        const Icon = obj.icon;
                        return (
                          <motion.div
                            key={obj.title}
                            initial={{ opacity: 0, y: 14 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ duration: 0.35, delay: idx * 0.06 }}
                            whileHover={{ y: -4, scale: 1.01 }}
                            style={{ backgroundColor: obj.bg }}
                            className="rounded-2xl border border-[#102A3A]/8 p-4 transition-shadow hover:shadow-sm"
                          >
                            <div className="flex items-center gap-2.5">
                              <span
                                className="inline-flex h-8 w-8 items-center justify-center rounded-xl text-[#0F2738]"
                                style={{ backgroundColor: obj.iconBg }}
                                aria-hidden="true"
                              >
                                <Icon className="h-4 w-4" />
                              </span>
                              <h3 className="font-display text-sm font-bold text-[#102A3A]">
                                {obj.title}
                              </h3>
                            </div>
                            <p className="mt-2 text-xs leading-relaxed text-[#2C4759]">
                              {obj.detail}
                            </p>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                ) : (
                <motion.div
                  key="isologo"
                  role="tabpanel"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.24, ease: 'easeOut' }}
                  className="mt-6"
                >
                  <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-12">
                    <div
                      className="relative sm:col-span-5 rounded-2xl border-2 p-4"
                      style={{
                        backgroundColor: selectedElement.softSurfaceHex,
                        borderColor: selectedElement.primaryHex,
                      }}
                    >
                      <div className="relative mx-auto w-full max-w-[240px]">
                        <img
                          src={OFFICIAL_LOGO_SRC}
                          alt="Anatomía interactiva del logo de Distrito Laguna San Vicente"
                          referrerPolicy="no-referrer"
                          className="w-full h-auto rounded-xl bg-white p-2"
                        />
                        {LOGO_SYMBOL_ELEMENTS.map((item) => {
                          const isCurrent = item.key === activeSymbol;
                          return (
                            <button
                              key={item.key}
                              type="button"
                              onClick={() => onSelectSymbol(item.key)}
                              aria-label={`Inspeccionar ${item.shortLabel}`}
                              style={{
                                left: `${item.hotspot.x}%`,
                                top: `${item.hotspot.y}%`,
                                backgroundColor: isCurrent ? item.primaryHex : '#FFFFFF',
                                color: isCurrent
                                  ? getRecommendedTextTone(item.primaryHex).inkHex
                                  : '#102A3A',
                              }}
                              className={`absolute -translate-x-1/2 -translate-y-1/2 flex h-7 w-7 items-center justify-center rounded-full border-2 text-[11px] font-extrabold shadow-sm transition-transform ${
                                isCurrent
                                  ? 'scale-115 border-[#102A3A]'
                                  : 'border-[#329FD8]/60 hover:scale-110'
                              }`}
                            >
                              {item.index}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    <div className="sm:col-span-7">
                      <div className="flex flex-wrap gap-1.5">
                        {LOGO_SYMBOL_ELEMENTS.map((item) => {
                          const isCurrent = item.key === activeSymbol;
                          return (
                            <motion.button
                              key={item.key}
                              type="button"
                              whileHover={{ y: -2 }}
                              whileTap={{ scale: 0.96 }}
                              onClick={() => onSelectSymbol(item.key)}
                              style={
                                isCurrent
                                  ? {
                                      backgroundColor: item.primaryHex,
                                      color: getRecommendedTextTone(item.primaryHex).inkHex,
                                    }
                                  : undefined
                              }
                              className={`rounded-xl border px-2.5 py-1.5 text-xs font-bold transition-colors ${
                                isCurrent
                                  ? 'border-[#102A3A]/20'
                                  : 'border-[#102A3A]/10 bg-[#F7FBFE] text-[#2C4759] hover:border-[#329FD8]'
                              }`}
                            >
                              {item.shortLabel}
                            </motion.button>
                          );
                        })}
                      </div>

                      <h3 className="mt-4 font-display text-xl font-bold text-[#102A3A]">
                        {selectedElement.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#2C4759]">
                        {selectedElement.meaning}
                      </p>
                      <p className="mt-3 text-xs font-semibold text-[#186E9E]">
                        {selectedElement.territorialValues.join(' · ')}
                      </p>
                      </div>
                    </div>
                  </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
