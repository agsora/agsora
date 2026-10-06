"use client";

import { useState, useRef, useEffect } from "react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { Globe } from "lucide-react";
import { useLocale } from "@/i18n/locale-context";
import {
  alternatePath,
  hreflangs,
  localizePath,
  splitLocale,
  type Locale,
} from "@/i18n/routing";
import { cn } from "@/lib/utils";

const options: { code: Locale; label: string; name: string }[] = [
  { code: "id", label: "ID", name: "Bahasa Indonesia" },
  { code: "en", label: "EN", name: "English" },
  { code: "zh", label: "中文", name: "中文" },
];

/**
 * Language versions are separate URLs, so switching is a link to the same
 * page in the other language. The menu stays in the DOM while closed so the
 * links are visible to crawlers too, not only the hreflang tags.
 */
export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, t, translatedPosts } = useLocale();
  const { path } = splitLocale(usePathname());
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const current = options.find((o) => o.code === locale) ?? options[0];

  return (
    <div ref={ref} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t.langSwitch.label}
        aria-expanded={open}
        className="focus-ring flex h-9 items-center gap-1.5 rounded-md border border-line px-2.5 text-[12px] text-ink-muted transition-colors hover:border-line-strong hover:text-ink"
      >
        <Globe className="h-3.5 w-3.5" />
        {current.label}
      </button>

      <ul
        className={cn(
          "absolute right-0 top-11 z-50 w-40 overflow-hidden rounded-md border border-line bg-surface-1 py-1 shadow-lg",
          !open && "hidden"
        )}
      >
        {options.map((o) => (
          <li key={o.code}>
            <NextLink
              href={localizePath(alternatePath(path, o.code, translatedPosts), o.code)}
              hrefLang={hreflangs[o.code]}
              lang={hreflangs[o.code]}
              aria-current={o.code === locale ? "true" : undefined}
              onClick={() => setOpen(false)}
              className={cn(
                "flex w-full items-center justify-between px-3 py-2 text-[13px] transition-colors hover:bg-surface-2",
                o.code === locale ? "text-ink" : "text-ink-muted"
              )}
            >
              {o.name}
              <span className="text-[12px] text-ink-subtle">{o.label}</span>
            </NextLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
