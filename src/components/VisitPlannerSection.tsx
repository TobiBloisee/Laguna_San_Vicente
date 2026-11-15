import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, ExternalLink, MapPin } from 'lucide-react';
import {
  GOOGLE_MAPS_LAGUNA_URL,
  MAPA_SAN_VICENTE_SRC,
  VISIT_GUIDE_TOPICS,
} from '../data/districtContent';
import { getRecommendedTextTone } from '../utils/brandLogic';
import { GlidingLagoonSwan, PerchingBenteveo } from './WildBotanicalDecor';

export function VisitPlannerSection() {
  const [activeTopicId, setActiveTopicId] = useState(VISIT_GUIDE_TOPICS[0].id);

  const activeTopic =
    VISIT_GUIDE_TOPICS.find((t) => t.id === activeTopicId) ?? VISIT_GUIDE_TOPICS[0];
  const buttonInk = getRecommendedTextTone(activeTopic.accentHex).inkHex;

  return (
    <section
      id="visita"
      className="relative scroll-mt-20 overflow-hidden border-b border-[#96D5F4]/40 bg-white py-16 lg:py-22"
    >
      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0.9, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="grid grid-cols-1 gap-10 lg:grid-cols-12"
        >
          {/* Left column: PDF Section F copy */}
          <div className="lg:col-span-5">
            <p className="text-sm font-bold text-[#186E9E]">
              05 · Planificá tu visita
            </p>
            <h2
              className="mt-2 font-display text-3xl font-bold leading-tight text-[#102A3A] sm:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              Descubrí San Vicente
            </h2>
            <p className="mt-4 text-base font-semibold leading-relaxed text-[#102A3A]">
              ¿Buscás un lugar para disfrutar al aire libre, conocer nuevos paisajes y compartir un
              momento diferente?
            </p>
            <p className="mt-3 text-base leading-relaxed text-[#2C4759]">
              San Vicente te invita a descubrir su entorno natural, su historia y sus espacios
              recreativos. En esta sección podés encontrar información útil para organizar tu visita
              desde Buenos Aires y el Conurbano y conocer las propuestas del distrito.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="#sectores"
                className="inline-flex items-center gap-2 rounded-2xl bg-[#329FD8] px-5 py-3 text-xs font-bold text-[#072130] hover:bg-[#96D5F4] transition-colors whitespace-nowrap shrink-0"
              >
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Ir al mapa de sectores
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                href="#participacion"
                className="inline-flex items-center gap-2 rounded-2xl border-2 border-[#102A3A]/15 bg-[#F7FBFE] px-5 py-3 text-xs font-bold text-[#102A3A] hover:border-[#329FD8] transition-colors whitespace-nowrap shrink-0"
              >
                Consultar dudas
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </motion.a>
            </div>

            <div className="mt-6 flex justify-start">
              <GlidingLagoonSwan className="h-24 w-36 opacity-85" />
            </div>
          </div>

          {/* Right column: 6 Quick-Access Interactive Tabs */}
          <div className="relative lg:col-span-7">
            <PerchingBenteveo className="pointer-events-none -mb-5 ml-auto mr-6 hidden sm:block h-20 w-28 opacity-85" />
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              className="relative rounded-3xl border-2 border-[#96D5F4]/50 bg-[#F7FBFE] p-6 sm:p-8"
            >
              <p className="text-xs font-bold text-[#3A5568]">
                Accesos rápidos para organizar tu recorrido
              </p>

              <div
                role="tablist"
                aria-label="Guía rápida para visitantes"
                className="mt-3 grid grid-cols-2 gap-2 rounded-2xl liquid-glass-bar p-2 sm:grid-cols-3"
              >
                {VISIT_GUIDE_TOPICS.map((topic) => {
                  const isCurrent = topic.id === activeTopicId;
                  return (
                    <motion.button
                      key={topic.id}
                      role="tab"
                      type="button"
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.96 }}
                      aria-selected={isCurrent}
                      onClick={() => setActiveTopicId(topic.id)}
                      style={
                        isCurrent
                          ? { backgroundColor: activeTopic.accentHex, color: buttonInk }
                          : undefined
                      }
                      className={`rounded-2xl border px-3 py-2.5 text-xs font-bold transition-colors whitespace-nowrap shrink-0 ${
                        isCurrent
                          ? 'border-[#102A3A]/15 shadow-xs'
                          : 'border-[#102A3A]/10 bg-white text-[#2C4759] hover:border-[#329FD8]'
                      }`}
                    >
                      {topic.label}
                    </motion.button>
                  );
                })}
              </div>

              <motion.div
                key={activeTopic.id}
                role="tabpanel"
                initial={{ opacity: 0.85, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.24, ease: 'easeOut' }}
                className="mt-6 rounded-2xl border-2 bg-white p-6"
                style={{ borderColor: activeTopic.accentHex }}
              >
                <h3 className="font-display text-2xl font-bold text-[#102A3A]">
                  {activeTopic.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#2C4759]">
                  {activeTopic.summary}
                </p>

                <ul className="mt-5 space-y-2.5 border-t border-[#102A3A]/10 pt-4">
                  {activeTopic.details.map((detail, idx) => (
                    <motion.li
                      key={detail}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, delay: idx * 0.05 }}
                      className="flex items-start gap-2.5 text-sm leading-relaxed text-[#102A3A]"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#65A366]"
                        aria-hidden="true"
                      />
                      <span>{detail}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Location Map Card for "Cómo llegar" */}
        <motion.div
          id="mapa-ubicacion"
          initial={{ opacity: 0.9, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="mt-10 rounded-3xl border-2 border-[#329FD8]/40 bg-[#F7FBFE] p-6 sm:p-8"
        >
          <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#186E9E]">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Cómo llegar · Ubicación en el mapa
              </span>
              <h3 className="mt-2 font-display text-2xl font-bold text-[#102A3A]">
                Mapa de San Vicente y Laguna del Ojo
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#2C4759]">
                Ubicada junto al casco urbano de San Vicente, con acceso directo desde Ruta
                Provincial 58, Avenida Rivadavia y Avenida Juan Domingo Perón.
              </p>
              <p className="mt-2 text-xs font-semibold text-[#3A5568]">
                Referencia geográfica: Laguna de San Vicente · Partido de San Vicente, Provincia de
                Buenos Aires.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  href={GOOGLE_MAPS_LAGUNA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl bg-[#329FD8] px-5 py-3 text-xs font-bold text-[#072130] shadow-xs hover:bg-[#96D5F4] transition-colors whitespace-nowrap shrink-0"
                >
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  Abrir ubicación en Google Maps
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </motion.a>
              </div>
            </div>

            <div className="lg:col-span-7">
              <a
                href={GOOGLE_MAPS_LAGUNA_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir mapa de ubicación de Laguna San Vicente en Google Maps"
                className="group block overflow-hidden rounded-2xl border-2 border-[#96D5F4] bg-white shadow-xs transition-shadow hover:shadow-md"
              >
                <div className="aspect-16/9 w-full overflow-hidden bg-[#E8F6FD]">
                  <img
                    src={MAPA_SAN_VICENTE_SRC}
                    alt="Mapa de ubicación de San Vicente señalando la Laguna de San Vicente, Reserva Natural Municipal, Quinta de San Vicente, RP 58 y avenidas de acceso"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[#102A3A]/10 bg-white px-4 py-2.5 text-[11px] font-semibold text-[#3A5568]">
                  <span>Pin verde: Laguna de San Vicente · Av. Rivadavia y RP 58</span>
                  <span className="text-[#186E9E]">© OpenStreetMap contributors</span>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
