"use client";

import { FormEvent, useState, useRef } from "react";
import { Button } from "@/components/ui/Button";
import {
  checkSpam,
  recordSubmission,
  cleanPhone,
  isValidPhone,
  submitToSheets,
} from "@/lib/gsheets";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const fd = new FormData(form);
    const name = (fd.get("name") as string).trim();
    const email = (fd.get("email") as string).trim();
    const rawPhone = fd.get("phone") as string;
    const message = (fd.get("message") as string).trim();
    const phone = cleanPhone(rawPhone);

    // Validation
    const errors: string[] = [];
    if (name.length < 2) errors.push("Name must be at least 2 characters.");
    if (!email) errors.push("Enter a valid email address.");
    if (!isValidPhone(phone))
      errors.push("Enter a valid 10-digit mobile number.");

    if (errors.length) {
      setErrorMsg(errors.join(" "));
      setStatus("error");
      return;
    }

    // Anti-spam
    const spam = checkSpam(phone);
    if (!spam.allowed) {
      setErrorMsg(spam.reason);
      setStatus("error");
      return;
    }

    setStatus("submitting");
    setErrorMsg("");

    try {
      await submitToSheets({
        name,
        email,
        phone,
        message,
        page: window.location.href,
        ts: new Date().toISOString(),
        ref: `REF-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`,
      });
      recordSubmission(phone);
      setStatus("success");
      form.reset();
    } catch (err) {
      setErrorMsg(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again later."
      );
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="glass-panel rounded-card border border-border p-lg text-center">
        <p className="text-h5 text-text-primary">Message sent!</p>
        <p className="mt-xs text-body-sm text-text-secondary">
          Our team will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="glass-panel rounded-card border border-border p-lg shadow-elevation-lg"
    >
      <div className="flex flex-col gap-sm">
        {status === "error" && errorMsg && (
          <div className="rounded-button border border-red-500/30 bg-red-500/10 px-sm py-xs text-body-sm text-red-400">
            {errorMsg}
          </div>
        )}

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
        <textarea
          name="message"
          rows={4}
          placeholder="How can we help?"
          className="rounded-button border border-border bg-white/[0.02] px-sm py-sm text-body-sm text-text-primary placeholder:text-text-muted focus:border-brand-red focus:outline-none resize-none"
        />

        {/* Honeypot */}
        <input
          type="text"
          name="website"
          autoComplete="off"
          tabIndex={-1}
          aria-hidden="true"
          className="absolute opacity-0 pointer-events-none h-0 w-0"
        />

        <Button
          type="submit"
          className="mt-xs w-full"
          disabled={status === "submitting"}
        >
          {status === "submitting" ? "Sending…" : "Send Message"}
        </Button>

        <p className="text-center text-caption text-text-muted">
          We respect your privacy. Your information is 100% secure.
        </p>
      </div>
    </form>
  );
}
