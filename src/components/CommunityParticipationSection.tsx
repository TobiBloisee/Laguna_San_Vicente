import { useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ChevronDown, MessageSquarePlus, Newspaper, Send } from 'lucide-react';
import { COMMUNITY_FAQS, NEWS_UPDATES } from '../data/districtContent';
import { validateCommunityInquiry } from '../utils/brandLogic';
import {
  FlyingBirdsFlock,
  PeekingCarpinchoWave,
  SwayingReedsCorner,
} from './WildBotanicalDecor';

interface SubmittedInquiry {
  id: string;
  name: string;
  neighborhood: string;
  topic: string;
  message: string;
}

const INQUIRY_TOPICS = [
  'Naturaleza y humedales',
  'Propuesta de los cuatro sectores',
  'Transparencia y estudios ambientales',
  'Actividades recreativas y turismo',
  'Reuniones y participación vecinal',
];

export function CommunityParticipationSection() {
  const [name, setName] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [topic, setTopic] = useState(INQUIRY_TOPICS[0]);
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedList, setSubmittedList] = useState<SubmittedInquiry[]>([]);
  const [openFaqId, setOpenFaqId] = useState<string | null>(COMMUNITY_FAQS[0].id);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const result = validateCommunityInquiry({ name, neighborhood, topic, message });
    if (!result.valid) {
      setErrors(result.errors as Record<string, string>);
      return;
    }

    setErrors({});
    const entry: SubmittedInquiry = {
      id: `${Date.now()}`,
      name: name.trim(),
      neighborhood: neighborhood.trim() || 'San Vicente',
      topic,
      message: message.trim(),
    };
    setSubmittedList((prev) => [entry, ...prev]);
    setName('');
    setNeighborhood('');
    setMessage('');
  };

  return (
    <section
      id="participacion"
      className="relative scroll-mt-20 overflow-hidden border-b border-[#F2C53D]/40 bg-[#FEF9E8] py-16 lg:py-22"
    >
      {/* Birds in sky and swaying golden totoras */}
      <FlyingBirdsFlock className="pointer-events-none absolute top-12 right-12 h-16 w-44 opacity-55" />
      <SwayingReedsCorner
        tone="gold"
        className="pointer-events-none absolute -bottom-3 right-2 hidden lg:block h-36 w-40 opacity-35"
      />
      <div className="relative z-10 mx-auto max-w-[1200px] px-6">
        {/* PDF Section G Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <p className="text-sm font-bold text-[#7C5A05]">
            08 · Comunidad y Participación
          </p>
          <h2
            className="mt-2 font-display text-3xl font-bold leading-tight text-[#102A3A] sm:text-4xl"
            style={{ textWrap: 'balance' }}
          >
            Distrito Laguna también lo construimos entre todos
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#2C4759]">
            La transformación de un espacio tan importante para San Vicente requiere del compromiso
            y la participación de toda la comunidad. Queremos que los vecinos sean parte de este
            proceso, conozcan las propuestas, puedan informarse y expresar sus opiniones.
          </p>
          <p className="mt-2 text-base font-bold text-[#102A3A]">
            Tu participación es importante para construir un distrito que respete su identidad,
            proteja su patrimonio natural y genere nuevas oportunidades para todos.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.55, delay: 0.08, ease: 'easeOut' }}
          className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12"
        >
          {/* Left: Consultation & Suggestion Form + Submitted List */}
          <div className="lg:col-span-6">
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              className="rounded-3xl border-2 border-[#F2C53D]/60 bg-white p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span
                  className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[#F2C53D] text-[#102A3A]"
                  aria-hidden="true"
                >
                  <MessageSquarePlus className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-[#102A3A]">
                    Consultas y sugerencias vecinales
                  </h3>
                  <p className="text-xs font-medium text-[#3A5568]">
                    Canal abierto para vecinos, organizaciones ambientales y visitantes
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="inquiry-name"
                      className="block text-xs font-bold text-[#102A3A]"
                    >
                      Nombre y apellido *
                    </label>
                    <input
                      id="inquiry-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ej. María Fernández"
                      className="mt-1.5 w-full rounded-xl border border-[#102A3A]/15 bg-[#F7FBFE] px-3.5 py-2.5 text-sm text-[#102A3A] focus:border-[#329FD8] focus:outline-none"
                    />
                    {errors.name && (
                      <p role="alert" className="mt-1 text-xs font-semibold text-[#B42318]">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="inquiry-neighborhood"
                      className="block text-xs font-bold text-[#102A3A]"
                    >
                      Barrio / Localidad
                    </label>
                    <input
                      id="inquiry-neighborhood"
                      type="text"
                      value={neighborhood}
                      onChange={(e) => setNeighborhood(e.target.value)}
                      placeholder="Ej. San Vicente Centro"
                      className="mt-1.5 w-full rounded-xl border border-[#102A3A]/15 bg-[#F7FBFE] px-3.5 py-2.5 text-sm text-[#102A3A] focus:border-[#329FD8] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="inquiry-topic"
                    className="block text-xs font-bold text-[#102A3A]"
                  >
                    Eje temático *
                  </label>
                  <select
                    id="inquiry-topic"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    className="mt-1.5 w-full rounded-xl border border-[#102A3A]/15 bg-[#F7FBFE] px-3.5 py-2.5 text-sm text-[#102A3A] focus:border-[#329FD8] focus:outline-none"
                  >
                    {INQUIRY_TOPICS.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  {errors.topic && (
                    <p role="alert" className="mt-1 text-xs font-semibold text-[#B42318]">
                      {errors.topic}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="inquiry-message"
                    className="block text-xs font-bold text-[#102A3A]"
                  >
                    Tu consulta u opinión *
                  </label>
                  <textarea
                    id="inquiry-message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Compartí tu aporte sobre conservación ambiental, accesos o propuestas..."
                    className="mt-1.5 w-full rounded-xl border border-[#102A3A]/15 bg-[#F7FBFE] px-3.5 py-2.5 text-sm text-[#102A3A] focus:border-[#329FD8] focus:outline-none"
                  />
                  {errors.message && (
                    <p role="alert" className="mt-1 text-xs font-semibold text-[#B42318]">
                      {errors.message}
                    </p>
                  )}
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#65A366] px-5 py-3 text-sm font-bold text-white hover:bg-[#528953] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#102A3A]"
                >
                  <Send className="h-4 w-4" aria-hidden="true" />
                  Enviar consulta o sugerencia
                </motion.button>
              </form>

              {submittedList.length > 0 && (
                <div className="mt-6 border-t border-[#102A3A]/10 pt-5">
                  <p className="text-xs font-bold text-[#2E6B30]">
                    Aportes registrados en esta sesión ({submittedList.length})
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {submittedList.map((item) => (
                      <li
                        key={item.id}
                        className="rounded-2xl border border-[#8CBF75]/45 bg-[#EDF7E9] p-3.5 text-xs"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-1 font-bold text-[#102A3A]">
                          <span>
                            {item.name} · {item.neighborhood}
                          </span>
                          <span className="text-[#2E6B30]">{item.topic}</span>
                        </div>
                        <p className="mt-1 leading-relaxed text-[#2C4759]">{item.message}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          </div>

          {/* Right: Preguntas Frecuentes + Novedades & Social Channels */}
          <div className="relative flex flex-col gap-6 lg:col-span-6">
            {/* Waving Carpincho peeking up right behind the FAQ card! */}
            <PeekingCarpinchoWave className="pointer-events-none absolute -top-24 right-6 z-0 h-28 w-36 opacity-90" />
            {/* FAQ Accordion */}
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              className="relative z-10 rounded-3xl border-2 border-[#96D5F4]/50 bg-white p-6 sm:p-7 shadow-sm"
            >
              <h3 className="font-display text-xl font-bold text-[#102A3A]">
                Preguntas frecuentes
              </h3>
              <div className="mt-4 divide-y divide-[#102A3A]/10">
                {COMMUNITY_FAQS.map((faq) => {
                  const isOpen = openFaqId === faq.id;
                  return (
                    <div key={faq.id} className="py-3">
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                        className="flex w-full items-center justify-between gap-4 py-1 text-left text-sm font-bold text-[#102A3A] hover:text-[#186E9E] transition-colors"
                      >
                        <span>{faq.question}</span>
                        <ChevronDown
                          className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180 text-[#329FD8]' : 'text-[#3A5568]'
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            key="answer"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.22, ease: 'easeOut' }}
                            className="overflow-hidden"
                          >
                            <p className="mt-2 text-sm leading-relaxed text-[#2C4759]">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* PDF Section H: Novedades y contacto */}
            <motion.div
              whileHover={{ y: -2 }}
              transition={{ type: 'spring', stiffness: 260, damping: 24 }}
              className="relative rounded-3xl border-2 border-[#329FD8]/40 bg-white p-6 sm:p-7 shadow-sm"
            >
              <div className="flex items-center gap-2.5">
                <Newspaper className="h-5 w-5 text-[#329FD8]" aria-hidden="true" />
                <h3 className="font-display text-xl font-bold text-[#102A3A]">
                  Novedades, transparencia y canales
                </h3>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {NEWS_UPDATES.map((news, idx) => (
                  <motion.div
                    key={news.id}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.35, delay: idx * 0.06 }}
                    whileHover={{ y: -3, scale: 1.01 }}
                    className="rounded-2xl border border-[#102A3A]/10 bg-[#F7FBFE] p-4 transition-shadow hover:shadow-xs"
                  >
                    <div className="flex items-center gap-2 text-xs font-bold text-[#186E9E]">
                      <span
                        className="h-2.5 w-2.5 rounded-full shrink-0"
                        style={{ backgroundColor: news.accentHex }}
                        aria-hidden="true"
                      />
                      <span>{news.category}</span>
                    </div>
                    <h4 className="mt-1.5 font-display text-sm font-bold text-[#102A3A]">
                      {news.title}
                    </h4>
                    <p className="mt-1 text-xs leading-relaxed text-[#3A5568]">{news.summary}</p>
                  </motion.div>
                ))}
              </div>

              {/* Official Social Channels from PDF */}
              <motion.div
                whileHover={{ y: -2 }}
                className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-[#E8F6FD] p-4 border border-[#96D5F4]"
              >
                <div>
                  <p className="text-xs font-bold text-[#102A3A]">
                    Seguí las novedades del proyecto en redes
                  </p>
                  <p className="mt-0.5 text-xs text-[#2C4759]">
                    Instagram: <strong>@distritolaguna.sv</strong> · Facebook:{' '}
                    <strong>distrito laguna | San Vicente</strong>
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
