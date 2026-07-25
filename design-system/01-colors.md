# MAAC Adabari
# Color System

Version: 1.0

---

# Philosophy

The website should feel premium, cinematic, futuristic and creative.

The color palette should be minimal.

Do not use too many accent colors.

Dark backgrounds should allow student work to become the center of attention.

---

# Primary Brand Colors

## MAAC Red

HEX

#E53935

Usage

Primary CTA

Important highlights

Interactive elements

Icons

Links

Progress indicators

Hover accents

Never use red as a large page background.

---

## White

HEX

#FFFFFF

Usage

Headings

Primary text

Icons

Cards on light backgrounds

---

## Black

HEX

#000000

Usage

Pure overlays

High contrast sections

Video transitions

Loading screens

---

# Neutral Palette

## Background 1

HEX

#050505

Purpose

Main website background

---

## Background 2

HEX

#0B0B0B

Purpose

Secondary sections

Cards

Navigation

---

## Background 3

HEX

#121212

Purpose

Hover states

Panels

Dropdowns

---

## Surface

HEX

#111111

Purpose

Cards

Dialogs

Modals

Feature boxes

(Canonical value — previously listed here as #1A1A1A, which conflicted
with the #111111 value already used under Component Colors -> Cards
and under Tailwind Tokens -> Surface below. #111111 is canonical.)

---

## Border

HEX

rgba(255,255,255,0.08)

Purpose

Card outlines

Inputs

Navigation

Glass panels

---

# Typography Colors

Primary

#FFFFFF

Secondary

rgba(255,255,255,0.72)

Muted

rgba(255,255,255,0.60)

(Raised from 0.50 -> 0.60: at 0.50 opacity, Muted text computes to
~5.3:1 contrast on the #050505 page background but only ~4.5:1 -
razor-thin - on the #111111 card surface. 0.60 gives a safe ~6.8:1 on
every surface in the palette.)

Disabled

rgba(255,255,255,0.30)

(At 0.30 opacity, Disabled text computes to ~2.53:1 on #050505,
failing WCAG AA even for large text. This is an intentional, scoped
exemption - see design-system/12-accessibility.md -> Color Contrast.
Disabled styling must only be applied to actually-disabled form
controls (disabled/aria-disabled="true"), never to merely
de-emphasized but interactive text.)

Inverse

#000000

---

# Accent Colors

## Success

#2ECC71

Used for

Success messages

Placements

Completed actions

---

## Warning

#F5B041

Used for

Alerts

Important notices

Limited seats

---

## Error

#E74C3C

Used for

Validation

Errors

Failures

---

## Information

#3498DB

Used for

Information cards

Tips

Announcements

---

# Gradients

## Primary Gradient

#E53935

↓

#FF6B6B

Usage

Buttons

Hero highlights

Icons

---

## Dark Gradient

#050505

↓

#151515

Usage

Large backgrounds

Hero

Footer

---

## Glass Gradient

rgba(255,255,255,0.12)

↓

rgba(255,255,255,0.02)

Usage

Glass cards

Navigation

Floating panels

---

# Background Effects

Allowed

Soft radial gradients

Noise textures

Glass blur

Glow behind objects

Mesh gradients

Large blurred circles

Very subtle particle effects

Avoid

Rainbow gradients

Neon overload

Busy backgrounds

Hard geometric patterns

---

# Glow Colors

Primary Glow

rgba(229,57,53,0.45)

White Glow

rgba(255,255,255,0.18)

Soft Shadow

rgba(0,0,0,0.45)

---

# Component Colors

Primary Button

Background

#E53935

Text

#FFFFFF

Hover

#F44336

---

Secondary Button

Background

Transparent

Border

rgba(255,255,255,0.16)

Text

White

Hover

rgba(255,255,255,0.06)

---

Cards

Background

#111111

Border

rgba(255,255,255,0.08)

Hover Border

#E53935

Hover Shadow

Red glow

---

Navigation

Background

rgba(5,5,5,0.75)

Backdrop Blur

20px

Border

rgba(255,255,255,0.08)

---

Inputs

Background

#101010

Border

rgba(255,255,255,0.08)

Focus Border

#E53935

Placeholder

rgba(255,255,255,0.35)

---

# Accessibility

Minimum contrast ratio

4.5:1

Avoid

Gray text on gray backgrounds

Red text on black for body copy

Tiny low-opacity text

Always ensure readable contrast.

---

# Tailwind Tokens

Primary

primary: #E53935

Background

background: #050505

Surface

surface: #111111

Border

border: rgba(255,255,255,0.08)

Text

foreground: #FFFFFF

Secondary

secondary: rgba(255,255,255,0.72)

Muted

muted: rgba(255,255,255,0.60)

(Corrected: this token previously reused the Secondary value (0.72)
under the "muted" name, which didn't match the Typography Colors ->
Muted value (0.50, now 0.60) defined above. "secondary" and "muted"
are now distinct tokens matching their Typography Colors counterparts.)

---

# Claude Code Rules

Never invent new brand colors.

Never randomly assign colors to components.

Every component must use colors defined in this document.

Red is reserved for emphasis and primary actions.

Dark backgrounds should dominate the visual identity.

Student artwork should always have visual priority over decorative colors.