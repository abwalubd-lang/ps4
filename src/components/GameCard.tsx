import { memo } from 'react';
import type { Game } from '../data';
import { useI18n } from '../i18n/LanguageContext';
import { GameCover } from './GameCover';

interface Props {
  game: Game;
  eager: boolean;
  onOpen: (game: Game, trigger: HTMLElement) => void;
}

export const GameCard = memo(function GameCard({ game, eager, onOpen }: Props) {
  const { t, lang } = useI18n();
  const primary = lang === 'ar' ? game.titleAr : game.titleEn;
  const secondary = lang === 'ar' ? game.titleEn : game.titleAr;
  const secondaryLang = lang === 'ar' ? 'en' : 'ar';

  return (
    <li className="grid__item">
      <button
        type="button"
        className="card"
        onClick={(e) => onOpen(game, e.currentTarget)}
        aria-label={t.viewDetailsOf(primary)}
        aria-haspopup="dialog"
      >
        <span className="card__media">
          <GameCover
            game={game}
            eager={eager}
            sizes="(min-width: 1400px) 15vw, (min-width: 1024px) 20vw, (min-width: 640px) 30vw, 46vw"
          />
        </span>
        <span className="card__body">
          <span className="card__title" lang={lang}>
            {primary}
          </span>
          <span className="card__subtitle" lang={secondaryLang} dir={secondaryLang === 'ar' ? 'rtl' : 'ltr'}>
            {secondary}
          </span>
          <span className="card__meta">
            <span className="card__year">{game.releaseYear}</span>
            <span className="card__dot" aria-hidden="true" />
            <span className="card__dev" dir="ltr">
              {game.developer}
            </span>
          </span>
        </span>
      </button>
    </li>
  );
});
