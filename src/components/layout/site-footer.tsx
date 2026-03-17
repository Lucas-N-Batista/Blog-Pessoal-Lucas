import { Container } from "@/components/layout/container";
import { siteConfig } from "@/lib/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-line pt-8 pb-12">
      <Container className="flex flex-col gap-3 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>{siteConfig.footerText}</p>
        <p>
          Desafio inspirado na trilha React da DIO, refeito com Next.js App Router.
        </p>
      </Container>
    </footer>
  );
}