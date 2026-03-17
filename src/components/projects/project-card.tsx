import Link from "next/link";
import { formatDate } from "@/lib/format-date";
import type { Project } from "@/types/project";

type ProjectCardProps = {
  project: Project;
};

function statusLabel(status: Project["status"]): string {
  return status === "concluido" ? "Concluído" : "Em progresso";
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="glass-panel h-full rounded-[1.75rem] p-6">
      <div className="mb-5 flex items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <span className="text-xs font-semibold uppercase tracking-[0.24em] text-muted">
            Projeto
          </span>
          {project.source === "github" ? (
            <span className="text-xs text-muted">Importado do GitHub</span>
          ) : null}
        </div>
        <span className="rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-strong">
          {statusLabel(project.status)}
        </span>
      </div>

      <h3 className="font-serif text-3xl leading-none tracking-tight text-foreground">
        {project.title}
      </h3>

      <p className="mt-4 text-sm leading-7 text-muted">{project.summary}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-line bg-background-strong px-3 py-1 text-xs font-medium text-muted"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-8 flex flex-wrap gap-4 text-sm font-semibold text-foreground">
        {typeof project.stars === "number" ? <span>★ {project.stars}</span> : null}
        {project.updatedAt ? <span>Atualizado em {formatDate(project.updatedAt)}</span> : null}
        {project.repoUrl ? (
          <Link className="transition hover:text-accent-strong" href={project.repoUrl} rel="noreferrer" target="_blank">
            Repositório
          </Link>
        ) : null}
        {project.liveUrl ? (
          <Link className="transition hover:text-accent-strong" href={project.liveUrl} rel="noreferrer" target="_blank">
            Projeto online
          </Link>
        ) : null}
      </div>
    </article>
  );
}