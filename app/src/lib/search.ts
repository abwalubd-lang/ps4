import type { Game } from '../data/types';

const ROMAN: Record<string, string> = {
  ii: '2', iii: '3', iv: '4', v: '5', vi: '6', vii: '7', x: '10', xiv: '14', xv: '15',
};

/**
 * Folds text into a forgiving search form:
 * - case and Latin diacritics removed (Ragnarök → ragnarok)
 * - Arabic tashkeel/tatweel removed, alef/yaa/taa-marbuta variants unified
 * - ق / غ / ج / گ treated alike, since game names are transliterated all three ways
 * - Arabic-Indic digits and Roman numerals mapped to 0–9 (Black Ops III → black ops 3)
 */
export function normalize(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[ً-ٰٟـ]/g, '')
    .replace(/[أإآٱ]/g, 'ا')
    .replace(/ة/g, 'ه')
    .replace(/[ىئ]/g, 'ي')
    .replace(/ؤ/g, 'و')
    .replace(/[غجگ]/g, 'ق')
    .replace(/[٠-٩]/g, (d) => String(d.charCodeAt(0) - 0x0660))
    .replace(/[’'`]/g, '')
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .split(' ')
    .filter(Boolean)
    .map((word) => ROMAN[word] ?? word)
    .join(' ');
}

export interface SearchEntry {
  game: Game;
  text: string;
  compact: string;
}

export function buildSearchIndex(games: Game[]): SearchEntry[] {
  return games.map((game) => {
    const text = normalize([game.titleEn, game.titleAr, ...(game.aliases ?? [])].join(' | '));
    return { game, text, compact: text.replace(/ /g, '') };
  });
}

/** Every query word must appear somewhere in the titles/aliases; spacing is optional ("blackops"). */
export function matches(entry: SearchEntry, query: string): boolean {
  const q = normalize(query);
  if (!q) return true;
  if (q.split(' ').every((token) => entry.text.includes(token))) return true;
  return entry.compact.includes(q.replace(/ /g, ''));
}
