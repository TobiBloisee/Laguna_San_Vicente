import test from 'node:test';
import assert from 'node:assert/strict';
import {
  filterGalleryItems,
  filterTestimonials,
  getAdjacentPhotoId,
  getContrastRatio,
  getNextTestimonialId,
  getRecommendedTextTone,
  validateCommunityInquiry,
} from './brandLogic';

const sampleItems = [
  { id: '1', category: 'naturaleza' as const, symbolKey: 'agua' as const },
  {
    id: '2',
    category: 'urbano' as const,
    categories: ['urbano' as const, 'sustentabilidad' as const],
    symbolKey: 'urbano' as const,
  },
  { id: '3', category: 'sustentabilidad' as const, symbolKey: 'hoja' as const },
  { id: '4', category: 'naturaleza' as const, symbolKey: 'sol' as const },
];

test('filterGalleryItems returns all items when category is todas and no symbol filter', () => {
  const res = filterGalleryItems(sampleItems, 'todas', null);
  assert.equal(res.length, 4);
});

test('filterGalleryItems filters by category, multi-categories, and optional symbolKey', () => {
  assert.deepEqual(
    filterGalleryItems(sampleItems, 'naturaleza', null).map((i) => i.id),
    ['1', '4']
  );
  assert.deepEqual(
    filterGalleryItems(sampleItems, 'sustentabilidad', null).map((i) => i.id),
    ['2', '3']
  );
  assert.deepEqual(
    filterGalleryItems(sampleItems, 'todas', 'hoja').map((i) => i.id),
    ['3']
  );
});

test('getAdjacentPhotoId wraps around cleanly in both directions', () => {
  assert.equal(getAdjacentPhotoId(sampleItems, '1', 'next'), '2');
  assert.equal(getAdjacentPhotoId(sampleItems, '4', 'next'), '1');
  assert.equal(getAdjacentPhotoId(sampleItems, '1', 'prev'), '4');
  assert.equal(getAdjacentPhotoId([], '1', 'next'), null);
});

test('validateCommunityInquiry enforces required fields and returns actionable errors', () => {
  const invalid = validateCommunityInquiry({
    name: 'A',
    neighborhood: '',
    topic: '',
    message: 'Hola',
  });
  assert.equal(invalid.valid, false);
  assert.ok(invalid.errors.name);
  assert.ok(invalid.errors.topic);
  assert.ok(invalid.errors.message);

  const valid = validateCommunityInquiry({
    name: 'Laura Gómez',
    neighborhood: 'Centro San Vicente',
    topic: 'Naturaleza y humedales',
    message: 'Quisiera conocer las fechas de las próximas jornadas de limpieza costera.',
  });
  assert.equal(valid.valid, true);
  assert.deepEqual(valid.errors, {});
});

test('getContrastRatio and getRecommendedTextTone pick accessible ink for palette hex colors', () => {
  assert.equal(getRecommendedTextTone('#96D5F4').inkHex, '#0F2738');
  assert.equal(getRecommendedTextTone('#F2C53D').inkHex, '#0F2738');
  assert.ok(getContrastRatio('#F2C53D', '#0F2738') >= 7);
});

test('filterTestimonials and getNextTestimonialId filter and cycle resident quotes cleanly', () => {
  const sampleQuotes = [
    { id: 'q1', theme: 'naturaleza' as const },
    { id: 'q2', theme: 'encuentro' as const },
    { id: 'q3', theme: 'identidad' as const },
  ];
  assert.equal(filterTestimonials(sampleQuotes, 'todos').length, 3);
  assert.deepEqual(
    filterTestimonials(sampleQuotes, 'encuentro').map((q) => q.id),
    ['q2']
  );
  assert.equal(getNextTestimonialId(sampleQuotes, 'q1', 'next'), 'q2');
  assert.equal(getNextTestimonialId(sampleQuotes, 'q3', 'next'), 'q1');
  assert.equal(getNextTestimonialId(sampleQuotes, 'q1', 'prev'), 'q3');
  assert.equal(getNextTestimonialId([], 'q1', 'next'), null);
});
