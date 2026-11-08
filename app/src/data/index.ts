import { gamesPart1 } from './games-1';
import { gamesPart2 } from './games-2';
import { gamesPart3 } from './games-3';
import { gamesPart4 } from './games-4';
import type { Game } from './types';

/** The full catalogue, in the order supplied for the bundle. */
export const GAMES: Game[] = [...gamesPart1, ...gamesPart2, ...gamesPart3, ...gamesPart4].sort(
  (a, b) => a.order - b.order,
);

export { GENRES } from './genres';
export type { Game, GenreKey, Bilingual } from './types';
