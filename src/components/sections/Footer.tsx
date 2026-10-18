import { siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-[var(--color-sand)] bg-[var(--color-paper)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-8 text-sm text-[var(--color-stone)] sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <p className="font-semibold text-[var(--color-ink)]">{siteConfig.brand}</p>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
          <a href={`mailto:${siteConfig.email}`} className="transition hover:text-[var(--color-terracotta-deep)]">
            {siteConfig.email}
          </a>
          <a href={siteConfig.instagramUrl} target="_blank" rel="noreferrer" className="transition hover:text-[var(--color-terracotta-deep)]">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
