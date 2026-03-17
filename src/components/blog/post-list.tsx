import { PostCard } from "@/components/blog/post-card";
import type { PostSummary } from "@/types/post";

type PostListProps = {
  posts: PostSummary[];
  title: string;
  description: string;
};

export function PostList({ posts, title, description }: PostListProps) {
  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <span className="eyebrow">Conteúdo dinâmico em MDX</span>
          <h2 className="font-serif text-5xl leading-none tracking-tight text-foreground">
            {title}
          </h2>
        </div>
        <p className="max-w-2xl text-sm leading-7 text-muted md:text-base">
          {description}
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}