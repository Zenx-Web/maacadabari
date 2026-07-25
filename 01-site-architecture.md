# MAAC ADABARI WEBSITE
# Site Architecture

Version: 2026

---

# Purpose

This document defines the complete website structure.

Claude should always follow this architecture when creating new pages or components.

Do not invent additional pages unless required.

---

# Website Flow

Landing Page

↓

Course Overview

↓

Course Category

↓

Individual Course

↓

Admission

---

# Navigation Structure

Home

Courses

Student Works

Placements

About MAAC

Contact

Book Counselling

---

# Home Page

Purpose

Introduce MAAC Adabari.

Create excitement.

Explain why this institute is different.

Encourage users to explore courses.

Primary CTA

Book Career Counselling

Secondary CTA

Explore Courses

---

# Courses

Purpose

Help visitors choose a career path.

This page DOES NOT display detailed course information.

Instead it introduces the learning categories.

Each category leads to its own dedicated page.

---

# Course Categories

There are four primary learning categories.

--------------------------------------------

1.

Animation

--------------------------------------------

Courses

• AD3D EDGE PLUS

• 3D & REAL-TIME DESIGN PLUS

• D3D
(Program in 3D Animation Filmmaking)

• DAFM
(Program in Animation Filmmaking)

--------------------------------------------

2.

Visual Effects

--------------------------------------------

Courses

• ADVFX PLUS

• VFX PLUS

• Compositing & Editing Plus

--------------------------------------------

3.

Digital Design & Content Creation

--------------------------------------------

Courses

• APDMC PLUS

(Advanced Program in Digital Media Creation Plus)

• APDMD

(Advanced Program in Digital Media & Design)

• DGWA Plus

(Program in Graphics, Web & 2D Animation)

--------------------------------------------

4.

UI / UX Design

--------------------------------------------

Courses

• UI & UX Design Pro

---

# Category Pages

Every category has its own landing page.

Example

Animation

↓

Shows

Introduction

Industry Overview

Career Opportunities

Available Courses

Student Works

FAQ

CTA

Users can then select one course.

---

# Individual Course Pages

Every course has its own dedicated page.

Example

Animation

↓

AD3D EDGE PLUS

↓

Complete course details

No other course information should appear on this page.

Every course page focuses on one course only.

---

# Shared Sections

The following content may be shared between multiple course pages.

CareerX

CreatorX

Industry Statistics

Placement Assistance

Software

Frequently Asked Questions

Student Portfolio

Enquiry Form

These should be created as reusable components.

---

# Footer Navigation

Quick Links

Home

Courses

Student Works

Placements

About

Contact

Privacy Policy

Terms

---

# URL Structure

/

Homepage

--------------------------------

/courses

Course Overview

--------------------------------

/courses/animation

Animation Category

--------------------------------

/courses/animation/ad3d-edge-plus

--------------------------------

/courses/animation/3d-real-time-design-plus

--------------------------------

/courses/animation/d3d

--------------------------------

/courses/animation/dafm

--------------------------------

/courses/vfx

--------------------------------

/courses/vfx/advfx-plus

--------------------------------

/courses/vfx/vfx-plus

--------------------------------

/courses/vfx/compositing-editing-plus

--------------------------------

/courses/digital-design

--------------------------------

/courses/digital-design/apdmc-plus

--------------------------------

/courses/digital-design/apdmd

--------------------------------

/courses/digital-design/dgwa-plus

--------------------------------

/courses/uiux

--------------------------------

/courses/uiux/uiux-design-pro

--------------------------------

/student-works

--------------------------------

/placements

--------------------------------

/about

--------------------------------

/contact

--------------------------------

/book-counselling

---

# Routing Rules

Every course card must link directly to its own page.

Category pages should never contain the full curriculum of every course.

Instead they provide an overview and allow users to select a course.

---

# Content Hierarchy

Homepage

↓

Category

↓

Course

↓

Admission

Never skip a level.

---

# Future Expansion

This architecture should support future MAAC courses without redesigning the website.

Adding a new course should only require:

1. Creating a new course markdown file.

2. Registering it under the correct category.

3. Adding a new route.

No other structural changes should be necessary.