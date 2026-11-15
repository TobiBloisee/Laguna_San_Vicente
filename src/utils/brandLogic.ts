export type GalleryCategory = 'todas' | 'naturaleza' | 'urbano' | 'sustentabilidad';
export type SymbolKey = 'agua' | 'urbano' | 'hoja' | 'sol';
export type SectorId = 'norte' | 'sur' | 'este' | 'oeste';
export type TestimonialTheme = 'todos' | 'naturaleza' | 'encuentro' | 'identidad';

export function filterTestimonials<T extends { theme: Exclude<TestimonialTheme, 'todos'> }>(
  items: readonly T[],
  theme: TestimonialTheme
): T[] {
  if (theme === 'todos') return [...items];
  return items.filter((item) => item.theme === theme);
}

export function getNextTestimonialId<T extends { id: string }>(
  items: readonly T[],
  currentId: string,
  direction: 'next' | 'prev'
): string | null {
  if (items.length === 0) return null;
  const idx = items.findIndex((item) => item.id === currentId);
  if (idx === -1) return items[0].id;
  if (direction === 'next') {
    return items[(idx + 1) % items.length].id;
  }
  return items[(idx - 1 + items.length) % items.length].id;
}

export interface GalleryItemMeta {
  id: string;
  figureNumber: string;
  title: string;
  category: Exclude<GalleryCategory, 'todas'>;
  categories?: Exclude<GalleryCategory, 'todas'>[];
  categoryLabel: string;
  symbolKey: SymbolKey;
  symbolLabel: string;
  location: string;
  caption: string;
  aspect: 'wide' | 'standard';
  imageSrc: string;
  imageAlt: string;
}

export function filterGalleryItems<
  T extends Pick<GalleryItemMeta, 'category' | 'categories' | 'symbolKey'>,
>(
  items: readonly T[],
  category: GalleryCategory,
  symbolFilter: SymbolKey | null = null
): T[] {
  return items.filter((item) => {
    const itemCategories = item.categories ?? [item.category];
    const matchesCategory = category === 'todas' || itemCategories.includes(category);
    const matchesSymbol = symbolFilter === null || item.symbolKey === symbolFilter;
    return matchesCategory && matchesSymbol;
  });
}

export function getAdjacentPhotoId<T extends Pick<GalleryItemMeta, 'id'>>(
  items: readonly T[],
  currentId: string,
  direction: 'next' | 'prev'
): string | null {
  if (items.length === 0) return null;
  const currentIndex = items.findIndex((item) => item.id === currentId);
  if (currentIndex === -1) return items[0].id;
  if (direction === 'next') {
    return items[(currentIndex + 1) % items.length].id;
  }
  return items[(currentIndex - 1 + items.length) % items.length].id;
}

export interface CommunityInquiryInput {
  name: string;
  neighborhood: string;
  topic: string;
  message: string;
}

export interface CommunityInquiryValidation {
  valid: boolean;
  errors: Partial<Record<keyof CommunityInquiryInput, string>>;
}

export function validateCommunityInquiry(
  input: CommunityInquiryInput
): CommunityInquiryValidation {
  const errors: Partial<Record<keyof CommunityInquiryInput, string>> = {};
  if (input.name.trim().length < 2) {
    errors.name = 'Ingresá tu nombre y apellido (mínimo 2 caracteres).';
  }
  if (input.topic.trim().length === 0) {
    errors.topic = 'Seleccioná un eje temático para tu consulta.';
  }
  if (input.message.trim().length < 10) {
    errors.message = 'Escribí tu consulta o sugerencia (mínimo 10 caracteres).';
  }
  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const clean = hex.replace('#', '').trim();
  if (!/^[0-9a-fA-F]{6}$/.test(clean)) {
    throw new Error(`Invalid hex color: ${hex}`);
  }
  return {
    r: parseInt(clean.slice(0, 2), 16),
    g: parseInt(clean.slice(2, 4), 16),
    b: parseInt(clean.slice(4, 6), 16),
  };
}

function relativeLuminance({ r, g, b }: { r: number; g: number; b: number }): number {
  const transform = (channel: number) => {
    const srgb = channel / 255;
    return srgb <= 0.03928 ? srgb / 12.92 : Math.pow((srgb + 0.055) / 1.055, 2.4);
  };
  return 0.2126 * transform(r) + 0.7152 * transform(g) + 0.0722 * transform(b);
}

export function getContrastRatio(hexA: string, hexB: string): number {
  const lumA = relativeLuminance(hexToRgb(hexA));
  const lumB = relativeLuminance(hexToRgb(hexB));
  const lighter = Math.max(lumA, lumB);
  const darker = Math.min(lumA, lumB);
  return Number(((lighter + 0.05) / (darker + 0.05)).toFixed(2));
}

export function getRecommendedTextTone(bgHex: string): {
  inkHex: '#0F2738' | '#FFFFFF';
  inkLabel: 'Texto oscuro (#0F2738)' | 'Texto blanco (#FFFFFF)';
  ratio: number;
} {
  const darkRatio = getContrastRatio(bgHex, '#0F2738');
  const whiteRatio = getContrastRatio(bgHex, '#FFFFFF');
  if (darkRatio >= whiteRatio) {
    return {
      inkHex: '#0F2738',
      inkLabel: 'Texto oscuro (#0F2738)',
      ratio: darkRatio,
    };
  }
  return {
    inkHex: '#FFFFFF',
    inkLabel: 'Texto blanco (#FFFFFF)',
    ratio: whiteRatio,
  };
}
