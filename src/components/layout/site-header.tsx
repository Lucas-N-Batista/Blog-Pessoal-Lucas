import Link from "next/link";
import { Container } from "@/components/layout/container";
import { siteConfig } from "@/lib/config/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background backdrop-blur-xl">
      <Container className="flex items-center justify-between py-4">
        <Link className="group inline-flex items-center gap-3" href="/">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--accent),var(--success))] text-sm font-bold text-white shadow-lg transition-transform group-hover:scale-105">
            LB
          </span>
          <span>
            <strong className="block text-sm uppercase tracking-[0.24em] text-muted">
              Blog Pessoal
            </strong>
            <span className="font-serif text-2xl tracking-tight text-foreground">
              {siteConfig.blogName}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-2 md:flex">
          {siteConfig.navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted transition hover:bg-surface-strong hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}