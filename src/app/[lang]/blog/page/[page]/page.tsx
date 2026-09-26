import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogIndex } from "@/components/sections/blog-index";
import { blogPageHref, getTotalPages } from "@/config/blog";
import { blogArchiveMeta } from "@/i18n/page-meta";
import { isLocale, locales, type Locale } from "@/i18n/routing";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ lang: string; page: string }> };

// Page 1 lives at /blog; /blog/page/1 is redirected there in next.config.ts.
// Out-of-range pages 404 via parse() — see the dynamicParams note in [lang]/layout.

// Archives are shorter outside Indonesian (only translated posts are listed),
// so each language gets exactly the pages it has.
export function generateStaticParams({ params }: { params: { lang: string } }) {
  const locale = isLocale(params.lang) ? params.lang : "id";
  return Array.from({ length: Math.max(0, getTotalPages(locale) - 1) }, (_, i) => ({
    page: String(i + 2),
  }));
}

function parse(lang: string, raw: string): { locale: Locale; page: number } | null {
  if (!isLocale(lang)) return null;
  const page = Number(raw);
  return Number.isInteger(page) && page >= 2 && page <= getTotalPages(lang)
    ? { locale: lang, page }
    : null;
}

/** Languages whose archive also reaches this page number. */
function localesWithPage(page: number) {
  return locales.filter((locale) => getTotalPages(locale) >= page);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, page: raw } = await params;
  const parsed = parse(lang, raw);
  if (!parsed) return {};
  const { locale, page } = parsed;

  // Each archive page is canonical to itself, not to page 1 — pointing them
  // all at /blog would tell Google to ignore the articles only linked from here.
  return pageMetadata({
    ...blogArchiveMeta(locale, page, getTotalPages(locale)),
    path: blogPageHref(page),
    locale,
    available: localesWithPage(page),
  });
}

export default async function BlogArchivePage({ params }: Props) {
  const { lang, page: raw } = await params;
  const parsed = parse(lang, raw);
  if (!parsed) notFound();
  return <BlogIndex page={parsed.page} />;
}
