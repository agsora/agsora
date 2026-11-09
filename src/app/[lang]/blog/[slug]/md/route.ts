import { blogPosts, getPostBySlug, isPostAvailable } from "@/config/blog";
import { isLocale, locales } from "@/i18n/routing";
import { buildPostMarkdown } from "@/lib/geo";

/**
 * Markdown twin of an article, public at /blog/{slug}.md (and /en, /zh).
 * proxy.ts rewrites the .md URL to this internal route.
 */

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((lang) =>
    blogPosts.filter((p) => isPostAvailable(p, lang)).map((p) => ({ lang, slug: p.slug }))
  );
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ lang: string; slug: string }> }
) {
  const { lang, slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || !isLocale(lang) || !isPostAvailable(post, lang)) {
    return new Response("Not found", { status: 404 });
  }
  return new Response(buildPostMarkdown(post, lang), {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
