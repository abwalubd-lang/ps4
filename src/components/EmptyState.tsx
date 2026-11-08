import { useI18n } from '../i18n/LanguageContext';

export function EmptyState({ onReset }: { onReset: () => void }) {
  const { t } = useI18n();
  return (
    <div className="empty" role="status">
      <h3 className="empty__title">{t.emptyTitle}</h3>
      <p className="empty__text">{t.emptyText}</p>
      <button type="button" className="btn btn--link" onClick={onReset}>
        {t.emptyAction}
      </button>
    </div>
  );
}
