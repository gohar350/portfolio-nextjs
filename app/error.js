"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="section">
      <div
        className="shell"
        style={{
          minHeight: "60svh",
          display: "grid",
          alignContent: "center",
          justifyItems: "center",
          textAlign: "center",
          gap: "1.25rem",
        }}
      >
        <span className="eyebrow">Error</span>
        <h1 style={{ fontSize: "var(--step-4)" }}>
          Something went <span className="grad">sideways</span>
        </h1>
        <p style={{ color: "var(--text-dim)", maxWidth: "44ch" }}>
          That page hit an unexpected error. Try again, or head back to the
          start.
        </p>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", justifyContent: "center" }}>
          <button className="btn btn--primary" onClick={() => reset()}>
            <i className="bi bi-arrow-clockwise" aria-hidden="true" />
            Try again
          </button>
          <Link href="/" className="btn btn--ghost">
            <i className="bi bi-house" aria-hidden="true" />
            Return home
          </Link>
        </div>
      </div>
    </main>
  );
}
