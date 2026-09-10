import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#08090d",
        }}
      >
        <svg width="128" height="128" viewBox="0 0 64 64" fill="none">
          <defs>
            <linearGradient id="g" x1="4" y1="56" x2="60" y2="8" gradientUnits="userSpaceOnUse">
              <stop offset="0" stopColor="#4D7CFE" />
              <stop offset="1" stopColor="#35D6EC" />
            </linearGradient>
          </defs>
          <path d="M32 10 L54 54 L43.5 54 L32 32 L20.5 54 L10 54 Z" fill="url(#g)" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
