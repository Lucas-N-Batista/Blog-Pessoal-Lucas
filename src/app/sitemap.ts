import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config/site";
import { getAllPosts } from "@/lib/posts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getAllPosts();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: siteConfig.siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteConfig.siteUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.siteUrl}/sobre`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteConfig.siteUrl}/projetos`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const postPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteConfig.siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: post.featured ? 0.95 : 0.8,
  }));

  return [...staticPages, ...postPages];
}