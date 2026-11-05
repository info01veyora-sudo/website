# Veyora Digital Studio — Brand Guidelines

This document establishes the brand identity and design system for Veyora Digital Studio. It is the single source of truth for all visual and UI decisions across the website.

---

## 1. Brand Positioning

Veyora Digital Studio communicates:

- **Professional digital expertise** — capable, knowledgeable, and dependable.
- **Modern technology and innovation** — current tools, thoughtful execution.
- **Creativity and thoughtful execution** — design-led, purposeful solutions.
- **Reliability and trust** — clear communication, honest claims.
- **High-quality digital experiences** — polished, performant, accessible.

We position as a premium digital studio that builds websites, business applications, and automation solutions for growing businesses. We do not claim awards, client counts, revenue, project counts, or years of experience that cannot be verified.

---

## 2. Brand Personality

- **Minimal** — only what is necessary, nothing decorative for decoration's sake.
- **Sophisticated** — refined typography, generous whitespace, restrained colour.
- **Confident** — strong hierarchy, direct messaging, clear calls to action.
- **Modern** — clean geometry, current type choices, disciplined layout.
- **Creative** — considered composition, distinctive but not generic.
- **Professional** — accessible, keyboard-navigable, performant, consistent.

---

## 3. Colour Palette

Use this palette as the default design system. Maintain consistent contrast and colour usage throughout the website.

| Role | Hex | Usage |
|------|-----|-------|
| **Primary** | `#101828` | Headings, primary text, dark surfaces, footer background |
| **Secondary** | `#FFFFFF` | Inverse text on dark surfaces, card backgrounds |
| **Background** | `#F3F5F8` | Page background, section backgrounds |
| **Accent** | `#356AE6` | Primary buttons, links, active states, section kickers |
| **Supporting** | `#8B96A8` | Secondary text, captions, subtle labels |
| **Dark Surface** | `#0B1220` | Darker section backgrounds, elevated dark panels |
| **Border** | `#E5E9F0` | Card borders, dividers, input borders |
| **Muted Text** | `#667085` | Body copy, descriptions, secondary information |

### Colour rules
- Primary text on Background: `#101828` on `#F3F5F8` (high contrast).
- Accent `#356AE6` is reserved for interactive elements (buttons, links) and key emphasis only.
- Never use accent for large areas of body text.
- Border `#E5E9F0` provides subtle separation without heavy lines.
- Supporting `#8B96A8` and Muted Text `#667085` are for de-emphasised content only.

---

## 4. Typography System

| Element | Font | Weights |
|---------|------|---------|
| Headings | Manrope | 500, 600, 700, 800 |
| Body | Inter | 400, 500 |
| Buttons | Inter Medium | 500 |

### Typographic hierarchy

| Level | Font | Size | Weight | Line height | Letter spacing | Use |
|-------|------|------|--------|-------------|----------------|-----|
| H1 (Hero) | Manrope | 56px (desktop), 40px (mobile) | 800 | 1.1 | -0.02em | Hero headline |
| H2 (Section) | Manrope | 32px | 700 | 1.2 | -0.02em | Section headings |
| H3 (Card title) | Manrope | 20px | 600 | 1.35 | 0 | Card/service titles |
| H4 (Kicker / eyebrow) | Manrope | 13px | 600 | 1.4 | 0.15em | Section labels, uppercase |
| Body | Inter | 16px | 400 | 1.7 | 0 | Paragraphs, descriptions |
| Body small | Inter | 14px | 400 | 1.6 | 0 | Captions, fine print |
| Button | Inter Medium | 15px | 500 | 1.5 | 0 | CTA buttons |
| Link | Inter | 15px | 500 | 1.5 | 0 | Navigation, inline links |
| Number badge | Manrope | 13px | 600 | 1.4 | 0.1em | Service step numbers |

### Rules
- Headings use tight tracking (`-0.02em`) for a premium feel.
- Body uses relaxed line height (`1.7`) for readability.
- Kickers/eyebrows are uppercase with wide tracking (`0.15em`).
- Never stretch or distort type.
- Manrope is loaded via `next/font/google`; Inter is loaded via `next/font/google` with fallback to system sans-serif.

---

## 5. Logo Usage

### Existing logo
- The verified logo is the wordmark **`veyora.`** (lowercase, with a period).
- The period is rendered in the Accent colour (`#356AE6`); the rest of the wordmark is Primary (`#101828`).
- No verified image logo exists in the repository. Preserve the text wordmark; do not replace it with a generated or placeholder mark.

### Clear space
- Maintain clear space around the logo equal to at least the height of the lowercase "v".
- Do not crowd the logo with navigation or other elements.

### Colour
- On light backgrounds: wordmark in Primary (`#101828`), period in Accent (`#356AE6`).
- On dark backgrounds: wordmark in Secondary (`#FFFFFF`), period in Accent (`#356AE6`).

### Sizing
- Navigation: `text-2xl` / `font-bold` / `tracking-tight`.
- Never use the logo at sizes smaller than `text-lg`.

---

## 6. Button Design Guidelines

