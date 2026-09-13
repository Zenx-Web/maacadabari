import { notFound } from "next/navigation";
import { getAllCourses, getCourseBySlug } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { FloatingOrbs } from "@/components/motion/FloatingOrbs";
import { MagneticButton } from "@/components/motion/MagneticButton";

type Props = {
  params: Promise<{ category: string; course: string }>;
};

export function generateStaticParams() {
  return getAllCourses().map((course) => ({
    category: course.categorySlug,
    course: course.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { category, course: courseSlug } = await params;
  const course = getCourseBySlug(category, courseSlug);
  if (!course) return {};
  return {
    // course.seo.title already includes the "| MAAC Adabari" suffix
    // baked into the content - use `absolute` to bypass the root
    // layout's title.template, which would otherwise append it again.
    title: { absolute: course.seo.title },
    description: course.seo.description,
    keywords: course.seo.keywords,
    alternates: { canonical: course.seo.canonicalUrl },
  };
}

export default async function CoursePage({ params }: Props) {
  const { category, course: courseSlug } = await params;
  const course = getCourseBySlug(category, courseSlug);
  if (!course) notFound();

  return (
    <main className="flex flex-col">
      <div className="relative overflow-hidden">
        <FloatingOrbs />
        <div aria-hidden className="absolute inset-0 glow-mesh" />
        <section
          className="relative px-md py-4xl text-center max-w-wide mx-auto"
          style={{ viewTransitionName: "course-card" }}
        >
          <p className="font-mono text-caption tracking-buttons uppercase text-text-secondary">
            {course.category} · {course.duration}
          </p>
          <h1
            className="mt-sm text-display-lg tracking-display text-gradient-animate"
            style={{ viewTransitionName: "course-title" }}
          >
            {course.title}
          </h1>
          {course.pathway.length > 0 && (
            <p className="mt-sm text-body-sm text-brand-red tracking-buttons uppercase">
              {course.pathway.join(" · ")}
            </p>
          )}
        </section>
      </div>

      <section
        className="px-md pb-2xl max-w-reading mx-auto w-full prose-overview text-body text-text-secondary [&_p]:mb-md"
        dangerouslySetInnerHTML={{ __html: course.overview }}
      />

      {Object.keys(course.quickFacts).length > 0 && (
        <section className="px-md pb-2xl max-w-default mx-auto w-full">
          <ScrollReveal>
            <div className="rounded-card border border-border bg-surface p-lg grid grid-cols-2 tablet:grid-cols-4 gap-md">
              {Object.entries(course.quickFacts).map(([label, value]) => (
                <div key={label}>
                  <p className="text-caption uppercase tracking-buttons text-text-muted">
                    {label}
                  </p>
                  <p className="text-body-sm text-text-primary mt-1">{value}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </section>
      )}

      {course.terms.length > 0 && (
        <section className="px-md pb-2xl max-w-default mx-auto w-full">
          <ScrollReveal>
            <h2 className="text-h3 mb-lg">Curriculum</h2>
          </ScrollReveal>
          <ScrollReveal stagger={0.08} className="flex flex-col gap-md">
            {course.terms.map((term) => (
              <div
                key={term.title}
                className="shimmer-on-hover relative overflow-hidden rounded-card border border-border bg-surface p-lg transition-all duration-300 hover:border-brand-red/40"
              >
                <h3 className="text-h5 mb-sm">{term.title}</h3>
                <ul className="list-disc list-inside text-body-sm text-text-secondary space-y-1">
                  {term.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
                {term.software.length > 0 && (
                  <p className="mt-sm text-caption text-text-muted">
                    Software: {term.software.join(", ")}
                  </p>
                )}
              </div>
            ))}
          </ScrollReveal>
        </section>
      )}

      {course.careerOpportunities.length > 0 && (
        <section className="px-md pb-2xl max-w-default mx-auto w-full">
          <ScrollReveal>
            <h2 className="text-h3 mb-lg">Career Opportunities</h2>
            <div className="flex flex-wrap gap-xs">
              {course.careerOpportunities.map((role) => (
                <span
                  key={role}
                  className="rounded-button border border-border px-sm py-1 text-body-sm text-text-secondary"
                >
                  {role}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </section>
      )}

      {course.faq.length > 0 && (
        <section className="px-md pb-2xl max-w-reading mx-auto w-full">
          <ScrollReveal>
            <h2 className="text-h3 mb-lg">FAQ</h2>
          </ScrollReveal>
          <ScrollReveal stagger={0.06} className="flex flex-col gap-sm">
            {course.faq.map((item) => (
              <div key={item.question}>
                <p className="text-body-sm font-semibold text-text-primary">
                  {item.question}
                </p>
                {item.answer && (
                  <p className="mt-1 text-body-sm text-text-secondary">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </ScrollReveal>
        </section>
      )}

      <section className="px-md pb-4xl text-center">
        <ScrollReveal>
          <h2 className="text-h3">{course.cta.headline}</h2>
          <div className="mt-md flex flex-wrap gap-sm justify-center">
            <MagneticButton>
              <Button href="/book-counselling">
                {course.cta.primaryButton}
              </Button>
            </MagneticButton>
            {course.cta.secondaryButton && (
              <MagneticButton>
                <Button href="/contact" variant="secondary">
                  {course.cta.secondaryButton}
                </Button>
              </MagneticButton>
            )}
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
