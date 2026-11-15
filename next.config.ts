import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // The whole stylesheet is ~14 KiB (Tailwind), so inlining it removes the
    // render-blocking CSS request for first-time visitors.
    inlineCss: true,
    // Signed agreements and handover scans are uploaded through server actions. Vercel caps a request at 4.5 MB,
    // so files are limited to 4 MB (see lib/storage.ts).
    serverActions: { bodySizeLimit: "4.5mb" },
  },
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
      // The portfolio section was removed; keep old URLs (and their links) alive.
      { source: "/:lang(en|zh)/portofolio/:path*", destination: "/:lang/services", permanent: true },
      { source: "/:lang(en|zh)/portfolio/:path*", destination: "/:lang/services", permanent: true },
      { source: "/portofolio/:path*", destination: "/services", permanent: true },
      { source: "/portfolio/:path*", destination: "/services", permanent: true },
      // The demo gallery started at /template; it now lives at /contoh ("contoh website ..." is what people search).
      { source: "/:lang(en|zh)/template/:path*", destination: "/:lang/contoh/:path*", permanent: true },
      { source: "/template/:path*", destination: "/contoh/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
