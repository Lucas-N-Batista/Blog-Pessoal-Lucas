import { PostList } from "@/components/blog/post-list";
import { Hero } from "@/components/home/hero";
import { Container } from "@/components/layout/container";
import { getAllPosts } from "@/lib/posts";

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <Container className="space-y-16 py-10 md:py-14">
      <Hero featuredPost={posts[0]} totalPosts={posts.length} />
      <PostList
        posts={posts}
        title="Artigos recentes"
        description="Uma trilha de textos sobre frontend, arquitetura e o processo de transformar estudo em produto publicável."
      />
    </Container>
  );
}
