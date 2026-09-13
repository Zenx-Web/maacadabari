"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

export function LoadingScreenFilmReel({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const scanlineRef = useRef<HTMLDivElement>(null);
  const vignetteRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const barTrackRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onComplete();
      setShow(false);
      return;
    }

    const container = containerRef.current;
    const logo = logoRef.current;
    const text = textRef.current;
    const scanline = scanlineRef.current;
    const vignette = vignetteRef.current;
    const bar = barRef.current;
    const barTrack = barTrackRef.current;
    if (!container || !logo || !text || !scanline || !vignette || !bar || !barTrack) return;

    const tl = gsap.timeline({
      onComplete: () => {
        setShow(false);
        onComplete();
      },
    });

    // Initial state
    tl.set(logo, { opacity: 0, scale: 0.9 })
      .set(text, { opacity: 0, y: 8 })
      .set(scanline, { y: "-100%" })
      .set(bar, { scaleX: 0 });

    // Loading bar grows throughout
    tl.to(bar, {
      scaleX: 0.6,
      duration: 0.8,
      ease: "power1.out",
    }, 0);

    // Logo scales in
    tl.to(logo, {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
    }, 0.2);

    // Text fades up
    tl.to(text, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: "power2.out",
    }, 0.6);

    // Bar reaches end
    tl.to(bar, {
      scaleX: 1,
      duration: 0.4,
      ease: "power2.inOut",
    }, 0.8);

    // Red scanline sweeps down
    tl.to(scanline, {
      y: "100%",
      duration: 0.6,
      ease: "power2.inOut",
    }, 1.1);

    // Everything fades out
    tl.to(vignette, { opacity: 0, duration: 0.3 }, 1.4)
      .to(logo, { opacity: 0, scale: 1.05, duration: 0.3, ease: "power2.in" }, 1.4)
      .to(text, { opacity: 0, duration: 0.2 }, 1.5)
      .to(barTrack, { opacity: 0, duration: 0.2 }, 1.5)
      .to(container, { opacity: 0, duration: 0.3, ease: "power2.inOut" }, 1.6);

    return () => tl.kill();
  }, [onComplete]);

  if (!show) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-background-1"
    >
      {/* Vignette */}
      <div
        ref={vignetteRef}
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at center, transparent 0%, rgba(0,0,0,0.7) 100%)",
        }}
      />

      {/* Red scanline sweep */}
      <div
        ref={scanlineRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, transparent 45%, rgba(229,57,53,0.4) 48%, rgba(229,57,53,0.8) 50%, rgba(229,57,53,0.4) 52%, transparent 55%, transparent 100%)",
          transform: "translateY(-100%)",
        }}
      />

      {/* Logo + Text + Bar */}
      <div className="relative z-10 flex flex-col items-center gap-md">
        <div ref={logoRef} style={{ opacity: 0 }}>
          <Image
            src="/images/logo/maac-logo.png"
            alt="MAAC Adabari"
            width={100}
            height={55}
            className="h-14 w-auto"
            priority
          />
        </div>
        <div
          ref={textRef}
          className="text-h3 font-sans tracking-headings text-text-primary"
          style={{ opacity: 0 }}
        >
          MAAC Adabari
        </div>

        {/* Loading bar */}
        <div
          ref={barTrackRef}
          className="w-48 h-[2px] rounded-full mt-sm"
          style={{ background: "rgba(255,255,255,0.1)" }}
        >
          <div
            ref={barRef}
            className="h-full rounded-full origin-left"
            style={{
              background: "linear-gradient(90deg, #e53935, #ff6b6b, #e53935)",
              transform: "scaleX(0)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
