# CLAUDE.md — HẺM ĂN VẶT

## Business Details
- **Name**: HẺM ĂN VẶT (means "Snack Alley" in Vietnamese)
- **Type**: Vietnamese street food / snack restaurant
- **Address**: 67 Berkshire Rd, Sunshine North VIC 3020, Australia
- **Phone**: Not found
- **Email**: Not found
- **Website**: No existing website
- **Delivery**: Also available on Uber Eats (listing inactive as of April 2026); direct takeaway available

## Language
- **ALL site text is in English only.** The brand name "HẺM ĂN VẶT" is retained as a proper noun. Dish names (Bánh Mì, Chè, Bánh Tráng Trộn, etc.) are used as widely-recognised Vietnamese food terms (like "sushi" or "tacos") with English descriptions alongside them.

## Design System
- **Theme**: Dark — very dark warm black background, warm cream text, lantern-lit alley aesthetic
- **Accent color**: `#d8882c` (warm amber — from colors.json)
- **Accent hover**: `#de9a4c`
- **Accent glow**: `rgba(216, 136, 44, 0.25)`
- **Gold accent**: `#e0d69e` (from colors.json lightVibrant)
- **Background**: `#0d0a07` (very dark warm black — custom, warmer than colors.json)
- **Surface**: `#1a1208` (dark warm brown — About, Gallery, Contact, Footer sections)
- **Card**: `#221a0e` (menu cards, contact form)
- **Text**: `#f5e6d0` (warm cream)
- **Text muted**: `#9c8a72` (warm tan)
- **Border**: `rgba(216, 136, 44, 0.2)` (amber-tinted)
- **Heading font**: `Cormorant Garamond` (700, italic for display headings)
- **Body font**: `Be Vietnam Pro` (400/500/600/700)
- **Inspiration**: Late-night hẻm dining atmosphere — warm amber and gold accents, dark moody backgrounds, real business photos from Google Maps, inspired by Vietnamese street food alleyways.

## Assets
- **Logo**: `logo.png` — present in business root. Displayed in nav (height: 50px) and footer (height: 60px).
- **images/**: 5 real business photos from Google Maps.
  - `image1.webp` — Vietnamese street food menu item (used as hero background)
  - `image2.webp` — Vietnamese food menu item (used in gallery)
  - `image3.webp` — Business photo (used as About section image)
  - `image4.webp` — Business photo (used in gallery)
  - `image5.webp` — Business photo (used in gallery, spans full width)
- **colors.json**: Present — accent `#d8882c` (amber), suggestedTheme: dark
- **Hero background**: `images/image1.webp` with `rgba(0,0,0,0.58)` overlay

## Page Sections
1. **Nav** — Fixed top, transparent → blur + rgba(13,10,7,0.92) dark on scroll (scrollY > 50). Logo: `logo.png` (height: 50px). Links: Menu · About · Contact. Mobile: hamburger → full-screen overlay with large italic links.
2. **Hero** — 100vh. `images/image1.webp` full-bleed background with dark overlay. H1: HẺM ĂN VẶT in Cormorant Garamond italic. Subtitle: "Authentic Vietnamese Street Food · Sunshine North". Two CTAs: "View Our Menu" + "Find Us". SVG wave divider.
3. **About** — Dark warm surface. Two-column: left text (English description + 4 feature badges), right `images/image3.webp` with object-fit cover.
4. **Menu** — 2×2 card grid on dark bg. Categories: Bánh Mì, Chè, Street Snacks, Drinks. Each card: emoji icon, category name, English subtitle, description, English item list.
5. **Gallery** — 3-column CSS grid (2-col on tablet, 1-col on mobile). All 5 images with hover zoom + caption. Fifth image spans full row.
6. **Stats Strip** — 4 items: 🏮 20+ Menu Items (count-up), ⭐ 100% Authentic Recipes (count-up), 🛵 Fast Takeaway (static), ❤️ Family Run (static).
7. **Contact** — Two-column: left info (address, Uber Eats note, location note) + Google Maps embed; right contact form (Name, Email, Message) with English thank-you message on submit.
8. **Footer** — `logo.png` (height: 60px), business name, English tagline, address. Quick links + specialities. Copyright © 2026 HẺM ĂN VẶT. No social icons.

## Required Features (all implemented)
- Mobile-first, breakpoints: 480/768/1024/1280px
- Scroll-reveal animations: `reveal` class + IntersectionObserver (threshold: 0.15), `.d1`–`.d4` delay classes (80ms steps)
- Stats counter: `requestAnimationFrame` count-up from 0 to target, 1500ms, easeOutQuad, triggered by IntersectionObserver
- Back-to-top button (fixed bottom-right, 48px circle, appears at scrollY > 300)
- Scroll progress bar (fixed top, 3px, var(--accent))
- DEMO watermark (fixed right side, rotated 90deg, opacity 0.09)
- Mobile hamburger nav with full-screen overlay; closes on link click and ESC key
- Contact form with fade-in English thank-you state (no backend)
- Google Maps embed: 67 Berkshire Rd Sunshine North VIC 3020
- Nav blur + semi-transparent dark on scroll
- Active nav link highlight on scroll
- No Font Awesome (all social_links empty — CDN omitted)

## Rules
- Mobile-first, breakpoints: 480/768/1024/1280px
- Scroll-reveal animations on all cards and headings (fade + slide-up, 80ms stagger)
- Back-to-top button (fixed bottom-right, appears at scrollY > 300)
- DEMO watermark (fixed right side, rotated, opacity 0.09)
- No Lorem Ipsum — real business data only
- No frameworks — pure HTML5/CSS3/vanilla JS
- English only — no Vietnamese UI text
