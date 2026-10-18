import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[var(--color-cream)] px-5 py-16">
      <div className="w-full max-w-lg rounded-[2rem] border border-[var(--color-sand)] bg-[var(--color-paper)] p-8 text-center shadow-[0_18px_50px_rgba(22,36,58,0.06)]">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-terracotta-deep)]">
          404
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-[-0.06em] text-[var(--color-ink)]">
          This page isn’t here.
        </h1>
        <p className="mt-4 text-lg leading-8 text-[var(--color-stone)]">
          The page you were looking for may have moved, but the right path is still to get in touch.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-[var(--color-terracotta)] px-6 py-3 text-base font-semibold text-white transition hover:bg-[var(--color-terracotta-deep)]"
          >
            Go home
          </Link>
          <a
            href="mailto:dmuller91@gmail.com"
            className="inline-flex items-center justify-center rounded-full border border-[var(--color-sand)] bg-white px-6 py-3 text-base font-semibold text-[var(--color-ink)] transition hover:border-[var(--color-terracotta)] hover:text-[var(--color-terracotta-deep)]"
          >
            Email David
          </a>
        </div>
      </div>
    </main>
  );
}
