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
};

export default nextConfig;
