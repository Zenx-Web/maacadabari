import type { Metadata } from "next";
import { getAllCategories } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { FloatingOrbs } from "@/components/motion/FloatingOrbs";
import { QuickEnquiryForm } from "@/components/forms/QuickEnquiryForm";

export const metadata: Metadata = {
  title: "Book Career Counselling",
  description:
    "Book a free career counselling session with MAAC Adabari's academic advisors to find the right creative program for you.",
};

const steps = [
  {
    title: "Tell us about you",
    description: "Share your interests and the course you're curious about.",
  },
  {
    title: "Talk to an advisor",
    description:
      "Our academic advisors call to understand your goals and answer questions.",
  },
  {
    title: "Pick your path",
    description:
      "Walk away with a clear program recommendation and next steps.",
  },
];

export default function BookCounsellingPage() {
  const categories = getAllCategories();

  return (
    <main className="flex flex-col">
      <div className="relative overflow-hidden">
        <FloatingOrbs />
        <div aria-hidden className="absolute inset-0 glow-mesh" />
        <Section className="relative">
          <Container size="wide">
            <div className="grid grid-cols-1 laptop:grid-cols-[1.1fr_0.9fr] gap-2xl items-start">
              <div>
                <Badge>Free Career Counselling</Badge>
                <h1 className="mt-md text-display-lg tracking-display max-w-reading">
                  Find The Right{" "}
                  <span className="text-gradient-animate">Creative Path</span>{" "}
                  For You
                </h1>
                <p className="mt-lg text-body-lg text-text-secondary max-w-reading">
                  Book a free, no-obligation session with our academic
                  advisors and get a clear recommendation for your creative
                  career.
                </p>

                <ScrollReveal
                  stagger={0.08}
                  className="mt-2xl flex flex-col gap-md"
                >
                  {steps.map((step, i) => (
                    <div key={step.title} className="flex gap-sm">
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-brand-red/10 text-brand-red text-body-sm">
                        {i + 1}
                      </span>
                      <div>
                        <p className="text-body-sm font-medium text-text-primary">
                          {step.title}
                        </p>
                        <p className="text-caption text-text-muted">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </ScrollReveal>
              </div>

              <QuickEnquiryForm categories={categories} />
            </div>
          </Container>
        </Section>
      </div>
    </main>
  );
}
