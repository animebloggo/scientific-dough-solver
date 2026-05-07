# 12-Post Instagram Grid Mural — Dissolve My Dough

Build a **4 columns × 3 rows** grid of 12 individual 1080×1080 square posts that, when viewed together on the Instagram profile, form one continuous warm bakery-paper "mural" telling the brand story. Each post also reads on its own in the feed.

## How the grid reads on profile

Instagram profile grids show newest post top-left, so posts must be **uploaded in reverse** (post 12 first, post 1 last). The narrative below is written in **viewing order** (top-left → bottom-right).

```text
 [01 COVER ]  [02 PROBLEM]  [03 INSIGHT]  [04 SHIFT  ]
 [05 BOTTLE]  [06 STEP 1 ]  [07 STEP 2 ]  [08 STEP 3 ]
 [09 NOT   ]  [10 FOUNDER]  [11 OAKLAND]  [12 CTA    ]
```

Each row is a chapter:
- **Row 1 — The why**: hook → the sticky problem → the science insight → the shift in approach
- **Row 2 — The product**: hero bottle (spans visually as the centerpiece) → 3-step how-it-works
- **Row 3 — The trust**: what it isn't → founders Kay & Kayla → made in Oakland → CTA

## Visual continuity (what makes it a "mural")

- **Shared cream paper background** flows edge-to-edge across all 12 tiles — kraft texture, subtle paper grain, hand-drawn flour smudges crossing tile borders
- **A single honey-mustard "ribbon" accent** sweeps diagonally from tile 02 → 07 → 11, tying the rows together
- **Hand-drawn bakery doodles** (whisk, flour puff, water droplet, dough ball, sourdough loaf) placed so a few cross tile seams
- **Founders' photo on tile 10** anchors the bottom row as the human moment
- **Logo wordmark on tile 12** as the final sign-off

## Content per tile (viewing order)

| # | Headline | Sub / Detail | Visual |
|---|----------|--------------|--------|
| 01 | "Dough doesn't rinse." | small Caveat: "so we fixed that" | flour-puff doodle, sticky-note tag |
| 02 | — | Caveat note: "ever scrubbed a whisk for 20 minutes?" | photo-style illustration of crusty whisk |
| 03 | "It's gluten + starch." | Inter caption: "water alone can't break it down" | small diagram doodle |
| 04 | "So we made something gentler." | — | honey ribbon sweep |
| 05 | — | "DISSOLVE MY DOUGH" label | hero bottle photo, centered |
| 06 | "01  Spray" | "on dried-on dough" | spray-bottle doodle |
| 07 | "02  Wait" | "5–10 minutes" | hourglass / clock doodle |
| 08 | "03  Rinse" | "warm water, gone" | water-droplet doodle |
| 09 | "No bleach. No fumes. No scrubbing." | — | three small crossed-out icons |
| 10 | "Meet Kay & Kayla" | Caveat: "the bakers behind the bottle" | founders photo |
| 11 | "Made in Oakland, CA" | "small batches, by hand" | sourdough loaf doodle, sticky-note |
| 12 | "dissolvemydough.com" | Caveat: "try a bottle →" | logo wordmark, honey accent |

## Brand system (locked)

- **Palette**: cream `oklch(0.96 0.025 80)` background, kraft brown `oklch(0.42 0.06 55)` primary text, honey `oklch(0.7 0.13 70)` accent, soft kraft `oklch(0.55 0.07 60)` for doodles
- **Fonts**: Fraunces (serif headlines), Inter (small body / labels), Caveat (handwritten accents)
- **Voice**: calm, plain, gently scientific. No "lab", "engineered", "patent-pending"
- **Motifs**: rounded corners, sticky-note tags, soft shadows, hand-drawn bakery doodles — no beakers / clinical imagery
- **Assets reused**: existing `src/assets/founders.png` for tile 10, existing logo for tile 12

## Deliverables

- 12 PNG files at 1080×1080: `ig-grid-01.png` … `ig-grid-12.png`
- Saved to `src/assets/` and copied to `/mnt/documents/instagram-grid/`
- A **`grid-preview.png`** mockup showing all 12 tiles assembled as the 4×3 profile grid so you can preview the mural before uploading
- A short **`UPLOAD-ORDER.txt`** reminding you to post in reverse order (12 → 1) so the grid lands correctly

## QA

After generation, assemble the 4×3 mockup, visually inspect for: text overflow, doodles that don't line up across seams, founders photo readability at small size, contrast of honey on cream, and overall mural coherence. Iterate until the grid reads as one piece.

## Out of scope (this round)

- The 10-slide swipeable carousel (Option A) — can do as a follow-up
- Reels covers / story templates
- Captions copy for each post — can write after you approve the visuals
