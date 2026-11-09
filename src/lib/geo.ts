import {
  blogPosts,
  getCategoryLabel,
  getPostExcerpt,
  getPostTitle,
  isPostAvailable,
  type Block,
  type BlogPost,
} from "@/config/blog";
import { getPostBlocks } from "@/config/blog-content";
import { industries } from "@/config/industries";
import { services } from "@/config/services";
import { siteConfig } from "@/config/site";
import { absoluteUrl, locales, type Locale } from "@/i18n/routing";

/**
 * Generative Engine Optimization (GEO) helpers: plain-text/Markdown views of
 * the site for AI crawlers, served at /llms.txt and /llms-full.txt
 * (https://llmstxt.org). Everything is derived from the same config the pages
 * render, so these files can never drift from the site.
 */

const rupiah = (n: number) => `Rp${n.toLocaleString("id-ID")}`;

const startingAt: Record<Locale, string> = {
  id: "mulai dari",
  en: "starting from",
  zh: "起价",
};

/** Newest first, matching the blog index. */
const newestPosts = () =>
  [...blogPosts].sort(
    (a, b) => b.publishedAt.localeCompare(a.publishedAt) || a.slug.localeCompare(b.slug)
  );

const oneLine = (text: string) => text.replace(/\s+/g, " ").trim();

function header(): string[] {
  return [
    `# ${siteConfig.name}`,
    "",
    `> ${siteConfig.description}`,
    "",
    `${siteConfig.legalName} (${siteConfig.brandMark}) is a software company based in Indonesia that builds custom software, websites, mobile apps, ERP, POS, HRIS, CRM, API integrations and AI automation for businesses anywhere. Site languages: Bahasa Indonesia (default, no prefix), English (/en), Chinese (/zh).`,
    "",
    `Contact: ${siteConfig.email} · WhatsApp ${siteConfig.whatsapp.number}`,
    "",
    "Every blog article is also available as clean Markdown: append .md to its URL (e.g. /blog/{slug}.md, /en/blog/{slug}.md).",
  ];
}

function servicesSection(locale: Locale): string[] {
  return [
    "## Services",
    "",
    ...services.map(
      (s) =>
        `- [${s.title[locale]}](${absoluteUrl(s.href, locale)}): ${oneLine(s.description[locale])} (${startingAt[locale]} ${rupiah(s.startingFrom)})`
    ),
  ];
}

function industriesSection(locale: Locale): string[] {
  return [
    "## Industries",
    "",
    ...industries.map(
      (i) =>
        `- [${i.name[locale]}](${absoluteUrl(`/industries/${i.slug}`, locale)}): ${oneLine(i.description[locale])}`
    ),
  ];
}

const corePages = (locale: Locale): [string, string, string][] => [
  ["About", "/about", "Company profile, approach and values"],
  ["Pricing", "/pricing", "Pricing packages and what each includes"],
  ["Portfolio", "/portofolio", "Case studies of delivered projects"],
  ["Blog", "/blog", "Practical guides on ERP, POS, HRIS, CRM, websites and AI for business"],
  ["Contact", "/contact", "Talk to the team"],
].map(([name, path, note]) => [name, absoluteUrl(path, locale), note]);

/** /llms.txt — a compact map of the site for language models. */
export function buildLlmsTxt(): string {
  const lines = [
    ...header(),
    "",
    ...servicesSection("en"),
    "",
    ...industriesSection("en"),
    "",
    "## Key pages",
    "",
    ...corePages("en").map(([name, url, note]) => `- [${name}](${url}): ${note}`),
    "",
    "## Optional",
    "",
    `- [Full content index](${siteConfig.url}/llms-full.txt): every service, industry and article with summaries, in every available language`,
    `- [Sitemap](${siteConfig.url}/sitemap.xml)`,
  ];
  return `${lines.join("\n")}\n`;
}

/** /llms-full.txt — every service, industry and article, per language. */
export function buildLlmsFullTxt(): string {
  const lines = [...header()];

  for (const locale of locales) {
    const name = { id: "Bahasa Indonesia", en: "English", zh: "中文" }[locale];
    lines.push("", `# ${name}`, "", ...servicesSection(locale), "", ...industriesSection(locale));

    lines.push("", "## Articles", "");
    for (const post of newestPosts()) {
      if (!isPostAvailable(post, locale)) continue;
      lines.push(
        `- [${getPostTitle(post, locale)}](${absoluteUrl(`/blog/${post.slug}`, locale)}) · ${getCategoryLabel(post.category, locale)} · ${post.updatedAt ?? post.publishedAt}: ${oneLine(getPostExcerpt(post, locale))}`
      );
    }
  }
  return `${lines.join("\n")}\n`;
}

/** Inline links are written [anchor](/path); make them absolute and language-aware. */
function inline(text: string, locale: Locale) {
  return text.replace(/\[([^\]]+)\]\((\/[^)\s]*)\)/g, (_m, label: string, href: string) => {
    const [path, hash = ""] = href.split("#");
    return `[${label}](${absoluteUrl(path || "/", locale)}${hash ? `#${hash}` : ""})`;
  });
}

function blockToMarkdown(block: Block, locale: Locale): string {
  switch (block.type) {
    case "p":
      return inline(block.text, locale);
    case "h2":
      return `## ${block.text}`;
    case "h3":
      return `### ${block.text}`;
    case "ul":
      return block.items.map((i) => `- ${inline(i, locale)}`).join("\n");
    case "ol":
      return block.items.map((i, n) => `${n + 1}. ${inline(i, locale)}`).join("\n");
    case "callout":
      return `> **${block.title}**\n> ${inline(block.text, locale)}`;
    case "image":
      return block.caption ? `*${block.caption}*` : "";
    case "cta":
      return `**${block.title}** ${inline(block.text, locale)} [${block.label}](${absoluteUrl(block.href, locale)})`;
  }
}

/** One article as clean Markdown — no navigation or chrome, just the text. */
export function buildPostMarkdown(post: BlogPost, locale: Locale): string {
  const url = absoluteUrl(`/blog/${post.slug}`, locale);
  const body = getPostBlocks(post, locale)
    .map((b) => blockToMarkdown(b, locale))
    .filter(Boolean)
    .join("\n\n");
  return [
    `# ${getPostTitle(post, locale)}`,
    "",
    `> ${oneLine(getPostExcerpt(post, locale))}`,
    "",
    `Source: ${url}`,
    `Category: ${getCategoryLabel(post.category, locale)} · Published: ${post.publishedAt} · Updated: ${post.updatedAt ?? post.publishedAt} · By ${siteConfig.legalName}`,
    "",
    body,
    "",
  ].join("\n");
}
