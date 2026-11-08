import { useI18n } from '../i18n/LanguageContext';

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__brand">
          <bdi>DPY | دبلوماسي بلس</bdi> · {t.footerTagline}
        </p>
        <a className="footer__shop" href="https://idplom.com" target="_blank" rel="noopener">
          {t.shopNow} <span dir="ltr">idplom.com</span>
        </a>
        <p className="footer__legal">
          <span dir="ltr">© {new Date().getFullYear()}</span> <bdi>DPY</bdi> · {t.footerRights} {t.footerTrademarks}
        </p>
      </div>
    </footer>
  );
}
