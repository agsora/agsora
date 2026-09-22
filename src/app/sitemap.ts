import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { blogPageHref, blogPosts, getTotalPages } from "@/config/blog";
import { services } from "@/config/services";

const routes = [
  "",
  "/services",
  "/products",
  "/industries",
  "/pricing",
  "/portfolio",
  "/blog",
  "/about",
  "/contact",
  "/privacy-policy",
  "/terms-conditions",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: now,
    changeFrequency: route === "" || route === "/blog" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  // Service pages carry the commercial keywords — rank them just below home.
  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${siteConfig.url}/services/${service.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  const posts: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt ?? post.publishedAt),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  // Archive pages beyond page 1 (already listed in `pages` via "/blog").
  const totalPages = getTotalPages();
  const blogArchivePages: MetadataRoute.Sitemap = Array.from(
    { length: Math.max(0, totalPages - 1) },
    (_, i) => ({
      url: `${siteConfig.url}${blogPageHref(i + 2)}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.5,
    }),
  );

  return [...pages, ...servicePages, ...posts, ...blogArchivePages];
}
