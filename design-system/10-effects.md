# MAAC Adabari
# Visual Effects System

Version: 1.0

---

# Philosophy

Visual effects should support the interface.

Effects should create depth, focus, and atmosphere.

They should never become visual noise.

Every effect should feel subtle, premium, and intentional.

---

# Design Language

Inspired by

• Apple

• Linear

• Stripe

• Framer

• Rivian

• Porsche

Not Inspired by

• Gaming UI

• Cyberpunk overload

• Neon overload

• Glass everywhere

• Heavy shadows

---

# Shadows

## Small

Purpose

Buttons

Inputs

Badges

Shadow

0 4px 12px rgba(0,0,0,0.20)

---

## Medium

Purpose

Cards

Dropdowns

Navigation

Shadow

0 10px 30px rgba(0,0,0,0.28)

---

## Large

Purpose

Hero Cards

Modals

Featured Content

Shadow

0 24px 60px rgba(0,0,0,0.35)

---

Never stack multiple shadows.

---

# Glow

Glow is an accent.

It should only appear during interaction.

---

Primary Glow

Color

MAAC Red

Opacity

0.45

(Corrected to match design-system/01-colors.md -> Glow Colors -> Primary Glow, rgba(229,57,53,0.45), which previously disagreed with this file's 0.30.)

Used for

Primary Buttons

CTA Cards

Highlighted Borders

---

White Glow

Opacity

0.12

Used for

Images

Glass Panels

Hero Visuals

---

Avoid

Constant glowing elements.

---

# Glassmorphism

Use sparingly.

Only for

Navigation

Floating Panels

Hero Cards

Dialogs

Quick Actions

---

Background

rgba(255,255,255,0.06)

Backdrop Blur

20px

Border

1px solid rgba(255,255,255,0.08)

Shadow

Medium

Never apply glass to every card.

---

# Blur

Allowed

Background overlays

Navigation

Dialogs

Hero foreground layers

Recommended Values

8px

12px

20px

24px

Avoid excessive blur.

---

# Gradients

## Primary

MAAC Red

↓

Soft Red

Used for

CTA

Highlights

Hero accents

---

## Dark

#050505

↓

#141414

Used for

Hero

Footer

Large sections

---

## Radial

Used behind

Hero Images

Floating Objects

Statistics

Opacity

Very low

---

Avoid rainbow gradients.

---

# Noise Texture

Optional.

Purpose

Reduce flat backgrounds.

Opacity

2–4%

Use only on

Hero

Footer

Large dark sections

---

# Overlays

Dark Overlay

rgba(0,0,0,0.45)

Used over

Images

Videos

Hero Backgrounds

Ensure text remains readable.

---

# Borders

Default

1px solid rgba(255,255,255,0.08)

Hover

MAAC Red

Focus

High Contrast

Avoid thick borders.

---

# Image Treatment

Use

Soft shadows

Rounded corners

Subtle zoom on hover

Never use

Heavy filters

Over-saturation

Artificial sharpening

---

# Cards

Default

Surface

Border

Soft Shadow

Hover

Lift

Glow

Border Accent

Image Zoom

---

# Hero Effects

Allowed

Soft light rays

Particle effects

Mesh gradients

Background blur

Large radial glow

Subtle parallax

Avoid

Fire

Lightning

Lens flare

Floating confetti

---

# Section Dividers

Preferred

Whitespace

Soft gradient fade

Thin border

Avoid decorative separators.

---

# Hover Effects

Allowed

Lift

Glow

Border transition

Image zoom

Soft scale

Duration

200–300ms

Avoid

Bounce

Spin

Flip

Shake

---

# Background Patterns

Allowed

Very subtle grid

Noise

Mesh gradient

Soft radial lights

Avoid

Hexagons

Carbon fiber

Busy textures

---

# Loading Skeletons

Background

Surface

Highlight

Soft moving gradient

Animation

1.2s infinite shimmer

Use only while content loads.

---

# Theme Consistency

Every page should share

Shadow style

Glow intensity

Border opacity

Blur values

Corner radius

Gradient usage

---

# Accessibility

Effects must never reduce readability.

Ensure sufficient contrast.

Do not rely on glow to communicate important information.

Respect reduced transparency and reduced motion settings where supported.

---

# Performance

Prefer CSS effects over large image assets.

Use backdrop-filter sparingly.

Avoid multiple overlapping blur layers.

Optimize gradients and shadows for GPU rendering.

---

# Claude Code Rules

Use effects consistently across the website.

Do not invent new shadows, glows, or blur values.

Prioritize clean layouts over decorative effects.

Every visual effect should improve usability, hierarchy, or visual depth.