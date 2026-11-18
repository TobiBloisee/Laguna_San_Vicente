import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Pause, Play, Quote } from 'lucide-react';
import { RESIDENT_TESTIMONIALS } from '../data/districtContent';
import {
  filterTestimonials,
  getNextTestimonialId,
  type TestimonialTheme,
} from '../utils/brandLogic';
import {
  FlyingBirdsFlock,
  LocalFloraCardArt,
  SwayingReedsCorner,
} from './WildBotanicalDecor';

const THEME_TABS: { id: TestimonialTheme; label: string }[] = [
  { id: 'todos', label: 'Todas las voces' },
  { id: 'naturaleza', label: 'Naturaleza y Humedales' },
  { id: 'encuentro', label: 'Paseo y Encuentro' },
  { id: 'identidad', label: 'Identidad y Futuro' },
];

export function ResidentTestimonialsSection() {
  const [activeTheme, setActiveTheme] = useState<TestimonialTheme>('todos');
  const [selectedId, setSelectedId] = useState<string>(RESIDENT_TESTIMONIALS[0].id);
  const [autoPlay, setAutoPlay] = useState<boolean>(true);

  const visibleQuotes = filterTestimonials(RESIDENT_TESTIMONIALS, activeTheme);
  const activeQuote =
    visibleQuotes.find((q) => q.id === selectedId) ?? visibleQuotes[0] ?? RESIDENT_TESTIMONIALS[0];

  useEffect(() => {
    if (!visibleQuotes.some((q) => q.id === selectedId) && visibleQuotes.length > 0) {
      setSelectedId(visibleQuotes[0].id);
    }
  }, [activeTheme, selectedId, visibleQuotes]);

  useEffect(() => {
    if (!autoPlay || visibleQuotes.length <= 1) return;
    const timer = window.setInterval(() => {
      setSelectedId((prev) => getNextTestimonialId(visibleQuotes, prev, 'next') ?? prev);
    }, 5500);
    return () => window.clearInterval(timer);
  }, [autoPlay, visibleQuotes]);

  const handleStep = (direction: 'prev' | 'next') => {
    setAutoPlay(false);
    const next = getNextTestimonialId(visibleQuotes, activeQuote.id, direction);
    if (next) setSelectedId(next);
  };

  return (
    <section
      id="testimonios"
      className="relative scroll-mt-20 overflow-hidden border-b border-[#8CBF75]/40 bg-[#E8F6FD] py-16 lg:py-22"
    >
      {/* Subtle flying birds & swaying reeds behind text */}
      <FlyingBirdsFlock className="pointer-events-none absolute top-10 right-10 hidden sm:block h-14 w-44 opacity-55" />
      <SwayingReedsCorner
        tone="green"
        className="pointer-events-none absolute -bottom-3 left-2 hidden lg:block h-36 w-40 opacity-30"
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        {/* Header + Controls */}
        <motion.div
          initial={{ opacity: 0.9, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
        >
          <div className="max-w-2xl">
            <p className="text-sm font-bold text-[#186E9E]">
              07 · Voces del Distrito
            </p>
            <h2
              className="mt-2 font-display text-3xl font-bold leading-tight text-[#102A3A] sm:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              Qué sienten los vecinos sobre la transformación de la laguna
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#2C4759]">
              Testimonios breves y miradas cotidianas de quienes caminan, pedalean, enseñan y
              cuidan San Vicente cada día.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <motion.button
              type="button"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleStep('prev')}
              aria-label="Testimonio anterior"
              className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/80 bg-white/85 text-[#102A3A] shadow-xs hover:border-[#329FD8] hover:bg-white transition-colors"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </motion.button>
            <motion.button
              type="button"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setAutoPlay((prev) => !prev)}
              aria-label={autoPlay ? 'Pausar rotación automática' : 'Reanudar rotación automática'}
              className="inline-flex items-center gap-1.5 rounded-2xl border border-white/80 bg-white/85 px-3.5 py-2.5 text-xs font-bold text-[#102A3A] shadow-xs hover:border-[#329FD8] hover:bg-white transition-colors"
            >
              {autoPlay ? (
                <>
                  <Pause className="h-3.5 w-3.5 text-[#186E9E]" aria-hidden="true" />
                  Pausar
                </>
              ) : (
                <>
                  <Play className="h-3.5 w-3.5 text-[#2E6B30]" aria-hidden="true" />
                  Rotar voces
                </>
              )}
            </motion.button>
            <motion.button
              type="button"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleStep('next')}
              aria-label="Siguiente testimonio"
              className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/80 bg-white/85 text-[#102A3A] shadow-xs hover:border-[#329FD8] hover:bg-white transition-colors"
            >
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </motion.button>
          </div>
        </motion.div>

        {/* Filter bar + Dynamic Spotlight Quote Banner */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, delay: 0.06, ease: 'easeOut' }}
          className="mt-7 flex flex-wrap items-center justify-between gap-4"
        >
          <div
            role="tablist"
            aria-label="Filtrar testimonios de vecinos por eje"
            className="flex flex-wrap gap-1.5 rounded-2xl liquid-glass-bar p-1.5"
          >
            {THEME_TABS.map((tab) => {
              const isCurrent = activeTheme === tab.id;
              return (
                <motion.button
                  key={tab.id}
                  role="tab"
                  type="button"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  aria-selected={isCurrent}
                  onClick={() => setActiveTheme(tab.id)}
                  className={`rounded-xl px-4 py-2 text-xs font-bold transition-colors whitespace-nowrap shrink-0 ${
                    isCurrent
                      ? 'bg-[#329FD8] text-[#072130] shadow-xs'
                      : 'text-[#2C4759] hover:bg-white/70 hover:text-[#102A3A]'
                  }`}
                >
                  {tab.label}
                </motion.button>
              );
            })}
          </div>

          <p className="text-xs font-bold text-[#186E9E] tabular-nums">
            {visibleQuotes.length} testimonios de la comunidad
          </p>
        </motion.div>

        {/* Spotlight Active Quote Card */}
        <motion.div
          key={activeQuote.id}
          initial={{ opacity: 0.85, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.24, ease: 'easeOut' }}
          style={{ borderColor: activeQuote.accentHex }}
          className="relative mt-6 overflow-hidden rounded-3xl border-2 bg-white p-6 sm:p-8 shadow-sm"
        >
          <LocalFloraCardArt
            variant={activeQuote.flora}
            className="pointer-events-none absolute -bottom-2 right-4 h-32 w-32 opacity-35 sm:h-40 sm:w-40 sm:opacity-45"
          />
          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-2.5 text-xs font-bold text-[#186E9E]">
              <span
                className="inline-flex h-8 w-8 items-center justify-center rounded-xl text-[#102A3A]"
                style={{ backgroundColor: activeQuote.surfaceHex }}
                aria-hidden="true"
              >
                <Quote className="h-4 w-4" />
              </span>
              <span>{activeQuote.themeLabel}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#2E6B30]">Flora local: {activeQuote.floraLabel}</span>
            </div>

            <blockquote className="mt-4 font-display text-xl font-bold leading-snug text-[#102A3A] sm:text-2xl">
              “{activeQuote.quote}”
            </blockquote>

            <div className="mt-4 flex flex-wrap items-center gap-2 text-sm text-[#2C4759]">
              <strong className="text-[#102A3A]">{activeQuote.author}</strong>
              <span aria-hidden="true">·</span>
              <span>{activeQuote.role}</span>
              <span aria-hidden="true">·</span>
              <span className="font-semibold text-[#186E9E]">{activeQuote.neighborhood}</span>
            </div>
          </div>
        </motion.div>

        {/* Cards Grid with Illustrated Local Flora */}
        <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visibleQuotes.map((item, idx) => {
            const isSelected = item.id === activeQuote.id;
            return (
              <motion.button
                key={item.id}
                type="button"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.4, delay: idx * 0.05, ease: 'easeOut' }}
                whileHover={{ y: -5, scale: 1.01 }}
                whileTap={{ scale: 0.985 }}
                onClick={() => {
                  setAutoPlay(false);
                  setSelectedId(item.id);
                }}
                aria-pressed={isSelected}
                style={{
                  borderColor: isSelected ? item.accentHex : 'rgba(255,255,255,0.9)',
                  backgroundColor: isSelected ? '#FFFFFF' : item.surfaceHex,
                }}
                className={`group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border-2 p-6 text-left shadow-xs transition-shadow hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#102A3A]`}
              >
                {/* Illustrated native San Vicente flora tucked into bottom-right of card */}
                <LocalFloraCardArt
                  variant={item.flora}
                  className="pointer-events-none absolute -bottom-2 right-1 h-28 w-28 opacity-40 transition-transform duration-300 group-hover:scale-105 group-hover:opacity-60"
                />

                <div className="relative z-10">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-2 text-xs font-bold text-[#102A3A]">
                      <span
                        className="h-2.5 w-2.5 rounded-full shrink-0"
                        style={{ backgroundColor: item.accentHex }}
                        aria-hidden="true"
                      />
                      {item.themeLabel}
                    </span>
                    <span className="text-[11px] font-semibold text-[#3A5568]">
                      {item.floraLabel}
                    </span>
                  </div>

                  <p className="mt-3.5 text-sm font-medium leading-relaxed text-[#102A3A]">
                    “{item.quote}”
                  </p>
                </div>

                <div className="relative z-10 mt-5 border-t border-[#102A3A]/10 pt-3 pr-16">
                  <p className="font-display text-sm font-bold text-[#102A3A]">{item.author}</p>
                  <p className="text-xs font-medium text-[#3A5568]">
                    {item.role} · {item.neighborhood}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
