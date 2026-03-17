import type { SiteConfig } from "@/types/site";

export const siteConfig: SiteConfig = {
  blogName: process.env.BLOG_NAME ?? "Lucas Batista",
  blogTitle: process.env.BLOG_TITLE ?? "Diário de Código",
  blogDescription:
    process.env.BLOG_DESCRIPTION ??
    "Blog pessoal sobre frontend, carreira e construção de produtos web.",
  footerText:
    process.env.BLOG_FOOTER_TEXT ??
    "Feito com Next.js e publicado na Netlify.",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.URL ??
    "http://localhost:3000",
  author: {
    name: "Lucas Batista",
    role: "Frontend Developer em formação contínua",
    bio: "Escrevo sobre React, Next.js, arquitetura de interface e o caminho entre estudar e entregar software com intenção.",
  },
  navigation: [
    { href: "/", label: "Início" },
    { href: "/blog", label: "Blog" },
    { href: "/projetos", label: "Projetos" },
    { href: "/sobre", label: "Sobre" },
  ],
};