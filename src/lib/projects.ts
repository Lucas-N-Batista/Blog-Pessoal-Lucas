import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "blog-pessoal-next",
    title: "Blog Pessoal com Next.js",
    summary:
      "Projeto do desafio da DIO modernizado com App Router, TypeScript, MDX, SEO e deploy na Netlify.",
    status: "concluido",
    stack: ["Next.js", "TypeScript", "Tailwind", "MDX", "Netlify"],
    repoUrl: "https://github.com/lucasbatista/blog-pessoal-lucas",
    source: "curado",
  },
  {
    slug: "tela-login-typescript",
    title: "Tela de Login em TypeScript",
    summary:
      "Interface de autenticação com foco em responsividade e organização de componentes para front-end inicial.",
    status: "concluido",
    stack: ["TypeScript", "HTML", "CSS"],
    source: "curado",
  },
  {
    slug: "design-system-pessoal",
    title: "Design System Pessoal",
    summary:
      "Catálogo de componentes reutilizáveis para acelerar novos projetos de estudo e portfólio.",
    status: "em-progresso",
    stack: ["React", "TypeScript", "Storybook"],
    source: "curado",
  },
];

type GithubRepository = {
  name: string;
  html_url: string;
  homepage: string | null;
  description: string | null;
  language: string | null;
  fork: boolean;
  archived: boolean;
  stargazers_count: number;
  updated_at: string;
};

function mapGithubRepositoryToProject(repo: GithubRepository): Project {
  return {
    slug: repo.name.toLowerCase(),
    title: repo.name,
    summary: repo.description ?? "Repositório público no GitHub.",
    status: repo.archived ? "concluido" : "em-progresso",
    stack: repo.language ? [repo.language, "GitHub"] : ["GitHub"],
    repoUrl: repo.html_url,
    liveUrl: repo.homepage || undefined,
    source: "github",
    stars: repo.stargazers_count,
    updatedAt: repo.updated_at,
  };
}

async function getGithubProjects(): Promise<Project[]> {
  const username = process.env.GITHUB_USERNAME;

  if (!username) {
    return [];
  }

  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
  };

  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const response = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=6&type=owner`,
    {
      headers,
      next: {
        revalidate: 3600,
      },
    },
  );

  if (!response.ok) {
    return [];
  }

  const data = (await response.json()) as GithubRepository[];

  return data
    .filter((repo) => !repo.fork)
    .map(mapGithubRepositoryToProject);
}

export async function getPortfolioProjects(): Promise<Project[]> {
  const githubProjects = await getGithubProjects();
  const slugs = new Set(projects.map((project) => project.slug));
  const filteredGithubProjects = githubProjects.filter(
    (project) => !slugs.has(project.slug),
  );

  return [...projects, ...filteredGithubProjects].slice(0, 9);
}