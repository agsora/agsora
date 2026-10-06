import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { LogoStrip } from "@/components/home/logo-strip";
import { ServicesIndex } from "@/components/home/services-index";
import { LatestArticles, type HomeArticle } from "@/components/home/latest-articles";
import { HomeFaq } from "@/components/home/home-faq";
import { FinalCta } from "@/components/home/final-cta";
import { Section } from "@/components/ui/section";
import { featuredServices } from "@/config/services";
import { formatPostDate, getCategoryLabel, getSortedPosts } from "@/config/blog";
import { siteConfig } from "@/config/site";
import { dictionaries } from "@/i18n/dictionaries";
import { pageMeta } from "@/i18n/page-meta";
import { absoluteUrl, hreflangs, type Locale } from "@/i18n/routing";
import { localeFromParams, type LangParams } from "@/i18n/server";
import { pageMetadata, jsonLd } from "@/lib/seo";

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const locale = await localeFromParams(params);
  const { title, description } = pageMeta.home[locale];
  return pageMetadata({ absoluteTitle: title, description, path: "/", locale });
}

// Picked here, on the server, so only these fields reach the browser.
function latestPosts(locale: Locale): HomeArticle[] {
  return getSortedPosts(locale)
    .slice(0, 3)
    .map((post) => ({
      slug: post.slug,
      title: post.title,
      titleTranslations: post.titleTranslations,
      category: getCategoryLabel(post.category, locale),
      publishedAt: post.publishedAt,
      date: formatPostDate(post.publishedAt, locale),
      readingMinutes: post.readingMinutes,
    }));
}

/**
 * Describes only what the page visibly shows. Organization and WebSite are
 * emitted site-wide by the root layout and referenced here by @id; full
 * Service detail lives on /services/*.
 */
function homeSchema(locale: Locale) {
  const organization = { "@id": `${siteConfig.url}/#organization` };
  const t = dictionaries[locale];
  const { title, description } = pageMeta.home[locale];

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${absoluteUrl("/", locale)}#webpage`,
        url: absoluteUrl("/", locale),
        name: title,
        description,
        inLanguage: hreflangs[locale],
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        about: organization,
        publisher: organization,
      },
      {
        "@type": "ItemList",
        name: `${siteConfig.brandMark} — ${t.nav.services}`,
        itemListElement: featuredServices.map((service, i) => ({
          "@type": "ListItem",
          position: i + 1,
          item: {
            "@type": "Service",
            name: service.title[locale],
            description: service.description[locale],
            url: absoluteUrl(service.href, locale),
            provider: organization,
            offers: {
              "@type": "Offer",
              priceCurrency: "IDR",
              priceSpecification: {
                "@type": "PriceSpecification",
                minPrice: service.startingFrom,
                priceCurrency: "IDR",
              },
            },
          },
        })),
      },
    ],
  };
}

/**
 * Simple on purpose: what is this (hero) → who trusts it → what can you build
 * for me, with prices → reading that answers "should we" questions →
 * remaining doubts → contact. Every section is server-rendered
 * visible; nothing waits on JavaScript to appear.
 *
 * Integration diagram, process, industries and the full pricing table live
 * on their own pages. Each section added here pushes the final CTA further
 * down on a phone.
 */
export default async function Home({ params }: LangParams) {
  const locale = await localeFromParams(params);
  const posts = latestPosts(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(homeSchema(locale)) }}
      />
      <Hero />
      <LogoStrip />
      <Section className="py-20 md:py-32">
        <ServicesIndex />
      </Section>
      {posts.length ? (
        <Section className="pt-0 pb-20 md:pt-0 md:pb-32">
          <LatestArticles posts={posts} />
        </Section>
      ) : null}
      <Section className="border-t border-line py-20 md:py-32">
        <HomeFaq />
      </Section>
      <Section className="pt-0 pb-20 md:pt-0 md:pb-28">
        <FinalCta />
      </Section>
    </>
  );
}
