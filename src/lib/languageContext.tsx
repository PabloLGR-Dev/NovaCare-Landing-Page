"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { t, Lang } from "./translations";

const LANG_KEY = "nc-lang";

interface LangCtx {
  lang: Lang;
  toggle: () => void;
  tr: (typeof t)["es"];
}

const LangContext = createContext<LangCtx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    // Disable browser scroll restoration so the page always starts at the top
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    // Read saved preference, fallback to browser language
    const saved = localStorage.getItem(LANG_KEY) as Lang | null;
    if (saved === "es" || saved === "en") {
      setLang(saved);
    } else if (navigator.language.toLowerCase().startsWith("en")) {
      setLang("en");
    }
  }, []);

  const toggle = () => {
    const next: Lang = lang === "es" ? "en" : "es";
    localStorage.setItem(LANG_KEY, next);
    window.location.reload();
  };

  return (
    <LangContext.Provider value={{ lang, toggle, tr: t[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLanguage must be inside LanguageProvider");
  return ctx;
}
