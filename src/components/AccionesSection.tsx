import { motion } from 'motion/react';
import {
  AlertCircle,
  Ear,
  FileText,
  Leaf,
  Megaphone,
} from 'lucide-react';
import { FlyingBirdsFlock, SwayingReedsCorner } from './WildBotanicalDecor';

const ACTION_ITEMS = [
  {
    icon: FileText,
    title: 'Informar',
    description:
      'Comunicar de manera transparente las etapas del proyecto, las obras y los estudios ambientales.',
    bg: '#E8F6FD',
    iconBg: '#96D5F4',
    border: '#329FD8',
  },
  {
    icon: Ear,
    title: 'Escuchar',
    description:
      'Generar espacios de diálogo y participación con vecinos y organizaciones ambientales.',
    bg: '#EDF7E9',
    iconBg: '#8CBF75',
    border: '#65A366',
  },
  {
    icon: Megaphone,
    title: 'Comunicar',
    description:
      'Difundir novedades, avances y actividades mediante redes sociales y canales institucionales.',
    bg: '#FEF7DF',
    iconBg: '#F2C53D',
    border: '#E0AF22',
  },
  {
    icon: Leaf,
    title: 'Concientizar',
    description:
      'Promover el cuidado del humedal y la preservación del patrimonio natural.',
    bg: '#E3F3FC',
    iconBg: '#329FD8',
    border: '#186E9E',
  },
];

export function AccionesSection() {
  return (
    <section
      id="acciones"
      className="relative scroll-mt-20 overflow-hidden border-b border-[#329FD8]/30 bg-[#E8F6FD] py-16 lg:py-22"
    >
      <FlyingBirdsFlock className="pointer-events-none absolute top-10 right-10 hidden sm:block h-14 w-44 opacity-55" />
      <SwayingReedsCorner
        tone="blue"
        className="pointer-events-none absolute -bottom-3 right-2 hidden lg:block h-36 w-40 opacity-28"
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0.9, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <p className="text-sm font-bold text-[#186E9E]">
            02 · Desafíos y Acciones
          </p>
          <h2
            className="mt-2 font-display text-3xl font-bold leading-tight text-[#102A3A] sm:text-4xl"
            style={{ textWrap: 'balance' }}
          >
            Un proyecto que construimos entre todos
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#2C4759] sm:text-lg">
            Conocer los desafíos, informar y participar son pasos fundamentales para construir un
            futuro sostenible para nuestra laguna.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
          {/* Left: Problemática principal */}
          <motion.div
            initial={{ opacity: 0.9, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="lg:col-span-5"
          >
            <motion.div
              whileHover={{ y: -3 }}
              transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              className="flex h-full flex-col justify-between rounded-3xl border-2 border-[#F2C53D]/70 bg-[#FEF9E8] p-6 sm:p-8 shadow-sm"
            >
              <div>
                <div className="flex items-center gap-3">
                  <span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F2C53D] text-[#102A3A] shrink-0"
                    aria-hidden="true"
                  >
                    <AlertCircle className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-2xl font-bold text-[#102A3A]">
                    Problemática principal
                  </h3>
                </div>

                <p className="mt-5 text-base leading-relaxed text-[#2C4759]">
                  Distrito Laguna enfrenta el desafío de fortalecer la confianza entre el municipio
                  y la comunidad. Las preocupaciones vecinales se relacionan con el impacto
                  ambiental, la posible privatización del espacio público y la falta de información
                  sobre el desarrollo del proyecto.
                </p>
              </div>

              <div className="mt-6 rounded-2xl border border-[#F2C53D]/55 bg-white/85 p-4">
                <p className="text-xs font-bold leading-relaxed text-[#5C4304]">
                  Transparencia, acceso público y diálogo abierto como base para cada etapa junto a
                  San Vicente.
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Acciones */}
          <motion.div
            initial={{ opacity: 0.9, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: 0.06, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            <div className="h-full rounded-3xl border-2 border-[#96D5F4]/70 bg-white p-6 sm:p-8 shadow-sm">
              <div>
                <h3 className="font-display text-2xl font-bold text-[#102A3A]">
                  Acciones
                </h3>
                <p className="mt-1.5 text-sm font-semibold text-[#186E9E]">
                  Para abordar esta problemática, el municipio propone:
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {ACTION_ITEMS.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0.9, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{ duration: 0.35, delay: idx * 0.05 }}
                      whileHover={{ y: -4, scale: 1.01 }}
                      style={{
                        backgroundColor: item.bg,
                        borderColor: `${item.border}40`,
                      }}
                      className="rounded-2xl border p-5 transition-shadow hover:shadow-sm"
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="inline-flex h-9 w-9 items-center justify-center rounded-xl text-[#0F2738] shrink-0"
                          style={{ backgroundColor: item.iconBg }}
                          aria-hidden="true"
                        >
                          <Icon className="h-4 w-4" />
                        </span>
                        <h4 className="font-display text-lg font-bold text-[#102A3A]">
                          {item.title}
                        </h4>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-[#2C4759]">
                        {item.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
