"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import contact from "@/utiles/contact";

const LINKS = [
  { href: "/", label: "Home", icon: "bi-house" },
  { href: "/about", label: "About", icon: "bi-person" },
  { href: "/resume", label: "Resume", icon: "bi-file-earmark-text" },
  { href: "/portfolio", label: "Work", icon: "bi-grid" },
  { href: "/contact", label: "Contact", icon: "bi-chat-dots" },
];

export default function Header() {
  const pathname = usePathname();
  const isActive = (href) => pathname === href;

  return (
    <>
      {/* ── Mobile: slim top bar ─────────────────────────────── */}
      <div className="topbar">
        <Link href="/" className="brand" aria-label="Muhammad Gohar — home">
          <span className="brand__mark" aria-hidden="true">
            MG
          </span>
          <span>Gohar</span>
        </Link>

        <div className="topbar__socials">
          <a
            className="icon-btn"
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="bi bi-linkedin" />
          </a>
          <a
            className="icon-btn"
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="bi bi-github" />
          </a>
          <a
            className="icon-btn"
            href={`mailto:${contact.email}`}
            aria-label="Email"
          >
            <i className="bi bi-envelope" />
          </a>
        </div>
      </div>

      {/* ── Desktop: floating pill nav ───────────────────────── */}
      <header className="nav">
        <Link href="/" className="brand" aria-label="Muhammad Gohar — home">
          <span className="brand__mark" aria-hidden="true">
            MG
          </span>
          <span>Muhammad Gohar</span>
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav__link ${isActive(l.href) ? "is-active" : ""}`}
              aria-current={isActive(l.href) ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <a className="nav__cta" href={`mailto:${contact.email}`}>
          <span className="pulse" aria-hidden="true" />
          Available for work
        </a>
      </header>

      {/* ── Mobile: bottom tab dock ──────────────────────────── */}
      <nav className="dock" aria-label="Primary">
        {LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className={`dock__item ${isActive(l.href) ? "is-active" : ""}`}
            aria-current={isActive(l.href) ? "page" : undefined}
          >
            <i className={`bi ${l.icon}`} aria-hidden="true" />
            <span>{l.label}</span>
          </Link>
        ))}
      </nav>
    </>
  );
}
