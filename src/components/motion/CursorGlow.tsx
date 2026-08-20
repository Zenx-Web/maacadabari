"use client";

import { useEffect, useRef } from "react";

export function CursorGlow() {
  const dotRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const glow = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let raf: number;

    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const loop = () => {
      glow.current.x += (pos.current.x - glow.current.x) * 0.08;
      glow.current.y += (pos.current.y - glow.current.y) * 0.08;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${glow.current.x}px, ${glow.current.y}px)`;
      }
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* trailing glow blob */}
      <div
        ref={glowRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[9998] -translate-x-1/2 -translate-y-1/2"
        style={{ willChange: "transform" }}
      >
        <div className="size-[320px] rounded-full bg-brand-red/[0.07] blur-[80px]" />
      </div>
      {/* sharp dot */}
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-1/2"
        style={{ willChange: "transform" }}
      >
        <div className="size-2 rounded-full bg-brand-red mix-blend-screen" />
      </div>
    </>
  );
}
