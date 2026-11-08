import trophyUrl from '../assets/trophy-platinum-720.webp';
import { useI18n } from '../i18n/LanguageContext';
import { Icon } from './Icon';

interface Props {
  onExplore: () => void;
}

/** Compact product intro: the bundle name beside the platinum trophy, then straight into the games. */
export function HeroSection({ onExplore }: Props) {
  const { t } = useI18n();
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__copy">
          <h1 id="hero-title" className="hero__title">
            <span className="hero__title-a">{t.heroTitleA}</span> <span className="hero__title-b">{t.heroTitleB}</span>
            <span className="hero__sub">{t.heroSub}</span>
          </h1>
          <p className="hero__text">{t.heroText}</p>
          <div className="hero__actions">
            <button type="button" className="btn btn--primary" onClick={onExplore}>
              {t.heroCta}
              <Icon name="arrowDown" size={17} />
            </button>
          </div>
        </div>

        <div className="hero__trophy" aria-hidden="true">
          <span className="hero__glow" />
          <img src={trophyUrl} alt="" width={357} height={360} decoding="async" fetchPriority="high" />
          <span className="hero__ledge" />
        </div>
      </div>
    </section>
  );
}
