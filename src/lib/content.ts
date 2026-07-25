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
  return courses.find(
    (course) => course.slug === courseSlug && course.categorySlug === categorySlug
  );
}

export function getCoursesByCategorySlug(categorySlug: string): Course[] {
  return courses.filter((course) => course.categorySlug === categorySlug);
}

export function getAllCategories(): Category[] {
  return [...categories].sort((a, b) => a.order - b.order);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}
