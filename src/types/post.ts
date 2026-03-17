import type { ReactNode } from "react";

export type PostFrontmatter = {
  title: string;
  excerpt: string;
  publishedAt: string;
  tags: string[];
  featured: boolean;
};

export type PostSummary = PostFrontmatter & {
  slug: string;
};

export type Post = PostSummary & {
  content: ReactNode;
};