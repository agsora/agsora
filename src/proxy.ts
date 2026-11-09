import { NextResponse, type NextRequest } from "next/server";

/**
 * Language routing (see src/i18n/routing.ts):
 * - /en/... and /zh/...  → served as-is by app/[lang]
 * - /id/...              → 308 to the unprefixed URL (one address per page)
 * - everything else      → rewritten to /id/... (Indonesian, the original URLs)
 *
 * No redirects based on Accept-Language: crawlers mostly send English or
 * nothing, so that would hide the Indonesian pages from them. Visitors get a
 * dismissible language offer instead (LanguageSuggestion).
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const first = pathname.split("/")[1];

  // Markdown twin of an article: /blog/x.md → internal /{lang}/blog/x/md.
  const md = pathname.match(/^(?:\/(en|zh))?\/blog\/([^/]+)\.md$/);
  if (md) {
    const url = request.nextUrl.clone();
    url.pathname = `/${md[1] ?? "id"}/blog/${md[2]}/md`;
    return NextResponse.rewrite(url);
  }

  if (first === "en" || first === "zh") return NextResponse.next();

  const url = request.nextUrl.clone();
  if (first === "id") {
    url.pathname = pathname.slice(3) || "/";
    return NextResponse.redirect(url, 308);
  }

  url.pathname = `/id${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Skip Next internals, API routes, the OG image routes, and anything with a
  // file extension (public/ assets, robots.txt, sitemap.xml, icons) except .md
  // (article Markdown twins, handled above).
  matcher: ["/((?!_next/|api/|og/|opengraph-image|.*\\.(?!md$)[a-zA-Z0-9]+$).*)"],
};
