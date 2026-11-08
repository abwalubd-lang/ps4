import bronzeIcon from '../assets/trophy-bronze-56.webp';
import goldIcon from '../assets/trophy-gold-56.webp';
import platinumIcon from '../assets/trophy-platinum-96.webp';
import silverIcon from '../assets/trophy-silver-56.webp';
import { trophiesFor, type Game } from '../data';
import { useI18n } from '../i18n/LanguageContext';

const TIERS = [
  { key: 'platinum', icon: platinumIcon },
  { key: 'gold', icon: goldIcon },
  { key: 'silver', icon: silverIcon },
  { key: 'bronze', icon: bronzeIcon },
] as const;

const show = (n: number | null) => (n === null ? '—' : String(n));

/** PS4 trophy counts for one game. Only verified figures are shown; anything else reads "—" / "Unverified". */
export function TrophyPanel({ game }: { game: Game }) {
  const { t, lang } = useI18n();
  const tr = t.trophies;
  const stats = trophiesFor(game);
  const { baseGame, verificationStatus: status } = stats;
  const hasCounts = Object.values(baseGame).some((n) => n !== null);
  const dlcTotal = stats.dlc?.reduce((sum, d) => (d.counts.total === null ? sum : sum + d.counts.total), 0) ?? 0;

  return (
    <section className="trophies" aria-labelledby="trophies-title">
      <header className="trophies__head">
        <h3 id="trophies-title" className="trophies__title">
          {tr.title} <span className="trophies__platform">PS4</span>
        </h3>
        <span className={`status status--${status}`}>{tr[status]}</span>
      </header>

      {hasCounts ? (
        <>
          <div className="trophies__total">
            <span className="trophies__total-num">{show(baseGame.total)}</span>
            <span className="trophies__total-label">{tr.total}</span>
          </div>
          <ul className="tiers">
            {TIERS.map(({ key, icon }) => (
              <li key={key} className={`tier tier--${key}`}>
                <img src={icon} alt="" width={20} height={20} />
                <span className="tier__count">{show(baseGame[key])}</span>
                <span className="tier__label">{t.trophies[key]}</span>
              </li>
            ))}
          </ul>
          {baseGame.platinum === 0 && <p className="trophies__note">{tr.noPlatinum}</p>}
          {dlcTotal > 0 && <p className="trophies__note">{tr.dlcLine(dlcTotal)}</p>}
          {stats.notes[lang] && <p className="trophies__note">{stats.notes[lang]}</p>}
        </>
      ) : (
        <p className="trophies__note">{stats.notes[lang]}</p>
      )}
    </section>
  );
}
