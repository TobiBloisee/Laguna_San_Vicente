import { motion } from 'motion/react';
import { CheckCircle2, Compass } from 'lucide-react';
import { PROJECT_SECTORS } from '../data/districtContent';
import { getRecommendedTextTone, type SectorId } from '../utils/brandLogic';
import { FlyingBirdsFlock, GlidingLagoonSwan } from './WildBotanicalDecor';

interface InteractiveSectorsMapProps {
  activeSectorId: SectorId;
  onSelectSector: (sector: SectorId) => void;
}

export function InteractiveSectorsMap({
  activeSectorId,
  onSelectSector,
}: InteractiveSectorsMapProps) {
  const activeSector =
    PROJECT_SECTORS.find((s) => s.id === activeSectorId) ?? PROJECT_SECTORS[1];

  return (
    <section
      id="sectores"
      className="relative scroll-mt-20 overflow-hidden border-b border-[#96D5F4]/40 bg-white py-16 lg:py-22"
    >
      <FlyingBirdsFlock className="pointer-events-none absolute top-10 right-8 hidden md:block h-14 w-44 opacity-50" />
      <GlidingLagoonSwan className="pointer-events-none absolute bottom-2 left-4 hidden sm:block h-24 w-36 opacity-55" />

      <div className="relative mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0.9, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <p className="text-sm font-bold text-[#186E9E]">
            03 · Planificación Territorial
          </p>
          <h2
            className="mt-2 font-display text-3xl font-bold leading-tight text-[#102A3A] sm:text-4xl"
            style={{ textWrap: 'balance' }}
          >
            Los cuatro sectores del proyecto
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#2C4759]">
            Explorá el mapa interactivo de la Laguna de San Vicente para conocer qué propone el
            ordenamiento territorial en cada punto cardinal.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0.9, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.45, delay: 0.05, ease: 'easeOut' }}
          className="mt-10 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12"
        >
          {/* Left: Interactive 4-Quadrant Lagoon Map */}
          <div className="lg:col-span-6">
            <div className="flex h-full flex-col justify-between rounded-3xl border-2 border-[#96D5F4]/60 bg-[#F7FBFE] p-6">
              <div className="flex items-center justify-between text-xs font-bold text-[#186E9E]">
                <span className="inline-flex items-center gap-1.5">
                  <Compass className="h-4 w-4" aria-hidden="true" />
                  Mapa interactivo por sectores
                </span>
                <span>Laguna del Ojo · San Vicente</span>
              </div>

              {/* Interactive Cardinal Cross Layout around Central Lagoon */}
              <div className="relative mx-auto my-6 grid w-full max-w-[440px] grid-cols-3 grid-rows-3 gap-2.5">
                {/* Top-left empty spacer */}
                <div className="hidden sm:block" aria-hidden="true" />

                {/* SECTOR NORTE (Top Center) */}
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => onSelectSector('norte')}
                  aria-pressed={activeSectorId === 'norte'}
                  className={`col-span-3 sm:col-span-1 flex flex-col items-center justify-center rounded-2xl border-2 p-3 text-center transition-colors ${
                    activeSectorId === 'norte'
                      ? 'border-[#102A3A] bg-[#65A366] text-white shadow-md scale-[1.03]'
                      : 'border-[#8CBF75] bg-[#EDF7E9] text-[#102A3A] hover:bg-[#65A366]/20'
                  }`}
                >
                  <span className="text-[11px] font-bold uppercase tracking-wider">Norte</span>
                  <span className="mt-0.5 font-display text-xs font-bold">Conservación</span>
                </motion.button>

                {/* Top-right empty spacer */}
                <div className="hidden sm:block" aria-hidden="true" />

                {/* SECTOR OESTE (Middle Left) */}
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => onSelectSector('oeste')}
                  aria-pressed={activeSectorId === 'oeste'}
                  className={`col-span-3 sm:col-span-1 flex flex-col items-center justify-center rounded-2xl border-2 p-3 text-center transition-colors ${
                    activeSectorId === 'oeste'
                      ? 'border-[#102A3A] bg-[#96D5F4] text-[#0F2738] shadow-md scale-[1.03]'
                      : 'border-[#96D5F4] bg-[#EAF6FD] text-[#102A3A] hover:bg-[#96D5F4]/40'
                  }`}
                >
                  <span className="text-[11px] font-bold uppercase tracking-wider">Oeste</span>
                  <span className="mt-0.5 font-display text-xs font-bold">Accesibilidad</span>
                </motion.button>

                {/* CENTRAL LAGOON SVG */}
                <div className="col-span-3 sm:col-span-1 flex flex-col items-center justify-center rounded-full border-2 border-[#329FD8]/40 bg-gradient-to-b from-[#96D5F4]/60 to-[#329FD8]/75 p-4 text-center shadow-inner">
                  <svg
                    viewBox="0 0 120 80"
                    className="h-12 w-20"
                    aria-hidden="true"
                  >
                    <path
                      d="M12 42 C25 18, 55 12, 85 20 C105 26, 112 45, 98 60 C82 74, 42 72, 22 62 C8 55, 6 50, 12 42 Z"
                      fill="#329FD8"
                      stroke="#FFFFFF"
                      strokeWidth="2.5"
                    />
                    <path
                      d="M28 45 Q48 38 68 45 T94 44"
                      fill="none"
                      stroke="#E8F6FD"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="mt-1 font-display text-xs font-extrabold text-[#072130]">
                    Laguna de San Vicente
                  </span>
                </div>

                {/* SECTOR ESTE (Middle Right) */}
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => onSelectSector('este')}
                  aria-pressed={activeSectorId === 'este'}
                  className={`col-span-3 sm:col-span-1 flex flex-col items-center justify-center rounded-2xl border-2 p-3 text-center transition-colors ${
                    activeSectorId === 'este'
                      ? 'border-[#102A3A] bg-[#329FD8] text-[#072130] shadow-md scale-[1.03]'
                      : 'border-[#329FD8]/50 bg-[#E3F3FC] text-[#102A3A] hover:bg-[#329FD8]/25'
                  }`}
                >
                  <span className="text-[11px] font-bold uppercase tracking-wider">Este</span>
                  <span className="mt-0.5 font-display text-xs font-bold">Camping</span>
                </motion.button>

                {/* Bottom-left empty spacer */}
                <div className="hidden sm:block" aria-hidden="true" />

                {/* SECTOR SUR (Bottom Center) */}
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => onSelectSector('sur')}
                  aria-pressed={activeSectorId === 'sur'}
                  className={`col-span-3 sm:col-span-1 flex flex-col items-center justify-center rounded-2xl border-2 p-3 text-center transition-colors ${
                    activeSectorId === 'sur'
                      ? 'border-[#102A3A] bg-[#F2C53D] text-[#0F2738] shadow-md scale-[1.03]'
                      : 'border-[#F2C53D] bg-[#FEF7DF] text-[#102A3A] hover:bg-[#F2C53D]/35'
                  }`}
                >
                  <span className="text-[11px] font-bold uppercase tracking-wider">Sur</span>
                  <span className="mt-0.5 font-display text-xs font-bold">Paseo y Gastro</span>
                </motion.button>

                {/* Bottom-right empty spacer */}
                <div className="hidden sm:block" aria-hidden="true" />
              </div>

              <p className="text-center text-xs font-medium text-[#3A5568]">
                Seleccioná un sector en el mapa o en la lista lateral para conocer su propuesta.
              </p>
            </div>
          </div>

          {/* Right: 4 Sector Selector Buttons + Detailed Sector Card */}
          <div className="lg:col-span-6">
            <div className="flex h-full flex-col justify-between rounded-3xl border-2 border-[#96D5F4]/45 bg-[#F7FBFE] p-6 sm:p-8">
              <div>
                <div
                  role="tablist"
                  aria-label="Sectores del proyecto Distrito Laguna"
                  className="grid grid-cols-2 gap-2 rounded-2xl liquid-glass-bar p-1.5 sm:grid-cols-4"
                >
                  {PROJECT_SECTORS.map((sector) => {
                    const isCurrent = sector.id === activeSectorId;
                    const textInk = getRecommendedTextTone(sector.accentHex).inkHex;
                    return (
                      <button
                        key={sector.id}
                        role="tab"
                        type="button"
                        aria-selected={isCurrent}
                        onClick={() => onSelectSector(sector.id)}
                        style={
                          isCurrent
                            ? { backgroundColor: sector.accentHex, color: textInk }
                            : undefined
                        }
                        className={`rounded-2xl border px-3 py-2.5 text-xs font-bold transition-all whitespace-nowrap shrink-0 ${
                          isCurrent
                            ? 'border-[#102A3A]/20 shadow-xs'
                            : 'border-[#102A3A]/10 bg-white text-[#2C4759] hover:border-[#329FD8]'
                        }`}
                      >
                        {sector.cardinal}
                      </button>
                    );
                  })}
                </div>

                {/* Active Sector Card */}
                <motion.div
                  key={activeSector.id}
                  initial={{ opacity: 0.85, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.24, ease: 'easeOut' }}
                  className="mt-6 rounded-2xl border-2 bg-white p-6"
                  style={{ borderColor: activeSector.accentHex }}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#102A3A]">
                      <span
                        className="h-2.5 w-2.5 rounded-full"
                        style={{ backgroundColor: activeSector.accentHex }}
                        aria-hidden="true"
                      />
                      {activeSector.cardinal}
                    </span>
                    <span className="text-xs font-semibold text-[#3A5568]">
                      {activeSector.subtitle}
                    </span>
                  </div>

                  <h3 className="mt-3 font-display text-2xl font-bold text-[#102A3A]">
                    {activeSector.name}
                  </h3>

                  <div className="mt-4 overflow-hidden rounded-2xl border border-[#102A3A]/10">
                    <div className="aspect-16/9 w-full bg-[#E8F6FD]">
                      <img
                        src={activeSector.imageSrc}
                        alt={activeSector.imageAlt}
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  <p className="mt-4 text-base leading-relaxed text-[#2C4759]">
                    {activeSector.description}
                  </p>

                  <ul className="mt-5 grid grid-cols-1 gap-2.5 border-t border-[#102A3A]/10 pt-5 sm:grid-cols-3">
                    {activeSector.highlights.map((item, idx) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25, delay: idx * 0.05 }}
                        whileHover={{ y: -2, scale: 1.02 }}
                        style={{ backgroundColor: activeSector.softHex }}
                        className="flex items-start gap-2 rounded-xl p-3 text-xs font-bold text-[#102A3A]"
                      >
                        <CheckCircle2
                          className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#186E9E]"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 pt-2 text-xs text-[#3A5568]">
                <span>Zonificación equilibrada entre recreación, servicios y conservación.</span>
                <a
                  href="#naturaleza"
                  className="font-bold text-[#186E9E] hover:underline whitespace-nowrap shrink-0"
                >
                  Ver compromiso ambiental
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
