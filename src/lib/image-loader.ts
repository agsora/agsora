/**
 * Custom next/image loader.
 *
 * Article photos are self-hosted under /blog/images as pre-cropped 16:9 WebP
 * files in two widths (800 and 1400), named "<id>-<width>.webp". The `src`
 * in an image block is the path without the suffix; this picks the smaller
 * file whenever it covers the requested width, so a phone never downloads the
 * large one. Re-encoding through Next's optimizer would only add server work.
 *
 * Portfolio screenshots under /portfolio follow the same scheme when their
 * `src` has no extension. Anything else passes through untouched.
 */
const BLOG_IMAGE_WIDTHS = [800, 1400];

export default function imageLoader({ src, width }: { src: string; width: number; quality?: number }) {
  const sized = src.startsWith("/blog/images/") || (src.startsWith("/portfolio/") && !/\.\w+$/.test(src));
  if (sized) {
    const fit = BLOG_IMAGE_WIDTHS.find((w) => w >= width) ?? BLOG_IMAGE_WIDTHS[BLOG_IMAGE_WIDTHS.length - 1];
    return `${src}-${fit}.webp`;
  }
  return src;
}
