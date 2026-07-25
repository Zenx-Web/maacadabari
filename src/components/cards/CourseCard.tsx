import Link from "next/link";

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
      className="block rounded-card border border-border bg-surface p-lg transition-colors hover:border-brand-red"
    >
      <h3 className="text-h5 text-text-primary">{title}</h3>
      <p className="mt-xs text-caption text-text-secondary uppercase tracking-buttons">
        {duration}
      </p>
      <p className="mt-sm text-body-sm text-text-muted">{description}</p>
    </Link>
  );
}
