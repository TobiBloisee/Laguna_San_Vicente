import { useState } from 'react';
import { motion } from 'motion/react';
import { FileClock, Landmark, Leaf, ShieldCheck } from 'lucide-react';
import {
  ENVIRONMENTAL_TRANSPARENCY_SLOTS,
  HERITAGE_LANDMARKS,
} from '../data/districtContent';
import {
  FlutteringDragonfly,
  PeekingCarpinchoWave,
  SwayingCeiboCluster,
  SwayingReedsCorner,
} from './WildBotanicalDecor';

export function NatureAndHistorySection() {
  const [selectedLandmarkId, setSelectedLandmarkId] = useState(HERITAGE_LANDMARKS[0].id);

  const activeLandmark =
    HERITAGE_LANDMARKS.find((l) => l.id === selectedLandmarkId) ?? HERITAGE_LANDMARKS[0];

  return (
    <section
      id="naturaleza"
      className="relative scroll-mt-20 overflow-hidden border-b border-[#8CBF75]/40 bg-[#EFF8EC] py-16 lg:py-22"
    >
      {/* Drawn San Vicente flora & dragonfly gently behind the text */}
      <SwayingCeiboCluster className="pointer-events-none absolute top-14 left-4 h-36 w-36 opacity-25" />
      <FlutteringDragonfly className="pointer-events-none absolute top-14 right-8 h-20 w-24 opacity-65" />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        {/* Part D: Naturaleza y cuidado ambiental */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="grid grid-cols-1 gap-10 lg:grid-cols-12"
        >
          <div className="lg:col-span-6">
            <p className="text-sm font-bold text-[#2E6B30]">
              03 · Naturaleza y Cuidado Ambiental
            </p>
            <h2
              className="mt-2 font-display text-3xl font-bold leading-tight text-[#102A3A] sm:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              Nuestro compromiso con la naturaleza
            </h2>

            <div className="mt-5 space-y-4 text-base leading-relaxed text-[#2C4759]">
              <p>
                La Laguna de San Vicente constituye un patrimonio natural de gran valor para el
                distrito. Su vegetación, sus humedales y su biodiversidad forman parte de un entorno
                que merece ser protegido y conservado.
              </p>
              <p>
                Distrito Laguna busca promover un desarrollo que integre el disfrute del espacio
                público con el cuidado ambiental, contemplando la recuperación del espejo de agua,
                la preservación de la vegetación y la protección de los humedales.
              </p>
              <p className="font-bold text-[#102A3A]">
                Porque el crecimiento del distrito también implica cuidar aquello que lo hace único.
              </p>
            </div>

            {/* Waving San Vicente carpincho peeking from reeds next to the conservation text */}
            <div className="mt-4 flex items-end justify-start">
              <PeekingCarpinchoWave className="h-32 w-40 opacity-90" />
            </div>
          </div>

          {/* Apartado de Transparencia Ambiental (espacio reservado a futura publicación) */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl border-2 border-[#65A366]/45 bg-white p-6 sm:p-7 shadow-sm">
              <div className="flex items-center gap-3">
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#65A366] text-white"
                  aria-hidden="true"
                >
                  <ShieldCheck className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-[#102A3A]">
                    Transparencia Ambiental
                  </h3>
                  <p className="text-xs font-semibold text-[#2E6B30]">
                    Espacio destinado a la publicación futura de estudios e informes técnicos
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                {ENVIRONMENTAL_TRANSPARENCY_SLOTS.map((slot, idx) => (
                  <motion.div
                    key={slot.id}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.35, delay: idx * 0.08 }}
                    whileHover={{ y: -3, scale: 1.01 }}
                    className="rounded-2xl border border-[#8CBF75]/45 bg-[#F6FBF4] p-4 transition-shadow hover:shadow-sm"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="flex items-center gap-2 text-sm font-bold text-[#102A3A]">
                        <FileClock className="h-4 w-4 text-[#65A366]" aria-hidden="true" />
                        {slot.title}
                      </h4>
                      <span className="text-xs font-semibold text-[#2E6B30]">{slot.status}</span>
                    </div>
                    <p className="mt-1.5 text-xs leading-relaxed text-[#3A5568]">
                      {slot.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Part E: Historia e identidad de San Vicente */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, delay: 0.08, ease: 'easeOut' }}
          className="relative mt-16 overflow-hidden rounded-3xl border-2 border-[#F2C53D]/55 bg-[#FEF9E8] p-6 sm:p-10"
        >
          <SwayingReedsCorner
            tone="gold"
            className="pointer-events-none absolute -bottom-3 -left-3 hidden sm:block h-32 w-36 opacity-30"
          />
          <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-sm font-bold text-[#7C5A05]">
                04 · Historia e Identidad de San Vicente
              </p>
              <h2
                className="mt-2 font-display text-3xl font-bold leading-tight text-[#102A3A]"
                style={{ textWrap: 'balance' }}
              >
                Un lugar con historia
              </h2>
              <div className="mt-4 space-y-3 text-base leading-relaxed text-[#2C4759]">
                <p>
                  La Laguna de San Vicente, también conocida como{' '}
                  <strong className="text-[#102A3A]">Laguna del Ojo</strong>, forma parte de la
                  historia y de la identidad de la comunidad.
                </p>
                <p>
                  Sus alrededores acompañaron el desarrollo de la localidad y constituyen un espacio
                  de encuentro, recreación y memoria colectiva.
                </p>
                <p>
                  Descubrir Distrito Laguna también es conocer las raíces de San Vicente, su
                  patrimonio cultural y aquellos lugares que forman parte de su historia.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-white p-5 sm:p-6 border border-[#F2C53D]/40 shadow-xs">
                <p className="text-xs font-bold text-[#7C5A05]">
                  Patrimonio cultural y sitios históricos vinculados
                </p>

                <div
                  role="tablist"
                  aria-label="Lugares históricos de San Vicente"
                  className="mt-3 flex flex-wrap gap-1.5 rounded-2xl liquid-glass-bar p-1.5"
                >
                  {HERITAGE_LANDMARKS.map((landmark) => {
                    const isCurrent = landmark.id === selectedLandmarkId;
                    return (
                      <motion.button
                        key={landmark.id}
                        role="tab"
                        type="button"
                        whileHover={{ y: -1 }}
                        whileTap={{ scale: 0.96 }}
                        aria-selected={isCurrent}
                        onClick={() => setSelectedLandmarkId(landmark.id)}
                        className={`rounded-xl border px-3 py-2 text-xs font-bold transition-colors whitespace-nowrap shrink-0 ${
                          isCurrent
                            ? 'border-[#102A3A]/15 bg-[#F2C53D] text-[#102A3A]'
                            : 'border-[#102A3A]/10 bg-[#FEF9E8] text-[#2C4759] hover:border-[#F2C53D]'
                        }`}
                      >
                        {landmark.title.split(' (')[0]}
                      </motion.button>
                    );
                  })}
                </div>

                <motion.div
                  key={activeLandmark.id}
                  role="tabpanel"
                  initial={{ opacity: 0.85, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.24, ease: 'easeOut' }}
                  className="mt-5 rounded-2xl bg-[#F7FBFE] p-5 border border-[#96D5F4]/40"
                >
                  <div className="mb-4 overflow-hidden rounded-2xl border border-[#102A3A]/10 bg-white">
                    <div className="aspect-16/9 w-full">
                      <img
                        src={activeLandmark.imageSrc}
                        alt={activeLandmark.imageAlt}
                        referrerPolicy="no-referrer"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#186E9E]">
                    <Landmark className="h-4 w-4" aria-hidden="true" />
                    <span>{activeLandmark.era}</span>
                  </div>
                  <h3 className="mt-2 font-display text-xl font-bold text-[#102A3A]">
                    {activeLandmark.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#2C4759]">
                    {activeLandmark.summary}
                  </p>
                  <p className="mt-3 flex items-center gap-2 text-xs font-bold text-[#2E6B30]">
                    <Leaf className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    {activeLandmark.connection}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
