"use client";

import { useState, useEffect } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-sand)] bg-white shadow-[0_4px_20px_rgba(22,36,58,0.12)] transition hover:border-[var(--color-terracotta)] hover:shadow-[0_6px_24px_rgba(194,83,47,0.18)]"
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="var(--color-ink)" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="7" y1="12" x2="7" y2="2"/>
        <polyline points="3,6 7,2 11,6"/>
      </svg>
    </button>
  );
}
