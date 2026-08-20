import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { FloatingOrbs } from "@/components/motion/FloatingOrbs";
import { MagneticButton } from "@/components/motion/MagneticButton";

export const metadata: Metadata = {
  title: "Student Works",
  description:
    "A showcase of student projects and portfolio work from MAAC Adabari, coming soon.",
};

export default function StudentWorksPage() {
  return (
    <main className="flex flex-col">
      <div className="relative overflow-hidden">
        <FloatingOrbs />
        <div aria-hidden className="absolute inset-0 glow-mesh" />
        <Section className="relative">
          <Container size="wide">
            <Badge>Student Works</Badge>
            <h1 className="mt-md text-display-lg tracking-display max-w-reading">
              Student{" "}
              <span className="text-gradient-animate">Portfolio Showcase</span>
            </h1>
            <p className="mt-lg text-body-lg text-text-secondary max-w-reading">
              MAAC Adabari is a new center — this gallery will fill up with
              real student projects as our first cohorts graduate. We&apos;d
              rather show you real work than stock imagery.
            </p>
            <div className="mt-xl flex flex-wrap gap-sm">
              <MagneticButton>
                <Button href="/courses">Explore Courses</Button>
              </MagneticButton>
              <MagneticButton>
                <Button href="/book-counselling" variant="secondary">
                  Book Career Counselling
                </Button>
              </MagneticButton>
            </div>
          </Container>
        </Section>
      </div>

      <Section className="pt-0">
        <Container size="reading" className="text-center">
          <ScrollReveal>
            <p className="text-body-sm text-text-muted">
              Check back soon, or follow our category pages for the software
              and pipelines every program is built around.
            </p>
          </ScrollReveal>
        </Container>
      </Section>
    </main>
  );
}
