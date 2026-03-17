import Link from "next/link";
import { Container } from "@/components/layout/container";

export default function NotFound() {
  return (
    <Container className="py-20">
      <section className="glass-panel mx-auto max-w-3xl rounded-[2rem] p-10 text-center">
        <span className="eyebrow">404</span>
        <h1 className="section-title mt-5">Esse conteúdo não foi encontrado.</h1>
        <p className="mt-5 text-lg leading-8 text-muted">
          O slug pode ter mudado ou o post ainda não existe no diretório de conteúdo.
        </p>
        <Link
          href="/blog"
          className="mt-8 inline-flex rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition hover:-translate-y-0.5 hover:bg-accent-strong"
        >
          Voltar para o blog
        </Link>
      </section>
    </Container>
  );
}