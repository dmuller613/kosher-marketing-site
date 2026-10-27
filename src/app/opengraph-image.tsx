import { ImageResponse } from "next/og";

export const alt = "David Muller | Kosher Marketing";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#f6f0e6",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex" }}>
          <span style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#a9441f" }}>
            DAVID MULLER · KOSHER MARKETING
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ fontSize: "68px", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.04em", color: "#c2532f" }}>
            I already reach your customers.
          </div>
          <div style={{ fontSize: "68px", fontWeight: 900, lineHeight: 1.05, letterSpacing: "-0.04em", color: "#16243a" }}>
            Let&apos;s get them to your door.
          </div>
          <div style={{ fontSize: "22px", color: "#5b6474", fontWeight: 500, marginTop: "4px" }}>
            Helping kosher brands find their customers — and customers find their brands.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: "48px" }}>
            {(
              [["10M+", "website sessions"], ["96M", "video views"], ["8.3K", "kosher followers"]] as [string, string][]
            ).map(([val, label]) => (
              <div key={label} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <span style={{ fontSize: "28px", fontWeight: 900, letterSpacing: "-0.04em", color: "#16243a" }}>{val}</span>
                <span style={{ fontSize: "13px", color: "#5b6474", fontWeight: 500 }}>{label}</span>
              </div>
            ))}
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ background: "#c2532f", borderRadius: "999px", padding: "12px 28px", fontSize: "15px", fontWeight: 700, color: "white" }}>
              kosher-marketing.com
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
