"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { dictionaries, type Dictionary } from "./dictionaries";

export type Locale = "id" | "en" | "zh";

const STORAGE_KEY = "agsora-locale";

function detectLocale(): Locale {
  if (typeof navigator === "undefined") return "id";
  const langs = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];
  for (const raw of langs) {
    const lang = raw.toLowerCase();
    if (lang.startsWith("zh")) return "zh";
    if (lang.startsWith("en")) return "en";
    if (lang.startsWith("id")) return "id";
  }
  // Fall back to region: browsers in Indonesia default to id-ID or en-ID;
  // anything unrecognised still lands on the primary market, Indonesian.
  return "id";
}

const LocaleContext = createContext<{
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: Dictionary;
}>({
  locale: "id",
  setLocale: () => {},
  t: dictionaries.id,
});

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("id");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
    if (stored && stored in dictionaries) {
      setLocaleState(stored);
    } else {
      setLocaleState(detectLocale());
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang =
      locale === "zh" ? "zh-Hans" : locale === "en" ? "en" : "id";
  }, [locale]);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
  };

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t: dictionaries[locale] }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}
