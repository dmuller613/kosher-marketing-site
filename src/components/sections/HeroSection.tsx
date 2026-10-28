"use client";

import { motion, type Variants } from "framer-motion";
import { siteConfig } from "@/lib/data";

const easeOut = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easeOut } },
};

const cardItem: Variants = {
  hidden: { opacity: 0, x: 24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: easeOut } },
};

export function HeroSection() {
  return (
    <section id="top" className="relative mx-auto max-w-6xl overflow-hidden px-5 pb-14 pt-10 sm:px-8 lg:px-10 lg:pb-20 lg:pt-16">
      <div aria-hidden="true" className="hero-dots pointer-events-none absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_60%_80%_at_50%_50%,transparent_30%,black)]" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 -top-32 h-[520px] w-[520px] rounded-full bg-[var(--color-terracotta)]/6 blur-[90px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-32 bottom-0 h-[380px] w-[380px] rounded-full bg-[var(--color-navy)]/5 blur-[80px]" />
      <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          className="space-y-7"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={item} className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-terracotta-deep)]">
            {siteConfig.hero.eyebrow}
          </motion.p>

          <motion.h1 variants={item} className="max-w-xl font-display text-4xl font-bold leading-[0.96] tracking-[-0.05em] text-[var(--color-ink)] sm:text-5xl lg:text-6xl">
            {siteConfig.hero.heading}
          </motion.h1>

          <motion.p variants={item} className="max-w-lg text-lg leading-8 text-[var(--color-stone)]">
            {siteConfig.hero.subheading}
          </motion.p>

          <motion.div variants={item} className="flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-terracotta)] px-6 py-3 text-base font-semibold text-white shadow-[0_6px_24px_rgba(194,83,47,0.32)] transition hover:bg-[var(--color-terracotta-deep)] hover:shadow-[0_8px_28px_rgba(194,83,47,0.42)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-terracotta)] focus-visible:ring-offset-2"
            >
              Let&apos;s talk about your brand
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-sand)] bg-white px-6 py-3 text-base font-semibold text-[var(--color-ink)] transition hover:border-[var(--color-terracotta)] hover:text-[var(--color-terracotta-deep)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-terracotta)] focus-visible:ring-offset-2"
            >
              Email me
            </a>
          </motion.div>

          <motion.div variants={item} className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--color-stone)]">Who I work with</p>
            <div className="flex flex-wrap gap-2">
              {siteConfig.hero.supportLine.split(" · ").map((chipItem) => (
                <span
                  key={chipItem}
                  className="inline-flex items-center rounded-full border border-[var(--color-sand)] bg-white px-3 py-1 text-xs font-semibold text-[var(--color-stone)]"
                >
                  {chipItem}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative"
          variants={cardItem}
          initial="hidden"
          animate="show"
        >
          <div className="overflow-hidden rounded-[2rem] border border-[var(--color-sand)] bg-[var(--color-paper)] p-4 shadow-[0_28px_80px_rgba(22,36,58,0.09)]">
            <div className="rounded-[1.5rem] bg-gradient-to-br from-[var(--color-navy)] via-[#2b4a73] to-[var(--color-terracotta)] p-6 text-white">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/25">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <circle cx="12" cy="12" r="5"/>
                    <circle cx="17.5" cy="6.5" r="1.5" fill="white" stroke="none"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-white">@kosherdadeats</p>
                  <p className="text-[11px] text-white/70">8,300+ followers</p>
                </div>
              </div>

              <blockquote className="mb-6 border-l-2 border-white/30 pl-4">
                <p className="text-base leading-7 text-white/90 italic">
                  &ldquo;Someone who understands how to connect with the kosher world.&rdquo;
                </p>
              </blockquote>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/15 bg-white/8 p-3 backdrop-blur-sm">
                  <div className="text-2xl font-black tracking-[-0.05em] text-white">96M+</div>
                  <p className="mt-0.5 text-[11px] leading-4 text-white/70">video views</p>
                </div>
                <div className="rounded-2xl border border-white/15 bg-white/8 p-3 backdrop-blur-sm">
                  <div className="text-2xl font-black tracking-[-0.05em] text-white">10M+</div>
                  <p className="mt-0.5 text-[11px] leading-4 text-white/70">website sessions</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
