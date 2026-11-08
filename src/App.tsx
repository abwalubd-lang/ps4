import { useCallback, useEffect, useRef, useState } from 'react';
import { CatalogueToolbar } from './components/CatalogueToolbar';
import { EmptyState } from './components/EmptyState';
import { Footer } from './components/Footer';
import { GameDetailsModal } from './components/GameDetailsModal';
import { GameGrid } from './components/GameGrid';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { SplashScreen } from './components/SplashScreen';
import { GAMES, type Game } from './data';
import { useCatalogue } from './lib/useCatalogue';

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
  const { filters, update, reset, results, availableLetters, activeCount, total } = useCatalogue();
  const [selected, setSelected] = useState<Game | null>(readGameFromUrl);
  const searchRef = useRef<HTMLInputElement>(null);
  const catalogueRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLElement | null>(null);

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

  const scrollToCatalogue = useCallback(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    catalogueRef.current?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
  }, []);

  // When results change while scrolled down, return to the top of the list.
  const isFirstRender = useRef(true);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const top = catalogueRef.current?.getBoundingClientRect().top ?? 0;
    if (top < 0) catalogueRef.current?.scrollIntoView({ block: 'start' });
  }, [filters.query, filters.genre, filters.year, filters.letter, filters.sort]);

  const openGame = useCallback((game: Game, trigger: HTMLElement) => {
    triggerRef.current = trigger;
    setSelected(game);
    writeGameToUrl(game);
  }, []);

  const navigateGame = useCallback((game: Game) => {
    setSelected(game);
    writeGameToUrl(game);
  }, []);

  const closeGame = useCallback(() => {
    setSelected(null);
    writeGameToUrl(null);
    // Return focus to the card that opened the dialog without moving the page.
    requestAnimationFrame(() => triggerRef.current?.focus({ preventScroll: true }));
  }, []);

  return (
    <>
      <Header ref={searchRef} query={filters.query} onQueryChange={(query) => update({ query })} />
      <main id="top">
        <HeroSection onExplore={scrollToCatalogue} />
        <section id="catalogue" ref={catalogueRef} className="container catalogue" aria-labelledby="catalogue-title">
        <CatalogueToolbar
          filters={filters}
          update={update}
          reset={reset}
          availableLetters={availableLetters}
          activeCount={activeCount}
          resultCount={results.length}
          total={total}
        />
        {results.length ? <GameGrid games={results} onOpen={openGame} /> : <EmptyState onReset={reset} />}
        </section>
      </main>
      <Footer />

      <SplashScreen />
      <GameDetailsModal game={selected} list={results.length ? results : GAMES} onClose={closeGame} onNavigate={navigateGame} />
    </>
  );
}
