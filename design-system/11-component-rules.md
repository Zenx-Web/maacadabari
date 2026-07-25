# MAAC Adabari
# Component Rules

Version: 1.0

---

# Purpose

This document defines how reusable UI components should be created, structured, and maintained throughout the MAAC Adabari website.

Every component should be

• Reusable

• Predictable

• Accessible

• Responsive

• Easy to maintain

Consistency is more important than uniqueness.

---

# Component Philosophy

Components should solve one problem.

Never create a component that has multiple unrelated responsibilities.

Good

CourseCard

Bad

CourseCardWithPopupAndSlider

---

# Component Hierarchy

Pages

↓

Sections

↓

Components

↓

Elements

↓

Tokens

Never skip hierarchy.

---

# Naming Convention

Use PascalCase.

Examples

HeroSection

CourseCard

PlacementCard

PrimaryButton

Navbar

Footer

CourseGrid

StudentGallery

FAQAccordion

Never use vague names.

Bad

Box

Thing

Component1

TestCard

---

# Folder Structure

components/

├── ui/
├── layout/
├── navigation/
├── forms/
├── cards/
├── sections/
├── animations/
├── icons/
└── shared/

---

# Component Responsibilities

Each component should

Render one UI concern

Receive data via props

Avoid business logic

Avoid direct API calls unless specifically designed for it

---

# Props

Keep props minimal.

Prefer

title

description

image

icon

variant

size

href

children

Avoid passing unnecessary configuration.

---

# Variants

Components should expose variants instead of duplicates.

Example

PrimaryButton

SecondaryButton

GhostButton

↓

Button

variant="primary"

variant="secondary"

variant="ghost"

---

# Sizes

Use consistent sizing.

small

medium

large

Avoid custom sizes per page.

---

# Composition

Prefer composing small components over creating very large ones.

Example

CourseCard

├── Badge
├── Heading
├── Duration
├── FeatureList
└── CTAButton

---

# Reusability

Before creating a new component, ask

Can an existing component be reused?

If yes

Reuse it.

Do not duplicate components.

---

# State Management

Supported states

Default

Hover

Active

Focus

Disabled

Loading

Empty

Error (where applicable)

Every interactive component should define all relevant states.

---

# Styling

Use the design system.

Never hardcode

Colors

Spacing

Typography

Border radius

Animation values

Reference the existing design tokens.

---

# Animations

All component animations must follow

design-system/09-animations.md

Do not define custom motion for individual components unless necessary.

---

# Accessibility

Interactive components must

Support keyboard navigation

Have visible focus states

Provide accessible labels

Use semantic HTML

Never rely on hover alone.

---

# Responsive Behavior

Every component must work on

Desktop

Tablet

Mobile

Components should adapt gracefully without changing their identity.

---

# Performance

Components should

Render efficiently

Avoid unnecessary re-renders

Lazy load heavy media

Avoid large dependencies

Keep DOM structure shallow

---

# Images

Always support

alt text

lazy loading (where appropriate)

responsive sizing

Never stretch images.

---

# Icons

Use the standard icon system.

Do not mix icon libraries.

Icons should inherit text color unless explicitly defined.

---

# Buttons

All buttons must use

design-system/05-buttons.md

Do not create custom button styles inside components.

---

# Cards

All cards must follow

design-system/06-cards.md

---

# Forms

All forms must follow

design-system/07-forms.md

---

# Navigation

All navigation components must follow

design-system/06.5-navigation.md

---

# Error Handling

Components should fail gracefully.

Missing image

↓

Show placeholder

Missing text

↓

Hide section if appropriate

API failure

↓

Display friendly fallback

Never expose technical errors to users.

---

# Empty States

Provide meaningful empty states.

Example

"No student projects available yet."

instead of

"No Data"

---

# Loading States

Use skeleton loaders.

Avoid layout shifts.

Do not display blank screens while loading.

---

# Testing Checklist

Every component should be checked for

✓ Desktop

✓ Tablet

✓ Mobile

✓ Keyboard navigation

✓ Focus visibility

✓ Screen reader compatibility

✓ Loading state

✓ Empty state

✓ Error state

---

# Documentation

Every reusable component should include

Purpose

Props

Variants

States

Accessibility notes

Usage examples

---

# Claude Code Rules

Create small, focused, reusable components.

Reuse existing components before creating new ones.

Follow the design system for colors, spacing, typography, animation, and interaction.

Keep components predictable, modular, and easy to maintain.

The component library should scale as the website grows without introducing duplicate functionality.