import { cache } from "react";
import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { mdxComponents } from "@/mdx/components";
import type { Post, PostFrontmatter, PostSummary } from "@/types/post";

const postsDirectory = path.join(process.cwd(), "src/content/posts");

function normalizeTags(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.filter((tag): tag is string => typeof tag === "string");
}

function mapFrontmatter(data: Record<string, unknown>): PostFrontmatter {
  return {
    title: typeof data.title === "string" ? data.title : "Post sem título",
    excerpt:
      typeof data.excerpt === "string"
        ? data.excerpt
        : "Conteúdo publicado no blog pessoal.",
    publishedAt:
      typeof data.publishedAt === "string"
        ? data.publishedAt
        : new Date().toISOString(),
    tags: normalizeTags(data.tags),
    featured: typeof data.featured === "boolean" ? data.featured : false,
  };
}

function slugFromFileName(fileName: string): string {
  return fileName.replace(/\.mdx$/, "");
}

async function readPostFile(
  slug: string,
): Promise<{ frontmatter: PostFrontmatter; content: string }> {
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  const source = await fs.readFile(filePath, "utf8");
  const { data, content } = matter(source);

  return {
    frontmatter: mapFrontmatter(data),
    content,
  };
}

export const getAllPosts = cache(async (): Promise<PostSummary[]> => {
  const fileNames = await fs.readdir(postsDirectory);

  const posts = await Promise.all(
    fileNames
      .filter((fileName) => fileName.endsWith(".mdx"))
      .map(async (fileName) => {
        const slug = slugFromFileName(fileName);
        const { frontmatter } = await readPostFile(slug);

        return {
          slug,
          ...frontmatter,
        } satisfies PostSummary;
      }),
  );

  return posts.sort(
    (firstPost, secondPost) =>
      new Date(secondPost.publishedAt).getTime() -
      new Date(firstPost.publishedAt).getTime(),
  );
});

export const getPostBySlug = cache(async (slug: string): Promise<Post | null> => {
  try {
    const { content, frontmatter } = await readPostFile(slug);
    const compiledPost = await compileMDX({
      source: content,
      components: mdxComponents,
      options: {
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
      },
    });

    return {
      slug,
      content: compiledPost.content,
      ...frontmatter,
    };
  } catch {
    return null;
  }
});

export async function getAllPostSlugs(): Promise<string[]> {
  const posts = await getAllPosts();

  return posts.map((post) => post.slug);
}