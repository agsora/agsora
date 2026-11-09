import type { Block } from "@/config/blog";

/**
 * Plain-text word count of an article body. Shared by the build-time stats
 * script (scripts/blog-stats.mjs) and the server-side consistency check, so
 * both always count the same way.
 */
export function countWords(body: Block[]) {
  return body.reduce((n, block) => {
    const text =
      block.type === "ul" || block.type === "ol"
        ? block.items.join(" ")
        : block.type === "callout" || block.type === "cta"
          ? `${block.title} ${block.text}`
          : block.type === "image"
            ? (block.caption ?? "")
            : block.text;
    // Inline links are written [anchor](/path); only the anchor is read.
    const plain = text.replace(/\[([^\]]+)\]\(\/[^)\s]*\)/g, "$1");
    return n + plain.split(/\s+/).filter(Boolean).length;
  }, 0);
}
