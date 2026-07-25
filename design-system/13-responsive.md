# MAAC Adabari
# Responsive Design System

Version: 1.0

---

# Philosophy

The website is designed mobile-first.

Every experience should work seamlessly on

• Mobile

• Tablet

• Laptop

• Desktop

• Ultra-wide Displays

Responsive design is not about hiding content.

It is about presenting content appropriately for the available screen space.

---

# Device Breakpoints

## Mobile Small

320px – 479px

---

## Mobile

480px – 639px

---

## Tablet

640px – 1023px

---

## Laptop

1024px – 1279px

---

## Desktop

1280px – 1535px

---

## Large Desktop

1536px+

---

# Layout Rules

## Mobile

Single-column layout.

Avoid side-by-side content.

Primary CTA should remain highly visible.

---

## Tablet

Two-column layouts where appropriate.

Navigation becomes simplified.

Cards may use a two-column grid.

---

## Desktop

Use the full 12-column grid.

Allow more breathing room.

Keep content centered.

---

# Container Widths

Mobile

100%

Padding

20px

---

Tablet

100%

Padding

32px

---

Laptop

1200px Max

Padding

40px

---

Desktop

1280px Max

Padding

48px

---

Large Desktop

1440px Max

Padding

64px

---

# Grid Rules

Mobile

1 Column

---

Tablet

2 Columns

---

Laptop

3 Columns

---

Desktop

4 Columns

Maximum

Never exceed four content columns.

---

# Typography

Headings scale fluidly.

Never allow body text below

16px.

Hero headings should reduce gradually instead of switching abruptly.

Maintain comfortable line lengths.

---

# Images

Always responsive.

Use

srcset

sizes

Modern image formats

Maintain aspect ratio.

Never stretch images.

Lazy load images outside the initial viewport.

---

# Videos

Maintain

16:9

Use responsive containers.

Autoplay only when muted.

Pause when out of view.

---

# Navigation

Desktop

Horizontal navigation with mega menu.

Tablet

Simplified navigation.

Mobile

Fullscreen overlay menu.

Primary CTA remains easily accessible.

---

# Buttons

Desktop

Auto width.

---

Tablet

Auto width where space allows.

---

Mobile

Full-width for primary actions.

Minimum height

48px

Preferred height

56px

---

# Cards

Desktop

Multiple cards per row.

Tablet

Two cards per row.

Mobile

Single column.

Maintain equal spacing across layouts.

---

# Forms

Desktop

Centered.

Maximum width

640px.

---

Tablet

Centered.

Maximum width

560px.

---

Mobile

Full width.

One input per row.

Large touch targets.

---

# Tables

Avoid horizontal scrolling when possible.

Use stacked layouts on mobile if readability improves.

---

# Galleries

Desktop

4 Columns

Tablet

2 Columns

Mobile

1–2 Columns

Preserve image quality.

---

# Hero Section

Desktop

Text and visual side-by-side.

---

Tablet

Balanced split.

---

Mobile

Stack vertically.

Headline first.

CTA immediately visible.

Visual follows.

---

# Spacing

Reduce spacing gradually.

Desktop

120px section spacing.

Tablet

96px.

Mobile

72px.

Never compress layouts excessively.

---

# Motion

Desktop

Full motion system.

---

Tablet

Reduce heavy parallax.

---

Mobile

Simplify animations.

Disable

Cursor effects

3D tilt

Large parallax

Keep

Fade

Slide

Scale

Feedback animations.

---

# Performance

Mobile is the primary optimization target.

Use

Lazy loading

Code splitting

Optimized fonts

Compressed media

GPU-friendly animations

Avoid unnecessary JavaScript on smaller devices.

---

# Orientation

Support

Portrait

Landscape

Content should adapt naturally without requiring horizontal scrolling.

---

# Touch Interaction

Minimum touch target

48 × 48px.

Provide generous spacing between controls.

Avoid hover-only interactions.

Every hover interaction should have an equivalent tap interaction.

---

# Responsive Components

Every reusable component must define behavior for

Desktop

Tablet

Mobile

No component should break the layout.

---

# Testing Checklist

Verify on

✓ 320px

✓ 375px

✓ 390px

✓ 414px

✓ 768px

✓ 820px

✓ 1024px

✓ 1280px

✓ 1440px

✓ 1920px

Test

Portrait

Landscape

Touch

Mouse

Keyboard

---

# Claude Code Rules

Always design mobile-first.

Scale layouts progressively.

Do not hide essential content on smaller screens.

Reuse the same components across all breakpoints.

Prioritize readability, usability, and performance over visual complexity.

The experience should feel native and polished on every device.