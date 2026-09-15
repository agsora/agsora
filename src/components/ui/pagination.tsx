"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLocale } from "@/i18n/locale-context";

type Item = number | "gap";

/** First, last, and the current page's neighbours; gaps collapse the rest. */
function pageItems(current: number, total: number): Item[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const pages = new Set([1, total, current - 1, current, current + 1]);
  const sorted = [...pages].filter((p) => p >= 1 && p <= total).sort((a, b) => a - b);

  const items: Item[] = [];
  sorted.forEach((page, i) => {
    if (i > 0 && page - sorted[i - 1] > 1) items.push("gap");
    items.push(page);
  });
  return items;
}

export function Pagination({
  current,
  total,
  href,
}: {
  current: number;
  total: number;
  href: (page: number) => string;
}) {
  const { t } = useLocale();
  if (total <= 1) return null;

  const linkBase =
    "focus-ring inline-flex h-9 min-w-9 items-center justify-center rounded-md border px-3 text-[13px] tabular-nums transition-colors";

  return (
    <nav aria-label="Navigasi halaman blog" className="flex flex-col items-center gap-4">
      <ul className="flex flex-wrap items-center justify-center gap-1.5">
        <li>
          {current > 1 ? (
            <Link
              href={href(current - 1)}
              rel="prev"
              className={cn(linkBase, "gap-1 border-line text-ink-muted hover:border-line-strong hover:text-ink")}
            >
              <ChevronLeft className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">{t.pagination.previous}</span>
              <span className="sr-only sm:hidden">{t.pagination.previous}</span>
            </Link>
          ) : (
            <span
              aria-hidden="true"
              className={cn(linkBase, "gap-1 border-line text-ink-subtle opacity-40")}
            >
              <ChevronLeft className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">{t.pagination.previous}</span>
            </span>
          )}
        </li>

        {pageItems(current, total).map((item, i) =>
          item === "gap" ? (
            <li key={`gap-${i}`} aria-hidden="true" className="px-1 text-[13px] text-ink-subtle">
              …
            </li>
          ) : (
            <li key={item}>
              {item === current ? (
                <span
                  aria-current="page"
                  className={cn(linkBase, "border-line-strong bg-surface-2 text-ink")}
                >
                  {item}
                </span>
              ) : (
                <Link
                  href={href(item)}
                  aria-label={`${t.blogPage.pageLabel} ${item}`}
                  className={cn(linkBase, "border-line text-ink-muted hover:border-line-strong hover:text-ink")}
                >
                  {item}
                </Link>
              )}
            </li>
          )
        )}

        <li>
          {current < total ? (
            <Link
              href={href(current + 1)}
              rel="next"
              className={cn(linkBase, "gap-1 border-line text-ink-muted hover:border-line-strong hover:text-ink")}
            >
              <span className="hidden sm:inline">{t.pagination.next}</span>
              <span className="sr-only sm:hidden">{t.pagination.next}</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          ) : (
            <span
              aria-hidden="true"
              className={cn(linkBase, "gap-1 border-line text-ink-subtle opacity-40")}
            >
              <span className="hidden sm:inline">{t.pagination.next}</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </span>
          )}
        </li>
      </ul>
      <p className="text-[12px] text-ink-subtle">
        {t.pagination.pageOf
          .replace("{current}", String(current))
          .replace("{total}", String(total))}
      </p>
    </nav>
  );
}
