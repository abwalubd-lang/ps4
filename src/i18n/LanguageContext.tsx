import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { STRINGS, type Lang, type Strings } from './strings';

interface LanguageValue {
  lang: Lang;
  dir: 'rtl' | 'ltr';
  t: Strings;
  setLang: (lang: Lang) => void;
}

const LanguageContext = createContext<LanguageValue | null>(null);
const STORAGE_KEY = 'dpy-lang';

function initialLang(): Lang {
  const fromUrl = new URLSearchParams(window.location.search).get('lang');
  if (fromUrl === 'ar' || fromUrl === 'en') return fromUrl;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'ar' || stored === 'en') return stored;
  } catch {
    /* storage unavailable */
  }
  return 'ar';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(initialLang);
  const dir = lang === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = dir;
    document.title = lang === 'ar' ? 'بكج تروفيات ألعاب بلايستيشن 4 | دبلوماسي بلس' : 'PS4 Trophy Games Bundle | DPY';
  }, [lang, dir]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* storage unavailable */
    }
  }, []);

  const value = useMemo(() => ({ lang, dir, t: STRINGS[lang], setLang }) as LanguageValue, [lang, dir, setLang]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useI18n(): LanguageValue {
  const value = useContext(LanguageContext);
  if (!value) throw new Error('useI18n must be used inside LanguageProvider');
  return value;
}
