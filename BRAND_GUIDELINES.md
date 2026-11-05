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

## 3. Colour Palette — Semantic Theme Tokens

All colours are defined as CSS variables (semantic tokens) in `globals.css` and switch based on the `data-theme` attribute on `<html>`. Never hard-code colours per component.

### Light Theme

| Token | Hex | Usage |
|-------|-----|-------|
| `--background` / `--color-background` | `#FFFFFF` | Page background |
| `--foreground` / `--color-foreground` | `#101828` | Headings, primary text |
| `--color-accent` | `#2F5BFF` | Primary buttons, filled interactive elements |
| `--color-accent-hover` | `#2447D6` | Button hover state |
| `--color-accent-text` | `#2F5BFF` | Links, accent text, SVG strokes |
| `--color-card` | `#FFFFFF` | Card surfaces |
| `--color-card-alt` | `#F3F5F8` | Alt section backgrounds, subtle tiles |
| `--color-border` | `#E5E9F0` | Card borders, dividers, input borders |
| `--color-border-hover` | `#C7CDD6` | Border hover state |
| `--color-muted` | `#4B5565` | De-emphasised text, labels |
| `--color-body` | `#4B5565` | Body copy, descriptions (no lighter than #4B5565) |
| `--color-footer` | `#0B1220` | Footer background |
| `--color-shadow` | `rgba(16,24,40,0.08)` | Soft shadows |
| `--color-glow` | `rgba(47,91,255,0.15)` | Soft blue glow shapes |
| `--color-ring` | `#2F5BFF` | Focus rings |

### Dark Theme (`data-theme="dark"`)

| Token | Hex | Usage |
|-------|-----|-------|
| `--background` / `--color-background` | `#0B1220` | Page background |
| `--foreground` / `--color-foreground` | `#F2F4F7` | Headings, primary text |
| `--color-accent` | `#2F5BFF` | Primary buttons (white text on top) |
| `--color-accent-hover` | `#5B7FFF` | Button hover state |
| `--color-accent-text` | `#5B7FFF` | Links, accent text, SVG strokes (lighter blue for contrast) |
| `--color-card` | `#131C31` | Card surfaces |
| `--color-card-alt` | `#0F1830` | Alt section backgrounds, subtle tiles |
| `--color-border` | `#22304F` | Card borders, dividers, input borders |
| `--color-border-hover` | `#3A4A73` | Border hover state |
| `--color-muted` | `#A9B4CA` | De-emphasised text, labels |
| `--color-body` | `#A9B4CA` | Body copy, descriptions (no darker than #A9B4CA) |
| `--color-footer` | `#070C18` | Footer background (deeper than page) |
| `--color-shadow` | `rgba(0,0,0,0.4)` | Dark mode: use borders instead of heavy shadows |
| `--color-glow` | `rgba(91,127,255,0.12)` | Soft blue glow shapes |
| `--color-ring` | `#2F5BFF` | Focus rings |

### WCAG AA Contrast

- Text: 4.5:1 minimum against background
- Large text (18px+ bold or 24px+): 3:1 minimum
- UI components (buttons, input borders): 3:1 minimum
- Placeholder text: meets contrast requirements in both themes
- Verified: accent text `#5B7FFF` on dark background `#0B1220` passes AA for large text

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
| H1 (Hero) | Manrope | 56px (desktop), 40px (mobile) | 800 | 1.15 | -0.02em | Hero headline |
| H2 (Section) | Manrope | 32px | 700 | 1.2 | -0.02em | Section headings |
| H3 (Card title) | Manrope | 20px | 600 | 1.4 | 0 | Card/service titles |
| H4 (Kicker / eyebrow) | Manrope | 11px | 600 | 1.4 | 0.15em | Section labels, uppercase |
| Body | Inter | 16px | 400 | 1.7 | 0 | Paragraphs, descriptions |
| Body small | Inter | 14px | 400 | 1.6 | 0 | Captions, fine print |
| Button | Inter Medium | 15px | 500 | 1.5 | 0 | CTA buttons |
| Link | Inter | 15px | 500 | 1.5 | 0 | Navigation, inline links |

### Rules

- Headings use tight tracking (`-0.02em`) for a premium feel.
- Body uses relaxed line height (`1.7`) for readability.
- Kickers/eyebrows are uppercase with wide tracking (`0.15em`).
- Section headings: small label with side lines, then heading whose last word(s) are accent blue (gradient from `#2F5BFF` to `#6E8CFF` permitted).
- Never stretch or distort type.
- Manrope and Inter loaded via `next/font/google`.

---

## 5. Logo Usage

### Logo mark

- No verified image logo exists in the repository. The "V" mark is recreated as an inline SVG (see components).
- The V mark stays blue (`#2F5BFF` light / `#5B7FFF` dark) in both themes.
- The "Veyora" wordmark switches colour: `#101828` light / `#FFFFFF` dark.
- "DIGITAL STUDIO" subtitle switches: `#4B5565` light / `#A9B4CA` dark.

### Clear space

- Maintain clear space around the logo equal to at least the height of the lowercase "v".
- Do not crowd the logo with navigation or other elements.

### Sizing

- Navigation: `text-sm` / `font-bold` / `tracking-tight`.
- Footer: `text-sm` / `font-bold` / `tracking-tight`.
- Never use the logo at sizes smaller than `text-sm`.

---

## 6. Button Design Guidelines

### Primary (filled) button

- Background: `--color-accent` (`#2F5BFF`)
- Hover: `--color-accent-hover` (`#2447D6` light / `#5B7FFF` dark)
- Text: `#FFFFFF` (white)
- Font: Inter Medium, `15px`, `500`
- Padding: `px-7 py-3.5`
- Radius: `rounded-full`
- Transition: `transition-colors duration-200`
- Focus: visible focus ring (`--color-ring`)

### Secondary (outline) button

- Background: transparent
- Border: `1px --color-border`
- Text: `--color-foreground`
- Font: Inter Medium, `15px`, `500`
- Padding: `px-7 py-3.5`
- Radius: `rounded-full`
- Hover: `--color-card-alt` background
- Transition: `transition-colors duration-200`
- Focus: visible focus ring

### General rules

- All buttons use `transition-colors duration-200 ease-in-out`.
- No glowing, no gradients on buttons, no bounce animations.
- Disabled state: opacity `50%`, `cursor: not-allowed`.
- Always include a visible focus state (`focus-visible:ring`).

---

## 7. Spacing System

Use a consistent spacing scale based on Tailwind's default spacing (multiples of 4px / 0.25rem).

| Token | Value | Use |
|-------|-------|-----|
| Section padding (vertical) | `py-24` (desktop), `py-16` (mobile) | Page sections (~96px vertical on desktop) |
| Container max-width | `max-w-[1320px]` | Page content container |
| Container horizontal padding | `px-6` | Page edges |
| Grid gap | `gap-6` (mobile), `gap-8` / `gap-16` (desktop) | Card grids |
| Card padding | `p-8` (desktop `p-12` for contact form) | Service/project cards |
| Navbar padding | `px-6 py-3` | Navigation bar |
| Section gap (label to heading) | `mb-3` | Label to heading |
| Section gap (heading to body) | `mb-6` | Heading to paragraph |

### Rules

- Use generous whitespace; avoid cramped layouts.
- Maintain consistent vertical rhythm across sections.
- Responsive spacing: tighter on mobile, more generous on desktop.
- Never use arbitrary magic numbers; use the spacing scale.

---

## 8. Component Guidelines

### Cards

- Background: `--color-card` (switches per theme)
- Border: `1px --color-border`
- Radius: `rounded-[1.5rem]` (20-24px)
- Padding: `p-8`
- Shadow: `--color-shadow` (light mode only; dark mode uses borders)
- Hover: subtle lift (`-translate-y-1`) and border colour shift (`--color-border-hover`)
- Transition: `transition-all duration-200`
- No heavy drop shadows in dark mode; use borders and subtle glows instead

### Sections

- Container: `mx-auto max-w-[1320px] px-6`
- Background: `--color-background` or `--color-card-alt` alternating for rhythm
- Text: `--color-foreground` on light; `--color-foreground` on dark

### Layout

- Single-column centred content for reading sections.
- 3-column grid for services on desktop, 1-column on mobile.
- 2-column grid for hero on desktop, stacked on mobile.
- 2-column grid for footer on tablet, 3-column on desktop.

---

## 9. Iconography Guidelines

- Use simple, consistent, line-based icons only (inline SVGs).
- No illustrated or 3D icon styles.
- Icons are monochrome using `--color-foreground` or `--color-accent-text`.
- Consistent stroke weight and size (typically `14px`–`24px`).
- Always provide accessible labels (`aria-label` or visually hidden text) for icon-only buttons.
- The V mark SVG stays blue in both themes; wordmark text switches colour.

---

## 10. Theme Behaviour (Light / Dark Mode)

### Implementation

- Theme is stored as `data-theme` attribute on `<html>` (`"light"` or `"dark"`).
- Default: visitor's system preference (`prefers-color-scheme`).
- Manual choice saved in `localStorage` under key `veyora-theme`.
- No flash of wrong theme on load: inline script in `layout.tsx` sets `data-theme` before first paint.
- No hydration mismatch: `suppressHydrationWarning` on theme-toggle button; icon renders after mount.
- CSS `color-scheme` property set per theme (`light` / `dark`) for scrollbars and form controls.
- Theme transitions: 200ms on colours only, disabled under `prefers-reduced-motion`.

### ThemeToggle component

- Located at `src/components/ThemeToggle.tsx` (Client Component).
- Sun/moon icon button with `aria-label` stating the action and `aria-pressed` state.
- Located in navbar (desktop + mobile menu).

---

## 11. Responsive Design Principles

- Mobile-first design; styles scale up via `md:` breakpoints.
- Breakpoint: `md` (768px).
- Navigation collapses into a functional mobile menu below `md`.
- Hero: 2-column grid on desktop, stacked on mobile (text first, then laptop visual).
- Services: 3 columns on desktop, 1 column on mobile.
- About: 2-column grid on desktop, 1 column on mobile.
- Contact: 2-column grid on desktop, 1 column on mobile.
- Footer: 3 columns on desktop, 2 columns on tablet, 1 column on mobile.
- Floating cards hidden on mobile if they crowd the layout.
- Typography scales down on mobile (H1 `40px`, H2 `28px`, etc.).
- Touch targets minimum `44px` × `44px`.
- No horizontal overflow; content contained within `max-w-[1320px]`.
- Tested on: mobile, tablet, laptop, desktop.

---

## 12. Visual Direction

- **Premium, minimal, sophisticated.** Generous whitespace, strong hierarchy, subtle borders, soft shadows where appropriate.
- **Hero exception:** Soft curved blue gradient background shapes and dot grid permitted in hero section.
- **Dark mode:** No pure black (`#000`), no neon glows. Deep navy surfaces, borders instead of heavy shadows, subtle glows.
- **Every section must contain verified content only.** No fictional services, clients, projects, or contact details.
- **Accessibility first:** colour contrast meets WCAG AA, keyboard navigation works, focus states visible, images have alt text, semantic HTML.

---

## 13. Implementation Notes

- Styling infrastructure: Tailwind CSS v4 (`@import "tailwindcss"` + `@theme inline` in `globals.css`).
- Fonts: loaded via `next/font/google` (self-hosting, automatic optimization).
- Router: Next.js App Router (`src/app/`).
- No new UI libraries; no `next-themes` package installed. Theme switching implemented manually with CSS variables + `data-theme` + `localStorage`.
- TypeScript strict mode enabled; all components typed.
- Portfolio section files retained in repo but unlinked from homepage, navbar, and footer (per product decision). Real project data not available in repo.
