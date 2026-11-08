import { useEffect, useRef } from 'react';
import { useI18n } from '../i18n/LanguageContext';
import type { Filters } from '../lib/useCatalogue';
import { YearSelect } from './FilterPanel';
import { Icon } from './Icon';
import { LetterIndex } from './LetterIndex';

interface Props {
  open: boolean;
  onClose: () => void;
  filters: Filters;
  update: (patch: Partial<Filters>) => void;
  availableLetters: Set<string>;
  resultCount: number;
}

/** Secondary filters (year, first letter). Bottom sheet on phones, centred panel on wider screens. */
export function FilterSheet({ open, onClose, filters, update, availableLetters, resultCount }: Props) {
  const { t } = useI18n();
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      className="sheet"
      aria-labelledby="filter-sheet-title"
      onClose={onClose}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="sheet__panel">
        <div className="sheet__head">
          <h2 id="filter-sheet-title" className="sheet__title">
            {t.filters}
          </h2>
          <button type="button" className="icon-btn" onClick={onClose} aria-label={t.close}>
            <Icon name="close" />
          </button>
        </div>
        <div className="sheet__body">
          <YearSelect filters={filters} update={update} />
          <LetterIndex active={filters.letter} available={availableLetters} onSelect={(letter) => update({ letter })} />
        </div>
        <div className="sheet__foot">
          <button type="button" className="btn btn--ghost" onClick={() => update({ year: null, letter: null })}>
            {t.resetAll}
          </button>
          <button type="button" className="btn btn--primary" onClick={onClose}>
            {t.showResults(resultCount)}
          </button>
        </div>
      </div>
    </dialog>
  );
}
