"use client";

import { useEffect, useRef, useCallback } from "react";
import gsap from "gsap";

export function PageTransition() {
  const wipeRef = useRef<HTMLDivElement>(null);
  const redRef = useRef<HTMLDivElement>(null);
  const cyanRef = useRef<HTMLDivElement>(null);
  const scanlinesRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);

  const runTransition = useCallback(() => {
    const wipe = wipeRef.current;
    const red = redRef.current;
    const cyan = cyanRef.current;
    const scanlines = scanlinesRef.current;
    const bar = barRef.current;
    if (!wipe || !red || !cyan || !scanlines || !bar || isAnimating.current)
      return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    isAnimating.current = true;

    const tl = gsap.timeline({
      onComplete: () => {
        isAnimating.current = false;
        gsap.set([red, cyan, scanlines], { opacity: 0 });
      },
    });

    // Loading bar
    tl.set(bar, { scaleX: 0, opacity: 1 })
      .to(bar, { scaleX: 0.7, duration: 0.3, ease: "power2.out" });

    // Wipe in
    tl.set(wipe, { x: "-101%", opacity: 1 }, 0)
      .to(wipe, { x: "0%", duration: 0.35, ease: "power2.inOut" });

    // RGB channel split — red channel shifts right, cyan shifts left
    const glitchStart = 0.2;

    // Scanlines flash on during glitch
    tl.set(scanlines, { opacity: 0 }, 0)
      .to(scanlines, { opacity: 0.4, duration: 0.03 }, glitchStart)
      .to(scanlines, { opacity: 0.15, duration: 0.02 }, glitchStart + 0.06)
      .to(scanlines, { opacity: 0.35, duration: 0.03 }, glitchStart + 0.1)
      .to(scanlines, { opacity: 0, duration: 0.06 }, glitchStart + 0.16);

    // Red channel — aggressive clip-path slicing with rightward offset
    tl.set(red, { opacity: 0, x: 0 }, 0)
      .to(red, {
        keyframes: [
          { opacity: 0.7, x: 6, clipPath: "inset(15% 0 65% 0)", duration: 0.03 },
          { opacity: 0.9, x: -4, clipPath: "inset(45% 0 30% 0)", duration: 0.03 },
          { opacity: 0.6, x: 8, clipPath: "inset(70% 0 10% 0)", duration: 0.03 },
          { opacity: 0.8, x: -3, clipPath: "inset(5% 0 80% 0)", duration: 0.02 },
          { opacity: 1, x: 5, clipPath: "inset(35% 0 45% 0)", duration: 0.03 },
          { opacity: 0.7, x: -6, clipPath: "inset(55% 0 25% 0)", duration: 0.02 },
          { opacity: 0.5, x: 3, clipPath: "inset(80% 0 5% 0)", duration: 0.03 },
          { opacity: 0, x: 0, clipPath: "inset(0 0 0 0)", duration: 0.04 },
        ],
      }, glitchStart);

    // Cyan channel — mirrors red but offsets in opposite direction
    tl.set(cyan, { opacity: 0, x: 0 }, 0)
      .to(cyan, {
        keyframes: [
          { opacity: 0.6, x: -5, clipPath: "inset(20% 0 55% 0)", duration: 0.03 },
          { opacity: 0.8, x: 4, clipPath: "inset(50% 0 25% 0)", duration: 0.03 },
          { opacity: 0.5, x: -7, clipPath: "inset(75% 0 8% 0)", duration: 0.03 },
          { opacity: 0.7, x: 3, clipPath: "inset(8% 0 78% 0)", duration: 0.02 },
          { opacity: 0.9, x: -4, clipPath: "inset(40% 0 40% 0)", duration: 0.03 },
          { opacity: 0.6, x: 6, clipPath: "inset(60% 0 20% 0)", duration: 0.02 },
          { opacity: 0.4, x: -3, clipPath: "inset(85% 0 3% 0)", duration: 0.03 },
          { opacity: 0, x: 0, clipPath: "inset(0 0 0 0)", duration: 0.04 },
        ],
      }, glitchStart + 0.01);

    // Wipe out
    tl.to(wipe, {
      x: "101%",
      duration: 0.35,
      ease: "power2.inOut",
    }, 0.45);

    // Loading bar complete
    tl.to(bar, { scaleX: 1, opacity: 0, duration: 0.2, ease: "power2.out" }, 0.45);
  }, []);

  useEffect(() => {
    runTransition();
  }, [runTransition]);

  return (
    <>
      {/* Top loading bar */}
      <div
        ref={barRef}
        className="fixed top-0 left-0 right-0 z-[9999] h-[2px] origin-left"
        style={{
          background: "linear-gradient(90deg, #e53935, #ff6b6b, #e53935)",
          transform: "scaleX(0)",
          opacity: 0,
        }}
      />

      {/* Wipe overlay */}
      <div
        ref={wipeRef}
        className="fixed inset-0 z-[9998] pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, #e53935 0%, #1a0000 40%, #050505 100%)",
          transform: "translateX(-101%)",
          opacity: 0,
        }}
      />

      {/* RGB split — red channel */}
      <div
        ref={redRef}
        className="fixed inset-0 z-[9997] pointer-events-none"
        style={{
          background: "rgba(229, 57, 53, 0.35)",
          mixBlendMode: "screen",
          opacity: 0,
        }}
      />

      {/* RGB split — cyan channel */}
      <div
        ref={cyanRef}
        className="fixed inset-0 z-[9997] pointer-events-none"
        style={{
          background: "rgba(53, 200, 229, 0.25)",
          mixBlendMode: "screen",
          opacity: 0,
        }}
      />

      {/* Scanlines */}
      <div
        ref={scanlinesRef}
        className="fixed inset-0 z-[9997] pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)",
          opacity: 0,
        }}
      />
    </>
  );
}
