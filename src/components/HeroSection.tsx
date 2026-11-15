import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Compass, MapPin } from 'lucide-react';
import {
  CIRCULAR_LOGO_SRC,
  HERO_DAWN_SRC,
  HERO_NATURE_SRC,
} from '../data/districtContent';
import { FlyingBirdsFlock, SwayingReedsCorner } from './WildBotanicalDecor';

export function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.02, 1.1]);
  const cardsY = useTransform(scrollYProgress, [0, 1], ['0px', '-24px']);

  return (
    <section
      ref={heroRef}
      id="inicio"
      className="relative -mt-[76px] scroll-mt-20 overflow-hidden border-b border-[#96D5F4]/50 pt-[96px] pb-14 lg:pt-[112px] lg:pb-18"
    >
      {/* Parallax Representative San Vicente Sunrise Backdrop */}
      <motion.div
        aria-hidden="true"
        style={{ y: bgY, scale: bgScale }}
        className="pointer-events-none absolute inset-0"
      >
        <img
          src={HERO_DAWN_SRC}
          alt=""
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-center"
        />
      </motion.div>

      {/* Soft dawn tint veil preserving sunrise glow while supporting liquid glass contrast */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#E6F5FD]/30 via-[#FEF7DF]/15 to-[#0F2738]/22"
      />

      {/* Animated countryside accents: flying pajaritos & swaying lakeside reeds */}
      <FlyingBirdsFlock className="pointer-events-none absolute top-24 right-10 hidden lg:block h-16 w-48 opacity-75" />
      <SwayingReedsCorner
        tone="green"
        className="pointer-events-none absolute -bottom-3 left-2 hidden xl:block h-36 w-40 opacity-55"
      />

      <div className="relative mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left column: Liquid Crystal Hero Panel */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <div className="liquid-glass-panel rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-3.5">
                <img
                  src={CIRCULAR_LOGO_SRC}
                  alt="Isologo circular de Distrito Laguna San Vicente"
                  referrerPolicy="no-referrer"
                  className="h-14 w-14 rounded-full border border-white/85 bg-white p-1 object-contain shadow-xs"
                />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#135A84]">
                    San Vicente · Buenos Aires
                  </p>
                  <p className="text-sm font-bold text-[#1E5920]">
                    Naturaleza, identidad y desarrollo en un mismo lugar.
                  </p>
                </div>
              </div>

              <h1
                className="mt-5 font-display text-4xl font-extrabold leading-[1.06] tracking-tight text-[#0D2331] sm:text-5xl lg:text-[3.25rem]"
                style={{ textWrap: 'balance' }}
              >
                Distrito Laguna San Vicente
              </h1>

              <p className="mt-5 text-base font-semibold leading-relaxed text-[#0F2738] sm:text-lg">
                Te invitamos a descubrir un proyecto que busca transformar y poner en valor uno de
                los espacios más representativos de San Vicente.
              </p>

              <p className="mt-3 text-base leading-relaxed text-[#1E3A4C]">
                Distrito Laguna propone recuperar el entorno natural, mejorar los espacios
                recreativos y promover el desarrollo turístico local, integrando el crecimiento
                urbano con la preservación ambiental y el disfrute de toda la comunidad.
              </p>

              <p className="mt-3 text-sm font-bold text-[#135A84]">
                Un espacio para encontrarnos, disfrutar de la naturaleza y fortalecer nuestra
                identidad.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="#proyecto"
                  className="inline-flex items-center gap-2 rounded-2xl bg-[#329FD8] px-6 py-3.5 text-sm font-bold text-[#072130] shadow-sm ring-1 ring-white/70 hover:bg-[#96D5F4] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#102A3A]"
                >
                  <Compass className="h-4 w-4" aria-hidden="true" />
                  Conocé el proyecto
                </motion.a>
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="#sectores"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/80 bg-white/70 backdrop-blur-md px-6 py-3.5 text-sm font-bold text-[#1D4620] shadow-xs hover:bg-white/95 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#65A366]"
                >
                  <MapPin className="h-4 w-4 text-[#2E6B30]" aria-hidden="true" />
                  Ver los cuatro sectores
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Right column: San Vicente Dawn Showcase + Natural Wetlands + Crystal Logo Card */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: cardsY }}
            className="lg:col-span-6"
          >
            <div className="grid grid-cols-12 gap-4">
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
                className="col-span-12 overflow-hidden rounded-3xl border border-white/80 bg-white/30 p-1.5 backdrop-blur-md shadow-lg"
              >
                <div className="relative aspect-16/9 w-full overflow-hidden rounded-[1.2rem]">
                  <img
                    src={HERO_DAWN_SRC}
                    alt="Amanecer representativo sobre la Laguna de San Vicente con muelle de madera, juncos y reflejo dorado del sol"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-x-3 bottom-3 rounded-xl liquid-glass-dark-strip px-4 py-2.5 text-white">
                    <p className="text-xs font-bold tracking-wide">
                      Amanecer en la Laguna de San Vicente · Espejo de agua y paisaje pampeano
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
                className="col-span-12 overflow-hidden rounded-3xl border border-white/80 bg-white/30 p-1.5 backdrop-blur-md shadow-md"
              >
                <div className="relative aspect-16/8 w-full min-h-[190px] overflow-hidden rounded-[1.15rem]">
                  <img
                    src={HERO_NATURE_SRC}
                    alt="Paisaje natural, sendero de madera y vegetación ribereña de la laguna"
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-x-3 bottom-3 rounded-xl liquid-glass-dark-strip px-4 py-2 text-white">
                    <p className="text-xs font-semibold">Paisaje natural y humedales</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
