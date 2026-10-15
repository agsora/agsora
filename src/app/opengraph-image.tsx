import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";
import { siteConfig } from "@/config/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const iconDataUri = `data:image/png;base64,${readFileSync(
  join(process.cwd(), "public/brand/mark-on-dark.png")
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
          background: "#0B1220",
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
              "radial-gradient(ellipse closest-side, rgba(212,176,106,0.12) 0%, rgba(212,176,106,0) 100%)",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={iconDataUri} width={48} height={35} alt="" />
          <span
            style={{
              display: "flex",
              fontSize: 26,
              fontWeight: 600,
              letterSpacing: "0.12em",
              color: "#f2f4f8",
            }}
          >
            AG<span style={{ color: "#d4b06a" }}>·</span>SORA
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
            borderTop: "1px solid #222d45",
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
