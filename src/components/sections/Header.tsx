"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/data";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-sand)]/80 bg-[var(--color-paper)]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight text-[var(--color-ink)]">
          {siteConfig.brand}
        </a>

        <nav className="hidden items-center gap-6 text-sm text-[var(--color-stone)] md:flex">
          {siteConfig.nav.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-[var(--color-ink)]">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden items-center rounded-full bg-[var(--color-terracotta)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--color-terracotta-deep)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-terracotta)] focus-visible:ring-offset-2 sm:inline-flex"
          >
            Let&apos;s talk
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-sand)] bg-white text-[var(--color-ink)] transition hover:border-[var(--color-terracotta)]/40 md:hidden"
          >
            {open ? (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="1" y1="1" x2="13" y2="13" />
                <line x1="13" y1="1" x2="1" y2="13" />
              </svg>
            ) : (
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="0" y1="1" x2="16" y2="1" />
                <line x1="0" y1="6" x2="16" y2="6" />
                <line x1="0" y1="11" x2="16" y2="11" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-[var(--color-sand)] bg-[var(--color-paper)] px-5 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-[var(--color-stone)] transition hover:bg-[var(--color-sand)]/40 hover:text-[var(--color-ink)]"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-[var(--color-terracotta)] px-3 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-[var(--color-terracotta-deep)]"
            >
              Let&apos;s talk
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
