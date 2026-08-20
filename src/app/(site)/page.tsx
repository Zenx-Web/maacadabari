import Image from "next/image";
import { getAllCategories } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CategoryCard } from "@/components/cards/CategoryCard";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { QuickEnquiryForm } from "@/components/forms/QuickEnquiryForm";
import { ParticleCanvas } from "@/components/motion/ParticleCanvas";
import { FloatingOrbs } from "@/components/motion/FloatingOrbs";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { CountUp } from "@/components/motion/CountUp";

const whyMaac = [
  "AI Integrated Learning",
  "Industry Ready Curriculum",
  "Experienced Faculty",
  "Professional Infrastructure",
  "Career Guidance",
  "Placement Assistance",
  "Portfolio Development",
  "Project Based Learning",
];

const stats = [
  { value: 25, suffix: "+", label: "Years of MAAC Legacy" },
  { value: 7,  suffix: "",  label: "Learning Categories" },
  { value: 30, suffix: "+", label: "Programs" },
];

export default function Home() {
  const categories = getAllCategories();

  return (
    <main className="flex flex-col">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <FloatingOrbs />
        <ParticleCanvas />
        <div aria-hidden className="absolute inset-0 glow-mesh" />
        <Section className="relative">
          <Container size="wide">
            <div className="grid grid-cols-1 laptop:grid-cols-[1.1fr_0.9fr] gap-2xl items-start">
              <div>
                <div className="flex flex-wrap gap-xs">
                  <Badge>AI-First Institute</Badge>
                  <Badge dotColor="bg-white">
                    Powered by CareerX &amp; CreatorX
                  </Badge>
                </div>
                <h1 className="mt-md text-display-xl tracking-display">
                  Step Into A New Dimension
                  <br />
                  <span className="text-gradient-animate">
                    Of Creativity
                  </span>
                </h1>
                <p className="mt-lg text-body-lg text-text-secondary max-w-reading">
                  MAAC Adabari is Assam&apos;s newest MAAC center — an
                  AI-first creative education institute preparing students
                  for both industry careers and the creator economy.
                </p>
                <div className="mt-xl flex flex-wrap gap-sm">
                  <MagneticButton>
                    <div className="relative pulse-ring">
                      <Button href="/book-counselling" size="lg">
                        Book Career Counselling
                      </Button>
                    </div>
                  </MagneticButton>
                  <MagneticButton>
                    <Button href="/courses" variant="secondary" size="lg">
                      Explore Courses
                    </Button>
                  </MagneticButton>
                </div>

                <div className="mt-2xl grid grid-cols-3 gap-md max-w-[420px]">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="text-h3 text-text-primary">
                        <CountUp value={stat.value} suffix={stat.suffix} />
                      </p>
                      <p className="text-caption text-text-muted">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <QuickEnquiryForm categories={categories} />
            </div>
          </Container>
        </Section>
      </div>

      {/* Why MAAC Adabari */}
      <Section className="pt-0">
        <Container>
          <ScrollReveal>
            <h2 className="text-h2 text-center">Why MAAC Adabari</h2>
          </ScrollReveal>
          <ScrollReveal
            stagger={0.08}
            className="mt-lg grid grid-cols-2 tablet:grid-cols-4 gap-md"
          >
            {whyMaac.map((item) => (
              <div
                key={item}
                className="shimmer-on-hover relative rounded-card border border-border bg-surface p-md text-center transition-all duration-300 hover:border-brand-red/40 hover:-translate-y-1 hover:shadow-glow-primary overflow-hidden"
              >
                <p className="text-body-sm text-text-secondary">{item}</p>
              </div>
            ))}
          </ScrollReveal>
        </Container>
      </Section>

      {/* Learning Categories */}
      <Section className="pt-0">
        <Container size="wide">
          <ScrollReveal className="text-center">
            <h2 className="text-h2">Choose Your Path</h2>
            <p className="mt-sm text-body text-text-secondary max-w-reading mx-auto">
              Seven learning categories, each leading to its own dedicated set
              of career and creator-focused programs.
            </p>
          </ScrollReveal>
          <ScrollReveal
            stagger={0.08}
            className="mt-lg grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-lg"
          >
            {categories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </ScrollReveal>
        </Container>
      </Section>

      {/* CareerX & CreatorX */}
      <Section className="pt-0">
        <Container>
          <ScrollReveal
            stagger={0.1}
            className="grid grid-cols-1 tablet:grid-cols-2 gap-lg"
          >
            <div className="shimmer-on-hover relative overflow-hidden rounded-card-lg border border-border bg-surface p-xl transition-all duration-300 hover:-translate-y-1 hover:border-brand-red/40">
              <div
                aria-hidden
                className="absolute inset-0 opacity-60"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 60% at 0% 0%, rgba(229,57,53,0.10), transparent 70%)",
                }}
              />
              <Image
                src="/images/logo/career-x.png"
                alt="CareerX"
                width={200}
                height={32}
                className="relative h-7 w-auto"
              />
              <h3 className="relative mt-md text-h3">Industry Ready Skills</h3>
              <p className="relative mt-sm text-body-sm text-text-secondary">
                Production-ready studio workflow, industry-grade portfolios
                and placement preparation for AVGC-XR and Media &amp;
                Entertainment careers.
              </p>
            </div>
            <div className="shimmer-on-hover relative overflow-hidden rounded-card-lg border border-border bg-surface p-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20">
              <div
                aria-hidden
                className="absolute inset-0 opacity-60"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 60% at 100% 0%, rgba(255,255,255,0.06), transparent 70%)",
                }}
              />
              <Image
                src="/images/logo/creator-x.png"
                alt="CreatorX"
                width={200}
                height={32}
                className="relative h-7 w-auto"
              />
              <h3 className="relative mt-md text-h3">
                Independent Content Creator &amp; Creative Entrepreneur
              </h3>
              <p className="relative mt-sm text-body-sm text-text-secondary">
                Freelancing, personal branding, monetization, original IP
                creation and startup readiness for the creator economy.
              </p>
            </div>
          </ScrollReveal>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="pt-0">
        <Container size="reading" className="text-center">
          <ScrollReveal>
            <h2 className="text-h3">
              Still unsure which course is right for you?
            </h2>
            <p className="mt-sm text-body-sm text-text-secondary">
              Book a free career counselling session with our academic
              advisors.
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
