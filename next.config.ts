import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Article photos are self-hosted, pre-sized WebP files; see the loader.
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
    // The widest image on the site is the 672px article column (1344px at 2x),
    // so srcset never needs to list the 2048/3840 defaults.
    deviceSizes: [640, 828, 1080, 1400],
  },
  async headers() {
    // Points AI agents that read response headers at the site map for LLMs.
    return [
      {
        // Security headers. The CSP is limited to frame-ancestors: a full
        // script policy would need nonces for the site's inline theme script
        // and JSON-LD blocks, so it is not enabled here.
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Content-Security-Policy", value: "frame-ancestors 'self'" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin-allow-popups" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()",
          },
        ],
      },
      {
        source: "/:path((?!_next/|api/).*)",
        headers: [
          { key: "Link", value: '</llms.txt>; rel="describedby"; type="text/plain"' },
        ],
      },
    ];
  },
  async redirects() {
    // Page 1 of the archive is /blog; never let a second URL compete with it.
    return [
      { source: "/blog/page/1", destination: "/blog", permanent: true },
      { source: "/:lang(en|zh)/blog/page/1", destination: "/:lang/blog", permanent: true },
      { source: "/portofolio/page/1", destination: "/portofolio", permanent: true },
      { source: "/:lang(en|zh)/portofolio/page/1", destination: "/:lang/portofolio", permanent: true },
      // The old site's English-spelled /portfolio (GSC still lists it as a
      // referring page) now has a real page under the Indonesian spelling.
      { source: "/portfolio", destination: "/portofolio", permanent: true },
      { source: "/:lang(en|zh)/portfolio", destination: "/:lang/portofolio", permanent: true },
      { source: "/portfolio/:slug", destination: "/portofolio/:slug", permanent: true },
      { source: "/:lang(en|zh)/portfolio/:slug", destination: "/:lang/portofolio/:slug", permanent: true },
    ];
  },
};

export default nextConfig;