### Primary button
- Background: Accent (`#356AE6`)
- Text: Secondary (`#FFFFFF`)
- Font: Inter Medium, `15px`, `500`
- Padding: `px-7 py-4`
- Radius: `rounded-full`
- Hover: slightly darker accent (opacity/brightness shift), smooth transition (`transition-colors duration-200`)
- Focus: visible focus ring for keyboard accessibility

### Secondary / outline button
- Background: transparent
- Border: `1px` Border (`#E5E9F0`)
- Text: Primary (`#101828`)
- Font: Inter Medium, `15px`, `500`
- Padding: `px-7 py-4`
- Radius: `rounded-full`
- Hover: subtle background tint (`#F3F5F8`)

### General button rules
- All buttons use `transition-colors duration-200 ease-in-out`.
- No glowing, no gradients, no bounce animations.
- Disabled state: opacity `50%`, `cursor: not-allowed`.
- Always include a visible focus state (`focus-visible:ring`).

---

## 7. Spacing System

Use a consistent spacing scale based on Tailwind's default spacing (multiples of 4px / 0.25rem).

| Token | Value | Use |
|-------|-------|-----|
| Section padding (vertical) | `py-24` (desktop), `py-16` (mobile) | Page sections |
| Section padding (compact) | `py-12` | Tighter sections |
| Container max-width | `max-w-7xl` | Page content container |
| Container horizontal padding | `px-6` (mobile), `px-8` (desktop) | Page edges |
| Section gap (heading to body) | `mt-6` | Heading to paragraph |
| Section gap (body to CTA) | `mt-10` | Body to action |
| Grid gap | `gap-6` (mobile), `gap-8` (desktop) | Card grids |
| Card padding | `p-8` | Service/project cards |
| Nav padding | `py-7 px-6` | Navigation bar |

### Rules
- Use generous whitespace; avoid cramped layouts.
- Maintain consistent vertical rhythm across sections.
- Responsive spacing: tighter on mobile, more generous on desktop.
- Never use arbitrary magic numbers; use the spacing scale.

---

## 8. Component Guidelines

### Cards
- Background: Secondary (`#FFFFFF`) on light sections
- Border: `1px` Border (`#E5E9F0`)
- Radius: `rounded-3xl`
- Padding: `p-8`
- Shadow: soft shadow only where appropriate (`shadow-sm`)
- Hover: subtle border colour shift (`transition-all duration-200`)
- No heavy drop shadows, no glow, no gradient overlays.

### Sections
- Container: `mx-auto max-w-[1320px] px-6`
- Background: Background (`#F3F5F8`) or Secondary (`#FFFFFF`) alternating for rhythm
- Text: Primary (`#101828`) on light; Secondary (`#FFFFFF`) on dark

### Layout
- Single-column centred content for reading sections.
- 4-column grid for services on desktop, 1-column on mobile.
- 3-column grid for portfolio on desktop, 1-column on mobile.
- Images: consistent aspect ratios, `object-cover`, responsive widths.

---

## 9. Iconography Guidelines

- Use simple, consistent, line-based icons only.
- No illustrated or 3D icon styles.
- Icons should be monochrome (Primary `#101828` or Accent `#356AE6`).
- Consistent stroke weight and size (typically `20px`–`24px`).
- Always provide accessible labels (`aria-label` or visually hidden text) for icon-only buttons.
- Prefer inline SVGs for performance and style control.

---

## 10. Responsive Design Principles

- Mobile-first design; styles scale up via `md:` breakpoints.
- Breakpoints: `md` (768px) as the primary tablet/desktop threshold.
- Navigation collapses into a functional mobile menu on screens below `md`.
- Hero stacks vertically on mobile (text over visual, or text-first layout).
- Grids: 1 column mobile → 4 columns desktop for services; 3 columns desktop for portfolio.
- Typography scales down on mobile (H1 `40px`, H2 `28px`, etc.).
- Touch targets minimum `44px` × `44px`.
- No horizontal overflow; content always contained within `max-w-[1320px]`.
- Tested on: mobile, tablet, laptop, desktop.

---

## 11. Visual Direction

- **Premium, minimal, sophisticated.** Generous whitespace, strong hierarchy, subtle borders, soft shadows where appropriate.
- **Avoid:** excessive gradients, glowing effects, unnecessary animations, generic AI-generated aesthetics, fake metrics, invented testimonials, placeholder sections.
- **Hero exception:** Soft curved blue gradient background shapes are permitted in the hero section to match the approved design reference.
- **Every section must contain verified content only.** No fictional services, clients, projects, or contact details.
- **Accessibility first:** colour contrast meets WCAG AA, keyboard navigation works, focus states visible, images have alt text, semantic HTML.

---

## 12. Implementation Notes

- Styling infrastructure: Tailwind CSS v4 (`@import "tailwindcss"` + `@theme inline` in `globals.css`).
- Fonts: loaded via `next/font/google` (Self-hosting, automatic optimization).
- Router: Next.js App Router (`src/app/`).
- No new UI libraries; use existing Tailwind infrastructure.
- TypeScript strict mode enabled; all components typed.
