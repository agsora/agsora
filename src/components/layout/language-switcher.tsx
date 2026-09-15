"use client";

import { useState, useRef, useEffect } from "react";
import { Globe } from "lucide-react";
import { useLocale, type Locale } from "@/i18n/locale-context";
import { cn } from "@/lib/utils";

const options: { code: Locale; label: string }[] = [
  { code: "id", label: "ID" },
  { code: "en", label: "EN" },
  { code: "zh", label: "中文" },
];

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, t } = useLocale();
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

      {open ? (
        <div className="absolute right-0 top-11 z-50 w-28 overflow-hidden rounded-md border border-line bg-surface-1 py-1 shadow-lg">
          {options.map((o) => (
            <button
              key={o.code}
              type="button"
              onClick={() => {
                setLocale(o.code);
                setOpen(false);
              }}
              className={cn(
                "flex w-full items-center px-3 py-2 text-left text-[13px] transition-colors hover:bg-surface-2",
                o.code === locale ? "text-ink" : "text-ink-muted"
              )}
            >
              {o.label}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
