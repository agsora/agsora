import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

/**
 * Builds complete per-page metadata.
 *
 * Next.js does not derive og:title / og:url from a page's `title`. A page that
 * sets only title + description inherits the root layout's openGraph object,
 * so every inner page would share the homepage's social title and URL. Using
 * this helper on every page keeps title, canonical, and social tags aligned.
 */
export function pageMetadata({
  title,
  absoluteTitle,
  description,
  path,
  image = "/opengraph-image",
}: {
  /** Page name; the layout template appends " | AG·SORA". */
  title?: string;
  /** Full title used verbatim — for pages whose title must lead with a keyword. */
  absoluteTitle?: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const fullTitle = absoluteTitle ?? `${title} | ${siteConfig.brandMark}`;
  const url = `${siteConfig.url}${path === "/" ? "" : path}`;

  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "id_ID",
      siteName: siteConfig.brandMark,
      title: fullTitle,
      description,
      url,
      images: [{ url: image, width: 1200, height: 630, alt: fullTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}
