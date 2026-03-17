import Link from "next/link";
import { formatDate } from "@/lib/format-date";
import { siteConfig } from "@/lib/config/site";
import type { PostSummary } from "@/types/post";

type HeroProps = {
  featuredPost?: PostSummary;
  totalPosts: number;
};

export function Hero({ featuredPost, totalPosts }: HeroProps) {
  return (
    <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="glass-panel relative overflow-hidden rounded-[2rem] p-8 md:p-10">
        <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top_left,rgba(191,91,56,0.2),transparent_60%)]" />
        <div className="relative space-y-6">
          <span className="eyebrow">Desafio DIO adaptado</span>
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-muted">
              {siteConfig.author.role}
            </p>
            <h1 className="section-title max-w-3xl text-foreground">
              {siteConfig.blogTitle}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted md:text-xl">
              {siteConfig.author.bio}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/blog"
              className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:-translate-y-0.5 hover:bg-accent-strong"
            >
              Ler artigos
            </Link>
            <Link
              href="/sobre"
              className="rounded-full border border-line bg-background-strong px-6 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-0.5 hover:border-accent-soft"
            >
              Conhecer a trajetória
            </Link>
          </div>
        </div>
      </div>

      <aside className="glass-panel rounded-[2rem] p-8 md:p-10">
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold uppercase tracking-[0.24em] text-muted">
              Em destaque
            </span>
            <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-strong">
              {totalPosts} posts
            </span>
          </div>

          {featuredPost ? (
            <>
              <h2 className="font-serif text-4xl leading-none tracking-tight text-foreground">
                {featuredPost.title}
              </h2>
              <p className="text-base leading-7 text-muted">{featuredPost.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {featuredPost.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line bg-background-strong px-3 py-1 text-xs font-medium text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="text-sm text-muted">
                Publicado em {formatDate(featuredPost.publishedAt)}
              </div>
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="inline-flex text-sm font-semibold text-accent-strong transition hover:translate-x-1"
              >
                Abrir artigo
              </Link>
            </>
          ) : (
            <p className="text-muted">Adicione posts em src/content/posts para popular a home.</p>
          )}
        </div>
      </aside>
    </section>
  );
}