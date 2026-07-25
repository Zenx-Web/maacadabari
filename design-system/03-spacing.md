# MAAC Adabari
# Spacing System

Version: 1.0

---

# Philosophy

Whitespace is a design element.

Do not fill every available space.

Large spacing creates focus.

Consistent spacing creates trust.

Every component should follow the same spacing scale.

---

# Base Unit

The design system uses an **8px spacing grid**.

Every spacing value should be a multiple of 8 whenever possible.

Examples

4px (Micro)

8px

16px

24px

32px

40px

48px

64px

80px

96px

128px

160px

---

# Spacing Scale

## XS

8px

Used for

Icon gaps

Badge padding

Small labels

---

## SM

16px

Used for

Button padding

Card content spacing

Form fields

Small gaps

---

## MD

24px

Used for

Paragraph spacing

Card sections

Navigation spacing

---

## LG

32px

Used for

Content groups

Feature blocks

Large cards

---

## XL

48px

Used for

Section headers

Hero content

Between major UI elements

---

## 2XL

64px

Used for

Major sections

Hero spacing

Large layouts

---

## 3XL

96px

Used for

Page transitions

Large content breaks

Landing pages

---

## 4XL

128px

Used for

Hero top/bottom spacing

Full-width sections

Premium layouts

---

# Container Widths

Canonical source: design-system/04-layout-grid.md -> Maximum Widths / Containers.

There are exactly 3 containers site-wide — do not add intermediate
tiers here or elsewhere (a previous version of this section defined
conflicting Medium/1024px and Large/1280px tiers that existed nowhere
else in the design system; they have been removed):

## Reading Container

768px

Reading content, FAQs, Policies, long-form course descriptions

---

## Default Container

1200px

General content, Course pages, Forms, Homepage, Feature sections

---

## Wide Container

1440px

Hero, Showcase, Gallery, Interactive layouts

---

# Section Padding

Desktop

Top

120px

Bottom

120px

---

Tablet

Top

96px

Bottom

96px

---

Mobile

Top

72px

Bottom

72px

---

# Container Padding

Desktop

48px

Tablet

32px

Mobile

20px

---

# Grid System

Desktop

12 Columns

---

Tablet

8 Columns

---

Mobile

4 Columns

---

# Grid Gap

Desktop

32px

Tablet

24px

Mobile

16px

---

# Card Spacing

Outer Padding

32px

Internal Gap

24px

Icon to Title

16px

Title to Description

16px

Description to CTA

24px

---

# Hero Layout

Headline → Subtitle

32px

Subtitle → CTA

40px

CTA → Scroll Indicator

48px

---

# Navigation

Logo → Links

48px

Link Gap

32px

Button Gap

16px

Navbar Height

88px

---

# Buttons

Horizontal Padding

24px

Vertical Padding

14px

Icon Gap

8px

Minimum Height

48px

Preferred Height

56px

---

# Forms

Field Gap

24px

Label → Input

8px

Input Height

56px

Helper Text

8px

Submit Button

32px below last field

---

# Cards

Image → Title

24px

Title → Description

16px

Description → Footer

24px

Footer → Bottom

24px

---

# Lists

Bullet Gap

12px

Item Gap

16px

Section Gap

32px

---

# Icons

Icon → Text

8px

Icon → Icon

16px

Large Feature Icons

32px

---

# Vertical Rhythm

Headings should align to the spacing system.

Example

H2

↓

24px

Paragraph

↓

32px

Feature Grid

↓

64px

Next Section

---

# Responsive Rules

Desktop

Use full spacing scale.

---

Tablet

Reduce one spacing level where appropriate.

Example

64px → 48px

48px → 32px

---

Mobile

Prioritize breathing room while reducing excessive whitespace.

Avoid shrinking interactive elements.

Maintain minimum touch target size.

---

# Tailwind Tokens

Do not use Tailwind's bare numeric spacing utilities (p-4, gap-8, etc.)
directly. A previous version of this section mapped named scale
values to Tailwind's numeric aliases (e.g. "Space 32 = 64px"), but
real Tailwind spacing is `N x 4px`, so `space-32` is actually 128px —
exactly double what was documented here. Following the old table
literally with a stock Tailwind config silently produces spacing
twice as large as intended.

Instead, define these named tokens under `theme.extend.spacing` in
`tailwind.config.ts` (see repo-root `design-tokens.json` once
authored), matching this document's own Spacing Scale vocabulary
above:

xs: 8px (p-xs, gap-xs, ...)

sm: 16px

md: 24px

lg: 32px

xl: 48px

2xl: 64px

3xl: 96px

4xl: 128px

Components should use `p-md`, `gap-xl`, `py-4xl`, etc. — never bare
numeric Tailwind spacing utilities. This also makes the numeric-alias
bug described above structurally impossible to reintroduce.

---

# Claude Code Rules

Always use the spacing values defined here.

Do not invent arbitrary margins or padding.

Keep spacing consistent across similar components.

Whitespace should improve readability, not merely fill empty areas.

Every page should feel balanced, calm, and premium.