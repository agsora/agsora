import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";
import { getCategoryLabel, getPostBySlug, getPostTitle, isPostAvailable } from "@/config/blog";
import { siteConfig } from "@/config/site";
import { isLocale } from "@/i18n/routing";
import { coverMotifSvg } from "@/lib/cover-motifs";

/**
 * Social-share image for one blog article in one language: the article's own
 * title plus its category motif. Replaces the shared stock photo as og:image,
 * so a link pasted into WhatsApp, LinkedIn or X shows what the article is
 * about. See generateMetadata in app/[lang]/blog/[slug]/page.tsx.
 */

const icon = `data:image/png;base64,${readFileSync(
  join(process.cwd(), "public/brand/icon-compact.png")
).toString("base64")}`;

/**
 * Fetches just the glyphs needed for `text` from Google Fonts (a few KB),
 * which also covers Chinese titles without bundling a CJK font. Returns null
 * on any failure so the image still renders with the default font.
 */
async function loadFont(family: string, weight: number, text: string) {
  try {
    const css = await (
      await fetch(
        `https://fonts.googleapis.com/css2?family=${family}:wght@${weight}&text=${encodeURIComponent(text)}`,
        { cache: "force-cache" }
      )
    ).text();
    const url = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
    if (!url) return null;
    return await (await fetch(url, { cache: "force-cache" })).arrayBuffer();
  } catch {
    return null;
  }
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ lang: string; slug: string }> }
) {
  const { lang, slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || !isLocale(lang) || !isPostAvailable(post, lang)) {
    return new Response(null, { status: 404 });
  }

  const title = getPostTitle(post, lang);
  const category = getCategoryLabel(post.category, lang);
  const family = lang === "zh" ? "Noto+Sans+SC" : "IBM+Plex+Sans";
  const fontData = await loadFont(family, 600, `${title}${category}AG·SORA${siteConfig.domain}`);

  const motif = `data:image/svg+xml;base64,${Buffer.from(coverMotifSvg(post.category)).toString("base64")}`;

  const titleSize = title.length > 90 ? 48 : title.length > 60 ? 56 : 64;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#0d0f15",
          position: "relative",
          fontFamily: fontData ? "Brand" : "sans-serif",
        }}
      >
        <div style={{ position: "absolute", right: 24, bottom: 40, display: "flex", opacity: 0.9 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={motif} width={460} height={258} alt="" />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={icon} width={36} height={31} alt="" />
          <span style={{ fontSize: 26, fontWeight: 600, color: "#f2f4f8" }}>AG·SORA</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 760 }}>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "#7b9fff",
              letterSpacing: "0.06em",
              marginBottom: 22,
            }}
          >
            {category}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: titleSize,
              fontWeight: 600,
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
              color: "#f2f4f8",
            }}
          >
            {title}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            borderTop: "1px solid #1e242f",
            paddingTop: 24,
            fontSize: 20,
            color: "#7d8899",
          }}
        >
          {siteConfig.domain}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: fontData ? [{ name: "Brand", data: fontData, weight: 600, style: "normal" }] : undefined,
      headers: { "Cache-Control": "public, max-age=86400, s-maxage=31536000, stale-while-revalidate=86400" },
    }
  );
}
