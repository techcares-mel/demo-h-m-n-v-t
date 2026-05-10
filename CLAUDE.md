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
- **Theme**: Light — warm cream background, dark warm text, clean modern food aesthetic
- **Accent color**: `#c97e20` (deep amber — legible on cream)
- **Accent hover**: `#a86818`
- **Accent glow**: `rgba(201, 126, 32, 0.15)`
- **Background**: `#fdf6ed` (warm cream)
- **Surface**: `#f0e4cc` (warm beige — alternating sections)
- **Card**: `#ffffff`
- **Text**: `#1c1209` (near-black warm)
- **Text muted**: `#7a6550`
- **Border**: `rgba(28, 18, 9, 0.1)`
- **Footer**: dark `#1c1209` background for contrast
- **Heading font**: `Cormorant Garamond` (700, italic for display headings)
- **Body font**: `Be Vietnam Pro` (400/500/600/700)
- **Inspiration**: Clean modern food website aesthetic — warm cream background, amber accents, split hero layout, horizontal "How It Works" cards, amber feature strip. Inspired by the design.webp reference.

## Assets
- **Logo**: `logo.png` — present in business root. Displayed in nav (height: 48px) and footer (height: 64px).
- **images/**: 5 real business photos from Google Maps.
  - `image1.webp` — Vietnamese street food menu item (used as hero background)
  - `image2.webp` — Vietnamese food menu item (used in gallery)
  - `image3.webp` — Business photo (used as About section image)
  - `image4.webp` — Business photo (used in gallery)
  - `image5.webp` — Business photo (used in gallery, spans full width)
- **colors.json**: Present — accent `#d8882c` (amber), suggestedTheme: dark
- **Hero background**: `images/image1.webp` with `rgba(0,0,0,0.58)` overlay

## Page Sections
1. **Nav** — Fixed top, transparent → cream blur rgba(253,246,237,0.96) on scroll (scrollY > 50). Logo: `logo.png` (height: 48px). Links: Menu · About · Contact. "Order Now" pill CTA (hidden mobile). Mobile: hamburger → full-screen cream overlay with large italic links.
2. **Hero** — Split layout (text left, image right). No full-bleed bg. H1: "Welcome to Vietnamese Food Heaven…". Image: `images/image1.webp` in rounded card. Two CTAs: "View Our Menu" + "Find Us".
3. **How It Works** — 4-column card grid on surface bg. Cards: image on top (4:3), step number in italic, title, description. Images: image1–image4.
4. **Feature Strip** — Amber (`var(--accent)`) background. Left: story text + feature list + "Find Our Location" dark CTA. Right: 2-photo grid (image2 + image5).
5. **About** — Light cream bg. Two-column: left text (description + 4 badges), right `images/image3.webp`.
6. **Menu** — 2×2 card grid on surface bg. Categories: Bánh Mì, Chè, Street Snacks, Drinks.
7. **Gallery** — 3-column grid on bg. All 5 images, hover captions. Fifth spans full row.
8. **Stats Strip** — Surface bg. 4 items: 🏮 20+ Menu Items, ⭐ 100% Authentic Recipes, 🛵 Fast Takeaway, ❤️ Family Run.
9. **Contact** — Light bg. Two-column: left info + map, right form.
10. **Footer** — Dark `#1c1209` bg. `logo.png` (height: 64px), name, tagline, address. Quick links + specialities. Copyright © 2026 HẺM ĂN VẶT.

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

## Redeployment
After making changes, commit and redeploy from inside this folder:
```bash
git add -A
git commit -m "describe your changes"
git push
vercel --prod --yes
```
The Vercel project is already linked (`.vercel/project.json`) — no token or scope flags needed.
