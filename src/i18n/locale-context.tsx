"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";
import { dictionaries, type Dictionary } from "./dictionaries";
import type { Locale } from "./routing";

export type { Locale } from "./routing";

type LocaleContextValue = {
  locale: Locale;
  t: Dictionary;
  /** Blog slugs that exist in every language — the rest are Indonesian-only. */
  translatedPosts: readonly string[];
};

const LocaleContext = createContext<LocaleContextValue>({
  locale: "id",
  t: dictionaries.id,
  translatedPosts: [],
});

/**
 * The locale comes from the URL (app/[lang]), so the server renders the
 * right language and every language version is its own indexable page.
 * Switching language is navigation — see LanguageSwitcher.
 */
export function LocaleProvider({
  locale,
  translatedPosts,
  children,
}: {
  locale: Locale;
  translatedPosts: readonly string[];
  children: ReactNode;
}) {
  const value = useMemo(
    () => ({ locale, t: dictionaries[locale], translatedPosts }),
    [locale, translatedPosts]
  );
  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  return useContext(LocaleContext);
}
