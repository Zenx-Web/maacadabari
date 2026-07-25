import { getAllCategories } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CategoryCard } from "@/components/cards/CategoryCard";

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

export default function Home() {
  const categories = getAllCategories();

  return (
    <main className="flex flex-col">
      {/* Hero */}
      <Section>
        <Container size="wide" className="text-center flex flex-col items-center">
          <h1 className="text-display-lg tracking-display max-w-wide">
            Step Into A New Dimension
            <br />
            <span className="text-brand-red">Of Creativity</span>
          </h1>
          <p className="mt-md text-body text-text-secondary max-w-reading">
            MAAC Adabari is Assam&apos;s newest MAAC center — an AI-first
            creative education institute for Animation, VFX, Game Design,
            Digital Design, UI/UX, Broadcast and Digital Filmmaking &amp;
            Photography.
          </p>
          <div className="mt-lg flex flex-wrap gap-sm justify-center">
            <Button href="/book-counselling" size="lg">
              Book Career Counselling
            </Button>
            <Button href="/courses" variant="secondary" size="lg">
              Explore Courses
            </Button>
          </div>
        </Container>
      </Section>

      {/* Why MAAC Adabari */}
      <Section className="pt-0">
        <Container>
          <h2 className="text-h2 text-center">Why MAAC Adabari</h2>
          <div className="mt-lg grid grid-cols-2 tablet:grid-cols-4 gap-md">
            {whyMaac.map((item) => (
              <div
                key={item}
                className="rounded-card border border-border bg-surface p-md text-center"
              >
                <p className="text-body-sm text-text-secondary">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Learning Categories */}
      <Section className="pt-0">
        <Container size="wide">
          <h2 className="text-h2 text-center">Choose Your Path</h2>
          <p className="mt-sm text-body text-text-secondary text-center max-w-reading mx-auto">
            Seven learning categories, each leading to its own dedicated set
            of career and creator-focused programs.
          </p>
          <div className="mt-lg grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-lg">
            {categories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </Container>
      </Section>

      {/* CareerX & CreatorX */}
      <Section className="pt-0">
        <Container>
          <div className="grid grid-cols-1 tablet:grid-cols-2 gap-lg">
            <div className="rounded-card border border-border bg-surface p-lg">
              <p className="text-caption uppercase tracking-buttons text-brand-red">
                CareerX
              </p>
              <h3 className="mt-xs text-h4">Industry Ready Skills</h3>
              <p className="mt-sm text-body-sm text-text-secondary">
                Production-ready studio workflow, industry-grade portfolios
                and placement preparation for AVGC-XR and Media &amp;
                Entertainment careers.
              </p>
            </div>
            <div className="rounded-card border border-border bg-surface p-lg">
              <p className="text-caption uppercase tracking-buttons text-brand-red">
                CreatorX
              </p>
              <h3 className="mt-xs text-h4">
                Independent Content Creator &amp; Creative Entrepreneur
              </h3>
              <p className="mt-sm text-body-sm text-text-secondary">
                Freelancing, personal branding, monetization, original IP
                creation and startup readiness for the creator economy.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section className="pt-0">
        <Container size="reading" className="text-center">
          <h2 className="text-h3">
            Still unsure which course is right for you?
          </h2>
          <p className="mt-sm text-body-sm text-text-secondary">
            Book a free career counselling session with our academic
            advisors.
          </p>
          <div className="mt-md flex flex-wrap gap-sm justify-center">
            <Button href="/book-counselling">
              Book Free Career Counselling
            </Button>
            <Button href="/contact" variant="secondary">
              Contact Us
            </Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}
