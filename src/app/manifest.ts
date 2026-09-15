import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.legalName}`,
    short_name: siteConfig.brandMark,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0d0f15",
    theme_color: "#0d0f15",
    icons: [
      {
        src: "/brand/pwa-icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/brand/pwa-icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
