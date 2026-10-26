import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortfolioIndex } from "@/components/portfolio/portfolio-index";
import { getTotalProjectPages, portfolioPageHref, portfolioStrings } from "@/config/portfolio";
import { isLocale, type Locale } from "@/i18n/routing";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ lang: string; page: string }> };

// Page 1 lives at /portofolio; /portofolio/page/1 is redirected there in
// next.config.ts. Out-of-range pages 404 via parse() — see the dynamicParams
// note in [lang]/layout. Every project exists in all three languages, so each
// language has the same number of pages.
export function generateStaticParams() {
  return Array.from({ length: getTotalProjectPages() - 1 }, (_, i) => ({ page: String(i + 2) }));
}

function parse(lang: string, raw: string): { locale: Locale; page: number } | null {
  if (!isLocale(lang)) return null;
  const page = Number(raw);
  return Number.isInteger(page) && page >= 2 && page <= getTotalProjectPages()
    ? { locale: lang, page }
    : null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, page: raw } = await params;
  const parsed = parse(lang, raw);
  if (!parsed) return {};
  const { locale, page } = parsed;
  const s = portfolioStrings[locale];
  // Canonical to itself, not page 1, so projects only linked from here stay discoverable.
  return pageMetadata({
    title: s.archiveTitle(page),
    description: s.archiveDescription(page, getTotalProjectPages()),
    path: portfolioPageHref(page),
    locale,
  });
}

export default async function PortfolioArchivePage({ params }: Props) {
  const { lang, page: raw } = await params;
  const parsed = parse(lang, raw);
  if (!parsed) notFound();
  return <PortfolioIndex page={parsed.page} />;
}
