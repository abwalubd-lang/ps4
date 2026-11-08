export type GenreKey =
  | 'action'
  | 'adventure'
  | 'rpg'
  | 'shooter'
  | 'horror'
  | 'fighting'
  | 'platformer'
  | 'racing'
  | 'sports'
  | 'survival'
  | 'simulation'
  | 'party'
  | 'open-world'
  | 'battle-royale'
  | 'stealth';

export interface Bilingual {
  en: string;
  ar: string;
}

export interface Game {
  /** Stable, URL-safe identifier. */
  id: string;
  /** Position in the supplied bundle list (1–100). */
  order: number;
  titleEn: string;
  titleAr: string;
  /** Original release year of the exact edition listed. */
  releaseYear: number;
  developer: string;
  publisher?: string;
  genres: GenreKey[];
  synopsisEn: string;
  synopsisAr: string;
  /**
   * Explicit cover path or URL. Takes priority over `steamAppId`.
   * Drop a file in /public/covers and set e.g. "covers/bloodborne.webp".
   */
  coverImage?: string;
  /** Steam app ID used to resolve official store artwork when no coverImage is set. */
  steamAppId?: number;
  /** Clarifies edition, release history or artwork source. */
  note?: Bilingual;
  /** Extra search terms: common abbreviations and colloquial Arabic names. */
  aliases?: string[];
}
