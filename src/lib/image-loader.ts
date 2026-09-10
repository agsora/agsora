/**
 * Custom next/image loader.
 *
 * Unsplash serves images through imgix, which already handles resizing and
 * format negotiation (`auto=format` returns AVIF/WebP based on the request).
 * Routing those through Next's optimizer means downloading an already
 * optimised image only to re-encode it — added latency and server CPU for no
 * gain. This loader points srcset entries straight at Unsplash instead.
 *
 * Non-Unsplash sources pass through untouched.
 */
export default function imageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  if (src.startsWith("https://images.unsplash.com")) {
    const base = src.split("?")[0];
    return `${base}?auto=format&fit=crop&q=${quality ?? 75}&w=${width}`;
  }
  return src;
}
