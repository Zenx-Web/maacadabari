import { notFound } from "next/navigation";
import { getAllCourses, getCourseBySlug } from "@/lib/content";

type Props = {
  params: Promise<{ category: string; course: string }>;
};

export function generateStaticParams() {
  return getAllCourses().map((course) => ({
    category: course.seo.canonicalUrl.split("/")[2] ?? "",
    course: course.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { category, course: courseSlug } = await params;
  const course = getCourseBySlug(category, courseSlug);
  if (!course) return {};
  return {
    title: course.seo.title,
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
      <section className="px-md py-4xl text-center max-w-wide mx-auto">
        <p className="font-mono text-caption tracking-buttons uppercase text-text-secondary">
          {course.category} · {course.duration}
        </p>
        <h1 className="mt-sm text-display-lg tracking-display">
          {course.title}
        </h1>
        {course.pathway.length > 0 && (
          <p className="mt-sm text-body-sm text-brand-red tracking-buttons uppercase">
            {course.pathway.join(" · ")}
          </p>
        )}
      </section>

      <section
        className="px-md pb-2xl max-w-reading mx-auto w-full prose-overview text-body text-text-secondary [&_p]:mb-md"
        dangerouslySetInnerHTML={{ __html: course.overview }}
      />

      {Object.keys(course.quickFacts).length > 0 && (
        <section className="px-md pb-2xl max-w-default mx-auto w-full">
          <div className="rounded-card border border-border bg-surface p-lg grid grid-cols-2 tablet:grid-cols-4 gap-md">
            {Object.entries(course.quickFacts).map(([label, value]) => (
              <div key={label}>
                <p className="text-caption uppercase tracking-buttons text-text-muted">
                  {label}
                </p>
                <p className="text-body-sm text-text-primary mt-1">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {course.terms.length > 0 && (
        <section className="px-md pb-2xl max-w-default mx-auto w-full">
          <h2 className="text-h3 mb-lg">Curriculum</h2>
          <div className="flex flex-col gap-md">
            {course.terms.map((term) => (
              <div
                key={term.title}
                className="rounded-card border border-border bg-surface p-lg"
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
          </div>
        </section>
      )}

      {course.careerOpportunities.length > 0 && (
        <section className="px-md pb-2xl max-w-default mx-auto w-full">
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
        </section>
      )}

      {course.faq.length > 0 && (
        <section className="px-md pb-2xl max-w-reading mx-auto w-full">
          <h2 className="text-h3 mb-lg">FAQ</h2>
          <div className="flex flex-col gap-sm">
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
          </div>
        </section>
      )}

      <section className="px-md pb-4xl text-center">
        <h2 className="text-h3">{course.cta.headline}</h2>
        <div className="mt-md flex flex-wrap gap-sm justify-center">
          <button className="rounded-button bg-brand-red px-lg py-sm text-body-sm font-medium tracking-buttons text-text-primary hover:bg-brand-red-hover transition-colors">
            {course.cta.primaryButton}
          </button>
          {course.cta.secondaryButton && (
            <button className="rounded-button border border-border px-lg py-sm text-body-sm font-medium tracking-buttons text-text-primary hover:bg-surface transition-colors">
              {course.cta.secondaryButton}
            </button>
          )}
        </div>
      </section>
    </main>
  );
}
