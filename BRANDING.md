# Branding Guidelines

This document outlines the core branding principles, typography, color palettes, and UI patterns for the professional portfolio website.

## Typography

We use modern, highly readable sans-serif fonts from Google Fonts:

*   **Headings**: `Outfit` (Weights: 300, 400, 500, 600, 700)
    *   Used for all `h1`, `h2`, `h3`, `h4`, `h5`, `h6` elements.
    *   Slight negative letter spacing (`-0.02em`) for a premium look.
*   **Body**: `Inter` (Weights: 300, 400, 500, 600)
    *   Used for standard text, paragraphs, and UI elements.

## Color Palette

The site uses a "Vibrant Dark Mode" aesthetic, ensuring high contrast and a futuristic, professional vibe.

### Backgrounds
*   **Main Background**: `#0a0a0c`
*   **Secondary Background**: `#131316` (Used for cards and elevated components)
*   **Tertiary Background**: `#1c1c22` (Used for scrollbar thumbs and subtle elements)

### Text
*   **Main Text**: `#f3f4f6` (Off-white for high legibility, avoiding harsh pure white)
*   **Muted Text**: `#9ca3af` (Used for subtitles and secondary information)

### Accents
*   **Primary Accent**: `#00f0ff` (Cyan)
*   **Secondary Accent**: `#7000ff` (Purple)
*   *Note: These are frequently combined in linear gradients to create the signature look.*
*   **Accent Glow**: `rgba(0, 240, 255, 0.4)` (Used for hover states and drop shadows)

## UI Patterns & Aesthetics

### Glassmorphism
We rely heavily on glassmorphism to create depth without visual clutter:
*   **Background**: `rgba(19, 19, 22, 0.7)`
*   **Blur effect**: `12px` (`backdrop-filter`)
*   **Border**: `rgba(255, 255, 255, 0.05)`

### Gradients and Glows
*   **Text Gradient**: The `.text-gradient` utility class uses a left-to-right linear gradient transitioning from the Primary Accent to the Secondary Accent.
*   **Glow Hover**: Interactive elements use the `.glow-hover` utility, which smooths transitions and applies an aqua-tinted glow (`0 0 20px rgba(0, 240, 255, 0.4)`) on hover to make the interface feel alive.

### Buttons
Buttons feature heavily rounded corners (`9999px`), bold typography (`Outfit`), and drop shadows. Secondary buttons (`.btn-outline`) are transparent with thin muted borders that brighten on hover.

## Icons and Imagery
*   **Lucide React**: Provides consistent, clean, vector-based line icons across the site.
*   **SimpleIcons**: Used for precise brand representations (e.g., Google Workspace, OpenAI, App Script).
*   **Custom Assets**: Selected custom brand logos (e.g., Antigravity IDE) fallback to their official URL endpoints to guarantee accuracy.
