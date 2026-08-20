import type { Metadata } from "next";
import { getAllCategories } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";
import { CourseCard } from "@/components/cards/CourseCard";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { FloatingOrbs } from "@/components/motion/FloatingOrbs";
import { MagneticButton } from "@/components/motion/MagneticButton";

export const metadata: Metadata = {
  title: "All Courses",
  description:
    "Explore every MAAC Adabari program across Animation, VFX, Digital Design, UI/UX, Game Design, Broadcast and Digital Filmmaking & Photography.",
};

export default function CoursesPage() {
  const categories = getAllCategories();
  const totalCourses = categories.reduce(
    (sum, category) => sum + category.availableCourses.length,
    0
  );

  return (
    <main className="flex flex-col">
      <div className="relative overflow-hidden">
        <FloatingOrbs />
        <div aria-hidden className="absolute inset-0 glow-mesh" />
        <Section className="relative">
          <Container size="wide" className="text-center">
            <Badge>All Courses</Badge>
            <h1 className="mt-md text-display-lg tracking-display">
              Explore{" "}
              <span className="text-gradient-animate">Every Program</span>
            </h1>
            <p className="mt-lg text-body-lg text-text-secondary max-w-reading mx-auto">
              {totalCourses}+ programs across {categories.length} learning
              categories, each built around industry workflows and AI-first
              tools.
            </p>
          </Container>
        </Section>
      </div>

      {categories.map((category) => (
        <Section key={category.slug} className="pt-0">
          <Container size="wide">
            <ScrollReveal className="flex items-center justify-between gap-md flex-wrap">
              <div className="flex items-center gap-sm">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-icon bg-brand-red/10 text-brand-red">
                  <Icon name={category.icon} className="size-6" />
                </span>
                <div>
                  <h2 className="text-h3">{category.navigationLabel}</h2>
                  <p className="mt-1 text-body-sm text-text-secondary max-w-reading">
                    {category.heroSubtitle}
                  </p>
                </div>
              </div>
              <Button
                href={`/courses/${category.slug}`}
                variant="secondary"
                size="sm"
              >
                View Category
              </Button>
            </ScrollReveal>

            <ScrollReveal
              stagger={0.08}
              className="mt-lg grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-lg"
            >
              {category.availableCourses.map((course) => (
                <CourseCard
                  key={course.slug}
                  href={`/courses/${category.slug}/${course.slug}`}
                  title={course.name}
                  duration={course.duration}
                  description={course.description}
                />
              ))}
            </ScrollReveal>
          </Container>
        </Section>
      ))}

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
