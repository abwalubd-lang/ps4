import { useI18n } from '../i18n/LanguageContext';

/** "In the bundle" seal: green check + label. `inline` is a framed chip, `plain` sits in the card's footer strip. */
export function BundleBadge({ variant = 'inline' }: { variant?: 'inline' | 'plain' }) {
  const { t } = useI18n();
  return (
    <span className={`bundle bundle--${variant}`}>
      <svg className="bundle__check" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
        <circle cx="8" cy="8" r="8" />
        <path d="M4.6 8.3 7 10.6l4.4-5" />
      </svg>
      {t.inBundle}
    </span>
  );
}
