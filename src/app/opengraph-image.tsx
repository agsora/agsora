import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";
import { siteConfig } from "@/config/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const iconDataUri = `data:image/png;base64,${readFileSync(
  join(process.cwd(), "public/brand/icon-compact.png")
).toString("base64")}`;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          background: "#0d0f15",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -260,
            left: 300,
            width: 700,
            height: 500,
            background:
              "radial-gradient(circle, rgba(77,124,254,0.22) 0%, rgba(77,124,254,0) 70%)",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={iconDataUri} width={36} height={31} alt="" />
          <span style={{ fontSize: 26, fontWeight: 600, color: "#f2f4f8" }}>
            AG·SORA
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 62,
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "#f2f4f8",
              maxWidth: 900,
              display: "flex",
            }}
          >
            Build smarter systems.
          </div>
          <div
            style={{
              fontSize: 62,
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              color: "#7d8899",
              maxWidth: 900,
              display: "flex",
            }}
          >
            Grow without limits.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid #1e242f",
            paddingTop: 28,
            fontSize: 20,
            color: "#a3adbd",
          }}
        >
          <span>{siteConfig.tagline}</span>
          <span style={{ color: "#7d8899" }}>{siteConfig.domain}</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
