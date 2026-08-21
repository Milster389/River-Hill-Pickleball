# River Hill Pickleball — Next.js app folder

Drop-in replacement for your `app/` folder, plus the `public/` files it needs.

## Paste in

1. Replace your `app/` folder with the `app/` folder here.
2. Copy the `public/` folder contents into your project's `public/` (adds `gallery/1–12.webp`, both favicons, keeps the existing logos/jerseys).
3. Delete the leftovers from the old version if they're still around:
   `app/components/EventsForm.tsx`, `app/components/GroupMeSection.tsx`, and `app/favicon.ico`
   (the favicon now comes from `public/favicon.png` via `layout.tsx` metadata).
4. `npm run dev`

## What's here

- Bricolage Grotesque + Instrument Sans via `next/font` — no font `<link>` needed.
- All 12 gallery photos exported as real files in `public/gallery/`. Swap any file to change a tile; tile 1, 4 and 9 are the big ones (`wide` / `tall` classes in `GallerySection.tsx`).
- Mobile: hamburger menu under 980px, stats 2-up, gallery 2-up, stacked about/footer, hero emblem moved to the top corner so it never sits on the headline.
- All styling in `app/globals.css` (CSS variables at the top for the navy/gold palette).
