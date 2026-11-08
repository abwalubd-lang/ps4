import { useCallback, useEffect, useRef, useState, type AnimationEvent, type CSSProperties } from 'react';
import type { Game } from '../data';
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
  const panelWidth = Math.min(880, window.innerWidth - 64);
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
          <div className="sheet__body">
            <GameCover key={game.id} game={game} eager sizes="(min-width: 800px) 320px, 70vw" className="sheet__cover" />
            <div className="sheet__text">
              <h2 id="sheet-title" className="sheet__title" lang={lang}>
                {lang === 'ar' ? game.titleAr : game.titleEn}
              </h2>
              <p className="sheet__subtitle" lang={other} dir={other === 'ar' ? 'rtl' : 'ltr'}>
                {other === 'ar' ? game.titleAr : game.titleEn}
              </p>
              <p id="sheet-story" className="sheet__story" lang={lang}>
                {lang === 'ar' ? game.synopsisAr : game.synopsisEn}
              </p>
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
}
