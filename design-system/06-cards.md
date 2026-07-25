# MAAC Adabari
# Card System

Version: 1.0

---

# Philosophy

Cards are the primary content container throughout the website.

They should feel premium, spacious, interactive, and consistent.

Cards should encourage exploration without overwhelming users.

Every card must have a clear purpose.

---

# Design Principles

Cards should

• Prioritize content

• Have generous whitespace

• React to interaction

• Be easy to scan

• Support accessibility

• Maintain consistent proportions

---

# Card Types

## Hero Feature Card

Purpose

Highlight flagship courses or major announcements.

Usage

Homepage

Landing Pages

Events

CTA Sections

---

## Course Card

Purpose

Display a course overview.

Content

Course Name

Category

Duration

Highlights

CTA

---

## Feature Card

Purpose

Show benefits, facilities, or program highlights.

Content

Icon

Title

Description

---

## Testimonial Card

Purpose

Student success stories.

Content

Photo

Name

Course

Quote

Rating (optional)

---

## Faculty Card

Purpose

Introduce mentors and trainers.

Content

Photo

Name

Role

Specialization

Experience

---

## Placement Card

Purpose

Show student placements.

Content

Student Photo

Company Logo

Role

Course

Package (if available)

---

## Software Card

Purpose

Display software taught.

Content

Software Logo

Name

Short Description

---

## Blog Card

Purpose

Article previews.

Content

Cover Image

Category

Title

Excerpt

Read Time

---

## Statistic Card

Purpose

Highlight achievements.

Examples

Years of Excellence

Students Trained

Placement Support

Industry Partners

---

# Card Anatomy

Image (optional)

↓

Category Badge

↓

Title

↓

Description

↓

Metadata

↓

CTA (optional)

---

# Border Radius

Default

24px

Large Feature Cards

32px

Small Cards

20px

Icon Cards

16px

---

# Padding

Desktop

32px

Tablet

24px

Mobile

20px

---

# Background

Default

Surface Color

Glass Variant

Semi-transparent with backdrop blur

Feature Variant

Gradient Surface

Never use bright backgrounds unless specifically required.

---

# Border

Default

1px solid rgba(255,255,255,0.08)

Hover

MAAC Red Accent

Focus

High Contrast Outline

---

# Shadows

Default

Very subtle shadow

Hover

Soft elevation

Red glow for premium cards

Avoid heavy drop shadows.

---

# Hover Interaction

Allowed

Lift

Scale (1.02 max)

Glow

Border transition

Image zoom

Arrow animation

Content reveal

Avoid

Bounce

Rotation

Excessive movement

---

# GSAP Animations

Reveal

Fade + Up

Duration

0.6s

---

Hover

Soft scale

Border glow

Image zoom

---

Scroll

Cards should animate only once.

Use stagger for groups.

Delay

80–120ms

---

# Tilt Effect

Allowed only for

Hero Cards

Course Cards

Portfolio Cards

Maximum Rotation

6°

Should follow cursor subtly.

Disable on mobile devices.

---

# Image Rules

Maintain aspect ratio.

Preferred Ratios

16:9

4:3

1:1

Use object-fit: cover.

Do not stretch images.

---

# Typography

Title

H4

Description

Body Small

Metadata

Caption

CTA

Button Small

---

# Course Card Layout

Course Name

↓

Duration

↓

Highlights

↓

Software Icons

↓

Primary CTA

---

# Feature Card Layout

Icon

↓

Title

↓

Description

---

# Testimonial Card Layout

Photo

↓

Quote

↓

Name

↓

Course

---

# Placement Card Layout

Student Photo

↓

Name

↓

Placed At

↓

Role

↓

Course

---

# Responsive Rules

Desktop

Multi-column grid.

Tablet

Two-column grid.

Mobile

Single-column stack.

Cards should maintain equal spacing.

---

# Accessibility

Entire card should be keyboard focusable if clickable.

Hover interactions must have keyboard equivalents.

Maintain readable contrast.

Do not hide essential information behind hover states.

---

# Performance

Lazy load off-screen images.

Animate only visible cards.

Optimize images before loading.

Avoid unnecessary DOM nesting.

---

# Claude Code Rules

Use only predefined card variants.

Maintain equal heights within card grids whenever possible.

Cards should feel light, responsive, and premium.

Never introduce random styles for individual cards.

Animations must remain subtle and purposeful.

Student work and portfolio images should always receive visual priority over decorative elements.