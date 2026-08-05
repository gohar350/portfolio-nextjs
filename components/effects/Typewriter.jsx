"use client";

import { useEffect, useState } from "react";

/**
 * Minimal rotating typewriter — replaces typed.js (~12KB) with ~40 lines.
 * Renders the first word server-side so there is no layout shift or blank frame.
 */
export default function Typewriter({
  words = [],
  typeSpeed = 65,
  deleteSpeed = 32,
  holdTime = 1900,
}) {
  const [index, setIndex] = useState(0);
  const [len, setLen] = useState(words[0]?.length ?? 0);
  const [deleting, setDeleting] = useState(false);
  const [animate, setAnimate] = useState(false);

  // Only start animating after mount, and never for reduced-motion users.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const boot = setTimeout(() => setAnimate(true), holdTime);
    return () => clearTimeout(boot);
  }, [holdTime]);

  useEffect(() => {
    if (!animate || words.length === 0) return;

    const word = words[index];

    if (!deleting && len === word.length) {
      const hold = setTimeout(() => setDeleting(true), holdTime);
      return () => clearTimeout(hold);
    }

    if (deleting && len === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
      return;
    }

    const tick = setTimeout(
      () => setLen((l) => l + (deleting ? -1 : 1)),
      deleting ? deleteSpeed : typeSpeed
    );
    return () => clearTimeout(tick);
  }, [animate, len, deleting, index, words, typeSpeed, deleteSpeed, holdTime]);

  return (
    <>
      <b>{(words[index] ?? "").slice(0, len)}</b>
      <span className="caret" aria-hidden="true" />
    </>
  );
}
