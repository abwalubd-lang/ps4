import { forwardRef } from 'react';
import { useI18n } from '../i18n/LanguageContext';
import { Icon } from './Icon';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

export const SearchBar = forwardRef<HTMLInputElement, Props>(function SearchBar({ value, onChange }, ref) {
  const { t } = useI18n();
  return (
    <div className="search" role="search">
      <Icon name="search" className="search__icon" />
      <label htmlFor="game-search" className="visually-hidden">
        {t.searchLabel}
      </label>
      <input
        ref={ref}
        id="game-search"
        className="search__input"
        type="search"
        inputMode="search"
        autoComplete="off"
        spellCheck={false}
        dir="auto"
        placeholder={t.searchPlaceholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Escape' && value) {
            e.stopPropagation();
            onChange('');
          }
        }}
      />
      {value && (
        <button type="button" className="search__clear" onClick={() => onChange('')} aria-label={t.clearSearch}>
          <Icon name="close" size={16} />
        </button>
      )}
    </div>
  );
});
