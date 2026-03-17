import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { ProjectCard } from "@/components/projects/project-card";
import { getPortfolioProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projetos",
  description: "Seleção de projetos que mostram evolução técnica, organização e consistência de entrega.",
};

export default async function ProjectsPage() {
  const projects = await getPortfolioProjects();

  return (
    <Container className="space-y-10 py-10 md:py-14">
      <section className="glass-panel rounded-[2rem] p-8 md:p-10">
        <span className="eyebrow">Portfólio</span>
        <h1 className="section-title mt-5">Projetos para além do tutorial.</h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-muted">
          Uma vitrine de entregas orientadas por aprendizado real: arquitetura, componentização, deploy e evolução contínua.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </section>
    </Container>
  );
}