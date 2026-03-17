import { ImageResponse } from "next/og";

export const size = {
  width: 512,
  height: 512,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fffaf4",
          backgroundImage:
            "radial-gradient(circle at top left, rgba(191, 91, 56, 0.5), transparent 48%), radial-gradient(circle at bottom right, rgba(45, 106, 79, 0.45), transparent 42%)",
        }}
      >
        <div
          style={{
            width: 300,
            height: 300,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            background: "linear-gradient(135deg, #bf5b38, #2d6a4f)",
            fontSize: 132,
            fontWeight: 700,
            letterSpacing: "-0.08em",
          }}
        >
          LB
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}