"use client";

import type { Block } from "@/config/blog";
import { headingId } from "@/components/sections/post-body";
import { growth } from "@/i18n/growth";
import { useLocale } from "@/i18n/locale-context";

/** h2 headings of an article, with the anchors PostBody gives them. */
function useHeadings(blocks: Block[]) {
  return blocks
    .filter((b): b is Extract<Block, { type: "h2" }> => b.type === "h2")
    .map((b, i) => ({ id: headingId(b.text, i), text: b.text }));
}

function List({ blocks }: { blocks: Block[] }) {
  const headings = useHeadings(blocks);
  return (
    <ol className="space-y-1">
      {headings.map((h) => (
        <li key={h.id}>
          <a
            href={`#${h.id}`}
            className="focus-ring block rounded px-2 py-2 text-[13px] leading-snug text-ink-muted transition-colors hover:bg-surface-1 hover:text-ink"
          >
            {h.text}
          </a>
        </li>
      ))}
    </ol>
  );
}

/** Collapsible list above the article, for screens narrower than lg. */
export function PostTocMobile({ blocks }: { blocks: Block[] }) {
  const { locale } = useLocale();
  const label = growth[locale].toc;
  if (useHeadings(blocks).length < 3) return null;
  return (
    <details className="mb-8 rounded-lg border border-line bg-surface-1 px-4 py-3 lg:hidden">
      <summary className="cursor-pointer text-[13px] font-medium text-ink">{label}</summary>
      <div className="mt-3">
        <List blocks={blocks} />
      </div>
    </details>
  );
}

/** Sticky sidebar next to the article on lg screens and wider. */
export function PostTocSidebar({ blocks }: { blocks: Block[] }) {
  const { locale } = useLocale();
  const label = growth[locale].toc;
  if (useHeadings(blocks).length < 3) return null;
  return (
    <aside className="sticky top-24 hidden self-start lg:block" aria-label={label}>
      <p className="mb-3 px-2 text-[12px] uppercase tracking-[0.18em] text-ink-subtle">{label}</p>
      <List blocks={blocks} />
    </aside>
  );
}
