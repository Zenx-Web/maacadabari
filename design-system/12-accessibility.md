# MAAC Adabari
# Accessibility Guidelines

Version: 1.0

---

# Philosophy

Accessibility is not an optional feature.

Every visitor should be able to access the website regardless of ability, device, or input method.

Accessibility should be considered from the first component, not added later.

---

# Standard

Target

WCAG 2.2 AA

Every page and component should comply unless there is a documented reason otherwise.

---

# Core Principles

The website must be

Perceivable

Operable

Understandable

Robust

---

# Semantic HTML

Always use semantic HTML.

Examples

<header>

<nav>

<main>

<section>

<article>

<aside>

<footer>

<button>

<form>

<label>

Avoid using generic div elements when semantic elements are available.

---

# Heading Structure

Each page should contain only one H1.

Headings should follow hierarchy.

Correct

H1

↓

H2

↓

H3

↓

H4

Avoid skipping heading levels.

---

# Keyboard Navigation

Every interactive element must be reachable using the keyboard.

Supported Keys

Tab

Shift + Tab

Enter

Space

Escape

Arrow Keys (where applicable)

Users should never become trapped inside components.

---

# Focus States

Every interactive element must have a visible focus indicator.

Focus styles should

• Have sufficient contrast

• Be clearly visible

• Never be removed

Use the brand color combined with a high-contrast outline where appropriate.

---

# Color Contrast

Minimum

4.5:1

Large Text

3:1

Buttons

4.5:1

Links

Must remain distinguishable from surrounding text.

Never rely on color alone.

---

# Documented Exemption: Disabled Text

design-system/01-colors.md's Disabled text token (rgba(255,255,255,0.30))
computes to ~2.53:1 on the #050505 background, below the 4.5:1 minimum
above. This is an intentional, narrowly-scoped exemption per WCAG 2.2
SC 1.4.3, which excludes "incidental text that is part of an inactive
user interface component" from the contrast requirement.

The `text-disabled` style may only be applied to actually-disabled
form controls — an element carrying a native `disabled` attribute or
`aria-disabled="true"`.

It must never be applied to text that is merely de-emphasized but
still interactive or informative — use Muted (rgba(255,255,255,0.60))
for that instead, which passes 4.5:1 on every surface in the palette.

---

# Images

Every meaningful image requires descriptive alt text.

Decorative images

alt=""

Student artwork should include contextual descriptions where appropriate.

---

# Icons

Decorative

aria-hidden="true"

Interactive

Must include

aria-label

or visible text.

Icons alone must never communicate essential information.

---

# Forms

Every input requires

<label>

Required fields must be identified clearly.

Validation messages should

• Explain the issue

• Explain how to fix it

Never rely on placeholder text as labels.

---

# Buttons

Every button should have a descriptive label.

Avoid

"Click Here"

Use

Book Career Counselling

Download Brochure

Explore Courses

---

# Links

Link text should describe the destination.

Good

Explore VFX Courses

Poor

Read More

---

# Motion

Respect

prefers-reduced-motion

Disable

Large parallax

Continuous animations

Cursor effects

Lengthy transitions

Keep essential feedback animations.

---

# Video

Autoplay only when muted.

Provide captions where applicable.

Do not rely solely on audio.

Pause videos when they leave the viewport.

---

# Audio

Never autoplay audio.

Provide playback controls.

---

# Touch Targets

Minimum

48 × 48px

Maintain spacing between adjacent controls.

---

# Error Messages

Describe

What happened

Why it happened

How to fix it

Example

Please enter a valid email address.

---

# Success Messages

Provide confirmation after successful actions.

Example

Your enquiry has been submitted successfully.

---

# Loading States

Show skeletons or progress indicators.

Never leave users wondering whether the interface is working.

---

# Tables

Use

<thead>

<tbody>

<th>

Provide scope attributes where appropriate.

Avoid tables for layout.

---

# Modals

Trap keyboard focus.

Escape closes the modal.

Restore focus when closed.

Provide accessible labels.

---

# Navigation

Support keyboard navigation.

Provide a "Skip to Main Content" link.

Indicate the active page.

---

# Screen Readers

Every interactive element must expose meaningful names.

Use

aria-expanded

aria-controls

aria-current

aria-live

only when appropriate.

Avoid unnecessary ARIA.

Prefer semantic HTML first.

---

# Responsive Accessibility

Accessibility must remain intact across

Desktop

Tablet

Mobile

No interaction should become inaccessible on smaller screens.

---

# Performance

Fast websites are more accessible.

Optimize

Images

Fonts

Animations

JavaScript

Reduce layout shifts.

---

# Accessibility Checklist

Every page should verify

✓ One H1

✓ Semantic HTML

✓ Keyboard navigation

✓ Visible focus states

✓ Alt text

✓ Color contrast

✓ Form labels

✓ Accessible buttons

✓ Reduced motion support

✓ Screen reader compatibility

✓ Responsive accessibility

---

# Claude Code Rules

Accessibility is mandatory.

Never sacrifice accessibility for visual effects.

Prefer semantic HTML over additional ARIA.

Every component should remain fully usable with keyboard navigation and screen readers.

Design decisions should always balance aesthetics, usability, and inclusivity.
