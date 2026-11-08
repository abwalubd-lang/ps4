import type { Bilingual, GenreKey } from './types';

export const GENRES: Record<GenreKey, Bilingual> = {
  action: { en: 'Action', ar: 'أكشن' },
  adventure: { en: 'Adventure', ar: 'مغامرة' },
  rpg: { en: 'RPG', ar: 'تقمّص أدوار' },
  shooter: { en: 'Shooter', ar: 'تصويب' },
  horror: { en: 'Horror', ar: 'رعب' },
  fighting: { en: 'Fighting', ar: 'قتال' },
  platformer: { en: 'Platformer', ar: 'منصّات' },
  racing: { en: 'Racing', ar: 'سباقات' },
  sports: { en: 'Sports', ar: 'رياضة' },
  survival: { en: 'Survival', ar: 'نجاة' },
  simulation: { en: 'Simulation', ar: 'محاكاة' },
  party: { en: 'Party', ar: 'جماعية' },
  'open-world': { en: 'Open World', ar: 'عالم مفتوح' },
  'battle-royale': { en: 'Battle Royale', ar: 'باتل رويال' },
  stealth: { en: 'Stealth', ar: 'تخفّي' },
};
