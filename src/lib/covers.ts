import type { Game } from '../data/types';

export interface CoverSource {
  src: string;
  srcSet?: string;
  /** Landscape store headers are letterboxed instead of cropped. */
  fit: 'cover' | 'contain';
}

const STEAM_CDN = 'https://shared.akamai.steamstatic.com/store_item_assets/steam/apps';

/**
 * Ordered list of artwork candidates. The <GameCover> component walks the list on
 * load errors and ends on a typographic placeholder, so no single host is required.
 */
export function coverSources(game: Game): CoverSource[] {
  const sources: CoverSource[] = [];
  if (game.coverImage) sources.push({ src: game.coverImage, fit: 'cover' });
  if (game.steamAppId) {
    const base = `${STEAM_CDN}/${game.steamAppId}`;
    sources.push({
      src: `${base}/library_600x900.jpg`,
      srcSet: `${base}/library_600x900.jpg 600w, ${base}/library_600x900_2x.jpg 1200w`,
      fit: 'cover',
    });
    sources.push({ src: `${base}/header.jpg`, fit: 'contain' });
  }
  return sources;
}
