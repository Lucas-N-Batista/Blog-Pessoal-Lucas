import type { Metadata } from "next";
import { Cormorant_Garamond, Space_Grotesk } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { siteConfig } from "@/lib/config/site";
import "./globals.css";

const bodyFont = Space_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
});

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.blogTitle,
    template: `%s | ${siteConfig.blogName}`,
  },
  description: siteConfig.blogDescription,
  applicationName: siteConfig.blogName,
  keywords: [
    "blog pessoal",
    "next.js",
    "react",
    "typescript",
    "frontend",
    "desafio dio",
  ],
  authors: [{ name: siteConfig.author.name }],
  creator: siteConfig.author.name,
  publisher: siteConfig.blogName,
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": `${siteConfig.siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: siteConfig.blogTitle,
    description: siteConfig.blogDescription,
    url: siteConfig.siteUrl,
    siteName: siteConfig.blogName,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: siteConfig.blogTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.blogTitle,
    description: siteConfig.blogDescription,
    images: ["/twitter-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${bodyFont.variable} ${displayFont.variable} antialiased`}>
        <div className="page-shell">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
