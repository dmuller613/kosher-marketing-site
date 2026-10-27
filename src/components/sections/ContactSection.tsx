"use client";

import { useState } from "react";
import { formOptions, siteConfig } from "@/lib/data";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    message: "",
    services: [] as string[],
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleCheckboxChange = (value: string) => {
    setFormData((current) => {
      const services = current.services.includes(value)
        ? current.services.filter((item) => item !== value)
        : [...current.services, value];

      return { ...current, services };
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const subject = encodeURIComponent(`New inquiry from ${formData.name || "a potential client"}`);
    const lines = [
      `Name: ${formData.name}`,
      `Business: ${formData.business}`,
      `Email: ${formData.email}`,
      `Needs: ${formData.services.join(", ") || "Not specified"}`,
      "",
      "Message:",
      formData.message,
    ];
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="border-t border-[var(--color-sand)] bg-[var(--color-paper)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-20">
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-terracotta-deep)]">
            Let&apos;s talk
          </p>
          <h2 className="font-display text-3xl font-bold tracking-[-0.05em] text-[var(--color-ink)] sm:text-4xl">
            Need a smarter way to reach the kosher customer?
          </h2>
          <p className="max-w-md text-lg leading-8 text-[var(--color-stone)]">
            Tell me who you are, what you&apos;re selling, and where you want more reach. I&apos;ll respond with the next step.
          </p>
          <ul className="space-y-2.5">
            {[
              { icon: "⚡", text: "Responds within 24 hours" },
              { icon: "☎️", text: "Free 30-min strategy call" },
              { icon: "✓", text: "No long-term contract required" },
            ].map(({ icon, text }) => (
              <li key={text} className="flex items-center gap-2.5 text-sm text-[var(--color-stone)]">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-terracotta)]/10 text-[11px]">
                  {icon}
                </span>
                {text}
              </li>
            ))}
          </ul>

          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center rounded-full border border-[var(--color-sand)] bg-white px-5 py-3 text-sm font-semibold text-[var(--color-ink)] transition hover:border-[var(--color-terracotta)] hover:text-[var(--color-terracotta-deep)]"
          >
            Email directly
          </a>
        </div>

        <form onSubmit={handleSubmit} className="rounded-[2rem] border border-[var(--color-sand)] bg-white p-6 shadow-[0_20px_60px_rgba(22,36,58,0.06)]">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-medium text-[var(--color-ink)]">
              Name
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="mt-2 w-full rounded-2xl border border-[var(--color-sand)] bg-[var(--color-paper)] px-3 py-3 text-[var(--color-ink)] outline-none transition placeholder:text-[var(--color-stone)]/50 focus:border-[var(--color-terracotta)]"
              />
            </label>

            <label className="text-sm font-medium text-[var(--color-ink)]">
              Business name
              <input
                name="business"
                value={formData.business}
                onChange={handleChange}
                required
                placeholder="Your business"
                className="mt-2 w-full rounded-2xl border border-[var(--color-sand)] bg-[var(--color-paper)] px-3 py-3 text-[var(--color-ink)] outline-none transition placeholder:text-[var(--color-stone)]/50 focus:border-[var(--color-terracotta)]"
              />
            </label>

            <label className="sm:col-span-2 text-sm font-medium text-[var(--color-ink)]">
              Email
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="mt-2 w-full rounded-2xl border border-[var(--color-sand)] bg-[var(--color-paper)] px-3 py-3 text-[var(--color-ink)] outline-none transition placeholder:text-[var(--color-stone)]/50 focus:border-[var(--color-terracotta)]"
              />
            </label>
          </div>

          <fieldset className="mt-6">
            <legend className="mb-3 text-sm font-medium text-[var(--color-ink)]">What do you need help with?</legend>
            <div className="grid gap-2 sm:grid-cols-2">
              {formOptions.map((option) => {
                const checked = formData.services.includes(option);
                return (
                  <label
                    key={option}
                    className={`flex cursor-pointer items-center gap-2.5 rounded-2xl border px-3 py-2.5 text-sm font-medium transition ${
                      checked
                        ? "border-[var(--color-terracotta)] bg-[var(--color-terracotta)]/8 text-[var(--color-ink)]"
                        : "border-[var(--color-sand)] bg-[var(--color-paper)] text-[var(--color-stone)] hover:border-[var(--color-terracotta)]/40"
                    }`}
                  >
                    <span className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border transition ${
                      checked
                        ? "border-[var(--color-terracotta)] bg-[var(--color-terracotta)]"
                        : "border-[var(--color-sand)] bg-white"
                    }`}>
                      {checked && (
                        <svg width="8" height="6" viewBox="0 0 8 6" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="1 3 3 5 7 1" />
                        </svg>
                      )}
                    </span>
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => handleCheckboxChange(option)}
                      className="sr-only"
                    />
                    {option}
                  </label>
                );
              })}
            </div>
          </fieldset>

          <label className="mt-6 block text-sm font-medium text-[var(--color-ink)]">
            Tell me a little about the project
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="A sentence or two about your business and what you want help with."
              className="mt-2 w-full rounded-2xl border border-[var(--color-sand)] bg-[var(--color-paper)] px-3 py-3 text-[var(--color-ink)] outline-none transition placeholder:text-[var(--color-stone)]/50 focus:border-[var(--color-terracotta)]"
            />
          </label>

          <div className="mt-6 flex items-center justify-between gap-4">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-terracotta)] px-6 py-3 text-sm font-semibold text-white shadow-[0_6px_24px_rgba(194,83,47,0.28)] transition hover:bg-[var(--color-terracotta-deep)] hover:shadow-[0_8px_28px_rgba(194,83,47,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-terracotta)] focus-visible:ring-offset-2"
            >
              Send inquiry
            </button>

            {submitted && (
              <span className="flex items-center gap-2 rounded-full border border-[var(--color-navy)]/20 bg-[var(--color-navy)]/8 px-4 py-2 text-sm font-medium text-[var(--color-navy)]">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="7" cy="7" r="6" />
                  <polyline points="4.5 7 6.5 9 9.5 5" />
                </svg>
                Email draft ready to send.
              </span>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
