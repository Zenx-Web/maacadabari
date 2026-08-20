import { notFound } from "next/navigation";
import {
  getAllCategories,
  getCategoryBySlug,
  getCoursesByCategorySlug,
} from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CourseCard } from "@/components/cards/CourseCard";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { FloatingOrbs } from "@/components/motion/FloatingOrbs";
import { MagneticButton } from "@/components/motion/MagneticButton";

type Props = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return getAllCategories().map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) return {};
  return { title: category.title };
}

export default async function CategoryPage({ params }: Props) {
  const { category: categorySlug } = await params;
  const category = getCategoryBySlug(categorySlug);
  if (!category) notFound();

  const courses = getCoursesByCategorySlug(category.slug);

  return (
    <main className="flex flex-col">
      <div className="relative overflow-hidden">
        <FloatingOrbs />
        <div aria-hidden className="absolute inset-0 glow-mesh" />
        <Section className="relative">
          <Container size="wide" className="text-center">
            <h1 className="text-h1 tracking-headings text-gradient-animate">
              {category.heroTitle}
            </h1>
            <p className="mt-md text-body text-text-secondary max-w-reading mx-auto">
              {category.heroSubtitle}
            </p>
          </Container>
        </Section>
      </div>

      <Section className="pt-0">
        <Container>
          <ScrollReveal>
            <h2 className="text-h3 mb-lg">Available Courses</h2>
          </ScrollReveal>
          <ScrollReveal
            stagger={0.08}
            className="grid grid-cols-1 laptop:grid-cols-2 gap-lg"
          >
            {courses.map((course) => (
              <CourseCard
                key={course.slug}
                href={`/courses/${category.slug}/${course.slug}`}
                title={course.title}
                duration={course.duration}
                description={
                  category.availableCourses.find(
                    (c) => c.slug === course.slug
                  )?.description ?? ""
                }
              />
            ))}
          </ScrollReveal>
        </Container>
      </Section>

      <Section className="pt-0">
        <Container size="reading" className="text-center">
          <ScrollReveal>
            <h2 className="text-h3">{category.cta.headline}</h2>
            <div className="mt-md flex flex-wrap gap-sm justify-center">
              <MagneticButton>
                <Button href="/book-counselling">
                  {category.cta.primaryButton}
                </Button>
              </MagneticButton>
              {category.cta.secondaryButton && (
                <MagneticButton>
                  <Button href="/contact" variant="secondary">
                    {category.cta.secondaryButton}
                  </Button>
                </MagneticButton>
              )}
            </div>
          </ScrollReveal>
        </Container>
      </Section>
    </main>
  );
}
