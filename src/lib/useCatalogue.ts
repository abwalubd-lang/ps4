import { useCallback, useEffect, useMemo, useState } from 'react';
import { GAMES, GENRES, type Game, type GenreKey } from '../data';
import { buildSearchIndex, matches } from './search';

export type SortKey = 'bundle' | 'az' | 'za' | 'newest' | 'oldest';
export const SORT_KEYS: SortKey[] = ['bundle', 'az', 'za', 'newest', 'oldest'];

export interface Filters {
  query: string;
  genre: GenreKey | null;
  year: number | null;
  letter: string | null;
  sort: SortKey;
}

const DEFAULT_FILTERS: Filters = { query: '', genre: null, year: null, letter: null, sort: 'bundle' };
const INDEX = buildSearchIndex(GAMES);

export const ALL_YEARS = [...new Set(GAMES.map((g) => g.releaseYear))].sort((a, b) => b - a);
export const ALL_GENRES = (Object.keys(GENRES) as GenreKey[]).filter((k) => GAMES.some((g) => g.genres.includes(k)));
export const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

export const letterOf = (game: Game) => {
  const first = game.titleEn.trim().charAt(0).toUpperCase();
  return /[A-Z]/.test(first) ? first : '#';
};

function readFiltersFromUrl(): Filters {
  const p = new URLSearchParams(window.location.search);
  const genre = p.get('genre') as GenreKey | null;
  const year = Number(p.get('year'));
  const letter = p.get('letter')?.toUpperCase() ?? null;
  const sort = p.get('sort') as SortKey | null;
  return {
    query: p.get('q') ?? '',
    genre: genre && genre in GENRES ? genre : null,
    year: ALL_YEARS.includes(year) ? year : null,
    letter: letter && LETTERS.includes(letter) ? letter : null,
    sort: sort && SORT_KEYS.includes(sort) ? sort : 'bundle',
  };
}

function writeFiltersToUrl(f: Filters) {
  const p = new URLSearchParams(window.location.search);
  const set = (key: string, value: string | null) => (value ? p.set(key, value) : p.delete(key));
  set('q', f.query.trim() || null);
  set('genre', f.genre);
  set('year', f.year ? String(f.year) : null);
  set('letter', f.letter);
  set('sort', f.sort === 'bundle' ? null : f.sort);
  const qs = p.toString();
  try {
    window.history.replaceState(window.history.state, '', `${window.location.pathname}${qs ? `?${qs}` : ''}${window.location.hash}`);
  } catch {
    /* URL sync is optional (e.g. sandboxed frames) */
  }
}

const byTitle = (a: Game, b: Game) => a.titleEn.localeCompare(b.titleEn, 'en', { sensitivity: 'base', numeric: true });

function sortGames(games: Game[], sort: SortKey): Game[] {
  const list = [...games];
  switch (sort) {
    case 'az':
      return list.sort(byTitle);
    case 'za':
      return list.sort((a, b) => byTitle(b, a));
    case 'newest':
      return list.sort((a, b) => b.releaseYear - a.releaseYear || byTitle(a, b));
    case 'oldest':
      return list.sort((a, b) => a.releaseYear - b.releaseYear || byTitle(a, b));
    default:
      return list.sort((a, b) => a.order - b.order);
  }
}

export function useCatalogue() {
  const [filters, setFilters] = useState<Filters>(readFiltersFromUrl);

  useEffect(() => writeFiltersToUrl(filters), [filters]);

  const update = useCallback((patch: Partial<Filters>) => setFilters((f) => ({ ...f, ...patch })), []);
  const reset = useCallback(() => setFilters((f) => ({ ...DEFAULT_FILTERS, sort: f.sort })), []);

  // Everything except the letter filter, so the index can show which letters still have results.
  const baseMatches = useMemo(
    () =>
      INDEX.filter(
        (entry) =>
          matches(entry, filters.query) &&
          (!filters.genre || entry.game.genres.includes(filters.genre)) &&
          (!filters.year || entry.game.releaseYear === filters.year),
      ).map((entry) => entry.game),
    [filters.query, filters.genre, filters.year],
  );

  const availableLetters = useMemo(() => new Set(baseMatches.map(letterOf)), [baseMatches]);

  const results = useMemo(() => {
    const filtered = filters.letter ? baseMatches.filter((g) => letterOf(g) === filters.letter) : baseMatches;
    return sortGames(filtered, filters.sort);
  }, [baseMatches, filters.letter, filters.sort]);

  const activeCount =
    (filters.query.trim() ? 1 : 0) + (filters.genre ? 1 : 0) + (filters.year ? 1 : 0) + (filters.letter ? 1 : 0);

  return { filters, update, reset, results, availableLetters, activeCount, total: GAMES.length };
}
