import { siteConfig } from "@/lib/data";

export function Header() {
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

        <a
          href="#contact"
          className="inline-flex items-center rounded-full bg-[var(--color-terracotta)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[var(--color-terracotta-deep)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-terracotta)] focus-visible:ring-offset-2"
        >
          Let&apos;s talk
        </a>
      </div>
    </header>
  );
}
