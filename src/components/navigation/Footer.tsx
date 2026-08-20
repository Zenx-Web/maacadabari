import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
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
    <footer className="relative overflow-hidden border-t border-border bg-background-2">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand-red/60 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(600px circle at 0% 0%, rgba(229,57,53,0.06), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-wide px-mobile-pad tablet:px-tablet-pad laptop:px-laptop-pad py-2xl">
        <div className="flex flex-col laptop:flex-row laptop:items-center laptop:justify-between gap-lg border-b border-border pb-2xl">
          <div>
            <p className="text-h4 text-text-primary">
              Ready to start your creative journey?
            </p>
            <p className="mt-xs text-body-sm text-text-secondary">
              Book a free career counselling session with our academic
              advisors.
            </p>
          </div>
          <Button href="/book-counselling" size="lg" className="shrink-0">
            Book Career Counselling
          </Button>
        </div>

        <div className="mt-2xl grid grid-cols-1 tablet:grid-cols-4 gap-xl">
          <div>
            <div className="flex items-center gap-xs">
              <Image
                src="/images/logo/maac-logo.png"
                alt=""
                width={40}
                height={22}
                className="h-6 w-auto"
              />
              <p className="text-h6 text-text-primary">MAAC Adabari</p>
            </div>
            <p className="mt-sm text-body-sm text-text-secondary max-w-[36ch]">
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

        <div className="mt-2xl flex flex-col tablet:flex-row tablet:items-center tablet:justify-between gap-sm border-t border-border pt-lg">
          <p className="text-caption text-text-muted">
            © {new Date().getFullYear()} MAAC Adabari. All rights reserved.
          </p>
          <p className="text-caption text-text-muted">
            MAAC and Onlinevarsity are not universities. MAAC does not assure
            placements; jobs are at the sole discretion of recruiters.
          </p>
        </div>
      </div>
    </footer>
  );
}
