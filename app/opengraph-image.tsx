import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "C7 Consulting & IT Services — Strategy. Technology. Results.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#111111",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top: Logo mark + name */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          {/* C7 SVG mark */}
          <svg width="92" height="40" viewBox="0 0 92 40" fill="none">
            <path
              d="M32,6 Q8,6 8,20 Q8,34 32,34 L32,28 Q16,28 16,20 Q16,12 32,12 Z"
              fill="#C0C8D4"
            />
            <path
              d="M44,0 L88,0 L88,12 L52,40 L40,40 L76,12 L44,12 Z"
              fill="#E05A00"
            />
          </svg>
          <div style={{ color: "#9CA3AF", fontSize: "18px", fontWeight: 500, borderLeft: "1px solid #333", paddingLeft: "20px" }}>
            Consulting & IT Services
          </div>
        </div>

        {/* Middle: Hero text */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ color: "#E05A00", fontSize: "14px", fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase" }}>
            C7 Consulting & IT Services
          </div>
          <div style={{ color: "#ffffff", fontSize: "80px", fontWeight: 700, lineHeight: 1.1 }}>
            Strategy.<br />Technology.<br />Results.
          </div>
        </div>

        {/* Bottom: Tagline */}
        <div style={{ color: "#6B7280", fontSize: "22px" }}>
          Built to execute. c7-cits.com
        </div>
      </div>
    ),
    size
  );
}
