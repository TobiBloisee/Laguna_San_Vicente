import { motion } from 'motion/react';
import { CIRCULAR_LOGO_SRC, GOOGLE_MAPS_LAGUNA_URL } from '../data/districtContent';

export function Footer() {
  const footerLinks = [
    { href: '#proyecto', label: 'El Proyecto', hoverClass: 'hover:text-[#96D5F4]' },
    { href: '#objetivos', label: 'Objetivos', hoverClass: 'hover:text-[#8CBF75]' },
    { href: '#acciones', label: 'Acciones', hoverClass: 'hover:text-[#96D5F4]' },
    { href: '#sectores', label: 'Sectores', hoverClass: 'hover:text-[#F2C53D]' },
    { href: '#naturaleza', label: 'Naturaleza e Historia', hoverClass: 'hover:text-[#8CBF75]' },
    { href: '#visita', label: 'Planificá tu visita', hoverClass: 'hover:text-[#F2C53D]' },
    { href: '#testimonios', label: 'Voces', hoverClass: 'hover:text-[#96D5F4]' },
    { href: '#participacion', label: 'Participá', hoverClass: 'hover:text-[#8CBF75]' },
  ];

  return (
    <footer className="bg-[#124563] text-[#EAF6FD]">
      {/* Colorful 5-color top accent strip */}
      <div className="grid h-2 w-full grid-cols-5" aria-hidden="true">
        <div className="bg-[#96D5F4]" />
        <div className="bg-[#329FD8]" />
        <div className="bg-[#65A366]" />
        <div className="bg-[#8CBF75]" />
        <div className="bg-[#F2C53D]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="mx-auto max-w-[1200px] px-6 py-12"
      >
        <div className="flex flex-col justify-between gap-8 border-b border-white/15 pb-8 md:flex-row md:items-center">
          <div className="flex items-start gap-3.5">
            <img
              src={CIRCULAR_LOGO_SRC}
              alt="Logo circular de Distrito Laguna San Vicente"
              referrerPolicy="no-referrer"
              className="mt-0.5 h-11 w-11 rounded-full border border-white/80 bg-white p-0.5 object-contain shadow-xs shrink-0"
            />
            <div>
              <p className="font-display text-2xl font-bold text-white">
                Distrito Laguna San Vicente
              </p>
              <p className="mt-1.5 max-w-md text-sm text-[#CBE7F7]">
                Naturaleza, identidad y desarrollo en un mismo lugar. Un proyecto pensado para
                cuidar la laguna y disfrutar en comunidad.
              </p>
            </div>
          </div>

          <nav aria-label="Enlaces del pie de página" className="flex flex-wrap gap-6 text-sm font-semibold">
            {footerLinks.map((link) => (
              <motion.a
                key={link.href}
                whileHover={{ y: -2 }}
                href={link.href}
                className={`text-[#CBE7F7] transition-colors ${link.hoverClass}`}
              >
                {link.label}
              </motion.a>
            ))}
          </nav>
        </div>

        <div className="mt-6 flex flex-col justify-between gap-3 text-xs text-[#A5D1EA] sm:flex-row sm:items-center">
          <p>Instagram: @distritolaguna.sv · Facebook: distrito laguna | San Vicente</p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={GOOGLE_MAPS_LAGUNA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#96D5F4] underline underline-offset-4 hover:text-white transition-colors"
            >
              Ver ubicación en Google Maps
            </a>
            <span aria-hidden="true">·</span>
            <p>San Vicente · Provincia de Buenos Aires</p>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
