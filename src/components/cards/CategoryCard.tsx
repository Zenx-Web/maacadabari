"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { TiltCard } from "@/components/motion/TiltCard";
import { getCategoryMedia } from "@/lib/category-media";
import type { Category } from "@/lib/content";

export function CategoryCard({ category }: { category: Category }) {
  const [videoFailed, setVideoFailed] = useState(false);
  const media = getCategoryMedia(category.slug);
  const showVideo = media?.video && !videoFailed;

  return (
    <TiltCard>
      <Link
        href={`/courses/${category.slug}`}
        className="group relative flex flex-col overflow-hidden rounded-card border border-border bg-surface transition-colors duration-300 ease-out hover:border-brand-red/60 hover:shadow-glow-primary"
      >
        {media && (
          <div className="relative aspect-[16/9] max-h-40 w-full overflow-hidden bg-background-2">
            {media.image && (
              <img
                src={media.image}
                alt={category.navigationLabel}
                className={`absolute inset-0 size-full object-cover ${showVideo ? "opacity-0" : ""}`}
                loading="lazy"
              />
            )}
            {showVideo && (
              <video
                src={media.video}
                autoPlay
                muted
                loop
                playsInline
                onError={() => setVideoFailed(true)}
                className="absolute inset-0 size-full object-cover"
              />
            )}
            <div className="absolute top-sm left-sm flex size-9 items-center justify-center rounded-full bg-background-1/80 backdrop-blur-sm text-brand-red border border-border/50 transition-all duration-300 group-hover:bg-brand-red/15 group-hover:scale-110 group-hover:rotate-6">
              <Icon name={category.icon} className="size-4" />
            </div>
          </div>
        )}

        <div className="relative flex flex-col p-lg">
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(160px circle at 50% 0%, rgba(229,57,53,0.18), transparent 70%)",
            }}
          />

          <h3 className="relative text-h5 text-text-primary">
            {category.navigationLabel}
          </h3>
          <p className="relative mt-xs text-body-sm text-text-secondary flex-1 line-clamp-3">
            {category.heroSubtitle}
          </p>
          <p className="relative mt-sm text-caption uppercase tracking-buttons text-text-muted">
            {category.availableCourses.length} Course
            {category.availableCourses.length === 1 ? "" : "s"}
          </p>
          <span className="relative mt-md inline-flex items-center gap-xs text-body-sm font-medium text-text-primary group-hover:text-brand-red transition-colors duration-300">
            Explore
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </Link>
    </TiltCard>
  );
}
