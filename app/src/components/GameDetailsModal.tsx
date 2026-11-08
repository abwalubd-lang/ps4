import { useCallback, useEffect, useRef, useState, type AnimationEvent, type CSSProperties } from 'react';
import { GENRES, type Game } from '../data';
import { coverSources } from '../lib/covers';
import { BundleBadge } from './BundleBadge';
import { useI18n } from '../i18n/LanguageContext';
import { GameCover } from './GameCover';
import { Icon } from './Icon';

interface Props {
  game: Game | null;
  /** Screen rect of the card that was tapped; the panel grows out of it and shrinks back into it. */
  origin: DOMRect | null;
  onClose: () => void;
}

const reducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Where the panel starts (relative to its centred resting place) so it appears to open from the card. */
function originVars(origin: DOMRect | null): CSSProperties {
  if (!origin || window.innerWidth < 800) return {};
  const panelWidth = Math.min(780, window.innerWidth - 48);
  return {
    '--from-x': `${origin.left + origin.width / 2 - window.innerWidth / 2}px`,
    '--from-y': `${origin.top + origin.height / 2 - window.innerHeight / 2}px`,
    '--from-s': String(Math.max(0.2, Math.min(0.6, origin.width / panelWidth))),
  } as CSSProperties;
}

/** Cover, name and story. Native <dialog>: focus trap, Escape and inert background built in. */
export function GameDetailsModal({ game, origin, onClose }: Props) {
  const { t, lang } = useI18n();
  const ref = useRef<HTMLDialogElement>(null);
  const [closing, setClosing] = useState(false);
  const open = game !== null;

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) {
      setClosing(false);
      dialog.showModal();
    }
    if (!open && dialog.open) dialog.close();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    document.documentElement.classList.add('is-locked');
    return () => document.documentElement.classList.remove('is-locked');
  }, [open]);

  // Play the closing animation first, then actually close.
  const requestClose = useCallback(() => {
    if (closing) return;
    if (reducedMotion()) onClose();
    else setClosing(true);
  }, [closing, onClose]);

  const onPanelAnimationEnd = (e: AnimationEvent) => {
    if (closing && e.target === e.currentTarget) {
      setClosing(false);
      onClose();
    }
  };

  const other = lang === 'ar' ? 'en' : 'ar';

  return (
    <dialog
      ref={ref}
      className={`sheet ${closing ? 'is-closing' : ''}`}
      aria-labelledby="sheet-title"
      aria-describedby="sheet-story"
      onClose={() => open && onClose()}
      onCancel={(e) => {
        e.preventDefault();
        requestClose();
      }}
      onClick={(e) => e.target === e.currentTarget && requestClose()}
    >
      {game && (
        <div className="sheet__panel" style={originVars(origin)} onAnimationEnd={onPanelAnimationEnd}>
          <button type="button" className="sheet__close" onClick={requestClose} aria-label={t.close}>
            <Icon name="close" size={18} />
          </button>

          {/* Header: the game's own artwork, blurred, sets the mood behind the cover and title. */}
          <header className="detail__hero">
            <img className="detail__ambient" src={coverSources(game)[0]?.src} alt="" aria-hidden="true" />
            <div className="detail__hero-inner">
              <GameCover key={game.id} game={game} eager sizes="(min-width: 800px) 220px, 46vw" className="detail__cover" />
              <div className="detail__heading">
                <h2 id="sheet-title" className="detail__title" lang={lang}>
                  {lang === 'ar' ? game.titleAr : game.titleEn}
                </h2>
                <p className="detail__subtitle" lang={other} dir={other === 'ar' ? 'rtl' : 'ltr'}>
                  {other === 'ar' ? game.titleAr : game.titleEn}
                </p>
                <ul className="detail__chips">
                  <li>
                    <BundleBadge />
                  </li>
                  <li className="detail__chip">{t.released(game.releaseYear)}</li>
                  {game.genres.slice(0, 2).map((g) => (
                    <li key={g} className="detail__chip">
                      {GENRES[g][lang]}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </header>

          <section className="detail__story">
            <h3 className="detail__label">{t.story}</h3>
            <p id="sheet-story" className="detail__text" lang={lang}>
              {lang === 'ar' ? game.synopsisAr : game.synopsisEn}
            </p>
          </section>
        </div>
      )}
    </dialog>
  );
}
