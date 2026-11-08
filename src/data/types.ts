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

/* ---------- PS4 trophy statistics ---------- */

export type VerificationStatus = 'verified' | 'partial' | 'unverified';

/** Counts for one trophy list. null means "not verified", never zero. */
export interface TrophyCounts {
  platinum: number | null;
  gold: number | null;
  silver: number | null;
  bronze: number | null;
  total: number | null;
}

export interface TrophySource {
  name: string;
  /** Direct URL of the exact PS4 trophy-list (or guide) page; null for data supplied by DPY without a link. */
  url: string | null;
  /** ISO date the page was inspected, e.g. "2026-10-25". */
  checked: string;
  /** What this source was used for. */
  covers: 'counts'[];
}

export interface TrophyResearch {
  ps4VersionIdentified: boolean;
  baseListFound: boolean;
  countsVerified: boolean;
  sourcesRecorded: boolean;
}

export interface TrophyStats {
  platform: 'PS4';
  /** Exact name of the PS4 trophy list, once identified. */
  listTitle: string | null;
  baseGame: TrophyCounts;
  dlc: { name: string; counts: TrophyCounts }[] | null;
  sources: TrophySource[];
  /** Second, independent source used to cross-check the counts. */
  corroboratingSources: TrophySource[];
  verificationStatus: VerificationStatus;
  research: TrophyResearch;
  /** Why data is missing, discrepancies, edition or availability notes. */
  notes: Bilingual;
  /** Open questions about which PS4 list applies. Never displayed as fact. */
  researchFlags: string[];
}
