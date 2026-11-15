import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { CIRCULAR_LOGO_SRC } from '../data/districtContent';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: '#proyecto', label: 'El Proyecto' },
    { href: '#sectores', label: 'Sectores' },
    { href: '#naturaleza', label: 'Naturaleza e Historia' },
    { href: '#testimonios', label: 'Voces' },
    { href: '#participacion', label: 'Participá' },
  ];

  return (
    <header className="pointer-events-none sticky top-0 z-40 px-4 pt-3 pb-1 sm:px-6">
      <div className="pointer-events-auto mx-auto flex max-w-[1200px] items-center justify-between gap-6 rounded-2xl liquid-glass-bar px-5 py-2.5">
        {/* Zone 1: Circular Logo (left) + Wordmark */}
        <a
          href="#inicio"
          className="inline-flex items-center gap-2.5 font-display text-xl font-bold tracking-tight text-[#102A3A] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#329FD8]"
        >
          <img
            src={CIRCULAR_LOGO_SRC}
            alt="Logo de Distrito Laguna San Vicente"
            referrerPolicy="no-referrer"
            className="h-9 w-9 rounded-full border border-white/85 bg-white p-0.5 object-contain shadow-xs shrink-0"
          />
          <span>Distrito Laguna</span>
        </a>

        {/* Zone 2: 5 concise single-line nav links */}
        <nav aria-label="Navegación principal" className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-[#1E3A4C] hover:text-[#186E9E] hover:underline decoration-2 decoration-[#329FD8] underline-offset-4 transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#329FD8]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 primary action + mobile menu button */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="#visita"
            className="hidden sm:inline-flex items-center justify-center rounded-xl bg-[#329FD8]/90 px-4 py-2 text-xs font-bold text-[#072130] shadow-xs ring-1 ring-white/60 hover:bg-[#96D5F4] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#102A3A]"
          >
            Planificá tu visita
          </a>
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
            className="inline-flex lg:hidden items-center justify-center rounded-xl border border-white/75 bg-white/65 p-2 text-[#102A3A] hover:bg-white/90 transition-colors"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          aria-label="Navegación móvil"
          className="pointer-events-auto mx-auto mt-2 max-w-[1200px] rounded-2xl liquid-glass-panel px-6 py-4 lg:hidden"
        >
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-sm font-semibold text-[#102A3A] hover:text-[#329FD8]"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#visita"
                onClick={() => setMobileOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-xl bg-[#329FD8] px-4 py-2.5 text-sm font-bold text-[#072130]"
              >
                Planificá tu visita
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
