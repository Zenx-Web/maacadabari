import Link from "next/link";
import type { Category } from "@/lib/content";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Student Works", href: "/student-works" },
  { label: "Placements", href: "/placements" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

export function Footer({ categories }: { categories: Category[] }) {
  return (
    <footer className="border-t border-border bg-background-2">
      <div className="mx-auto max-w-wide px-mobile-pad tablet:px-tablet-pad laptop:px-laptop-pad py-2xl">
        <div className="grid grid-cols-1 tablet:grid-cols-4 gap-lg">
          <div>
            <p className="text-h6 text-text-primary">MAAC Adabari</p>
            <p className="mt-sm text-body-sm text-text-secondary">
              A premium AI-first creative education institute for Animation,
              VFX, Game Design, Digital Design, UI/UX, Broadcast and Digital
              Filmmaking &amp; Photography.
            </p>
          </div>

          <div>
            <p className="text-caption uppercase tracking-buttons text-text-muted">
              Quick Links
            </p>
            <ul className="mt-sm flex flex-col gap-xs">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-caption uppercase tracking-buttons text-text-muted">
              Courses
            </p>
            <ul className="mt-sm flex flex-col gap-xs">
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/courses/${category.slug}`}
                    className="text-body-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {category.navigationLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-caption uppercase tracking-buttons text-text-muted">
              Legal
            </p>
            <ul className="mt-sm flex flex-col gap-xs">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-text-secondary hover:text-text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-2xl text-caption text-text-muted">
          © {new Date().getFullYear()} MAAC Adabari. MAAC and Onlinevarsity
          are not universities. MAAC does not assure placements; jobs are at
          the sole discretion of recruiters.
        </p>
      </div>
    </footer>
  );
}
