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
  async redirects() {
    // Page 1 of the archive is /blog; never let a second URL compete with it.
    return [
      { source: "/blog/page/1", destination: "/blog", permanent: true },
      { source: "/:lang(en|zh)/blog/page/1", destination: "/:lang/blog", permanent: true },
      // Pages removed in the 3-language redesign. Google still knows them
      // (GSC lists /portfolio as a referring page), so send them to the
      // closest page that exists now instead of a 404.
      { source: "/portfolio", destination: "/industries", permanent: true },
      { source: "/:lang(en|zh)/portfolio", destination: "/:lang/industries", permanent: true },
      { source: "/products", destination: "/services", permanent: true },
      { source: "/:lang(en|zh)/products", destination: "/:lang/services", permanent: true },
    ];
  },
};

export default nextConfig;
