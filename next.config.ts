import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Unsplash's CDN already resizes and format-negotiates; see the loader.
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  async redirects() {
    // Page 1 of the archive is /blog; never let a second URL compete with it.
    return [{ source: "/blog/page/1", destination: "/blog", permanent: true }];
  },
};

export default nextConfig;
