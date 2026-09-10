import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #f5f9ff 0%, #ffffff 55%, #eef4ff 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(43,98,246,0.25) 0%, rgba(43,98,246,0) 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -140,
            left: -100,
            width: 420,
            height: 420,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(18,194,233,0.22) 0%, rgba(18,194,233,0) 70%)",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
            <defs>
              <linearGradient id="g" x1="4" y1="56" x2="60" y2="8" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#2B62F6" />
                <stop offset="1" stopColor="#12C2E9" />
              </linearGradient>
            </defs>
            <path d="M32 6 L57 56 L44.5 56 L32 30 L19.5 56 L7 56 Z" fill="url(#g)" />
            <path d="M32 22 L44 46 L36.5 46 L32 37 L27.5 46 L20 46 Z" fill="white" opacity={0.9} />
          </svg>
          <span style={{ fontSize: 42, fontWeight: 800, color: "#0a1730" }}>
            AG·SORA
          </span>
        </div>

        <div
          style={{
            marginTop: 48,
            fontSize: 60,
            fontWeight: 800,
            lineHeight: 1.15,
            color: "#0a1730",
            maxWidth: 900,
            display: "flex",
          }}
        >
          Build Smarter Systems. Grow Without Limits.
        </div>

        <div
          style={{
            marginTop: 28,
            fontSize: 28,
            color: "#52607a",
            maxWidth: 820,
            display: "flex",
          }}
        >
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
