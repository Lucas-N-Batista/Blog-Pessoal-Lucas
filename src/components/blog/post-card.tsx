import Link from "next/link";
import { formatDate } from "@/lib/format-date";
import type { PostSummary } from "@/types/post";

type PostCardProps = {
  post: PostSummary;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="glass-panel group h-full rounded-[1.75rem] p-6 transition hover:-translate-y-1">
      <div className="mb-5 flex items-center justify-between gap-4">
        <span className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
          {formatDate(post.publishedAt)}
        </span>
        {post.featured ? (
          <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-strong">
            Destaque
          </span>
        ) : null}
      </div>

      <div className="space-y-4">
        <h3 className="font-serif text-3xl leading-none tracking-tight text-foreground transition group-hover:text-accent-strong">
          {post.title}
        </h3>
        <p className="text-sm leading-7 text-muted">{post.excerpt}</p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-line bg-background-strong px-3 py-1 text-xs font-medium text-muted"
          >
            {tag}
          </span>
        ))}
      </div>

      <Link
        href={`/blog/${post.slug}`}
        className="mt-8 inline-flex text-sm font-semibold text-foreground transition group-hover:translate-x-1 group-hover:text-accent-strong"
      >
        Continuar leitura
      </Link>
    </article>
  );
}