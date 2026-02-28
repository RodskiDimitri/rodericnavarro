# Branding Guidelines

This document outlines the core branding principles, typography, color palettes, UI patterns, and animation language for the **Roderic G. Navarro** professional portfolio website.

---

## Logo Mark

*   **Brand Name**: `RODERIC.AI` — the `.AI` portion uses the signature gradient text effect.
*   **Icon**: Lucide `Cpu` icon, colored with the Primary Accent (`#00f0ff`).
*   **Font**: `Outfit`, weight 700, size `1.5rem`.

---

## Typography

Modern, highly readable sans-serif fonts loaded from Google Fonts:

| Role | Font Family | Weights | CSS Variable |
|---|---|---|---|
| **Headings** | `Outfit` | 300, 400, 500, 600, 700 | `--font-heading` |
| **Body** | `Inter` | 300, 400, 500, 600 | `--font-body` |

*   All headings (`h1`–`h6`) use `Outfit` with a slight negative letter spacing (`-0.02em`) for a premium feel.
*   Body text defaults to `Inter` via the `html` selector.

---

## Color Palette — Vibrant Dark Mode

### Backgrounds

| Token | Value | Usage |
|---|---|---|
| `--bg-main` | `#0a0a0c` | Page background, scrollbar track |
| `--bg-secondary` | `#131316` | Cards, footer, elevated surfaces |
| `--bg-tertiary` | `#1c1c22` | Scrollbar thumb, subtle elements |

### Text

| Token | Value | Usage |
|---|---|---|
| `--text-main` | `#f3f4f6` | Primary text (off-white, avoids harsh pure white) |
| `--text-muted` | `#9ca3af` | Subtitles, secondary info, nav links |

### Accents

| Token | Value | Usage |
|---|---|---|
| `--accent-primary` | `#00f0ff` (Cyan) | Highlights, active nav, availability badge |
| `--accent-secondary` | `#7000ff` (Purple) | Gradient endpoints, secondary highlights |
| `--accent-glow` | `rgba(0, 240, 255, 0.4)` | Hover glows, social icon shadows |

### Borders

| Token | Value | Usage |
|---|---|---|
| `--border-color` | `rgba(255, 255, 255, 0.1)` | Outline buttons, social icons, nav CTA |
| `--glass-border` | `rgba(255, 255, 255, 0.05)` | Glassmorphism card edges |

---

## UI Patterns & Aesthetics

### Glassmorphism (`.glass`)
Used extensively on cards, the navbar (on scroll), and decorative elements:
*   **Background**: `rgba(19, 19, 22, 0.7)` (`--glass-bg`)
*   **Blur**: `backdrop-filter: blur(12px)`
*   **Border**: `1px solid rgba(255, 255, 255, 0.05)` (`--glass-border`)

### Gradients
*   **Text Gradient** (`.text-gradient`): `linear-gradient(to right, --accent-primary, --accent-secondary)` with `background-clip: text` for a cyan-to-purple sweep.
*   **Primary Button** (`.btn-primary`): `linear-gradient(135deg, --accent-primary, --accent-secondary)` at a diagonal.

### Glow Hover (`.glow-hover`)
Interactive elements gain an aqua-tinted glow on hover:
*   `box-shadow: 0 0 20px var(--accent-glow)`
*   `border-color: rgba(0, 240, 255, 0.3)`

### Buttons
*   Fully rounded corners (`border-radius: 9999px`), `Outfit` font, `font-weight: 500`.
*   `.btn-primary`: Gradient background + cyan shadow, lifts `translateY(-2px)` on hover.
*   `.btn-outline`: Transparent background, muted border, brightens on hover.

### Social Icons (`.social-icon`)
*   Circular (`40px × 40px`, `border-radius: 50%`), subtle glass background.
*   On hover: background fills with `--accent-primary`, text inverts to `--bg-main`, lifts `translateY(-3px)` with glow shadow.

### Skill Badges
*   Pill-shaped (`border-radius: 9999px`), subtle glass background.
*   Each badge has a unique `brandColor`. On hover, the border and box-shadow adopt the brand color, and text brightens to white.

---

## Animation Language

The site uses **Framer Motion** with a consistent spring-based animation language:

| Pattern | Description | Where Used |
|---|---|---|
| **Fade-in + slide up** | `opacity: 0 → 1`, `y: 20–30 → 0` | Section headings, cards |
| **Stagger children** | `staggerChildren: 0.1`, `delayChildren: 0.2` | Skill badges, grid items |
| **Spring physics** | `stiffness: 120`, `damping: 12` | Individual badge entrances |
| **Float** | `@keyframes float` — slow `6s` vertical bob | Hero profile image |
| **Rotating rings** | `rotate: 360` / `-360`, `duration: 30–40s`, `infinite` | Hero visual orbits |
| **Background blur orbs** | Large circles with `filter: blur(150–200px)`, `opacity: 0.15` | Hero section ambient lighting |

---

## Responsive Design

*   **Breakpoint**: `768px` (single breakpoint for mobile).
*   Grids (`.grid-cols-2`, `.grid-cols-3`, `.skills-grid`, footer) collapse to single-column below 768px.
*   The navbar switches between horizontal links and a mobile hamburger menu at this breakpoint.

---

## Layout & Spacing

| Token | Value | Usage |
|---|---|---|
| `--section-padding` | `6rem` | Vertical padding for all `<section>` elements |
| `.container` max-width | `1200px` | Content wrapper, centers with `auto` margins |
| `.container` padding | `0 1.5rem` | Horizontal gutters |

---

## Page Sections (Order)

1. **Navbar** — Fixed top, glass on scroll
2. **Hero** — Full-height intro with name, title, CTA, and profile visual
3. **Results at a Glance** — Key metrics / impact numbers
4. **About** — Bio and background
5. **Skills (Technical Arsenal)** — 4-card grid of categorized skills
6. **Experience** — Work history / timeline
7. **Testimonials** — Client/colleague quotes
8. **Target Markets (Clients)** — Industry verticals served
9. **Contact** — Contact form / details
10. **Footer** — Brand mark, social links, copyright

---

## Icons and Imagery

*   **Lucide React**: Primary icon library for all UI icons (consistent line-style).
*   **SimpleIcons CDN**: Brand logos fetched at runtime via `https://cdn.simpleicons.org/{name}/{hexColor}`. Falls back to a Lucide icon on error.
*   **Custom Assets**: Tools not yet in SimpleIcons (e.g., Antigravity IDE) use their official logo URLs directly.
*   **Profile Photo**: `/public/profile.png`, displayed in the Hero section inside a circular frame with a cyan glow shadow.
