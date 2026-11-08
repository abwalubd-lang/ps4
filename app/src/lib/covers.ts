import { LOCAL_COVERS } from '../data/localCovers';
import type { Game } from '../data/types';

export interface CoverSource {
  src: string;
  srcSet?: string;
  /** Non-square fallbacks are letterboxed instead of cropped. */
  fit: 'cover' | 'contain';
}

const STEAM_CDN = 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps';

/**
 * Ordered list of artwork candidates: an explicit coverImage, the square DPY cover in
 * public/covers, then Steam store art as a last resort. The <GameCover> component walks the list on
 * load errors and ends on a typographic placeholder, so no single host is required.
 */
export function coverSources(game: Game): CoverSource[] {
  const sources: CoverSource[] = [];
  if (game.coverImage) sources.push({ src: game.coverImage, fit: 'cover' });
  if (LOCAL_COVERS.has(game.id)) sources.push({ src: `${import.meta.env.BASE_URL}covers/${game.id}.webp`, fit: 'cover' });
  if (game.steamAppId) {
    const base = `${STEAM_CDN}/${game.steamAppId}`;
    sources.push({ src: `${base}/library_600x900.jpg`, fit: 'contain' });
    sources.push({ src: `${base}/header.jpg`, fit: 'contain' });
  }
  return sources;
}
