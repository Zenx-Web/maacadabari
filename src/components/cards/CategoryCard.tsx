import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import type { Category } from "@/lib/content";

export function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      href={`/courses/${category.slug}`}
      className="group flex flex-col rounded-card border border-border bg-surface p-lg transition-colors hover:border-brand-red"
    >
      <Icon name={category.icon} className="size-8 text-brand-red" />
      <h3 className="mt-md text-h5 text-text-primary">
        {category.navigationLabel}
      </h3>
      <p className="mt-xs text-body-sm text-text-secondary flex-1">
        {category.heroSubtitle}
      </p>
      <p className="mt-sm text-caption uppercase tracking-buttons text-text-muted">
        {category.availableCourses.length} Course
        {category.availableCourses.length === 1 ? "" : "s"}
      </p>
      <span className="mt-md inline-flex items-center gap-xs text-body-sm font-medium text-text-primary group-hover:text-brand-red transition-colors">
        Explore
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
