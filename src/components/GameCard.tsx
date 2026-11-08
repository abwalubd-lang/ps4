import { memo, type CSSProperties } from 'react';
import type { Game } from '../data';
import { useI18n } from '../i18n/LanguageContext';
import { useReveal } from '../lib/useReveal';
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

  return (
    <li ref={ref} className="grid__item reveal" style={{ '--i': index % 4 } as CSSProperties}>
      <button
        type="button"
        className="card"
        onClick={(e) => onOpen(game, e.currentTarget)}
        aria-label={t.viewDetailsOf(title)}
        aria-haspopup="dialog"
      >
        <GameCover
          game={game}
          eager={eager}
          sizes="(min-width: 1100px) 260px, (min-width: 700px) 30vw, 45vw"
          className="card__cover"
        />
        <span className="card__title" lang={lang}>
          {title}
        </span>
      </button>
    </li>
  );
});
