import type { Metadata } from "next";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/lib/config/site";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Conheça a proposta e a trajetória por trás do blog.",
};

const highlights = [
  "Next.js com App Router e TypeScript como base do projeto.",
  "Conteúdo em MDX para manter a criação de posts simples e versionada.",
  "Deploy preparado para Netlify, sem depender do template antigo do desafio.",
];

export default function AboutPage() {
  return (
    <Container className="py-10 md:py-14">
      <section className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass-panel rounded-[2rem] p-8 md:p-10">
          <span className="eyebrow">Quem escreve</span>
          <h1 className="section-title mt-5">{siteConfig.author.name}</h1>
          <p className="mt-5 text-lg leading-8 text-muted">{siteConfig.author.bio}</p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.24em] text-muted">
            {siteConfig.author.role}
          </p>
        </div>

        <div className="glass-panel rounded-[2rem] p-8 md:p-10">
          <span className="eyebrow">Propósito do projeto</span>
          <div className="mt-5 space-y-4 text-base leading-8 text-muted">
            <p>
              Este blog nasceu para resolver o desafio da DIO sem ficar preso à estrutura antiga do template original. A ideia central foi mantida: um blog pessoal, componentizado, com posts dinâmicos e preparado para nuvem.
            </p>
            <p>
              A diferença é que a implementação foi modernizada com App Router, tipagem forte e uma base mais sustentável para portfólio.
            </p>
          </div>

          <ul className="mt-8 grid gap-4">
            {highlights.map((highlight) => (
              <li
                key={highlight}
                className="rounded-2xl border border-line bg-background-strong px-5 py-4 text-sm leading-7 text-foreground"
              >
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </Container>
  );
}