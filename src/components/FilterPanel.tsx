import { GENRES, type GenreKey } from '../data';
import { useI18n } from '../i18n/LanguageContext';
import { ALL_GENRES, ALL_YEARS, SORT_KEYS, type Filters, type SortKey } from '../lib/useCatalogue';

interface Props {
  filters: Filters;
  update: (patch: Partial<Filters>) => void;
}

export function SortSelect({ filters, update }: Props) {
  const { t } = useI18n();
  const labels: Record<SortKey, string> = {
    bundle: t.sortBundle,
    az: t.sortAZ,
    za: t.sortZA,
    newest: t.sortNewest,
    oldest: t.sortOldest,
  };
  return (
    <div className="sort">
      <label className="visually-hidden" htmlFor="sort">
        {t.sort}
      </label>
      <select id="sort" className="select select--compact" value={filters.sort} onChange={(e) => update({ sort: e.target.value as SortKey })}>
        {SORT_KEYS.map((key) => (
          <option key={key} value={key}>
            {labels[key]}
          </option>
        ))}
      </select>
    </div>
  );
}

export function YearSelect({ filters, update }: Props) {
  const { t } = useI18n();
  return (
    <div className="field">
      <label className="field__label" htmlFor="year">
        {t.year}
      </label>
      <select
        id="year"
        className="select"
        value={filters.year ?? ''}
        onChange={(e) => update({ year: e.target.value ? Number(e.target.value) : null })}
      >
        <option value="">{t.allYears}</option>
        {ALL_YEARS.map((y) => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </select>
    </div>
  );
}

/** Single swipeable row of genre categories. */
export function GenreChips({ filters, update }: Props) {
  const { t, lang } = useI18n();
  const select = (genre: GenreKey | null) => update({ genre });

  return (
    <div className="chips" role="group" aria-label={t.genre}>
      <button type="button" className="chip" aria-pressed={!filters.genre} onClick={() => select(null)}>
        {t.allGenres}
      </button>
      {ALL_GENRES.map((key) => (
        <button
          key={key}
          type="button"
          className="chip"
          aria-pressed={filters.genre === key}
          onClick={() => select(filters.genre === key ? null : key)}
        >
          {GENRES[key][lang]}
        </button>
      ))}
    </div>
  );
}
