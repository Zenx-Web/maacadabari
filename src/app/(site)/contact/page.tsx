import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { FloatingOrbs } from "@/components/motion/FloatingOrbs";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with MAAC Adabari's academic advisors for questions about our creative education programs.",
};

export default function ContactPage() {
  return (
    <main className="flex flex-col">
      <div className="relative overflow-hidden">
        <FloatingOrbs />
        <div aria-hidden className="absolute inset-0 glow-mesh" />
        <Section className="relative">
          <Container size="wide">
            <div className="grid grid-cols-1 laptop:grid-cols-[1.1fr_0.9fr] gap-2xl items-start">
              <div>
                <Badge>Contact Us</Badge>
                <h1 className="mt-md text-display-lg tracking-display max-w-reading">
                  Let&apos;s Talk About Your{" "}
                  <span className="text-gradient-animate">Creative Career</span>
                </h1>
                <p className="mt-lg text-body-lg text-text-secondary max-w-reading">
                  MAAC Adabari is Assam&apos;s newest MAAC center. Send us a
                  message and our academic advisors will get back to you.
                </p>
                <ScrollReveal className="mt-2xl">
                  <p className="text-caption uppercase tracking-buttons text-text-muted">
                    Location
                  </p>
                  <p className="mt-xs text-body text-text-secondary">
                    MAAC Adabari, Assam
                  </p>
                </ScrollReveal>
              </div>

              <ContactForm />
            </div>
          </Container>
        </Section>
      </div>
    </main>
  );
}
