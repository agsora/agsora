import type { Metadata } from "next";
import { PortfolioIndex } from "@/components/portfolio/portfolio-index";
import { projects } from "@/config/portfolio";
import { siteConfig } from "@/config/site";
import { pageMeta } from "@/i18n/page-meta";
import { absoluteUrl, hreflangs } from "@/i18n/routing";
import { localeFromParams, type LangParams } from "@/i18n/server";
import { jsonLd, pageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const locale = await localeFromParams(params);
  return pageMetadata({ ...pageMeta.portfolio[locale], path: "/portofolio", locale });
}

export default async function PortfolioPage({ params }: LangParams) {
  const locale = await localeFromParams(params);
  const url = absoluteUrl("/portofolio", locale);
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#webpage`,
    url,
    name: pageMeta.portfolio[locale].title,
    description: pageMeta.portfolio[locale].description,
    inLanguage: hreflangs[locale],
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    publisher: { "@id": `${siteConfig.url}/#organization` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: projects.map((project, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: absoluteUrl(`/portofolio/${project.slug}`, locale),
        name: project.name,
      })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
      <PortfolioIndex />
    </>
  );
}
