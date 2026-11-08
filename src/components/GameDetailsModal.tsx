import { useEffect, useRef } from 'react';
import type { Game } from '../data';
import { useI18n } from '../i18n/LanguageContext';
import { GameCover } from './GameCover';
import { Icon } from './Icon';

interface Props {
  game: Game | null;
  onClose: () => void;
}

/** Cover, name and story. Native <dialog>: focus trap, Escape and inert background built in. */
export function GameDetailsModal({ game, onClose }: Props) {
  const { t, lang } = useI18n();
  const ref = useRef<HTMLDialogElement>(null);
  const open = game !== null;

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    document.documentElement.classList.add('is-locked');
    return () => document.documentElement.classList.remove('is-locked');
  }, [open]);

  const other = lang === 'ar' ? 'en' : 'ar';

  return (
    <dialog
      ref={ref}
      className="sheet"
      aria-labelledby="sheet-title"
      aria-describedby="sheet-story"
      onClose={onClose}
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {game && (
        <div className="sheet__panel">
          <button type="button" className="sheet__close" onClick={onClose} aria-label={t.close}>
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
