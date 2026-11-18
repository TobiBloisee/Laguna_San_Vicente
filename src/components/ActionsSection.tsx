import { useState } from 'react';
import { motion } from 'motion/react';
import {
  AlertCircle,
  Ear,
  FileText,
  Megaphone,
  Sprout,
} from 'lucide-react';
import { MUNICIPAL_ACTIONS } from '../data/districtContent';
import {
  FlyingBirdsFlock,
  PeekingCarpinchoWave,
  SwayingReedsCorner,
} from './WildBotanicalDecor';

const ACTION_ICONS = {
  informar: FileText,
  escuchar: Ear,
  comunicar: Megaphone,
  concientizar: Sprout,
} as const;

export function ActionsSection() {
  const [selectedActionId, setSelectedActionId] = useState<string>(MUNICIPAL_ACTIONS[0].id);

  return (
    <section
      id="acciones"
      className="relative scroll-mt-20 overflow-hidden border-b border-[#96D5F4]/45 bg-[#F4FAFE] py-16 lg:py-22"
    >
      {/* Countryside local fauna & flora behind the text */}
      <FlyingBirdsFlock className="pointer-events-none absolute top-10 right-10 hidden md:block h-14 w-44 opacity-50" />
      <SwayingReedsCorner
        tone="blue"
        className="pointer-events-none absolute -bottom-3 left-2 hidden lg:block h-36 w-40 opacity-30"
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
            02 · Acciones y Diálogo Comunitario
          </p>
          <h2
            className="mt-2 font-display text-3xl font-bold leading-tight text-[#102A3A] sm:text-4xl"
            style={{ textWrap: 'balance' }}
          >
            Un proyecto que construimos entre todos
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#2C4759] sm:text-lg">
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
            transition={{ duration: 0.45, delay: 0.05, ease: 'easeOut' }}
            className="relative flex flex-col justify-between lg:col-span-5"
          >
            <div className="liquid-glass-panel rounded-3xl p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span
                  className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F2C53D] text-[#102A3A] shadow-xs"
                  aria-hidden="true"
                >
                  <AlertCircle className="h-5 w-5" />
                </span>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#7C5A05]">
                    Desafío territorial
                  </span>
                  <h3 className="font-display text-2xl font-bold text-[#102A3A]">
                    Problemática principal
                  </h3>
                </div>
              </div>

              <p className="mt-5 text-base leading-relaxed text-[#1E3A4C]">
                Distrito Laguna enfrenta el desafío de fortalecer la confianza entre el municipio y
                la comunidad. Las preocupaciones vecinales se relacionan con el impacto ambiental,
                la posible privatización del espacio público y la falta de información sobre el
                desarrollo del proyecto.
              </p>

              <div className="mt-6 rounded-2xl border border-[#96D5F4]/60 bg-white/85 p-4 text-xs font-semibold leading-relaxed text-[#186E9E]">
                Frente a estas inquietudes, el acceso claro a la información y la participación
                ciudadana son ejes centrales de cada etapa.
              </div>
            </div>

            <div className="mt-4 hidden lg:flex justify-end pr-4">
              <PeekingCarpinchoWave className="h-24 w-32 opacity-85" />
            </div>
          </motion.div>

          {/* Right: 4 Acciones municipales */}
          <motion.div
            initial={{ opacity: 0.9, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.45, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-7"
          >
            <div className="h-full rounded-3xl border-2 border-[#96D5F4]/55 bg-white p-6 sm:p-8 shadow-sm">
              <div className="flex flex-col gap-1 border-b border-[#102A3A]/10 pb-4">
                <h3 className="font-display text-2xl font-bold text-[#102A3A]">Acciones</h3>
                <p className="text-sm font-medium text-[#2C4759]">
                  Para abordar esta problemática, el municipio propone:
                </p>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {MUNICIPAL_ACTIONS.map((action, idx) => {
                  const Icon = ACTION_ICONS[action.id as keyof typeof ACTION_ICONS] ?? FileText;
                  const isSelected = action.id === selectedActionId;
                  return (
                    <motion.button
                      key={action.id}
                      type="button"
                      onClick={() => setSelectedActionId(action.id)}
                      aria-pressed={isSelected}
                      initial={{ opacity: 0.9, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.12 }}
                      transition={{ duration: 0.35, delay: idx * 0.05 }}
                      whileHover={{ y: -4, scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        backgroundColor: isSelected ? action.surfaceHex : '#F8FCFF',
                        borderColor: isSelected ? action.accentHex : 'rgba(16, 42, 58, 0.1)',
                      }}
                      className="flex flex-col items-start rounded-2xl border-2 p-5 text-left transition-all shadow-xs hover:shadow-sm"
                    >
                      <div className="flex w-full items-center justify-between gap-2">
                        <span
                          className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-[#0F2738]"
                          style={{ backgroundColor: action.accentHex }}
                          aria-hidden="true"
                        >
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#3A5568]">
                          0{idx + 1}
                        </span>
                      </div>
                      <h4 className="mt-4 font-display text-lg font-bold text-[#102A3A]">
                        {action.title}
                      </h4>
                      <p className="mt-1.5 text-sm leading-relaxed text-[#2C4759]">
                        {action.description}
                      </p>
                    </motion.button>
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
