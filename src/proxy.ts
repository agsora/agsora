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
 *
 * Admin: the lead inbox lives in app/admin and is served only on the
 * dashboard.* host (dashboard.agsora.tech), where "/" shows the overview. On the public
 * host /admin is not routed (404), except in development.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const host = (request.headers.get("host") ?? "").toLowerCase();
  if (host.startsWith("dashboard.")) {
    const isAdminPath = pathname === "/admin" || pathname.startsWith("/admin/");
    if (isAdminPath) {
      const res = NextResponse.next();
      res.headers.set("X-Robots-Tag", "noindex, nofollow");
      return res;
    }
    if (pathname === "/") {
      const url = request.nextUrl.clone();
      url.pathname = "/admin";
      const res = NextResponse.rewrite(url);
      res.headers.set("X-Robots-Tag", "noindex, nofollow");
      return res;
    }
    const url = request.nextUrl.clone();
    url.pathname = "/";
    return NextResponse.redirect(url, 307);
  }
  if (process.env.NODE_ENV !== "production" && (pathname === "/admin" || pathname.startsWith("/admin/"))) {
    return NextResponse.next();
  }
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
