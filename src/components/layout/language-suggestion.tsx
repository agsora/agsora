"use client";

import { useEffect, useState } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { Globe, X } from "lucide-react";
import { dictionaries } from "@/i18n/dictionaries";
import { useLocale } from "@/i18n/locale-context";
import {
  alternatePath,
  hreflangs,
  isLocale,
  localizePath,
  splitLocale,
  type Locale,
} from "@/i18n/routing";

const DISMISSED_KEY = "agsora-lang-suggestion-dismissed";

/** First supported language in the browser's preferences; English for everyone else. */
function preferredLocale(): Locale {
  for (const tag of navigator.languages ?? [navigator.language]) {
    const lang = tag.toLowerCase().split("-")[0];
    if (isLocale(lang)) return lang;
  }
  return "en";
}

/**
 * Offers the visitor's own language when they land on a different one.
 *
 * An offer, not a redirect: redirecting on browser language would send
 * crawlers (which mostly send English or no preference) away from the
 * Indonesian pages, and search engines ask sites not to do it. Fixed to the
 * viewport corner so appearing after load causes no layout shift.
 */
export function LanguageSuggestion() {
  const { locale, translatedPosts } = useLocale();
  const { path } = splitLocale(usePathname());
  const [target, setTarget] = useState<Locale | null>(null);

  useEffect(() => {
    try {
      if (localStorage.getItem(DISMISSED_KEY)) return;
    } catch {
      // Storage blocked — still fine to show the offer.
    }
    const preferred = preferredLocale();
    // Deferred so the effect body itself doesn't set state synchronously.
    const id = window.setTimeout(
      () => setTarget(preferred === locale ? null : preferred),
      0
    );
    return () => window.clearTimeout(id);
  }, [locale]);

  if (!target) return null;

  const dismiss = () => {
    setTarget(null);
    try {
      localStorage.setItem(DISMISSED_KEY, "1");
    } catch {
      // Ignore — worst case the offer shows again next visit.
    }
  };
  const copy = dictionaries[target].langSuggest;

  return (
    <div
      role="region"
      aria-label={copy.message}
      lang={hreflangs[target]}
      className="fixed bottom-5 left-5 z-40 flex max-w-[calc(100vw-6.5rem)] items-center gap-3 rounded-2xl border border-line-strong bg-surface-1/95 py-2.5 pl-4 pr-2 text-[13px] text-ink-muted shadow-elev backdrop-blur-xl sm:max-w-sm"
    >
      <Globe className="h-4 w-4 shrink-0 text-accent" />
      <p className="min-w-0">
        {copy.message}{" "}
        <NextLink
          href={localizePath(alternatePath(path, target, translatedPosts), target)}
          hrefLang={hreflangs[target]}
          onClick={dismiss}
          className="focus-ring font-medium text-ink underline underline-offset-4"
        >
          {copy.action}
        </NextLink>
      </p>
      <button
        type="button"
        onClick={dismiss}
        aria-label={copy.dismiss}
        className="focus-ring flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-ink-subtle transition-colors hover:bg-surface-2 hover:text-ink"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
