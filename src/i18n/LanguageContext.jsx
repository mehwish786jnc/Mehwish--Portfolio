import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations, LANGUAGES } from "./translations";

const STORAGE_KEY = "portfolio-lang";

function getInitialLang() {
  if (typeof window === "undefined") return "en";
  const saved = window.localStorage.getItem(STORAGE_KEY);
  if (saved && translations[saved]) return saved;
  const browser = window.navigator.language?.slice(0, 2);
  return translations[browser] ? browser : "en";
}

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(getInitialLang);

  const setLang = (code) => {
    if (translations[code]) setLangState(code);
  };

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = translations[lang].dir || "ltr";
  }, [lang]);

  const value = useMemo(
    () => ({ lang, setLang, t: translations[lang], languages: LANGUAGES }),
    [lang]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang must be used within a LanguageProvider");
  return ctx;
}
