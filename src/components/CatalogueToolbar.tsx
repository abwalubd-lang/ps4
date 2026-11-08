import { useState } from 'react';
import trophyIcon from '../assets/trophy-platinum-96.webp';
import { GENRES } from '../data';
import { useI18n } from '../i18n/LanguageContext';
import type { Filters } from '../lib/useCatalogue';
import { FilterSheet } from './FilterSheet';
import { GenreChips, SortSelect } from './FilterPanel';
import { Icon } from './Icon';

interface Props {
  filters: Filters;
  update: (patch: Partial<Filters>) => void;
  reset: () => void;
  availableLetters: Set<string>;
  activeCount: number;
  resultCount: number;
  total: number;
}

export function CatalogueToolbar({ filters, update, reset, availableLetters, activeCount, resultCount, total }: Props) {
  const { t, lang } = useI18n();
  const [sheetOpen, setSheetOpen] = useState(false);
  const sheetCount = (filters.year ? 1 : 0) + (filters.letter ? 1 : 0);

  // Removable pills for every active filter, so the current view is always explained.
  const active: { key: string; label: string; clear: () => void }[] = [];
  if (filters.query.trim()) active.push({ key: 'q', label: `“${filters.query.trim()}”`, clear: () => update({ query: '' }) });
  if (filters.genre) active.push({ key: 'g', label: GENRES[filters.genre][lang], clear: () => update({ genre: null }) });
  if (filters.year) active.push({ key: 'y', label: String(filters.year), clear: () => update({ year: null }) });
  if (filters.letter) active.push({ key: 'l', label: filters.letter, clear: () => update({ letter: null }) });

  return (
    <div className="toolbar">
      <div className="toolbar__top">
        <div className="toolbar__heading">
          <h2 id="catalogue-title" className="toolbar__title">
            <img className="toolbar__trophy" src={trophyIcon} alt="" width={24} height={24} />
            {t.catalogueTitle}
          </h2>
          <p className="toolbar__count" aria-live="polite" aria-atomic="true">
            {activeCount ? t.showing(resultCount, total) : t.catalogueCount(total)}
          </p>
        </div>
        <div className="toolbar__controls">
          <SortSelect filters={filters} update={update} />
          <button type="button" className="btn btn--outline toolbar__filters" onClick={() => setSheetOpen(true)} aria-haspopup="dialog">
            <Icon name="sliders" size={17} />
            <span>{t.filters}</span>
            {sheetCount > 0 && <span className="badge">{sheetCount}</span>}
          </button>
        </div>
      </div>

      <GenreChips filters={filters} update={update} />

      {active.length > 0 && (
        <div className="active-filters">
          {active.map((f) => (
            <button key={f.key} type="button" className="pill" onClick={f.clear} aria-label={`${t.clearFilter}: ${f.label}`}>
              <span dir="auto">{f.label}</span>
              <Icon name="close" size={13} />
            </button>
          ))}
          {active.length > 1 && (
            <button type="button" className="link-btn" onClick={reset}>
              {t.resetAll}
            </button>
          )}
        </div>
      )}

      <FilterSheet
        open={sheetOpen}
        onClose={() => setSheetOpen(false)}
        filters={filters}
        update={update}
        availableLetters={availableLetters}
        resultCount={resultCount}
      />
    </div>
  );
}
