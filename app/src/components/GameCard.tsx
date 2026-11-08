import { memo, type CSSProperties } from 'react';
import { GENRES, type Game } from '../data';
import { useI18n } from '../i18n/LanguageContext';
import { useReveal } from '../lib/useReveal';
import { BundleBadge } from './BundleBadge';
import { GameCover } from './GameCover';

interface Props {
  game: Game;
  index: number;
  eager: boolean;
  onOpen: (game: Game, trigger: HTMLElement) => void;
}

export const GameCard = memo(function GameCard({ game, index, eager, onOpen }: Props) {
  const { t, lang } = useI18n();
  const ref = useReveal<HTMLLIElement>();
  const title = lang === 'ar' ? game.titleAr : game.titleEn;
  const genre = GENRES[game.genres[0]][lang];

  return (
    <li ref={ref} className="grid__item reveal" style={{ '--i': index % 4 } as CSSProperties}>
      <button
        type="button"
        className="card"
        onClick={(e) => onOpen(game, e.currentTarget)}
        aria-label={`${t.viewDetailsOf(title)} · ${t.released(game.releaseYear)} · ${t.inBundle}`}
        aria-haspopup="dialog"
      >
        <span className="card__media">
          <GameCover
            game={game}
            eager={eager}
            sizes="(min-width: 1100px) 260px, (min-width: 700px) 30vw, 45vw"
            className="card__cover"
          />
        </span>
        <span className="card__body">
          <span className="card__title" lang={lang} title={title}>
            {title}
          </span>
          <span className="card__meta">
            <svg className="card__icon" viewBox="0 0 16 16" width="13" height="13" aria-hidden="true">
              <rect x="2" y="3" width="12" height="11" rx="2" />
              <path d="M2 6.5h12M5.5 1.5v3M10.5 1.5v3" />
            </svg>
            <span className="card__year">{game.releaseYear}</span>
            <span className="card__sep" aria-hidden="true" />
            <span className="card__genre">{genre}</span>
          </span>
        </span>
        <span className="card__foot">
          <BundleBadge variant="plain" />
        </span>
      </button>
    </li>
  );
});
