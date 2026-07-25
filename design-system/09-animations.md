# MAAC Adabari
# Animation & Motion System

Version: 1.0

---

# Philosophy

Animation should communicate.

Never animate simply because it looks impressive.

Every motion should have a purpose.

Animation should improve

• Navigation

• Focus

• Storytelling

• Feedback

• Emotion

---

# Motion Principles

Motion should be

• Smooth

• Natural

• Responsive

• Predictable

• Fast

Never feel

• Distracting

• Random

• Slow

• Overdesigned

---

# Technology

Primary Animation Library

GSAP

Plugins

ScrollTrigger

SplitText

Flip

Observer

ScrollSmoother (optional)

CSS Transitions

For micro interactions only.

Avoid mixing multiple animation libraries.

---

# Timing

Micro Interaction

120–180ms

Default UI

200–300ms

Section Reveal

500–700ms

Hero Sequence

1000–1500ms

Page Transition

600–800ms

---

# Easing

Preferred

power2.out

power3.out

expo.out

sine.out

Avoid

bounce

elastic

back

steps

unless intentionally used for playful content.

---

# Hero Animation

Sequence

Background fades in

↓

Headline reveals line by line

↓

Description fades upward

↓

Primary CTA appears

↓

Secondary CTA appears

↓

Visual animates

↓

Scroll indicator appears

Total duration

≈2 seconds

---

# Scroll Reveal

Elements reveal only once.

Default Animation

Opacity

0 → 1

Y Position

40px → 0

Duration

0.6s

Stagger

0.08–0.12s

---

# Text Animation

Use SplitText where appropriate.

Allowed

Line reveal

Word reveal

Mask reveal

Fade upward

Avoid

Character-by-character animations for long paragraphs.

---

# Card Hover

Translate Y

-4px

Scale

1.02

Border glow

Enabled

Shadow

Increase slightly

Duration

220ms

---

# Image Animation

Hover

Scale

1.05

Duration

300ms

Use overflow hidden.

Never distort aspect ratio.

---

# Button Animation

Hover

Lift

2px

Glow

Increase

Arrow

Slides 6px

Pressed

Scale

0.98

---

# Navigation Animation

Transparent

↓

Blurred

↓

Compact

On scroll

Duration

300ms

Hide while scrolling down.

Reveal while scrolling up.

---

# Section Transitions

Reveal only when entering viewport.

Do not replay continuously.

Large sections may stagger child elements.

---

# Counters

Animate

0 → Final Value

Duration

1.5–2.5 seconds

Trigger

Once when visible.

---

# Progress Indicators

Animate width smoothly.

Never jump instantly.

---

# Accordion

Height

Auto animation

Chevron rotates

180°

Duration

250ms

---

# Modal Animation

Backdrop fades.

↓

Modal scales

0.96 → 1

↓

Opacity

0 → 1

Duration

300ms

Close animation should reverse smoothly.

---

# Cursor Effects

Optional.

Allowed

Soft glow

Follower

Magnetic interactions

Image preview

Avoid oversized custom cursors.

Disable on touch devices.

---

# Parallax

Use sparingly.

Maximum movement

15%

Apply only to

Hero

Background graphics

Large showcase sections

Never parallax body text.

---

# Horizontal Scroll

Allowed only for

Portfolio

Student Work

Timeline

Course Showcase

Avoid excessive horizontal scrolling.

---

# Video

Fade in when visible.

Pause when out of viewport.

Autoplay only when muted.

Lazy load all videos.

---

# Loading Screen

Optional.

Maximum duration

2 seconds

Use

MAAC logo

Simple progress animation

Avoid blocking content unnecessarily.

---

# Reduced Motion

Respect

prefers-reduced-motion

Disable

Parallax

Large transitions

Cursor effects

Keep essential UI feedback.

---

# Performance

Animate only

transform

opacity

Avoid animating

width

height

top

left

box-shadow (heavy)

Use will-change only when necessary.

Use requestAnimationFrame through GSAP.

---

# Accessibility

Motion must never hide essential information.

All interactions must remain usable without animation.

Do not trigger flashing effects.

Avoid animations that could induce motion sickness.

---

# Claude Code Rules

Use GSAP as the primary animation library.

Keep animations purposeful and restrained.

Never animate every element on the page.

Reuse animation patterns throughout the website.

Performance always takes priority over visual complexity.

Motion should reinforce the premium, cinematic identity of MAAC Adabari.