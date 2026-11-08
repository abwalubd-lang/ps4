import { useEffect, useRef, type KeyboardEvent } from 'react';
import { GENRES, type Game } from '../data';
import { useI18n } from '../i18n/LanguageContext';
import { GameCover } from './GameCover';
import { Icon } from './Icon';
import { TrophyPanel } from './TrophyPanel';

interface Props {
  game: Game | null;
  /** The currently visible results, for previous/next navigation. */
  list: Game[];
  onClose: () => void;
  onNavigate: (game: Game) => void;
}

export function GameDetailsModal({ game, list, onClose, onNavigate }: Props) {
  const { t, lang, dir } = useI18n();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const open = game !== null;

  // Open/close the native dialog (focus trapping, Escape and inert background come for free).
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  // Lock page scroll while open; the catalogue keeps its scroll position underneath.
  useEffect(() => {
    if (!open) return;
    const root = document.documentElement;
    root.classList.add('is-locked');
    return () => root.classList.remove('is-locked');
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 });
  }, [game?.id]);

  const index = game ? list.findIndex((g) => g.id === game.id) : -1;
  const prev = index > 0 ? list[index - 1] : null;
  const next = index >= 0 && index < list.length - 1 ? list[index + 1] : null;

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.target instanceof HTMLInputElement || e.target instanceof HTMLSelectElement) return;
    const forward = dir === 'rtl' ? 'ArrowLeft' : 'ArrowRight';
    const back = dir === 'rtl' ? 'ArrowRight' : 'ArrowLeft';
    if (e.key === forward && next) onNavigate(next);
    if (e.key === back && prev) onNavigate(prev);
  };

  const other = lang === 'ar' ? 'en' : 'ar';
  const otherDir = other === 'ar' ? 'rtl' : 'ltr';

  return (
    <dialog
      ref={dialogRef}
      className="modal"
      aria-labelledby="modal-title"
      aria-describedby="modal-synopsis"
      onClose={onClose}
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onKeyDown={onKeyDown}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      {game && (
        <div className="modal__panel">
          <button type="button" className="icon-btn modal__close" onClick={onClose} aria-label={t.close}>
            <Icon name="close" />
          </button>
          <div className="modal__scroll" ref={scrollRef}>
            <div className="modal__layout">
              <aside className="modal__media">
                <GameCover key={game.id} game={game} eager sizes="(min-width: 860px) 340px, 60vw" className="modal__cover" />
              </aside>

              <article className="modal__content">
                <p className="modal__genres">
                  {game.genres.map((g) => (
                    <span key={g} className="tag">
                      {GENRES[g][lang]}
                    </span>
                  ))}
                </p>
                <h2 id="modal-title" className="modal__title" lang={lang}>
                  {lang === 'ar' ? game.titleAr : game.titleEn}
                </h2>
                <p className="modal__alt-title" lang={other} dir={otherDir}>
                  {other === 'ar' ? game.titleAr : game.titleEn}
                </p>

                <dl className="facts">
                  <div className="facts__item">
                    <dt>{t.releaseYear}</dt>
                    <dd>{game.releaseYear}</dd>
                  </div>
                  <div className="facts__item">
                    <dt>{t.developer}</dt>
                    <dd dir="ltr">{game.developer}</dd>
                  </div>
                  {game.publisher && (
                    <div className="facts__item">
                      <dt>{t.publisher}</dt>
                      <dd dir="ltr">{game.publisher}</dd>
                    </div>
                  )}
                </dl>

                <section className="synopsis">
                  <h3 className="synopsis__label">{t.story}</h3>
                  <p id="modal-synopsis" className="synopsis__text" lang={lang}>
                    {lang === 'ar' ? game.synopsisAr : game.synopsisEn}
                  </p>
                </section>

                <TrophyPanel game={game} />

                <section className="synopsis synopsis--secondary" lang={other} dir={otherDir}>
                  <h3 className="synopsis__label" lang={lang} dir={dir}>
                    {t.otherLangSynopsis}
                  </h3>
                  <p className="synopsis__text">{other === 'ar' ? game.synopsisAr : game.synopsisEn}</p>
                </section>

                {game.note && (
                  <p className="modal__note">
                    <strong>{t.note}:</strong> {game.note[lang]}
                  </p>
                )}
              </article>
            </div>
          </div>

          <footer className="modal__foot">
            <button type="button" className="btn btn--ghost modal__back" onClick={onClose}>
              {t.backToCatalogue}
            </button>
            <div className="modal__pager">
              <button
                type="button"
                className="icon-btn"
                onClick={() => prev && onNavigate(prev)}
                disabled={!prev}
                aria-label={prev ? `${t.previous}: ${lang === 'ar' ? prev.titleAr : prev.titleEn}` : t.previous}
              >
                <Icon name="chevronStart" className="flip-rtl" />
              </button>
              <span className="modal__position">{index >= 0 ? t.position(index + 1, list.length) : ''}</span>
              <button
                type="button"
                className="icon-btn"
                onClick={() => next && onNavigate(next)}
                disabled={!next}
                aria-label={next ? `${t.next}: ${lang === 'ar' ? next.titleAr : next.titleEn}` : t.next}
              >
                <Icon name="chevronEnd" className="flip-rtl" />
              </button>
            </div>
          </footer>
        </div>
      )}
    </dialog>
  );
}
