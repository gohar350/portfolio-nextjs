"use client";

import { useEffect } from "react";

/**
 * Tiny motion engine — replaces AOS, purecounter and the scroll listeners.
 * ~1KB of behaviour instead of ~30KB of libraries.
 *
 *  [data-reveal]        → fades/slides in once when scrolled into view
 *  [data-count]         → counts up to its numeric value on first view
 *  .nav                 → gains .is-stuck after the page scrolls
 */
export default function Motion() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* ── Reveal on scroll ─────────────────────────────────────── */
    const targets = document.querySelectorAll("[data-reveal]:not(.is-visible)");

    if (reduced || !("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-visible"));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          });
        },
        { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
      );
      targets.forEach((el) => io.observe(el));

      /* ── Count-up numbers ───────────────────────────────────── */
      const counters = document.querySelectorAll("[data-count]");
      const co = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target;
            co.unobserve(el);

            const target = Number(el.dataset.count) || 0;
            const suffix = el.dataset.suffix || "";
            const duration = 1400;
            const start = performance.now();

            const tick = (now) => {
              const p = Math.min((now - start) / duration, 1);
              // easeOutExpo
              const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
              el.textContent = Math.round(target * eased) + suffix;
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          });
        },
        { threshold: 0.4 }
      );
      counters.forEach((el) => co.observe(el));

      /* ── Sticky nav state ───────────────────────────────────── */
      const nav = document.querySelector(".nav");
      const onScroll = () => {
        if (nav) nav.classList.toggle("is-stuck", window.scrollY > 24);
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });

      return () => {
        io.disconnect();
        co.disconnect();
        window.removeEventListener("scroll", onScroll);
      };
    }
  }, []);

  return null;
}
