# MAAC Adabari Website Documentation Roadmap

This document serves as the master roadmap for the complete documentation of the MAAC Adabari website. Follow this order while developing the project to ensure consistency across content, design, and implementation.

---

# Phase 1 — Project Foundation

## docs/

- [x] 00-project-overview.md
- [x] 01-site-architecture.md
- [x] 02-homepage.md
- [x] 03-course-overview.md

---

# Phase 2 — Design System

## design-system/

- [x] 00-design-principles.md
- [x] 01-colors.md
- [x] 02-typography.md
- [x] 03-spacing.md
- [x] 04-layout-grid.md
- [x] 05-buttons.md
- [x] 06-cards.md
- [x] 06.5-navigation.md
- [x] 07-forms.md
- [x] 08-icons.md
- [x] 09-animations.md
- [x] 10-effects.md
- [x] 11-component-rules.md
- [x] 12-accessibility.md
- [x] 13-responsive.md

---

# Phase 3 — Course Categories

## categories/

- [x] animation.md
- [x] vfx.md
- [x] digital-design.md
- [x] uiux.md
- [x] game-design.md
- [x] broadcast.md
- [x] digital-filmmaking-photography.md

---

# Phase 4 — Career Programs

## courses/

### Animation

- [x] ad3d-edge-plus.md
- [x] 3d-real-time-design-plus.md
- [x] d3d.md
- [x] dafm.md

### VFX

- [x] advfx-plus.md
- [x] vfx-plus.md
- [x] compositing-editing-plus.md

### Digital Design

- [x] apdmc-plus.md
- [x] apdmd.md
- [x] dgwa-plus.md

### UI/UX

- [x] uiux-design-pro.md

### Game Design

- [x] adidg-plus.md
- [x] apgdi.md
- [x] pmgdi.md
- [x] 3dgai.md

### Broadcast

- [x] apmg.md
- [x] broadcast-plus.md

### Digital Filmmaking & Photography

- [x] ppvp.md
- [x] dfm.md
- [x] digital-photography.md

### International Programs

- [x] ipvad-xr.md

---

# Phase 5 — Professional Courses

## courses/

- [x] blender-pro.md
- [x] maya-pro.md
- [x] max-pro.md
- [x] cinema4d-pro.md
- [x] design-viz-pro.md
- [x] advanced-compositing.md
- [x] compositing-plus.md
- [x] cgpd-plus.md
- [x] gen-ai-for-digital-creators.md

---

# Phase 6 — Website Pages

## pages/

### Homepage

- homepage.md

### Institution

- about-maac-adabari.md
- why-maac.md
- infrastructure.md
- faculty.md

### Admissions

- admissions.md
- admission-process.md
- eligibility.md
- scholarship.md
- emi-finance.md

### Placements

- placements.md
- career-support.md
- recruiters.md
- placement-process.md
- student-success.md

### Student Life

- student-life.md
- events.md
- workshops.md
- masterclasses.md
- competitions.md

### CareerX & CreatorX

- careerx.md
- creatorx.md

### Contact

- contact.md
- faq.md
- privacy-policy.md
- terms-and-conditions.md
- refund-policy.md

---

# Phase 7 — Component Library

## components/

### Navigation

- navbar.md
- mobile-menu.md
- breadcrumbs.md
- footer.md

### Hero

- homepage-hero.md
- category-hero.md
- course-hero.md

### Cards

- category-card.md
- course-card.md
- faculty-card.md
- testimonial-card.md
- recruiter-card.md
- event-card.md

### Sections

- cta-section.md
- enquiry-section.md
- statistics-section.md
- timeline.md
- gallery.md
- software-grid.md
- faq-section.md
- placement-section.md
- student-work-section.md

### Forms

- enquiry-form.md
- callback-form.md
- contact-form.md
- newsletter-form.md

---

# Phase 8 — Content Library

## content/

- testimonials.md
- recruiters.md
- hiring-partners.md
- software.md
- student-gallery.md
- achievements.md
- awards.md
- certifications.md
- faqs.md
- statistics.md

---

# Phase 9 — SEO

## seo/

- keyword-strategy.md
- metadata.md
- schema-markup.md
- sitemap.md
- robots.md
- internal-linking.md
- url-structure.md
- image-seo.md
- local-seo.md

---

# Phase 10 — Development Documentation

## development/

### Project

- folder-structure.md
- routing.md
- naming-conventions.md

### Frontend

- component-architecture.md
- state-management.md
- animations.md
- gsap-guidelines.md

### Backend

- supabase.md
- authentication.md
- database-schema.md
- api-structure.md

### Forms

- enquiry-system.md
- lead-management.md
- email-system.md

### Performance

- optimization.md
- lazy-loading.md
- image-optimization.md
- accessibility.md

### Deployment

- deployment.md
- environment.md
- analytics.md
- maintenance.md

---

# Phase 11 — Assets

## assets/

- logos.md
- icons.md
- illustrations.md
- photography.md
- videos.md
- lottie.md

---

# Phase 12 — Final QA

## qa/

- content-checklist.md
- seo-checklist.md
- accessibility-checklist.md
- responsiveness-checklist.md
- browser-testing.md
- launch-checklist.md

---

# Documentation Status

✅ Project Foundation

✅ Design System

✅ Categories

✅ All Career Programs

✅ All Professional Courses

⬜ Website Pages

⬜ Component Library

⬜ Content Library

⬜ SEO Documentation

⬜ Development Documentation

⬜ Assets

⬜ Final QA

---

## Estimated Documentation

| Section | Files |
|----------|------:|
| Project Docs | 4 |
| Design System | 14 |
| Categories | 7 |
| Course Pages | 30 |
| Website Pages | 18 |
| Components | 18 |
| Content Library | 9 |
| SEO | 9 |
| Development | 15 |
| Assets | 6 |
| QA | 5 |
| **Total** | **135 Markdown Files** |

Categories and Course Pages counts were revised upward after a full
reconciliation pass against the official MAAC brochure
(MAAC_Brochure_2026.pdf), which surfaced 2 categories (Broadcast,
Digital Filmmaking & Photography) and 7 courses (ADIDG Plus, APMG,
Broadcast Plus, PPVP, DFM, Digital Photography, Gen AI for Digital
Creators) that existed in the official brochure but had no presence
in this repo. The same pass also corrected numerous duration,
software, and career-option errors across existing course files
where content had drifted from the brochure - see git history for
the full list of fixes. course-template-professional.md was also
added as a second course schema (for short skill-enhancement courses
that don't have CareerX/CreatorX content) and is not counted in
"Course Pages" above, matching how course-template.md was never
counted either.