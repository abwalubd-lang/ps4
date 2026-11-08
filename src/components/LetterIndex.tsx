import { useI18n } from '../i18n/LanguageContext';
import { LETTERS } from '../lib/useCatalogue';

interface Props {
  active: string | null;
  available: Set<string>;
  onSelect: (letter: string | null) => void;
}

export function LetterIndex({ active, available, onSelect }: Props) {
  const { t } = useI18n();
  return (
    <div className="field">
      <p className="field__label" id="letters-label">
        {t.letterIndex}
      </p>
      <ul className="letters" dir="ltr" aria-labelledby="letters-label">
        <li className="letters__all">
          <button type="button" className="letters__btn" aria-pressed={!active} onClick={() => onSelect(null)}>
            {t.allLetters}
          </button>
        </li>
        {LETTERS.map((letter) => (
          <li key={letter}>
            <button
              type="button"
              className="letters__btn"
              aria-pressed={active === letter}
              disabled={!available.has(letter) && active !== letter}
              onClick={() => onSelect(active === letter ? null : letter)}
            >
              {letter}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
