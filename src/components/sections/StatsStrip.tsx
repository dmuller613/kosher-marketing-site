"use client";

import { useEffect, useRef, useState } from "react";

type Stat = { numeric: number; suffix: string; label: string; href: string };

const stats: Stat[] = [
  { numeric: 10, suffix: "M+", label: "website sessions", href: "#work" },
  { numeric: 96, suffix: "M", label: "video views", href: "#proof" },
  { numeric: 8.3, suffix: "K", label: "kosher followers", href: "#proof" },
  { numeric: 5, suffix: "+", label: "brands served", href: "#work" },
];

function AnimatedNumber({ numeric, suffix }: { numeric: number; suffix: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasRun = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasRun.current) {
          hasRun.current = true;
          if (reducedMotion) { setDisplay(numeric); return; }
          const duration = 1000;
          const start = Date.now();
          const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplay(parseFloat((eased * numeric).toFixed(numeric % 1 !== 0 ? 1 : 0)));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [numeric]);

  return (
    <span ref={ref} className="font-display text-3xl font-black tracking-[-0.06em] text-[var(--color-ink)] transition group-hover:text-[var(--color-terracotta)]">
      {display}{suffix}
    </span>
  );
}

export function StatsStrip() {
  return (
    <div className="border-t border-[var(--color-sand)] bg-white">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-2 divide-x divide-[var(--color-sand)] md:grid-cols-4">
          {stats.map((stat) => (
            <a
              key={stat.label}
              href={stat.href}
              className="group flex flex-col items-center gap-1 px-6 py-7 text-center transition hover:bg-[var(--color-terracotta)]/3"
            >
              <AnimatedNumber numeric={stat.numeric} suffix={stat.suffix} />
              <span className="text-xs font-medium text-[var(--color-stone)]">{stat.label}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
