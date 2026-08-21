"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRef, useState } from "react";

export function CourseCard({
  href,
  title,
  duration,
  description,
  image,
  video,
}: {
  href: string;
  title: string;
  duration: string;
  description: string;
  image?: string;
  video?: string;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoFailed, setVideoFailed] = useState(false);

  const showVideo = video && !videoFailed;

  return (
    <Link
      href={href}
      className="group relative flex flex-col overflow-hidden rounded-card border border-border bg-surface transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand-red/60 hover:shadow-glow-primary"
      onMouseEnter={() => videoRef.current?.play().catch(() => {})}
      onMouseLeave={() => {
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
    >
      {(image || video) && (
        <div className="relative aspect-video w-full overflow-hidden bg-background-2">
          {image && (
            <img
              src={image}
              alt={title}
              className={`absolute inset-0 size-full object-cover transition-opacity duration-300 ${showVideo ? "group-hover:opacity-0" : ""}`}
              loading="lazy"
            />
          )}
          {showVideo && (
            <video
              ref={videoRef}
              src={video}
              muted
              loop
              playsInline
              preload="none"
              onError={() => setVideoFailed(true)}
              className="absolute inset-0 size-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          )}
        </div>
      )}

      <div className="flex flex-1 flex-col p-lg">
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(160px circle at 15% 0%, rgba(229,57,53,0.14), transparent 70%)",
          }}
        />
        <h3 className="relative text-h5 text-text-primary">{title}</h3>
        <p className="relative mt-xs text-caption text-text-secondary uppercase tracking-buttons">
          {duration}
        </p>
        <p className="relative mt-sm text-body-sm text-text-muted flex-1">
          {description}
        </p>
        <span className="relative mt-md inline-flex items-center gap-xs text-body-sm font-medium text-text-primary group-hover:text-brand-red transition-colors duration-300">
          View Course
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
