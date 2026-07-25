import { defineConfig, s } from "velite";

// Shared building blocks -----------------------------------------------

const faqItem = s.object({
  question: s.string(),
  // Optional: the 5 original category pages (animation, vfx,
  // digital-design, uiux, game-design) ship FAQ *questions* only —
  // answers were never written in the source docs. Flagging that as
  // a known content gap rather than inventing answers here.
  answer: s.string().optional(),
});

const term = s.object({
  title: s.string(), // e.g. "Term I", "Year 1", "Module I"
  topics: s.array(s.string()).default([]),
  software: s.array(s.string()).default([]),
  skills: s.array(s.string()).default([]),
});

const specialization = s.object({
  name: s.string(),
  topics: s.array(s.string()).default([]),
  software: s.array(s.string()).default([]),
});

const seo = s.object({
  title: s.string(),
  description: s.string(),
  keywords: s.array(s.string()).default([]),
  canonicalUrl: s.string(),
});

const cta = s.object({
  headline: s.string(),
  primaryButton: s.string().default("Book Career Counselling"),
  secondaryButton: s.string().optional(),
});

const internalLinks = s.object({
  relatedCourses: s.array(s.string()).default([]),
  relatedCategory: s.string().optional(),
  relatedArticles: s.array(s.string()).default([]),
});

// Collections ------------------------------------------------------------
//
// Two course shapes exist in source content (see /courses/course-template.md
// vs /courses/course-template-professional.md): full career-track courses
// (CareerX/CreatorX/Student Journey) and short skill-enhancement courses
// (none of that). Both are modeled as one collection with optional fields
// rather than a union, since every real course file is a superset/subset
// of the same base shape and a union complicates every consumer for no
// real benefit at this content size.

const courses = s.object({
  title: s.string(),
  category: s.string(), // display name, e.g. "Animation" or "Visual Effects (VFX)"
  categorySlug: s.string(), // join key -> categories.slug, e.g. "animation". Use this for lookups, not `category`.
  slug: s.slug("courses"),
  duration: s.string(),
  pathway: s.array(s.string()).default([]), // e.g. ["CareerX", "CreatorX"] or ["Skill Enhancement"]
  difficulty: s.string().optional(),
  overview: s.markdown(),
  quickFacts: s.record(s.string(), s.string()).default({}),
  bestFor: s.array(s.string()).default([]),
  learningOutcomes: s.array(s.string()).default([]),
  courseStructure: s.array(s.string()).default([]), // ordered flow steps
  terms: s.array(term).default([]),
  softwareCovered: s.array(s.string()).default([]),
  aiTools: s.array(s.string()).default([]),
  careerX: s.array(s.string()).default([]),
  creatorX: s.array(s.string()).default([]),
  specializations: s.array(specialization).default([]),
  careerOpportunities: s.array(s.string()).default([]),
  portfolioProjects: s.array(s.string()).default([]),
  studentJourney: s.array(s.string()).default([]),
  faq: s.array(faqItem).default([]),
  cta,
  seo,
  internalLinks,
});

const categories = s.object({
  title: s.string(),
  slug: s.slug("categories"),
  navigationLabel: s.string(),
  order: s.number(),
  icon: s.string(),
  heroTheme: s.string().optional(),
  purpose: s.string(),
  heroTitle: s.string(),
  heroSubtitle: s.string(),
  whatIsIt: s.markdown(),
  pipeline: s.array(s.string()).default([]),
  whyChoose: s.array(s.string()).default([]),
  industryOverview: s.markdown(),
  careerOpportunities: s.array(s.string()).default([]),
  availableCourses: s
    .array(
      s.object({
        name: s.string(),
        slug: s.string(),
        duration: s.string(),
        description: s.string(),
      })
    )
    .default([]),
  softwareEcosystem: s.array(s.string()).default([]),
  aiIntegration: s.array(s.string()).default([]),
  studentPortfolio: s.array(s.string()).default([]),
  faq: s.array(faqItem).default([]),
  cta,
});

export default defineConfig({
  root: "src/content",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: {
    courses: {
      name: "Course",
      pattern: "courses/**/*.md",
      schema: courses,
    },
    categories: {
      name: "Category",
      pattern: "categories/**/*.md",
      schema: categories,
    },
  },
});
