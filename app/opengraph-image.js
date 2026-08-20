import { ImageResponse } from "next/og";

/**
 * Generated social preview card (1200×630).
 *
 * Replaces a hard-coded path to /assets/img/gohar.jpeg — a file that was never
 * in the repo, so every LinkedIn/X/WhatsApp share rendered a broken preview.
 * Generating it guarantees the asset exists and stays on-brand.
 */
export const alt = "Muhammad Gohar — Senior Software Engineer, Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const LIME = "#a2f34d";
const INK = "#090a0f";
const DIM = "#a8aab5";

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
          background: INK,
          padding: "72px 80px",
          position: "relative",
        }}
      >
        {/* accent glow */}
        <div
          style={{
            position: "absolute",
            top: -260,
            left: -160,
            width: 720,
            height: 720,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(162,243,77,0.22), rgba(9,10,15,0))",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 9999,
              background: LIME,
              display: "flex",
            }}
          />
          <div
            style={{
              color: LIME,
              fontSize: 26,
              letterSpacing: 4,
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            Senior Software Engineer · Lahore
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#ffffff",
              fontSize: 108,
              fontWeight: 700,
              letterSpacing: -4,
              lineHeight: 1.05,
              display: "flex",
            }}
          >
            Muhammad Gohar
          </div>
          <div
            style={{
              color: DIM,
              fontSize: 38,
              marginTop: 18,
              lineHeight: 1.35,
              display: "flex",
            }}
          >
            React · Next.js · Node.js — end-to-end web platforms
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 56,
            borderTop: "1px solid #2a2c36",
            paddingTop: 32,
          }}
        >
          {[
            ["3 yrs", "Experience"],
            ["100K+", "Daily users"],
            ["90+", "Lighthouse"],
            ["muhammadgohar.vercel.app", ""],
          ].map(([big, small]) => (
            <div key={big} style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  color: small ? "#ffffff" : LIME,
                  fontSize: small ? 40 : 26,
                  fontWeight: 700,
                  display: "flex",
                }}
              >
                {big}
              </div>
              {small ? (
                <div style={{ color: DIM, fontSize: 22, marginTop: 6, display: "flex" }}>
                  {small}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
