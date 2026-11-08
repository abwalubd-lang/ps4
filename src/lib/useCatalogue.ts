import { useCallback, useEffect, useMemo, useState } from 'react';
import { GAMES, GENRES, type GenreKey } from '../data';
import { buildSearchIndex, matches } from './search';

export interface Filters {
  query: string;
  genre: GenreKey | null;
}

const INDEX = buildSearchIndex(GAMES);

export const ALL_GENRES = (Object.keys(GENRES) as GenreKey[]).filter((k) => GAMES.some((g) => g.genres.includes(k)));

function readFiltersFromUrl(): Filters {
  const p = new URLSearchParams(window.location.search);
  const genre = p.get('genre') as GenreKey | null;
  return { query: p.get('q') ?? '', genre: genre && genre in GENRES ? genre : null };
}

function writeFiltersToUrl(f: Filters) {
  const p = new URLSearchParams(window.location.search);
  if (f.query.trim()) p.set('q', f.query.trim());
  else p.delete('q');
  if (f.genre) p.set('genre', f.genre);
  else p.delete('genre');
  const qs = p.toString();
  try {
    window.history.replaceState(window.history.state, '', `${window.location.pathname}${qs ? `?${qs}` : ''}${window.location.hash}`);
  } catch {
    /* URL sync is optional (e.g. sandboxed frames) */
  }
}

/** Search + category over the catalogue, always in bundle order. */
export function useCatalogue() {
  const [filters, setFilters] = useState<Filters>(readFiltersFromUrl);

  useEffect(() => writeFiltersToUrl(filters), [filters]);

  const update = useCallback((patch: Partial<Filters>) => setFilters((f) => ({ ...f, ...patch })), []);
  const reset = useCallback(() => setFilters({ query: '', genre: null }), []);

  const results = useMemo(
    () =>
      INDEX.filter((e) => matches(e, filters.query) && (!filters.genre || e.game.genres.includes(filters.genre))).map(
        (e) => e.game,
      ),
    [filters.query, filters.genre],
  );

  return { filters, update, reset, results, total: GAMES.length };
}
