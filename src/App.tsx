import { useCallback, useEffect, useRef, useState } from 'react';
import { EmptyState } from './components/EmptyState';
import { Footer } from './components/Footer';
import { GameDetailsModal } from './components/GameDetailsModal';
import { GameGrid } from './components/GameGrid';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { SplashScreen } from './components/SplashScreen';
import { GAMES, GENRES, type Game } from './data';
import { useI18n } from './i18n/LanguageContext';
import { ALL_GENRES, useCatalogue } from './lib/useCatalogue';

function readGameFromUrl(): Game | null {
  const id = new URLSearchParams(window.location.search).get('game');
  return GAMES.find((g) => g.id === id) ?? null;
}

function writeGameToUrl(game: Game | null) {
  const url = new URL(window.location.href);
  if (game) url.searchParams.set('game', game.id);
  else url.searchParams.delete('game');
  try {
    window.history.replaceState(window.history.state, '', url);
  } catch {
    /* URL sync is optional (e.g. sandboxed frames) */
  }
}

export default function App() {
  const { t, lang } = useI18n();
  const { filters, update, reset, results, total } = useCatalogue();
  const [selected, setSelected] = useState<Game | null>(readGameFromUrl);
  const [origin, setOrigin] = useState<DOMRect | null>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const catalogueRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

  const scrollToCatalogue = useCallback(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    catalogueRef.current?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  }, []);

  // "/" jumps to search from anywhere outside a text field.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = e.target as HTMLElement;
      if (e.key !== '/' || e.metaKey || e.ctrlKey || el.closest('input, textarea, select, dialog[open]')) return;
      e.preventDefault();
      searchRef.current?.focus();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // When the results change while scrolled past the top of the list, bring the list back into view.
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if ((catalogueRef.current?.getBoundingClientRect().top ?? 0) < 0) catalogueRef.current?.scrollIntoView({ block: 'start' });
  }, [filters.query, filters.genre]);

  const openGame = useCallback((game: Game, trigger: HTMLElement) => {
    triggerRef.current = trigger;
    setOrigin(trigger.getBoundingClientRect());
    setSelected(game);
    writeGameToUrl(game);
  }, []);

  const closeGame = useCallback(() => {
    setSelected(null);
    writeGameToUrl(null);
    requestAnimationFrame(() => triggerRef.current?.focus({ preventScroll: true }));
  }, []);

  return (
    <>
      <a className="skip-link" href="#catalogue">
        {t.skipToGames}
      </a>
      <Header ref={searchRef} query={filters.query} onQueryChange={(query) => update({ query })} />
      <main id="top">
        <HeroSection onExplore={scrollToCatalogue} />

        <section id="catalogue" ref={catalogueRef} className="catalogue" aria-labelledby="catalogue-title">
          <div className="container">
            <div className="catalogue__head">
              <h2 id="catalogue-title" className="catalogue__title">
                {t.catalogueTitle}
              </h2>
              <p className="catalogue__count" aria-live="polite">
                {filters.query || filters.genre ? t.showing(results.length, total) : t.catalogueCount(total)}
              </p>
            </div>

            <div className="chips" role="group" aria-label={t.genre}>
              <button type="button" className="chip" aria-pressed={!filters.genre} onClick={() => update({ genre: null })}>
                {t.allGenres}
              </button>
              {ALL_GENRES.map((key) => (
                <button
                  key={key}
                  type="button"
                  className="chip"
                  aria-pressed={filters.genre === key}
                  onClick={() => update({ genre: filters.genre === key ? null : key })}
                >
                  {GENRES[key][lang]}
                </button>
              ))}
            </div>

            {results.length ? <GameGrid games={results} onOpen={openGame} /> : <EmptyState onReset={reset} />}
          </div>
        </section>
      </main>
      <Footer />

      <GameDetailsModal game={selected} origin={origin} onClose={closeGame} />
      <SplashScreen />
    </>
  );
}
