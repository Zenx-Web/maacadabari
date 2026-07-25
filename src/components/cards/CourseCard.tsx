import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CourseCard({
  href,
  title,
  duration,
  description,
}: {
  href: string;
  title: string;
  duration: string;
  description: string;
}) {
  return (
    <Link
      href={href}
      className="group relative flex flex-col overflow-hidden rounded-card border border-border bg-surface p-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand-red/60 hover:shadow-glow-primary"
    >
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
    </Link>
  );
}
