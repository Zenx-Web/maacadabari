"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import type { Category } from "@/lib/content";

const staticLinks = [
  { label: "Student Works", href: "/student-works" },
  { label: "Placements", href: "/placements" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar({ categories }: { categories: Category[] }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);

  return (
    <><header className="sticky top-0 z-50 min-h-[88px] border-b border-border bg-background-1/75 backdrop-blur-[20px]">
      <div className="mx-auto flex min-h-[88px] max-w-wide items-center justify-between gap-md px-mobile-pad tablet:px-tablet-pad laptop:px-laptop-pad py-sm">
        <Link
          href="/"
          className="flex items-center gap-xs text-h6 font-sans text-text-primary whitespace-nowrap"
        >
          <Image
            src="/images/logo/maac-logo.png"
            alt=""
            width={40}
            height={22}
            className="h-6 w-auto"
            priority
          />
          MAAC Adabari
        </Link>

        <nav className="hidden laptop:flex items-center gap-lg">
          <div
            className="relative"
            onBlur={(e) => {
              if (e.currentTarget.contains(e.relatedTarget as Node)) return;
              window.setTimeout(() => setCoursesOpen(false), 150);
            }}
          >
            <button
              type="button"
              aria-expanded={coursesOpen}
              onClick={() => setCoursesOpen((v) => !v)}
              className="flex items-center gap-1 text-body-sm text-text-secondary hover:text-text-primary transition-colors"
            >
              Courses
              <ChevronDown
                className={`size-4 transition-transform duration-200 ${coursesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {coursesOpen && (
              <div className="absolute left-1/2 top-full -translate-x-1/2 pt-sm">
                <div className="w-[640px] rounded-card border border-border bg-background-2/95 backdrop-blur-[20px] p-md shadow-elevation-lg">
                  <div className="grid grid-cols-2 gap-1">
                    {categories.map((category) => (
                      <Link
                        key={category.slug}
                        href={`/courses/${category.slug}`}
                        className="group flex items-center gap-sm rounded-icon p-sm hover:bg-white/6 transition-colors"
                      >
                        <span className="flex size-9 shrink-0 items-center justify-center rounded-icon bg-brand-red/10 text-brand-red">
                          <Icon name={category.icon} className="size-5" />
                        </span>
                        <span>
                          <span className="block text-body-sm text-text-primary group-hover:text-brand-red transition-colors">
                            {category.navigationLabel}
                          </span>
                          <span className="block text-caption text-text-muted">
                            {category.availableCourses.length} Course
                            {category.availableCourses.length === 1
                              ? ""
                              : "s"}
                          </span>
                        </span>
                      </Link>
                    ))}
                  </div>
                  <Link
                    href="/courses"
                    className="mt-xs block rounded-icon px-sm py-1 text-caption uppercase tracking-buttons text-brand-red hover:bg-white/6 transition-colors"
                  >
                    View All Courses →
                  </Link>
                </div>
              </div>
            )}
          </div>

          {staticLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-body-sm text-text-secondary hover:text-text-primary transition-colors whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden laptop:flex items-center gap-sm">
          <Button href="/book-counselling" size="sm">
            Book Career Counselling
          </Button>
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="laptop:hidden text-text-primary"
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

    </header>
      <div
        className={`laptop:hidden fixed inset-x-0 top-[88px] bottom-0 z-[999] bg-background-1 transition-all duration-300 ${mobileOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
      >
        <nav className="flex flex-col h-full overflow-y-auto px-mobile-pad py-lg">
          <p className="text-caption uppercase tracking-buttons text-text-muted mb-xs">
            Courses
          </p>
          <div className="grid grid-cols-1 gap-1">
            {categories.map((category, i) => (
              <Link
                key={category.slug}
                href={`/courses/${category.slug}`}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-sm rounded-card p-sm hover:bg-white/5 transition-all duration-200"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-icon bg-brand-red/10 text-brand-red">
                  <Icon name={category.icon} className="size-4" />
                </span>
                <span className="text-body-sm text-text-primary">
                  {category.navigationLabel}
                </span>
              </Link>
            ))}
          </div>

          <div className="my-md border-t border-border/50" />

          <div className="flex flex-col gap-1">
            {staticLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-card p-sm text-body text-text-secondary hover:text-text-primary hover:bg-white/5 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-auto pt-lg">
            <Button
              href="/book-counselling"
              className="w-full justify-center"
              size="lg"
            >
              Book Career Counselling
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}
