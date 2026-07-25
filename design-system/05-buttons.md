# MAAC Adabari
# Button System

Version: 1.0

---

# Philosophy

Buttons are invitations to act.

Every button should feel responsive, premium, and confident.

Animations should reinforce interaction—not distract from it.

Buttons must always provide clear visual feedback.

---

# Button Hierarchy

## Primary

Purpose

Most important action on the page.

Examples

Book Career Counselling

Apply Now

Enroll Today

Download Brochure

Maximum

One primary button per section.

---

## Secondary

Purpose

Alternative action.

Examples

Explore Courses

Watch Showreel

Learn More

Contact Us

---

## Ghost

Purpose

Low emphasis navigation.

Examples

Read Article

View Gallery

See Portfolio

---

## Icon Button

Purpose

Utility actions.

Examples

Play Video

Close Modal

Scroll to Top

Open Menu

Previous

Next

---

# Sizes

## Small

Height

40px

Horizontal Padding

16px

Font

16px

Use

Cards

Tables

Compact layouts

---

## Medium

Height

48px

Horizontal Padding

24px

Default size.

---

## Large

Height

56px

Horizontal Padding

32px

Hero sections

Landing pages

Primary CTAs

---

## Extra Large

Height

64px

Horizontal Padding

40px

Homepage hero only.

---

# Border Radius

Default

16px

Rounded

999px

Used for

Floating buttons

Pills

Tags

Icon buttons

Never mix multiple border radii in the same section.

---

# Primary Button

Background

MAAC Red

Text

White

Border

None

Shadow

Subtle red glow

Hover

Slight lift

Brighter red

Increased glow

Pressed

Scale to 98%

Reduce shadow

---

# Secondary Button

Background

Transparent

Border

1px solid rgba(255,255,255,0.12)

Text

White

Hover

Soft glass background

Border becomes MAAC Red

---

# Ghost Button

Background

Transparent

Border

None

Text

White

Hover

Underline or subtle color transition

Never overpower primary buttons.

---

# Icon Button

Shape

Circle

Preferred Size

48px

Icon Size

20–24px

Hover

Background blur

Subtle scale

Soft glow

---

# Button States

Default

Visible and ready.

---

Hover

Slight upward movement (2–4px)

Brightness increase

Smooth shadow transition

Cursor changes appropriately.

---

Active

Scale

0.98

Animation

120ms

---

Focus

Visible outline

High contrast

Keyboard accessible

Never remove focus indicators.

---

Disabled

Opacity

40%

Cursor

Not Allowed

No hover animation.

---

Loading

Replace label with spinner.

Maintain button width.

Prevent repeated clicks.

---

# Icons

Allowed

Arrow Right

Download

Play

Phone

Mail

Calendar

Chevron

Icon Position

Left or Right only.

Spacing

8px

Icons should animate subtly with the button.

---

# Motion

Default Duration

220ms

Timing

ease-out

Hover

Translate Y

-2px

Scale

1.02

Pressed

Scale

0.98

Loading

Continuous spinner

Never use bouncing buttons.

---

# GSAP Interactions

Allowed

Magnetic hover

Soft scale

Glow intensity

Arrow slide

Ripple reveal

Background expansion

Avoid

Elastic bounce

Overshoot

Flash effects

Long delays

---

# Magnetic Button

Homepage hero may use magnetic interaction.

Cursor enters radius.

↓

Button follows cursor slightly.

↓

Returns smoothly on exit.

Movement should be subtle.

Maximum displacement

12px

---

# CTA Placement

Every major page should end with one clear CTA.

Preferred layout

Headline

↓

Description

↓

Primary Button

↓

Secondary Button

Avoid placing multiple competing CTAs together.

---

# Mobile Rules

Minimum touch target

48 × 48px

Preferred

56px

Buttons should span full width when appropriate.

Maintain generous spacing between stacked buttons.

---

# Accessibility

Maintain contrast ratio of at least 4.5:1.

Provide descriptive labels.

Do not rely solely on icons.

Support keyboard navigation.

Support screen readers.

---

# Tailwind Reference

Small

h-10 px-4

Medium

h-12 px-6

Large

h-14 px-8

Extra Large

h-16 px-10

Rounded

rounded-2xl

Pill

rounded-full

---

# Claude Code Rules

Always use the button hierarchy defined here.

Do not invent new button styles.

One primary CTA per section.

Use consistent padding, typography, and animations.

Buttons should feel tactile, responsive, and premium.

Animations should enhance usability—not become the focus.