import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/config/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          backgroundColor: "#fffaf4",
          backgroundImage:
            "radial-gradient(circle at top left, rgba(191, 91, 56, 0.3), transparent 45%), radial-gradient(circle at bottom right, rgba(45, 106, 79, 0.3), transparent 40%)",
          color: "#14261d",
        }}
      >
        <div
          style={{
            fontSize: 28,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#536157",
            display: "flex",
          }}
        >
          Blog Pessoal
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <div
            style={{
              fontSize: 82,
              lineHeight: 0.94,
              letterSpacing: "-0.04em",
              display: "flex",
              fontWeight: 700,
              maxWidth: "90%",
            }}
          >
            {siteConfig.blogTitle}
          </div>
          <div
            style={{
              fontSize: 30,
              lineHeight: 1.4,
              color: "#3f4d44",
              display: "flex",
            }}
          >
            {siteConfig.blogDescription}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 28,
            color: "#8f3d20",
          }}
        >
          <span>{siteConfig.author.name}</span>
          <span>{siteConfig.siteUrl.replace(/^https?:\/\//, "")}</span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}