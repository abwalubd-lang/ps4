import { useState, type CSSProperties } from 'react';
import type { Game } from '../data';
import { useI18n } from '../i18n/LanguageContext';
import { coverSources } from '../lib/covers';

interface Props {
  game: Game;
  sizes: string;
  eager?: boolean;
  className?: string;
}

function hueOf(id: string) {
  // Stay inside the poster's navy–blue range so placeholders read as one family.
  let h = 0;
  for (const ch of id) h = (h * 31 + ch.charCodeAt(0)) % 997;
  return 198 + (h % 34);
}

/** Tries each artwork source in turn; ends on a typographic cover so the grid never shows a broken image. */
export function GameCover({ game, sizes, eager = false, className = '' }: Props) {
  const { t, lang } = useI18n();
  const sources = coverSources(game);
  const [index, setIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const source = sources[index];
  const alt = t.coverAlt(lang === 'ar' ? game.titleAr : game.titleEn);

  if (!source) {
    return (
      <div
        className={`cover cover--placeholder ${className}`}
        style={{ '--hue': hueOf(game.id) } as CSSProperties}
        role="img"
        aria-label={alt}
      >
        <span className="cover__ph-brand">DPY</span>
        <span className="cover__ph-title" lang="en" dir="ltr">
          {game.titleEn}
        </span>
        <span className="cover__ph-year">{game.releaseYear}</span>
      </div>
    );
  }

  return (
    <div className={`cover cover--${source.fit} ${loaded ? 'is-loaded' : ''} ${className}`}>
      {source.fit === 'contain' && <img className="cover__backdrop" src={source.src} alt="" aria-hidden="true" />}
      <img
        key={source.src}
        className="cover__img"
        src={source.src}
        srcSet={source.srcSet}
        sizes={source.srcSet ? sizes : undefined}
        alt={alt}
        width={600}
        height={600}
        loading={eager ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => {
          setLoaded(false);
          setIndex((i) => i + 1);
        }}
      />
    </div>
  );
}
