import Link from "next/link";

/* Returns a real HTTP 404 so crawlers drop the URL, instead of the previous
   behaviour where any path rendered an empty page with status 200. */
export const metadata = {
  title: "Page not found — Muhammad Gohar",
  description: "That page does not exist.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="section">
      <div
        className="shell"
        style={{
          minHeight: "70svh",
          display: "grid",
          alignContent: "center",
          justifyItems: "center",
          textAlign: "center",
          gap: "1.25rem",
        }}
      >
        <span className="eyebrow">404</span>
        <h1 style={{ fontSize: "var(--step-4)" }}>
          This page <span className="grad">doesn&apos;t exist</span>
        </h1>
        <p style={{ color: "var(--text-dim)", maxWidth: "44ch" }}>
          The link may be out of date. Everything worth seeing is one tap away.
        </p>
        <div
          style={{
            display: "flex",
            gap: "0.6rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Link href="/" className="btn btn--primary">
            <i className="bi bi-house" aria-hidden="true" />
            Home
          </Link>
          <Link href="/portfolio" className="btn btn--ghost">
            <i className="bi bi-grid" aria-hidden="true" />
            Work
          </Link>
          <Link href="/resume" className="btn btn--ghost">
            <i className="bi bi-file-earmark-text" aria-hidden="true" />
            Résumé
          </Link>
        </div>
      </div>
    </main>
  );
}
