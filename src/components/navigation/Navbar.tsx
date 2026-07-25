"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { Category } from "@/lib/content";

export function Navbar({ categories }: { categories: Category[] }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 min-h-[88px] border-b border-border bg-background-1/75 backdrop-blur-[20px]">
      <div className="mx-auto flex min-h-[88px] max-w-wide items-center justify-between gap-md px-mobile-pad tablet:px-tablet-pad laptop:px-laptop-pad py-sm">
        <Link
          href="/"
          className="text-h6 font-sans text-text-primary whitespace-nowrap"
        >
          MAAC Adabari
        </Link>

        <nav className="hidden laptop:flex items-center gap-md flex-wrap justify-end">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/courses/${category.slug}`}
              className="text-body-sm text-text-secondary hover:text-text-primary transition-colors whitespace-nowrap"
            >
              {category.navigationLabel}
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
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="laptop:hidden text-text-primary"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav className="laptop:hidden absolute inset-x-0 top-[88px] bg-background-1 border-b border-border px-mobile-pad py-lg flex flex-col gap-md">
          {categories.map((category) => (
            <Link
              key={category.slug}
              href={`/courses/${category.slug}`}
              onClick={() => setOpen(false)}
              className="text-body text-text-secondary hover:text-text-primary transition-colors"
            >
              {category.navigationLabel}
            </Link>
          ))}
          <Button href="/book-counselling" className="mt-sm">
            Book Career Counselling
          </Button>
        </nav>
      )}
    </header>
  );
}
