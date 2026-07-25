import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllCategories,
  getCategoryBySlug,
  getCoursesByCategorySlug,
} from "@/lib/content";

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
      <section className="px-md py-4xl text-center max-w-wide mx-auto">
        <h1 className="text-h1 tracking-headings">{category.heroTitle}</h1>
        <p className="mt-md text-body text-text-secondary max-w-reading mx-auto">
          {category.heroSubtitle}
        </p>
      </section>

      <section className="px-md pb-4xl max-w-default mx-auto w-full">
        <h2 className="text-h3 mb-lg">Available Courses</h2>
        <div className="grid grid-cols-1 laptop:grid-cols-2 gap-lg">
          {courses.map((course) => (
            <Link
              key={course.slug}
              href={`/courses/${category.slug}/${course.slug}`}
              className="block rounded-card border border-border bg-surface p-lg hover:border-brand-red transition-colors"
            >
              <h3 className="text-h5 text-text-primary">{course.title}</h3>
              <p className="mt-xs text-caption text-text-secondary uppercase tracking-buttons">
                {course.duration}
              </p>
              <p className="mt-sm text-body-sm text-text-muted">
                {category.availableCourses.find((c) => c.slug === course.slug)
                  ?.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
