"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { siteConfig } from "@/lib/data";
import { SectionReveal } from "@/components/sections/SectionReveal";

export function FAQSection() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="bg-[var(--color-paper)] py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-10">
        <SectionReveal className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-terracotta-deep)]">
            FAQ
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.05em] text-[var(--color-ink)] sm:text-4xl">
            Questions people ask before they hire.
          </h2>
        </SectionReveal>

        <div className="space-y-3">
          {siteConfig.faq.map((item, index) => {
            const isOpen = open === index;
            return (
              <SectionReveal key={item.question} delay={index * 0.04}>
                <div
                  className={`overflow-hidden rounded-[1.5rem] border bg-white shadow-[0_10px_25px_rgba(22,36,58,0.04)] transition-colors duration-200 ${
                    isOpen
                      ? "border-[var(--color-terracotta)]/30 shadow-[0_12px_32px_rgba(22,36,58,0.07)]"
                      : "border-[var(--color-sand)]"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-base font-semibold text-[var(--color-ink)] sm:text-lg">
                      {item.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[var(--color-sand)] bg-[var(--color-paper)] text-[var(--color-terracotta-deep)]"
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                        <line x1="6" y1="2" x2="6" y2="10"/>
                        <line x1="2" y1="6" x2="10" y2="6"/>
                      </svg>
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-[var(--color-terracotta)]/15 px-6 pb-5 pt-4">
                          <p className="text-base leading-7 text-[var(--color-stone)]">{item.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
