import type { CSSProperties } from 'react';
import trophyUrl from '../assets/trophy-platinum-720.webp';
import { useI18n } from '../i18n/LanguageContext';

export function HeroSection({ onExplore }: { onExplore: () => void }) {
  const { t } = useI18n();
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <p className="hero__eyebrow anim" style={{ '--d': 0 } as CSSProperties}>
          {t.heroEyebrow}
        </p>
        <h1 id="hero-title" className="hero__title anim" style={{ '--d': 1 } as CSSProperties}>
          {t.heroTitle}
        </h1>
        <p className="hero__text anim" style={{ '--d': 2 } as CSSProperties}>
          {t.heroText}
        </p>
        <div className="anim" style={{ '--d': 3 } as CSSProperties}>
          <button type="button" className="btn btn--primary" onClick={onExplore}>
            {t.heroCta}
          </button>
        </div>
        <img
          className="hero__trophy anim"
          style={{ '--d': 4 } as CSSProperties}
          src={trophyUrl}
          alt=""
          width={357}
          height={360}
          decoding="async"
        />
      </div>
    </section>
  );
}
