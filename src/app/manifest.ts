import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.blogName,
    short_name: siteConfig.blogName,
    description: siteConfig.blogDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#f6f0e8",
    theme_color: "#bf5b38",
    lang: "pt-BR",
    icons: [
      {
        src: "/icon?size=192",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon?size=512",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}