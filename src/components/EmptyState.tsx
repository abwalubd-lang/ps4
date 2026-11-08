import { useI18n } from '../i18n/LanguageContext';
import trophyUrl from '../assets/trophy-silver-200.webp';

export function EmptyState({ onReset }: { onReset: () => void }) {
  const { t } = useI18n();
  return (
    <div className="empty" role="status">
      <img className="empty__trophy" src={trophyUrl} alt="" width={64} height={67} />
      <h3 className="empty__title">{t.emptyTitle}</h3>
      <p className="empty__text">{t.emptyText}</p>
      <button type="button" className="btn btn--outline" onClick={onReset}>
        {t.emptyAction}
      </button>
    </div>
  );
}
