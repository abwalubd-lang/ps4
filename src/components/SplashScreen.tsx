import { useEffect, useState } from 'react';
import { useI18n } from '../i18n/LanguageContext';

const DURATION = 3000;
const FADE = 450;

/** 3-second opening note over a frosted veil; marks <html> as ready when it leaves. */
export function SplashScreen() {
  const { t } = useI18n();
  const [phase, setPhase] = useState<'shown' | 'leaving' | 'gone'>('shown');

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('is-locked');
    const leave = window.setTimeout(() => {
      setPhase('leaving');
      root.classList.add('is-ready');
    }, DURATION);
    const gone = window.setTimeout(() => setPhase('gone'), DURATION + FADE);
    return () => {
      window.clearTimeout(leave);
      window.clearTimeout(gone);
      root.classList.remove('is-locked');
      root.classList.add('is-ready');
    };
  }, []);

  useEffect(() => {
    if (phase === 'gone') document.documentElement.classList.remove('is-locked');
  }, [phase]);

  if (phase === 'gone') return null;

  return (
    <div className={`splash ${phase === 'leaving' ? 'is-leaving' : ''}`} role="status" aria-live="polite">
      <p className="splash__text">{t.splashText}</p>
      <span className="splash__bar" aria-hidden="true">
        <span />
      </span>
    </div>
  );
}
