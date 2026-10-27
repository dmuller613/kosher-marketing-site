import { siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-sand)] bg-[var(--color-paper)]">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="space-y-1">
            <p className="font-display text-base font-semibold tracking-tight text-[var(--color-ink)]">
              {siteConfig.brand}
            </p>
            <p className="text-sm text-[var(--color-stone)]">
              Helping kosher brands reach the people who are ready to find them.
            </p>
          </div>

          <div className="flex flex-col gap-2 text-sm text-[var(--color-stone)] sm:flex-row sm:items-center sm:gap-6">
            <a href={`mailto:${siteConfig.email}`} className="transition hover:text-[var(--color-terracotta-deep)]">
              {siteConfig.email}
            </a>
            <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer" className="transition hover:text-[var(--color-terracotta-deep)]">
              Instagram ↗
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-[var(--color-sand)] pt-6 text-xs text-[var(--color-stone)]">
          © 2025 David Muller. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
