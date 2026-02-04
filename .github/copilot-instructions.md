# 🎭 Magic Mirror -- ULTRA Copilot Instructions

## 📌 Project Identity

Magic Mirror is a premium event & entertainment marketing website
focused on: - Lead generation - Brand presentation - Conversion
optimization - Social proof - Visual storytelling

This is a marketing landing experience, NOT a complex web application.

------------------------------------------------------------------------

## 🎯 Core UX Philosophy

UI must feel: - Premium - Magical - Fun & interactive - Social-media
ready - Luxury event brand

------------------------------------------------------------------------

## 🧰 Tech Stack Rules

### Required Stack

-   React (17+)
-   Material UI v7
-   Emotion styling
-   Functional Components ONLY

### ❌ Avoid

-   Class components
-   Redux or heavy global state
-   CSS frameworks outside MUI
-   Overengineering logic
-   Large animation libraries without reason

------------------------------------------------------------------------

## 🧱 Architecture Philosophy

Landing page must be section-based modular system.

------------------------------------------------------------------------

## 📂 Folder Structure

    src/
     ├── components/
     │    ├── sections/
     │    ├── shared/
     │    └── ui/
     │
     ├── hooks/
     ├── theme/
     ├── utils/
     ├── constants/
     └── assets/

------------------------------------------------------------------------

## 🧩 Section Architecture Rules

Each section must: - Be self-contained - Include SectionHeader -
Maintain consistent spacing - Include entrance animation - Be SEO
friendly

------------------------------------------------------------------------

## 📐 Layout System

Use:

    <Container maxWidth="lg" />

Spacing standard:

    py: { xs: 8, md: 14 }

------------------------------------------------------------------------

## 🎨 Design System Rules

### 🌈 Brand Colors

Primary Accent: Neon Pink / Purple Gradient\
Background: Deep Purple / Dark Luxury\
Highlights: Glow borders, Glassmorphism, Soft shadows

Glow styling example:

    boxShadow: "0 0 25px rgba(255,0,150,0.35)"

Border radius:

    borderRadius: 3 or 4

------------------------------------------------------------------------

## 🧠 Conversion Psychology Rules

Focus on: - Strong emotional headlines - Early testimonials and client
logos - Urgency CTAs (Book Now, Check Availability)

------------------------------------------------------------------------

## ✍️ Copywriting Tone

Text must be: - Energetic - Event-driven - Short & punchy - Social &
celebratory

Good example: "Make Every Click Magical"

------------------------------------------------------------------------

## 🔥 CTA Strategy

CTAs must appear in: - Hero - Booth cards - Mid page - Contact section

CTA must include: - Gradient background - Glow hover - Slight scale
hover

------------------------------------------------------------------------

## 📱 Mobile First Rules

-   Design mobile first
-   Avoid horizontal scrolling
-   Maintain readable typography
-   Stack cards vertically on mobile

------------------------------------------------------------------------

## ⚡ Performance Budget

Targets: - First load \< 2.5s - Lighthouse score \> 90 - Minimal CLS

Optimization: - Lazy load images - Use responsive images - Avoid large
JS bundles

------------------------------------------------------------------------

## ✨ Animation System

Allowed: - Section fade + slide - Card hover glow - CTA hover scale

Forbidden: - Heavy parallax - Infinite flashing - Janky motion

------------------------------------------------------------------------

## 🧱 Reusable Marketing Components

### SectionHeader

Props: - title - subtitle - highlight

### CTAButton

Variants: - primary - outline - ghost

### GlowCard

Reusable marketing card container.

### ImagePreviewCard

Used for booth types, gallery, and events.

------------------------------------------------------------------------

## 📸 Image Handling Rules

-   Use consistent aspect ratios
-   Lazy load gallery images
-   Add alt text
-   Prevent layout shift

------------------------------------------------------------------------

## 🔍 SEO Rules

### Semantic hierarchy

-   h1 → Hero only
-   h2 → Sections
-   h3 → Cards

Include keywords naturally: - photo booth rental - magic mirror booth -
wedding photo booth - event photo experience

------------------------------------------------------------------------

## 📊 Social Proof Strategy

Promote: - Testimonials - Instagram feed - Real event photos - Client
logos

------------------------------------------------------------------------

## 🧾 FAQ Strategy

-   Address objections
-   Short answers
-   Sales clarity

------------------------------------------------------------------------

## 📬 Contact Section Rules

Required fields: - Name - Email - Phone - Event Type - Message

CTA must be visually dominant.

------------------------------------------------------------------------

## 🎯 Mandatory Section Order

1.  Hero
2.  About Magic Mirror
3.  Booth Types
4.  Why Choose Us
5.  Event Use Cases
6.  Gallery
7.  Testimonials
8.  FAQ
9.  Instagram
10. Contact
11. Clients
12. Footer

------------------------------------------------------------------------

## 🧼 Code Quality Rules

-   Keep components under 200 lines
-   Extract reusable UI
-   Use descriptive naming
-   Avoid deeply nested JSX

------------------------------------------------------------------------

## 🎭 Emotional Branding Rules

Website must evoke: - Celebration - Fun - Luxury event feeling - Social
sharing experience

------------------------------------------------------------------------

## 🚀 Copilot Behavior Expectations

Copilot should: - Prefer reusable marketing UI - Follow neon luxury
visual style - Keep landing page lightweight - Prioritize conversion
UX - Maintain consistent spacing - Generate SEO friendly structure

------------------------------------------------------------------------

## ❗ Copilot Must Never

-   Add complex state management
-   Introduce unnecessary libraries
-   Break modular section system
-   Use inconsistent spacing
-   Create dull corporate UI

------------------------------------------------------------------------

## ⭐ Success Definition

Website is successful when: - Product is instantly understandable - UI
feels premium & fun - CTA is obvious - Mobile experience is flawless -
Performance is fast - Visitors convert into leads

------------------------------------------------------------------------

## 🎉 End Goal

Magic Mirror website must feel like an experience --- not just a
webpage.
