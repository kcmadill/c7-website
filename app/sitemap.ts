import { MetadataRoute } from "next";
import { services } from "@/lib/services-data";
import { posts } from "@/lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://c7-cits.com";
  const now = new Date();

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const blogPages: MetadataRoute.Sitemap = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${base}/services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...servicePages,
    {
      url: `${base}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogPages,
    {
      url: `${base}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/contact`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];
}
