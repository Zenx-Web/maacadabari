import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { FloatingOrbs } from "@/components/motion/FloatingOrbs";
import { MagneticButton } from "@/components/motion/MagneticButton";

export const metadata: Metadata = {
  title: "Placements",
  description:
    "Career support and placement assistance at MAAC Adabari, part of the CareerX track offered across every program.",
};

const support = [
  {
    title: "Portfolio Development",
    description:
      "Every program builds a production-ready, industry-grade portfolio as part of CareerX.",
  },
  {
    title: "Placement Assistance",
    description:
      "Academic advisors guide students through interview preparation and industry connections.",
  },
  {
    title: "Career Guidance",
    description:
      "One-on-one counselling to help students choose the right program and career path.",
  },
];

export default function PlacementsPage() {
  return (
    <main className="flex flex-col">
      <div className="relative overflow-hidden">
        <FloatingOrbs />
        <div aria-hidden className="absolute inset-0 glow-mesh" />
        <Section className="relative">
          <Container size="wide">
            <Badge>Placements &amp; Career Support</Badge>
            <h1 className="mt-md text-display-lg tracking-display max-w-reading">
              CareerX: Built Into{" "}
              <span className="text-gradient-animate">Every Program</span>
            </h1>
            <p className="mt-lg text-body-lg text-text-secondary max-w-reading">
              MAAC Adabari is a new center, so we won&apos;t publish
              placement numbers until we have real, verifiable outcomes to
              share. Here&apos;s what career support looks like for every
              student, from day one.
            </p>
          </Container>
        </Section>
      </div>

      <Section className="pt-0">
        <Container size="wide">
          <ScrollReveal
            stagger={0.08}
            className="grid grid-cols-1 tablet:grid-cols-3 gap-lg"
          >
            {support.map((item) => (
              <div
                key={item.title}
                className="shimmer-on-hover relative overflow-hidden rounded-card border border-border bg-surface p-lg transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/40 hover:shadow-glow-primary"
              >
                <h2 className="text-h5 text-text-primary">{item.title}</h2>
                <p className="mt-sm text-body-sm text-text-secondary">
                  {item.description}
                </p>
              </div>
            ))}
          </ScrollReveal>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container size="reading" className="text-center">
          <ScrollReveal>
            <h2 className="text-h3">Talk to an academic advisor</h2>
            <p className="mt-sm text-body-sm text-text-secondary">
              Ask us directly about career outcomes for the program
              you&apos;re considering.
            </p>
            <div className="mt-md flex flex-wrap gap-sm justify-center">
              <MagneticButton>
                <Button href="/book-counselling">
                  Book Free Career Counselling
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button href="/contact" variant="secondary">
                  Contact Us
                </Button>
              </MagneticButton>
            </div>
          </ScrollReveal>
        </Container>
      </Section>
    </main>
  );
}
