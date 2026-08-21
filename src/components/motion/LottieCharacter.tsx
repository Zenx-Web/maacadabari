"use client";

import { useEffect, useRef, useState } from "react";
import { Lottie } from "lottie-react";

type Position =
  | "bottom-right"
  | "bottom-left"
  | "top-right"
  | "top-left"
  | "right"
  | "left";

const positionClasses: Record<Position, string> = {
  "bottom-right": "bottom-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "top-right": "top-4 right-4",
  "top-left": "top-4 left-4",
  right: "top-1/2 right-4 -translate-y-1/2",
  left: "top-1/2 left-4 -translate-y-1/2",
};

export function LottieCharacter({
  src,
  position = "bottom-right",
  size = "w-28 h-28",
  className = "",
}: {
  src: string;
  position?: Position;
  size?: string;
  className?: string;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`pointer-events-none absolute z-10 ${positionClasses[position]} ${size} ${className} transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
    >
      {isVisible && <Lottie src={src} autoplay loop className="size-full" />}
    </div>
  );
}
