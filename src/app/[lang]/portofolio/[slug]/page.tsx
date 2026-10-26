import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortfolioDetailBody } from "@/components/portfolio/portfolio-detail-body";
import { getProject, projects } from "@/config/portfolio";
import { industries } from "@/config/industries";
import { siteConfig } from "@/config/site";
import { absoluteUrl, hreflangs, isLocale, type Locale } from "@/i18n/routing";
import { jsonLd, pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ lang: string; slug: string }> };

// Unknown slugs 404 via resolve(); see the dynamicParams note in [lang]/layout.
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

function resolve(lang: string, slug: string) {
  const project = getProject(slug);
  if (!project || !isLocale(lang)) return null;
  return { locale: lang as Locale, project };
}

/** Social card: a 1200×630 crop of the cover, stored next to the screenshots. */
const ogImage = (slug: string) => `/portfolio/${slug}/og.jpg`;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const resolved = resolve(lang, slug);
  if (!resolved) return {};
  const { locale, project } = resolved;
  return pageMetadata({
    absoluteTitle: project.metaTitle[locale],
    description: project.metaDescription[locale],
    path: `/portofolio/${slug}`,
    locale,
    image: ogImage(slug),
  });
}

export default async function PortfolioProjectPage({ params }: Props) {
  const { lang, slug } = await params;
  const resolved = resolve(lang, slug);
  if (!resolved) notFound();
  const { locale, project } = resolved;

  const url = absoluteUrl(`/portofolio/${slug}`, locale);
  const organization = { "@id": `${siteConfig.url}/#organization` };
  const industry = industries.find((i) => i.slug === project.industry);
  const images = [
    `${siteConfig.url}${ogImage(slug)}`,
    ...project.gallery.map((img) => `${siteConfig.url}${img.src}-1400.webp`),
  ];
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: project.metaTitle[locale],
        description: project.metaDescription[locale],
        inLanguage: hreflangs[locale],
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        primaryImageOfPage: images[0],
        mainEntity: { "@id": `${url}#project` },
      },
      {
        "@type": "CreativeWork",
        "@id": `${url}#project`,
        name: project.name,
        headline: project.headline[locale],
        description: project.summary[locale],
        url,
        image: images,
        dateCreated: project.launchedAt,
        inLanguage: hreflangs[locale],
        genre: project.category[locale],
        keywords: project.stack.join(", "),
        creator: organization,
        publisher: organization,
        // A concept has no client to name.
        ...(project.concept
          ? {}
          : {
              about: {
                "@type": "Organization",
                name: project.client,
                ...(project.liveUrl ? { url: project.liveUrl } : {}),
              },
            }),
        ...(industry ? { audience: { "@type": "BusinessAudience", name: industry.name[locale] } } : {}),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
      <PortfolioDetailBody slug={slug} />
    </>
  );
}
