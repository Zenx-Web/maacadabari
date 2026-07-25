import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import type { Category } from "@/lib/content";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/courses/${category.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-card border border-border bg-surface p-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand-red/60 hover:shadow-glow-primary"
    >
      {/* Radial glow that fades in on hover, per 10-effects.md ("glow
          is an accent, only during interaction") */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(120px circle at 20% 0%, rgba(229,57,53,0.16), transparent 70%)",
        }}
      />

      <div className="relative flex size-12 items-center justify-center rounded-icon bg-brand-red/10 text-brand-red transition-colors duration-300 group-hover:bg-brand-red/15">
        <Icon name={category.icon} className="size-6" />
      </div>

      <h3 className="relative mt-md text-h5 text-text-primary">
        {category.navigationLabel}
      </h3>
      <p className="relative mt-xs text-body-sm text-text-secondary flex-1">
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
    </Link>
  );
}
