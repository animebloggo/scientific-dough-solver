## The problem

Instagram changed the profile grid from square (1:1) to **portrait (4:5)** in 2024. Your tiles were exported at 1080×1080 squares, so on the live profile Instagram is **center-cropping the left and right edges off** every tile.

That's why your screenshot shows:
- "It's gluten" cut to "It's gluter"
- "Dough doesn't rinse" shifted and the right edge clipped
- The honey ribbon and doodles no longer line up across seams

The `grid-preview.png` mockup looks perfect because it assumes square tiles — but the live Instagram grid will never render them as squares again.

## The fix

Re-generate all 12 tiles at **1080×1350 (4:5 portrait)** so what you see on the profile grid matches the mural mockup. Square posts in the feed still work — Instagram will letterbox or you can publish as 4:5 and the full image shows in feed too.

### Steps

1. **Update the tile spec** in `.lovable/plan.md` from 1080×1080 to 1080×1350.
2. **Re-generate all 12 tiles** (`ig-grid-01.png` … `ig-grid-12.png`) at 1080×1350, keeping the same warm bakery-paper composition, fonts, doodles, and honey ribbon — just on a taller canvas with the headline/visual recomposed so nothing is near the left/right safe edges.
3. **Re-use the existing photo assets** for tile 05 (product) and tile 10 (founders) — same swap as before, just placed on the new portrait canvas.
4. **Re-build `grid-preview.png`** as a 4×3 mockup of the new portrait tiles so the preview matches what Instagram will actually show.
5. **Re-export** to both `src/assets/` and `/mnt/documents/instagram-grid/`.
6. **Refresh `UPLOAD-ORDER.txt`** — same reverse order (12 → 1), but add a one-line note: *"Publish each post as 4:5 portrait (don't crop to square in the IG composer) so the grid lands exactly like the preview."*
7. **QA**: assemble the new preview, visually inspect every tile for: text safely inside a ~80px horizontal margin, doodles aligning across vertical seams, honey ribbon flowing cleanly across tiles 02 → 07 → 11, founders' faces clear on tile 10, product label readable on tile 05.

### Posting instructions you'll need

- When uploading each image to Instagram, **do not tap the square crop button** — leave it at the original 4:5 aspect. The full tile will then show in both the feed and the grid.
- Still post in **reverse order** (12 first, 01 last) so the grid lands top-left → bottom-right.
- For the 3 tiles you already posted as squares: delete and re-upload them as 4:5 once the new versions are ready.

### Out of scope

- Captions (already delivered).
- Reels covers / story templates.
