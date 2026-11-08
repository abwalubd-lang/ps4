import { useEffect, useState } from 'react';
import logoUrl from '../assets/dpy-logo.webp';
import trophyUrl from '../assets/trophy-platinum-96.webp';
import { useI18n } from '../i18n/LanguageContext';

const DURATION = 3000;
const FADE = 350;

/** Shown for 3 seconds on arrival: a dimmed, blurred veil over the catalogue with the bundle note. */
export function SplashScreen() {
  const { t } = useI18n();
  const [phase, setPhase] = useState<'shown' | 'leaving' | 'gone'>('shown');

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('is-locked');
    const leave = window.setTimeout(() => setPhase('leaving'), DURATION);
    const gone = window.setTimeout(() => setPhase('gone'), DURATION + FADE);
    return () => {
      window.clearTimeout(leave);
      window.clearTimeout(gone);
      root.classList.remove('is-locked');
    };
  }, []);

  useEffect(() => {
    if (phase === 'gone') document.documentElement.classList.remove('is-locked');
  }, [phase]);

  if (phase === 'gone') return null;

  return (
    <div className={`splash ${phase === 'leaving' ? 'is-leaving' : ''}`} role="status" aria-live="polite">
      <div className="splash__content">
        <img className="splash__logo" src={logoUrl} alt="DPY · دبلوماسي بلس" width={468} height={168} />
        <img className="splash__trophy" src={trophyUrl} alt="" width={48} height={48} />
        <p className="splash__title">{t.splashTitle}</p>
        <p className="splash__text">{t.splashText}</p>
        <span className="splash__bar" aria-hidden="true">
          <span />
        </span>
      </div>
    </div>
  );
}
