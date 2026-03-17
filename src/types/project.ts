export type ProjectStatus = "concluido" | "em-progresso";

export type Project = {
  slug: string;
  title: string;
  summary: string;
  status: ProjectStatus;
  stack: string[];
  repoUrl?: string;
  liveUrl?: string;
  source?: "curado" | "github";
  stars?: number;
  updatedAt?: string;
};