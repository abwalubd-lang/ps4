import { forwardRef } from 'react';
import { useI18n } from '../i18n/LanguageContext';
import { BrandMark } from './BrandMark';
import { LanguageSwitcher } from './LanguageSwitcher';
import { SearchBar } from './SearchBar';

interface Props {
  query: string;
  onQueryChange: (query: string) => void;
}

/** Sticky header: brand, the catalogue search, and the language switch. */
export const Header = forwardRef<HTMLInputElement, Props>(function Header({ query, onQueryChange }, searchRef) {
  const { t } = useI18n();
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="site-header__brand" href="#top" aria-label="DPY · دبلوماسي بلس · Diplomatic Plus">
          <BrandMark />
        </a>
        <div className="site-header__search">
          <SearchBar ref={searchRef} value={query} onChange={onQueryChange} />
        </div>
        <div className="site-header__lang">
          <LanguageSwitcher />
        </div>
      </div>
      <span className="visually-hidden">{t.navCatalogue}</span>
    </header>
  );
});
