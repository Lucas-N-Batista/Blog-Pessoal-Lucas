import { siteConfig } from "@/lib/config/site";
import { getAllPosts } from "@/lib/posts";

function escapeXml(text: string): string {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

export async function GET() {
  const posts = await getAllPosts();

  const items = posts
    .map((post) => {
      const url = `${siteConfig.siteUrl}/blog/${post.slug}`;

      return [
        "<item>",
        `<title>${escapeXml(post.title)}</title>`,
        `<description>${escapeXml(post.excerpt)}</description>`,
        `<link>${url}</link>`,
        `<guid>${url}</guid>`,
        `<pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>`,
        "</item>",
      ].join("");
    })
    .join("");

  const xml = [
    "<?xml version=\"1.0\" encoding=\"UTF-8\"?>",
    "<rss version=\"2.0\" xmlns:atom=\"http://www.w3.org/2005/Atom\">",
    "<channel>",
    `<title>${escapeXml(siteConfig.blogName)}</title>`,
    `<description>${escapeXml(siteConfig.blogDescription)}</description>`,
    `<link>${siteConfig.siteUrl}</link>`,
    `<atom:link href=\"${siteConfig.siteUrl}/feed.xml\" rel=\"self\" type=\"application/rss+xml\" />`,
    "<language>pt-BR</language>",
    items,
    "</channel>",
    "</rss>",
  ].join("");

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}