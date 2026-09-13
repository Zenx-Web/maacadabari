"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

const PARTICLE_COUNT = 60;

export function LoadingScreenParticles({ onComplete }: { onComplete: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onComplete();
      setShow(false);
      return;
    }

    const container = containerRef.current;
    const canvas = canvasRef.current;
    const logo = logoRef.current;
    const text = textRef.current;
    if (!container || !canvas || !logo || !text) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const cx = canvas.width / 2;
    const cy = canvas.height / 2;

    const particles = Array.from({ length: PARTICLE_COUNT }, (_, i) => {
      const angle = (i / PARTICLE_COUNT) * Math.PI * 2;
      const dist = 200 + (((i * 137) % 100) / 100) * 300;
      return {
        x: cx + Math.cos(angle) * dist,
        y: cy + Math.sin(angle) * dist,
        targetX: cx + (((i * 31) % 60) - 30),
        targetY: cy + (((i * 47) % 40) - 20),
        size: 1.5 + ((i * 13) % 30) / 10,
        progress: 0,
        color: i % 3 === 0 ? "#e53935" : i % 3 === 1 ? "#ff6b6b" : "#ffffff",
      };
    });

    let frame: number;
    let convergenceProgress = 0;
    let dispersing = false;
    let disperseProgress = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles) {
        let px: number, py: number;

        if (dispersing) {
          const dx = p.x - p.targetX;
          const dy = p.y - p.targetY;
          px = p.targetX + dx * disperseProgress * 2;
          py = p.targetY + dy * disperseProgress * 2;
        } else {
          const ease = 1 - Math.pow(1 - convergenceProgress, 3);
          px = p.x + (p.targetX - p.x) * ease;
          py = p.y + (p.targetY - p.y) * ease;
        }

        const alpha = dispersing ? 1 - disperseProgress : Math.min(1, convergenceProgress * 2);

        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha;
        ctx.fill();

        // Draw connecting lines when close
        if (!dispersing && convergenceProgress > 0.5) {
          const lineAlpha = (convergenceProgress - 0.5) * 2 * 0.15;
          ctx.globalAlpha = lineAlpha * (dispersing ? 1 - disperseProgress : 1);
          for (const other of particles) {
            if (other === p) continue;
            const oease = 1 - Math.pow(1 - convergenceProgress, 3);
            const ox = other.x + (other.targetX - other.x) * oease;
            const oy = other.y + (other.targetY - other.y) * oease;
            const d = Math.hypot(px - ox, py - oy);
            if (d < 40) {
              ctx.beginPath();
              ctx.moveTo(px, py);
              ctx.lineTo(ox, oy);
              ctx.strokeStyle = "#e53935";
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
      }
      ctx.globalAlpha = 1;
      frame = requestAnimationFrame(draw);
    };

    draw();

    const tl = gsap.timeline({
      onComplete: () => {
        cancelAnimationFrame(frame);
        setShow(false);
        onComplete();
      },
    });

    // Phase 1: Particles converge (0 - 1.0s)
    tl.set(logo, { opacity: 0, scale: 0.9 })
      .set(text, { opacity: 0 })
      .to({ val: 0 }, {
        val: 1,
        duration: 1.0,
        ease: "power2.inOut",
        onUpdate: function () {
          convergenceProgress = this.targets()[0].val;
        },
      }, 0);

    // Phase 2: Logo appears as particles arrive (0.7s)
    tl.to(logo, { opacity: 1, scale: 1, duration: 0.3, ease: "power2.out" }, 0.7);

    // Phase 3: Text appears (1.0s)
    tl.to(text, { opacity: 1, duration: 0.3, ease: "power2.out" }, 1.0);

    // Phase 4: Particles disperse (1.4s)
    tl.to({ val: 0 }, {
      val: 1,
      duration: 0.5,
      ease: "power2.in",
      onStart: () => { dispersing = true; },
      onUpdate: function () {
        disperseProgress = this.targets()[0].val;
      },
    }, 1.4);

    // Phase 5: Fade out (1.7s)
    tl.to(logo, { opacity: 0, duration: 0.2 }, 1.6)
      .to(text, { opacity: 0, duration: 0.2 }, 1.6)
      .to(container, { opacity: 0, duration: 0.3, ease: "power2.inOut" }, 1.7);

    return () => {
      cancelAnimationFrame(frame);
      tl.kill();
    };
  }, [onComplete]);

  if (!show) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[10000] flex items-center justify-center bg-background-1"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

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
