# CLAUDE.md — HẺM ĂN VẶT

## Business Details
- **Name**: HẺM ĂN VẶT (means "Snack Alley" in Vietnamese)
- **Type**: Vietnamese street food / snack restaurant
- **Address**: 67 Berkshire Rd, Sunshine North VIC 3020, Australia
- **Phone**: Not found — no phone number discoverable
- **Email**: Not found
- **Website**: No existing website
- **Delivery**: Uber Eats listing found (inactive as of April 2026); direct takeaway available

## Design System
- **Theme**: Dark — very dark warm black background, warm cream text
- **Primary color**: `#c8392b` (deep Vietnamese red)
- **Accent color**: `#c8392b` — used for CTA buttons, borders, watermark, scroll bar
- **Gold accent**: `#d4a847` — used for italic headings, hero eyebrow, thank-you message
- **Background**: `#0d0a07` (very dark warm black)
- **Surface**: `#1a1208` (dark warm brown — about/features sections)
- **Card**: `#221a0e` (menu cards, contact form)
- **Text**: `#f5e6d0` (warm cream)
- **Text muted**: `#9c8a72` (warm tan)
- **Heading font**: `Cormorant Garamond` — 600/700, italic for display headings
- **Body font**: `Be Vietnam Pro` — 400/500/600 — supports Vietnamese diacritics correctly
- **Inspiration**: Vibrant Vietnamese street alley atmosphere — warm reds, dark moody backgrounds, lantern aesthetic, inspired by the street food alleys of Hanoi and Saigon. Think late-night hẻm dining: warm lantern light, the smell of grilled rice paper, condensation on a cold cà phê sữa đá.

## Assets
- **Logo**: No logo found — business name "HẺM ĂN VẶT" styled in Cormorant Garamond italic with 🏮 lantern emoji used in nav and footer
- **images/image1.jpg**: Bánh mì sandwich — Vietnamese bread roll with fillings
- **images/image2.jpg**: Coffee and bánh mì in Saigon — authentic street food setting
- **images/image3.jpg**: Bánh tráng nướng street food stall in Ho Chi Minh City (used as hero background)
- **images/image4.jpg**: Chè chuối — Vietnamese banana tapioca coconut pudding
- **images/image5.jpg**: Vietnamese street food vendor in Hanoi alley — the spirit of the business

## Page Sections
1. **Nav** — Fixed top, transparent → blur + semi-transparent dark on scroll. Logo: 🏮 HẺM ĂN VẶT in Cormorant Garamond italic red. Links: Menu, About, Gallery, Contact. Mobile: hamburger → full-screen overlay with large italic links.
2. **Hero** — 100vh, image3.jpg background with 0.65 dark overlay. H1: HẺM ĂN VẶT. Subtitle: Authentic Vietnamese Street Food · Sunshine North. Two CTAs: "View Our Menu" + "Find Us". SVG wave divider at bottom.
3. **About** — Dark warm surface. Two-column: left text (story, badges), right image2.jpg (coffee + bánh mì in Saigon).
4. **Menu** — 2×2 card grid. Categories: Bánh Mì (4 items), Chè (4 items), Đồ Ăn Vặt/street snacks (4 items), Đồ Uống/drinks (4 items). Each card: emoji icon, Vietnamese category name, description, item list with Vietnamese names.
5. **Gallery** — 3-column CSS grid of all 5 downloaded images. Hover: zoom + overlay with Vietnamese dish name.
6. **Why Us** — 4-column strip: 🏮 Authentic Recipes, 🌿 Fresh Ingredients Daily, 🛵 Takeaway Friendly, ❤️ Family Run.
7. **Contact** — Two-column: info (address, specials note, location note) + Google Maps embed; contact form (Name, Email, Message) with thank-you state on submit.
8. **Footer** — Business name + tagline + address. Quick links. Menu items list. Copyright © 2025 HẺM ĂN VẶT.

## Required Features (all implemented)
- Mobile-first, breakpoints: 480/768/1024/1280px
- Scroll-reveal animations on all cards and headings (`reveal` class + IntersectionObserver, 80ms stagger via `.d1`–`.d4`)
- Back-to-top button (fixed bottom-right, appears at 300px scroll, 48px circle)
- Scroll progress bar (fixed top, 3px, accent color)
- DEMO watermark (fixed right side, rotated 90deg, opacity 0.09)
- No Lorem Ipsum — all real business data and plausible menu content
- Hamburger mobile nav with full-screen overlay and keyboard/Escape support
- Contact form with thank-you state (no backend)
- Google Maps embed with real address
- Nav blur + semi-transparent on scroll
- Active nav link highlight on scroll
- Hero Ken Burns slow pan on load
- Lantern emoji pulse animation (CSS keyframe injected via JS)
- Reduced-motion media query respected

## Rules
- Mobile-first, breakpoints: 480/768/1024/1280px
- Scroll-reveal animations on all cards and headings (fade + slide-up, 80ms stagger)
- Back-to-top button (fixed bottom-right, appears at 300px scroll)
- DEMO watermark (fixed right side, rotated, opacity 0.09)
- No Lorem Ipsum — real business data only
- No frameworks — pure HTML5/CSS3/vanilla JS
