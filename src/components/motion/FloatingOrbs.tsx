"use client";

import { useEffect, useRef } from "react";

export function FloatingOrbs() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const orbs = Array.from(el.children) as HTMLElement[];
    orbs.forEach((orb, i) => {
      const duration = 6000 + i * 1400;
      const delay = i * -1800;
      orb.animate(
        [
          { transform: "translateY(0px) scale(1)" },
          { transform: "translateY(-28px) scale(1.06)" },
          { transform: "translateY(0px) scale(1)" },
        ],
        { duration, delay, iterations: Infinity, easing: "ease-in-out" }
      );
    });
  }, []);

  return (
    <div ref={ref} aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute top-[15%] left-[8%] size-[420px] rounded-full bg-brand-red/[0.055] blur-[90px]" />
      <div className="absolute top-[40%] right-[5%] size-[320px] rounded-full bg-brand-red/[0.04] blur-[80px]" />
      <div className="absolute bottom-[10%] left-[30%] size-[260px] rounded-full bg-white/[0.025] blur-[70px]" />
    </div>
  );
}
