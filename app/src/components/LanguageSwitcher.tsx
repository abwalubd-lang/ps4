import { useI18n } from '../i18n/LanguageContext';
import type { Lang } from '../i18n/strings';

const OPTIONS: { value: Lang; label: string; full: string }[] = [
  { value: 'ar', label: 'ع', full: 'العربية' },
  { value: 'en', label: 'EN', full: 'English' },
];

export function LanguageSwitcher() {
  const { lang, setLang, t } = useI18n();
  return (
    <div className="lang-switch" role="group" aria-label={t.langLabel}>
      {OPTIONS.map((option) => (
        <button
          key={option.value}
          type="button"
          className="lang-switch__btn"
          lang={option.value}
          aria-pressed={lang === option.value}
          aria-label={option.full}
          onClick={() => setLang(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
