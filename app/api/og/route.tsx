import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") ?? "John Quevedo";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #2b1a12 0%, #5e3b28 100%)",
          color: "#fdf7f1",
          padding: "64px"
        }}
      >
        <div style={{ fontSize: 28, opacity: 0.85 }}>johnquevedo.dev</div>
        <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1, maxWidth: "90%" }}>
          {title}
        </div>
        <div style={{ fontSize: 28, opacity: 0.85 }}>Software + ML Projects</div>
      </div>
    ),
    {
      width: 1200,
      height: 630
    }
  );
}
