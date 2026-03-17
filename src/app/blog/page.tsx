import type { Metadata } from "next";
import { PostList } from "@/components/blog/post-list";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/lib/config/site";
import { getAllPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Arquivo de artigos do blog pessoal.",
};

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <Container className="space-y-10 py-10 md:py-14">
      <section className="glass-panel rounded-[2rem] p-8 md:p-10">
        <span className="eyebrow">Arquivo</span>
        <h1 className="section-title mt-5">Textos sobre código, processo e consistência.</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
          {siteConfig.blogDescription} Todos os artigos são escritos em MDX, o que mantém o desafio simples de evoluir e fácil de publicar na Netlify.
        </p>
      </section>

      <PostList
        posts={posts}
        title="Todos os posts"
        description="Cada post nasce de um arquivo local, tipado e renderizado no servidor com App Router."
      />
    </Container>
  );
}