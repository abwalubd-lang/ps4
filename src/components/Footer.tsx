import { useI18n } from '../i18n/LanguageContext';
import { BrandMark } from './BrandMark';

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__brand">
          <BrandMark size="lg" />
          <p className="site-footer__tagline">{t.footerTagline}</p>
          <a className="site-footer__shop" href="https://idplom.com" target="_blank" rel="noopener">
            {t.shopNow}
            <span dir="ltr">idplom.com</span>
          </a>
        </div>
        <div className="site-footer__legal">
          <p>
            <span dir="ltr">© {year}</span> <bdi>DPY | دبلوماسي بلس</bdi> · {t.footerRights}
          </p>
          <p className="site-footer__tm">{t.footerTrademarks}</p>
        </div>
      </div>
    </footer>
  );
}
