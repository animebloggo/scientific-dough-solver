/**
 * Comparison facts for the Dough Dissolve articles.
 *
 * HOW TO FILL THIS IN
 * -------------------
 * Every `theirs` field starts as null. Null is not a gap in the page: it renders
 * as "Not published" in the comparison table, with a footnote explaining that we
 * only print figures we can source. That keeps the article publishable today and
 * keeps us out of trouble for claiming things about a rival we have not checked.
 *
 * To fill one in:
 *   1. Open the rival's own product page, label photo, or spec sheet.
 *   2. Paste the figure exactly as they state it.
 *   3. Put the URL and the date you checked it in `source`.
 *
 * Do not fill these in from memory, from a review site, or from a competitor
 * teardown deck. If it is not on their own page or label, leave it null.
 */

export interface ComparisonRow {
  /** Row label in the comparison table. */
  label: string;
  /** Our figure. Only numbers we have measured ourselves. */
  ours: string;
  /** Their figure, exactly as they publish it. null renders as "Not published". */
  theirs: string | null;
  /** Where `theirs` came from, plus the date checked. Shown as a footnote marker. */
  source?: string;
  /** Optional plain language explanation of why the row matters. */
  why?: string;
}

export const RIVAL_NAME = "Dough Dissolve";

/** Last time somebody checked the rival's public information. */
export const RIVAL_LAST_CHECKED: string | null = null;

export const COMPARISON_ROWS: ComparisonRow[] = [
  {
    label: "How it works",
    ours: "Enzyme blend. Amylase shortens starch chains, protease relaxes gluten.",
    theirs: null,
    why: "An enzyme acts on the dough itself. A surfactant only lifts what is already loose.",
  },
  {
    label: "Contact time before rinsing",
    ours: "43 seconds average across 100 test bakes",
    theirs: null,
    why: "Contact time is the number you actually feel at the sink.",
  },
  {
    label: "Residue removed",
    ours: "99.4 percent, same bowl and same dough every run",
    theirs: null,
    why: "Anything left behind is what you end up scrubbing by hand.",
  },
  {
    label: "Price per bottle",
    ours: "See the current price on our shop page",
    theirs: null,
    why: "Compare cost per wash rather than cost per bottle. Bottle sizes differ.",
  },
  {
    label: "Bottle size",
    ours: "See the size options on our shop page",
    theirs: null,
  },
  {
    label: "Safe on",
    ours: "Stainless, wood, plastic, silicone, banneton cloth, hands",
    theirs: null,
    why: "Wood and cloth are where harsh cleaners do lasting damage.",
  },
  {
    label: "Fragrance",
    ours: "None added",
    theirs: null,
    why: "Fragrance lingers on wooden boards and proofing baskets.",
  },
  {
    label: "Septic and drain safe",
    ours: "Yes, biodegradable and plumber approved",
    theirs: null,
  },
  {
    label: "Made in",
    ours: "Oakland, California, in small batches",
    theirs: null,
  },
];

/**
 * Claims we will publish about the rival before their figures are confirmed.
 * Keep this list to things that are true of the whole category, not of one brand.
 */
export const CATEGORY_TRUTHS: string[] = [
  "Most kitchen degreasers are built for fat, not for starch and gluten.",
  "A surfactant lifts loose soil. It does not shorten a starch chain.",
  "Hot water sets gluten and makes a stuck bowl harder to clean, not easier.",
  "Anything strong enough to strip dough by force is usually strong enough to dull a wooden board.",
];
