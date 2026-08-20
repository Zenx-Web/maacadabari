import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { FloatingOrbs } from "@/components/motion/FloatingOrbs";
import { MagneticButton } from "@/components/motion/MagneticButton";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "MAAC Adabari is Assam's newest MAAC center — an AI-first creative education institute built around CareerX and CreatorX learning tracks.",
};

const pillars = [
  {
    title: "AI-First Curriculum",
    description:
      "Every program integrates AI tools into the creative workflow, not as an add-on but as a core part of how students learn to work.",
  },
  {
    title: "CareerX",
    description:
      "Industry-ready skills, production-grade portfolios and placement preparation for AVGC-XR and Media & Entertainment careers.",
  },
  {
    title: "CreatorX",
    description:
      "Freelancing, personal branding, monetization and original IP creation for students building in the creator economy.",
  },
  {
    title: "Professional Infrastructure",
    description:
      "Industry-standard software and hardware across every learning category, from Animation to Game Design.",
  },
];

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      <div className="relative overflow-hidden">
        <FloatingOrbs />
        <div aria-hidden className="absolute inset-0 glow-mesh" />
        <Section className="relative">
          <Container size="wide">
            <Badge>About MAAC Adabari</Badge>
            <h1 className="mt-md text-display-lg tracking-display max-w-reading">
              Assam&apos;s Newest MAAC Center, Built For The{" "}
              <span className="text-gradient-animate">AI Era</span>
            </h1>
            <p className="mt-lg text-body-lg text-text-secondary max-w-reading">
              MAAC Adabari carries forward the MAAC/Aptech legacy of 25+
              years in creative education, reimagined as an AI-first
              institute preparing students for both industry careers and the
              creator economy.
            </p>
          </Container>
        </Section>
      </div>

      <Section className="pt-0">
        <Container size="wide">
          <ScrollReveal
            stagger={0.08}
            className="grid grid-cols-1 tablet:grid-cols-2 gap-lg"
          >
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="shimmer-on-hover relative overflow-hidden rounded-card border border-border bg-surface p-lg transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/40 hover:shadow-glow-primary"
              >
                <h2 className="text-h5 text-text-primary">{pillar.title}</h2>
                <p className="mt-sm text-body-sm text-text-secondary">
                  {pillar.description}
                </p>
              </div>
            ))}
          </ScrollReveal>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container size="reading" className="text-center">
          <ScrollReveal>
            <h2 className="text-h3">Faculty, campus &amp; facility details</h2>
            <p className="mt-sm text-body-sm text-text-secondary">
              This section is being finalized with real faculty profiles and
              campus photography. In the meantime, speak to our academic
              advisors directly.
            </p>
            <div className="mt-md flex flex-wrap gap-sm justify-center">
              <MagneticButton>
                <Button href="/book-counselling">
                  Book Free Career Counselling
                </Button>
              </MagneticButton>
              <MagneticButton>
                <Button href="/courses" variant="secondary">
                  Explore Courses
                </Button>
              </MagneticButton>
            </div>
          </ScrollReveal>
        </Container>
      </Section>
    </main>
  );
}
