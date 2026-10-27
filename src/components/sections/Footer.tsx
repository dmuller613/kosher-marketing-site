import { siteConfig } from "@/lib/data";
import { CurrentYear } from "@/components/CurrentYear";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-sand)] bg-[var(--color-paper)]">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-1">
            <p className="font-display text-base font-semibold tracking-tight text-[var(--color-ink)]">
              {siteConfig.brand}
            </p>
            <p className="text-sm text-[var(--color-stone)]">
              Helping kosher brands reach the people who are ready to find them.
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
            <div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-stone)]">Navigate</p>
              <ul className="space-y-2">
                {siteConfig.nav.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="text-sm text-[var(--color-stone)] transition hover:text-[var(--color-terracotta-deep)]">
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#work" className="text-sm text-[var(--color-stone)] transition hover:text-[var(--color-terracotta-deep)]">Work</a>
                </li>
              </ul>
            </div>

            <div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--color-stone)]">Contact</p>
              <ul className="space-y-2">
                <li>
                  <a href={`mailto:${siteConfig.email}`} className="text-sm text-[var(--color-stone)] transition hover:text-[var(--color-terracotta-deep)]">
                    {siteConfig.email}
                  </a>
                </li>
                <li>
                  <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer" className="text-sm text-[var(--color-stone)] transition hover:text-[var(--color-terracotta-deep)]">
                    Instagram ↗
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-[var(--color-sand)] pt-6 text-xs text-[var(--color-stone)]">
          © <CurrentYear /> David Muller. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
