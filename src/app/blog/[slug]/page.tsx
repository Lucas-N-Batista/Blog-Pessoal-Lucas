import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/lib/config/site";
import { formatDate } from "@/lib/format-date";
import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";

type BlogPostPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await getAllPostSlugs();

  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  const postUrl = `${siteConfig.siteUrl}/blog/${slug}`;

  if (!post) {
    return {
      title: "Post não encontrado",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: postUrl,
      type: "article",
      locale: "pt_BR",
      siteName: siteConfig.blogName,
      publishedTime: post.publishedAt,
      tags: post.tags,
      authors: [siteConfig.author.name],
      images: [
        {
          url: "/opengraph-image",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: ["/twitter-image"],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <Container className="py-10 md:py-14">
      <article className="glass-panel mx-auto max-w-4xl rounded-[2rem] p-8 md:p-12">
        <header className="border-b border-line pb-8">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-line bg-background-strong px-3 py-1 text-xs font-medium text-muted"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="section-title mt-6 text-foreground">{post.title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-muted">{post.excerpt}</p>
          <p className="mt-6 text-sm font-medium uppercase tracking-[0.24em] text-muted">
            Publicado em {formatDate(post.publishedAt)}
          </p>
        </header>

        <div className="prose-rich mt-10">{post.content}</div>
      </article>
    </Container>
  );
}