"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

export function LoadingScreenGlitch({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const redRef = useRef<HTMLDivElement>(null);
  const cyanRef = useRef<HTMLDivElement>(null);
  const scanlinesRef = useRef<HTMLDivElement>(null);
  const noiseRef = useRef<HTMLCanvasElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onComplete();
      setShow(false);
      return;
    }

    const container = containerRef.current;
    const logo = logoRef.current;
    const red = redRef.current;
    const cyan = cyanRef.current;
    const scanlines = scanlinesRef.current;
    const noise = noiseRef.current;
    const text = textRef.current;
    if (!container || !logo || !red || !cyan || !scanlines || !noise || !text) return;

    const ctx = noise.getContext("2d");
    if (!ctx) return;

    noise.width = window.innerWidth;
    noise.height = window.innerHeight;

    let noiseFrame: number;
    const drawNoise = () => {
      const imageData = ctx.createImageData(noise.width, noise.height);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const v = ((i * 7 + performance.now() * 0.1) % 256) | 0;
        data[i] = v;
        data[i + 1] = v;
        data[i + 2] = v;
        data[i + 3] = 180;
      }
      ctx.putImageData(imageData, 0, 0);
      noiseFrame = requestAnimationFrame(drawNoise);
    };
    drawNoise();

    const tl = gsap.timeline({
      onComplete: () => {
        cancelAnimationFrame(noiseFrame);
        setShow(false);
        onComplete();
      },
    });

    // Phase 1: Static noise (0 - 0.6s)
    tl.set(logo, { opacity: 0, scale: 0.95 })
      .set(text, { opacity: 0 })
      .set([red, cyan], { opacity: 0 })
      .set(scanlines, { opacity: 0.5 });

    // Phase 2: Logo glitches in through RGB split (0.6s - 1.2s)
    tl.to(noise, { opacity: 0.3, duration: 0.3 }, 0.5)
      .to(scanlines, { opacity: 0.3, duration: 0.2 }, 0.5)
      .to(logo, { opacity: 1, scale: 1, duration: 0.15, ease: "power2.out" }, 0.6);

    // RGB split burst on logo
    tl.to(red, {
      keyframes: [
        { opacity: 0.8, x: 8, duration: 0.04 },
        { opacity: 0.6, x: -5, duration: 0.04 },
        { opacity: 0.9, x: 6, duration: 0.03 },
        { opacity: 0.5, x: -3, duration: 0.04 },
        { opacity: 0.7, x: 4, duration: 0.03 },
        { opacity: 0, x: 0, duration: 0.05 },
      ],
    }, 0.6);

    tl.to(cyan, {
      keyframes: [
        { opacity: 0.7, x: -7, duration: 0.04 },
        { opacity: 0.5, x: 5, duration: 0.04 },
        { opacity: 0.8, x: -5, duration: 0.03 },
        { opacity: 0.4, x: 3, duration: 0.04 },
        { opacity: 0.6, x: -3, duration: 0.03 },
        { opacity: 0, x: 0, duration: 0.05 },
      ],
    }, 0.62);

    // Glitch clip-path on logo
    tl.to(logo, {
      keyframes: [
        { clipPath: "inset(20% 0 60% 0)", x: 3, duration: 0.04 },
        { clipPath: "inset(50% 0 25% 0)", x: -2, duration: 0.04 },
        { clipPath: "inset(70% 0 10% 0)", x: 4, duration: 0.03 },
        { clipPath: "inset(5% 0 80% 0)", x: -3, duration: 0.04 },
        { clipPath: "inset(0 0 0 0)", x: 0, duration: 0.05 },
      ],
    }, 0.7);

    // Phase 3: Text resolves (1.0s)
    tl.to(text, { opacity: 1, duration: 0.2, ease: "power2.out" }, 1.0);

    // Phase 4: Second glitch burst + noise kills (1.3s)
    tl.to(noise, { opacity: 0, duration: 0.15 }, 1.3)
      .to(scanlines, { opacity: 0, duration: 0.15 }, 1.3);

    // Second RGB burst
    tl.to(red, {
      keyframes: [
        { opacity: 0.6, x: 5, duration: 0.03 },
        { opacity: 0.4, x: -3, duration: 0.03 },
        { opacity: 0, x: 0, duration: 0.04 },
      ],
    }, 1.3);

    tl.to(cyan, {
      keyframes: [
        { opacity: 0.5, x: -4, duration: 0.03 },
        { opacity: 0.3, x: 3, duration: 0.03 },
        { opacity: 0, x: 0, duration: 0.04 },
      ],
    }, 1.32);

    // Phase 5: Fade out entire screen (1.6s - 1.9s)
    tl.to(container, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut",
    }, 1.6);

    return () => {
      cancelAnimationFrame(noiseFrame);
      tl.kill();
    };
  }, [onComplete]);

  if (!show) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-background-1"
    >
      {/* TV noise canvas */}
      <canvas
        ref={noiseRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.6 }}
      />

      {/* Scanlines */}
      <div
        ref={scanlinesRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.35) 2px, rgba(0,0,0,0.35) 4px)",
          opacity: 0,
        }}
      />

      {/* RGB red channel */}
      <div
        ref={redRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "rgba(229, 57, 53, 0.3)",
          mixBlendMode: "screen",
          opacity: 0,
        }}
      />

      {/* RGB cyan channel */}
      <div
        ref={cyanRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "rgba(53, 200, 229, 0.2)",
          mixBlendMode: "screen",
          opacity: 0,
        }}
      />

      {/* Logo + Text */}
      <div className="relative z-10 flex flex-col items-center gap-md">
        <div ref={logoRef} style={{ opacity: 0 }}>
          <Image
            src="/images/logo/maac-logo.png"
            alt="MAAC Adabari"
            width={80}
            height={44}
            className="h-12 w-auto"
            priority
          />
        </div>
        <div
          ref={textRef}
          className="text-h4 font-sans tracking-headings text-text-primary"
          style={{ opacity: 0 }}
        >
          MAAC Adabari
        </div>
      </div>
    </div>
  );
}
