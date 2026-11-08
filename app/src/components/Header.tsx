import { forwardRef } from 'react';
import { BrandMark } from './BrandMark';
import { LanguageSwitcher } from './LanguageSwitcher';
import { SearchBar } from './SearchBar';

interface Props {
  query: string;
  onQueryChange: (query: string) => void;
}

/** Dark translucent bar (keeps the white logo legible): logo, search, language. */
export const Header = forwardRef<HTMLInputElement, Props>(function Header({ query, onQueryChange }, searchRef) {
  return (
    <header className="nav">
      <div className="container nav__inner">
        <a className="nav__brand" href="#top" aria-label="DPY · دبلوماسي بلس">
          <BrandMark />
        </a>
        <div className="nav__search">
          <SearchBar ref={searchRef} value={query} onChange={onQueryChange} />
        </div>
        <div className="nav__lang">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
});
