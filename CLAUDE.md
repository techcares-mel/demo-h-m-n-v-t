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
- **Theme**: Dark — very dark warm black background, warm cream text, lantern-lit alley aesthetic
- **Primary / Accent color**: `#c8392b` (deep Vietnamese red)
- **Accent hover**: `#a82e22`
- **Accent glow**: `rgba(200, 57, 43, 0.35)`
- **Gold accent**: `#d4a847` — italic display headings, eyebrow text, quote card
- **Background**: `#0d0a07` (very dark warm black)
- **Surface**: `#1a1208` (dark warm brown — About, Stats, Footer sections)
- **Card**: `#221a0e` (menu cards, contact form)
- **Text**: `#f5e6d0` (warm cream)
- **Text muted**: `#9c8a72` (warm tan)
- **Heading font**: `Cormorant Garamond` — 700, italic for display headings and section titles
- **Body font**: `Be Vietnam Pro` — 400/500/600/700 — correct rendering of Vietnamese diacritics
- **Inspiration**: Late-night hẻm dining atmosphere — warm reds, dark moody backgrounds, lantern light, inspired by the street food alleys of Hanoi and Saigon. No photos available; visual interest achieved through CSS gradients, animated lanterns, decorative quote card, and diamond pattern SVG.

## Assets
- **Logo**: No logo found — business name "HẺM ĂN VẶT" styled in Cormorant Garamond italic with 🏮 lantern emoji in nav and footer
- **images/**: EMPTY — no business photos found online. No `<img>` tags or `background-image: url(images/...)` references exist in the codebase.
- **colors.json**: Not generated (no logo to extract from)
- **Hero background**: CSS radial-gradient (`#3d1a0a → #1a0a05 → #0d0a07`) with repeating diagonal-line texture overlay
- **About visual**: Decorative quote card with Vietnamese quote, gold typography, diamond SVG pattern — no image

## Page Sections
1. **Nav** — Fixed top, transparent → blur + rgba(13,10,7,0.9) dark on scroll (scrollY > 50). Logo: 🏮 HẺM ĂN VẶT in Cormorant Garamond italic red. Links: Thực Đơn, Về Chúng Tôi, Liên Hệ. Mobile: hamburger → full-screen overlay with large italic Vietnamese links + English subtitles.
2. **Hero** — 100vh. CSS gradient background (no image). H1: HẺM / ĂN VẶT (two-line, ĂN VẶT italic red). Subtitle: Đồ Ăn Vặt Đường Phố · Vietnamese Street Food. Two CTAs: "Xem Thực Đơn" + "Tìm Chúng Tôi". Floating 🏮 lantern emojis with float animation. SVG wave divider at bottom.
3. **About (Về Chúng Tôi)** — Dark warm surface. Two-column: left text (story from research.json, 4 feature badges), right decorative quote card ("Hẻm nhỏ, hương vị lớn" in Cormorant Garamond, gold, diamond SVG pattern background).
4. **Menu (Thực Đơn)** — 2×2 card grid on bg. Categories: Bánh Mì (4 items), Chè (4 items), Đồ Ăn Vặt (4 items), Đồ Uống (4 items). Each card: emoji icon, Vietnamese category name, English subtitle, description, item list with Vietnamese + English names.
5. **Stats Strip** — 4 items: 🏮 20+ Menu Items (count-up), ⭐ 100% Authentic Recipes (count-up), 🛵 Fast Takeaway (static word), ❤️ Family Run Business (static word). Surface background, border top/bottom.
6. **Contact (Liên Hệ)** — Two-column: left info (address, ordering note, location note) + Google Maps embed; right contact form (Name, Email, Message) with Vietnamese thank-you state on submit.
7. **Footer** — Business name + tagline (Vietnamese + English) + address. Navigation links. Specialities list. No social icons (all social_links empty). Copyright © 2025 HẺM ĂN VẶT.

## Required Features (all implemented)
- Mobile-first, breakpoints: 480/768/1024/1280px
- Scroll-reveal animations: `reveal` class + IntersectionObserver (threshold: 0.15), `.d1`–`.d4` delay classes (80ms steps)
- Stats counter: `requestAnimationFrame` count-up from 0 to target, 1500ms, easeOutQuad, triggered by IntersectionObserver
- Back-to-top button (fixed bottom-right, appears at scrollY > 300, 48px circle)
- Scroll progress bar (fixed top, 3px, accent color)
- DEMO watermark (fixed right side, rotated 90deg, opacity 0.09)
- Mobile hamburger nav with full-screen overlay, closes on link click and ESC key
- Contact form with fade-in Vietnamese thank-you state (no backend)
- Google Maps embed with real address: 67 Berkshire Rd Sunshine North VIC 3020
- Nav blur + semi-transparent dark on scroll
- Active nav link highlight on scroll
- Lantern glow pulse animation (injected via JS)
- No Font Awesome (all social_links empty — CDN omitted)
- No broken image references — images/ is empty, no `<img src="images/...">` or `background-image: url(images/...)` anywhere

## Rules
- Mobile-first, breakpoints: 480/768/1024/1280px
- Scroll-reveal animations on all cards and headings (fade + slide-up, 80ms stagger)
- Back-to-top button (fixed bottom-right, appears at 300px scroll)
- DEMO watermark (fixed right side, rotated, opacity 0.09)
- No Lorem Ipsum — real business data only
- No frameworks — pure HTML5/CSS3/vanilla JS
- No external image references — images/ folder is empty
