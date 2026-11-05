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
| `--color-navy` | `#101828` | Headings, primary text |
| `--color-deep-navy` | `#0B1220` | Dark surfaces |
| `--color-accent` | `#2F5BFF` | Primary buttons, filled interactive elements |
| `--color-accent-light` | `#5B7FFF` | Lighter blue for dark-mode text/links |
| `--color-background-alt` | `#F3F5F8` | Alt section backgrounds |
| `--color-border` | `#E5E9F0` | Card borders, dividers, input borders |
| `--color-tint` | `#EBF0FF` | Subtle tinted backgrounds |
| `--color-muted` | `#4B5565` | De-emphasised text (never lighter — contrast) |
| `--color-footer` | `#0B1220` | Footer background |
| `--color-shadow` | `rgba(16,24,40,0.08)` | Soft shadows |
| `--color-glow` | `rgba(47,91,255,0.15)` | Soft blue glow |
| `--color-ring` | `#2F5BFF` | Focus rings |

### Dark Theme (`data-theme="dark"`)

| Token | Hex | Usage |
|-------|-----|-------|
| `--background` / `--color-background` | `#0B1220` | Page background |
| `--color-navy` | `#F2F4F7` | Headings, primary text |
| `--color-deep-navy` | `#070C18` | Footer background (deeper than page) |
| `--color-accent` | `#2F5BFF` | Primary buttons |
| `--color-accent-light` | `#5B7FFF` | Links, accent text, SVG strokes |
| `--color-background-alt` | `#0F1830` | Alt section backgrounds |
| `--color-border` | `#22304F` | Card borders, dividers, input borders |
| `--color-tint` | `#1A2640` | Subtle tinted backgrounds |
| `--color-muted` | `#A9B4CA` | De-emphasised text (never darker — contrast) |
| `--color-footer` | `#070C18` | Footer background |
| `--color-shadow` | `rgba(0,0,0,0.4)` | Dark mode: use borders instead of heavy shadows |
| `--color-glow` | `rgba(91,127,255,0.12)` | Soft blue glow |
| `--color-ring` | `#2F5BFF` | Focus rings |

### Gradient Text

- `linear-gradient(100deg, #2F5BFF, #6E8CFF)` — used for the last word(s) of section headings

### WCAG AA Contrast

- Text: 4.5:1 minimum against background
- Large text (18px+ bold or 24px+): 3:1 minimum
- UI components (buttons, input borders): 3:1 minimum
- `--color-muted` (`#4B5565` light / `#A9B4CA` dark) never goes lighter/darker than these values to preserve contrast

---

## 4. Typography System

| Element | Font | Weights |
|---------|------|---------|
| Headings | Manrope | 500, 700, 800 |
| Body | Inter | 400, 500 |
| Buttons | Inter Medium | 500, 600 |

### Typographic rules

- **Headings:** letter-spacing `-0.025em`, line-height `1.08`, tight tracking for premium feel
- **Body:** relaxed line-height `1.7` for readability
- **Labels/kickers:** uppercase, tracking `0.15em`, `11px`
- **Never stretch or distort type.**
- Manrope and Inter loaded via `next/font/google` (self-hosting, automatic optimization).

---

## 5. Logo Usage

### Logo mark

- No verified image logo exists in the repository. The "V" mark is an inline SVG (`src/components/Logo.tsx`).
- The V mark stays blue (`--color-accent-text`) in both themes.
- The "Veyora" wordmark switches colour: `--color-foreground` per theme.
- "DIGITAL STUDIO" subtitle switches: `--color-muted` per theme.

### Clear space

- Maintain clear space around the logo equal to at least the height of the lowercase "v".
- Do not crowd the logo with navigation or other elements.

### Sizing

- Navigation: `text-sm` / `font-bold` / `tracking-tight`.
- Never use the logo at sizes smaller than `text-sm`.

---

## 6. Button Design Guidelines

### Primary (filled) button

- Background: vertical gradient `#4170FF` → `#2F5BFF`
- Text: `#FFFFFF` (white)
- Font: Inter Medium, `15px`, `500`
- Padding: `px-7 py-3.5`
- Radius: `rounded-full` (999px)
- Shadow: soft blue glow (`--color-glow`)
- Hover: lifts 2px (`-translate-y-1`), glow intensifies
- Arrow: nudges right on hover
- Transition: `transition-all duration-200`
- Focus: visible focus ring (`--color-ring`)

### Secondary (outline) button

- Background: translucent white (`bg-white/60`)
- Border: `1.5px` `#cdd8f5` (light) / theme-aware (dark)
- Text: `--color-accent` (blue)
- Font: Inter Medium, `15px`, `500`
- Padding: `px-7 py-3.5`
- Radius: `rounded-full` (999px)
- Hover: subtle tint background
- Transition: `transition-all duration-200`
- Focus: visible focus ring

### General button rules

- All buttons use `transition-all duration-200`.
- No glowing beyond the specified soft blue glow, no gradients on outline buttons, no bounce animations.
- Disabled state: opacity `50%`, `cursor: not-allowed`.
- Always include a visible focus state (`focus-visible:ring`).

---

## 7. Spacing System

| Token | Value | Use |
|-------|-------|-----|
| Section padding (vertical) | `96px` (desktop), `68px` (mobile) | Page sections |
| Container max-width | `1200px` | Page content container |
| Container horizontal padding | `28px` (desktop), `18px` (mobile) | Page edges |
| Section gap (label to heading) | `3 units` (~12px) | Label to heading |
| Section gap (heading to body) | `6 units` (~24px) | Heading to paragraph |
| Grid gap | `6 units` (mobile), `8 units` (desktop) | Card grids |

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
- Radius: `24px` for service cards; `20-24px` for About and form cards; `36px` for contact panel
- Shadow: `--color-shadow` (light mode); dark mode uses borders and subtle glows
- Hover: subtle lift and border colour shift (`--color-border-hover`)
- Transition: `transition-all duration-200`

### Sections

- Container: `mx-auto max-w-[1200px] px-28` (desktop), `px-18` (mobile)
- Background: `--color-background` or `--color-background-alt` alternating for rhythm
- Text: `--color-foreground` on light; `--color-foreground` on dark

### Layout

- Single-column centred content for reading sections.
- 3-column grid for services on desktop, 1-column on mobile.
- Hero: 2-column grid on desktop, stacked on mobile.
- Footer: 3 columns on desktop, 2 columns on tablet, 1 column on mobile.
- Floating cards hidden on mobile if they crowd the layout.

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
- Touch targets minimum `44px` × `44px`.
- No horizontal overflow; content contained within `max-w-[1200px]`.
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
- Reusable components: `Logo`, `Button`, `SectionHeading` in `src/components/`.
- Portfolio section files retained in repo but unlinked from homepage, navbar, and footer (per product decision). Real project data not available in repo.
