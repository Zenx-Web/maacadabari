# MAAC Adabari
# Form System

Version: 1.0

---

# Philosophy

Forms are conversation starters.

They should feel effortless, trustworthy, and fast.

The objective is to reduce friction and encourage users to complete enquiries with confidence.

---

# Primary Forms

The website should only use these core forms.

• Book Career Counselling

• Download Brochure

• Contact Us

• Workshop Registration

• Event Registration

Avoid creating unnecessary form variations.

---

# Design Principles

Forms should

• Be simple

• Require minimal typing

• Have clear labels

• Show validation immediately

• Be mobile friendly

---

# Form Layout

Desktop

Maximum Width

640px

Centered

Yes

---

Tablet

Maximum Width

560px

---

Mobile

100% Width

20px Page Padding

---

# Input Fields

Height

56px

Border Radius

16px

Background

Surface

Border

1px solid rgba(255,255,255,0.08)

Padding

16px

Font

Body

---

# Labels

Always visible.

Never rely on placeholder text as labels.

Position

Above input.

Spacing

8px

---

# Placeholders

Use examples instead of instructions.

Good

Enter your full name

Poor

Name

---

# Required Fields

Book Career Counselling

• Full Name

• Mobile Number

• Email Address

• Course Interested In

• Preferred Campus

Optional

Message

---

# Input Types

Text

Email

Phone

Textarea

Select

Radio

Checkbox

Date

---

# Validation

Validate while typing where possible.

Errors should appear below the field.

Never clear user input after validation fails.

---

# Error State

Border

Error Red

Icon

Optional

Message

Clear and actionable

Example

Please enter a valid email address.

---

# Success State

Border

Success Green

Message

Thank you! Your enquiry has been submitted successfully.

---

# Focus State

Border

MAAC Red

Soft Glow

Visible keyboard focus

Never remove focus outlines.

---

# Submit Button

Width

Auto on desktop

Full width on mobile

Height

56px

Loading

Spinner replaces button text

Prevent duplicate submissions.

---

# Dropdowns

Use searchable dropdowns only when the list is long.

For course selection, show

• Course Name

• Category

---

# Checkboxes

Minimum touch area

48 × 48px

Clearly indicate selected state.

---

# Textarea

Minimum Height

140px

Resizable

Vertical only

---

# Form Feedback

Loading

Show progress immediately.

Success

Friendly confirmation message.

Failure

Explain what happened and allow retry.

---

# Privacy Notice

Every enquiry form should include

"We respect your privacy. Your information will only be used to contact you regarding your enquiry."

---

# Mobile Rules

Large touch targets.

One field per row.

Automatic keyboard optimization.

Minimal scrolling.

---

# Accessibility

Associate every label with its input.

Support keyboard navigation.

Announce validation messages to screen readers.

Maintain sufficient contrast.

---

# Performance

Validate on the client before submission.

Show loading within 200ms.

Avoid unnecessary API requests.

---

# Claude Code Rules

Always use the standard form layout.

Never hide labels.

Keep forms as short as possible.

Use consistent spacing and validation across the website.

Every form should end with a clear confirmation state.