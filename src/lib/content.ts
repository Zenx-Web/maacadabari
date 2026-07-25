import { courses, categories } from "#velite";
import type { Course, Category } from "#velite";

export type { Course, Category };

export function getAllCourses(): Course[] {
  return courses;
}

export function getCourseBySlug(
  categorySlug: string,
  courseSlug: string
): Course | undefined {
  const category = getCategoryBySlug(categorySlug);
  if (!category) return undefined;
  return courses.find(
    (course) => course.slug === courseSlug && course.category === category.title
  );
}

export function getCoursesByCategory(categoryTitle: string): Course[] {
  return courses.filter((course) => course.category === categoryTitle);
}

export function getAllCategories(): Category[] {
  return [...categories].sort((a, b) => a.order - b.order);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}
