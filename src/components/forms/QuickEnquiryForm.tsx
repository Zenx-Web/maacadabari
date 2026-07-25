"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/Button";
import type { Category } from "@/lib/content";

// TODO(forms phase): wire to POST /api/leads once the Supabase
// `leads` table + Zod validation + Route Handler exist (see the plan's
// Phase 4). This is intentionally client-state-only for now — do not
// treat this as a working lead-capture form yet.
export function QuickEnquiryForm({ categories }: { categories: Category[] }) {
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitted");
  }

  if (status === "submitted") {
    return (
      <div className="glass-panel rounded-card border border-border p-lg text-center">
        <p className="text-h5 text-text-primary">Thank you!</p>
        <p className="mt-xs text-body-sm text-text-secondary">
          Our academic advisors will reach out to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass-panel rounded-card border border-border p-lg shadow-elevation-lg"
    >
      <p className="text-caption uppercase tracking-buttons text-brand-red">
        Quick Enquiry
      </p>
      <h3 className="mt-xs text-h5 text-text-primary">
        Start Your Creative Journey
      </h3>
      <p className="mt-xs text-body-sm text-text-secondary">
        Get free career counselling from our academic advisors.
      </p>

      <div className="mt-lg flex flex-col gap-sm">
        <input
          required
          type="text"
          name="name"
          placeholder="Your Name"
          className="h-12 rounded-button border border-border bg-white/[0.02] px-sm text-body-sm text-text-primary placeholder:text-text-muted focus:border-brand-red focus:outline-none"
        />
        <input
          required
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="h-12 rounded-button border border-border bg-white/[0.02] px-sm text-body-sm text-text-primary placeholder:text-text-muted focus:border-brand-red focus:outline-none"
        />
        <input
          required
          type="email"
          name="email"
          placeholder="Email Address"
          className="h-12 rounded-button border border-border bg-white/[0.02] px-sm text-body-sm text-text-primary placeholder:text-text-muted focus:border-brand-red focus:outline-none"
        />
        <select
          required
          name="courseInterest"
          defaultValue=""
          className="h-12 rounded-button border border-border bg-white/[0.02] px-sm text-body-sm text-text-primary focus:border-brand-red focus:outline-none [&>option]:bg-background-2"
        >
          <option value="" disabled>
            Select Course Interest
          </option>
          {categories.map((category) => (
            <option key={category.slug} value={category.slug}>
              {category.navigationLabel}
            </option>
          ))}
        </select>

        <Button type="submit" className="mt-xs w-full">
          Get Free Counselling
        </Button>

        <p className="text-center text-caption text-text-muted">
          We respect your privacy. Your information is 100% secure.
        </p>
      </div>
    </form>
  );
}
