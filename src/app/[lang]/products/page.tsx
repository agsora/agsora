import type { Metadata } from "next";
import { ProductsBody } from "@/components/sections/products-body";
import { pageMeta } from "@/i18n/page-meta";
import { localeFromParams, type LangParams } from "@/i18n/server";
import { pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const locale = await localeFromParams(params);
  return {
    ...pageMetadata({ ...pageMeta.products[locale], path: "/products", locale }),
    // A placeholder until the first product launches: keep it out of search
    // results (and the sitemap) so it can't rank as a thin page, but let
    // crawlers follow its links.
    robots: { index: false, follow: true },
  };
}

export default function ProductsPage() {
  return <ProductsBody />;
}
