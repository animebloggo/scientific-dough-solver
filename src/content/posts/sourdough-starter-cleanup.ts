import type { Post } from "../blog-types.ts";
import { AUTHORS } from "../blog-types.ts";

export const post: Post = {
  slug: "sourdough-starter-cleanup",
  title: "Sourdough cleanup: jars, bannetons and Dutch ovens",
  seoTitle: "Sourdough Cleanup: Jars, Bannetons and Dutch Ovens",
  description:
    "How to clean a sourdough starter jar without losing the culture, what to do with discard instead of the sink, and the right way to look after a banneton.",
  excerpt:
    "Starter jars, proofing baskets and a Dutch oven with a burnt ring. The three messes sourdough actually creates, and the specific handling each one needs.",
  primaryKeyword: "clean sourdough starter jar",
  keywords: [
    "clean sourdough starter jar",
    "sourdough cleanup",
    "sourdough discard drain",
    "how to clean a banneton",
    "dutch oven sourdough cleaning",
    "after dough",
  ],
  category: "Guides",
  publishedAt: "2026-06-12",
  updatedAt: "2026-09-08",
  author: AUTHORS.kitchen,
  readingMinutes: 7,
  eyebrow: "Guide",
  body: [
    {
      type: "p",
      text: "Sourdough makes three specific messes, and each one wants different handling. The jar, where you are cleaning around a living culture. The banneton, which mostly should not be cleaned at all. And the Dutch oven, where the problem is not dough but sugar.",
    },
    { type: "h2", text: "The starter jar", id: "starter-jar" },
    {
      type: "p",
      text: "The crust that climbs the inside of a jar is dried starter, and it is worth removing regularly. Not because it will hurt the culture, but because a dry crust flakes back into the starter, holds old flour past its usefulness, and hides how much your starter has actually risen.",
    },
    {
      type: "ol",
      items: [
        "Transfer the live starter to a clean jar first. Do not try to clean around it.",
        "Fill the dirty jar with **warm** water and let it stand for ten minutes. The crust rehydrates and most of it lets go on its own.",
        "Add a pump of enzyme cleaner and give it another minute. Swirl, do not scrub with anything abrasive: scratches in glass and especially in plastic give the next crust something to key into.",
        "Rinse thoroughly, then rinse once more. You want no cleaner residue at all going back around a culture.",
        "Air dry completely before the jar goes back into rotation.",
      ],
    },
    {
      type: "callout",
      title: "Will cleaner hurt my starter?",
      text: "A properly rinsed jar will not. What does harm a culture is fragrance and quaternary ammonium sanitisers left behind on the glass. Rinse well, keep two jars in rotation, and you never have to make this call under pressure.",
    },
    { type: "h2", text: "Discard, and why it must not go in the sink", id: "discard" },
    {
      type: "p",
      text: "Starter discard is wet dough with a low pH. It is the single most common cause of a doughy kitchen clog, because people pour it away rather than binning it. In the trap it behaves exactly like the plug described in [dough in the drain](/blog/dough-in-the-drain): it settles, it swells, and it catches everything that follows.",
    },
    {
      type: "ul",
      items: [
        "**Bake with it.** Crackers, pancakes, waffles, pizza base. Discard is an ingredient rather than waste.",
        "**Compost it.** In moderation. It is acidic, so mix it through rather than pouring it into one spot.",
        "**Bin it**, in a bag, if you have neither of the above.",
        "**Never the sink, never the disposal.** A disposal makes many small pieces of the same problem.",
      ],
    },
    { type: "h2", text: "Bannetons and proofing baskets", id: "bannetons" },
    {
      type: "p",
      text: "The instinct to wash a banneton is almost always wrong. That thin layer of dried flour building up in the ribs is a release layer, and it gets better with age. Washing it out resets you to a basket that sticks.",
    },
    {
      type: "steps",
      items: [
        {
          title: "Normal maintenance",
          text: "Let it dry completely after every use, then knock and brush the loose flour out with a stiff dry brush. That is the whole routine.",
        },
        {
          title: "When dough has actually stuck",
          text: "Let the stuck dough dry hard first. Wet dough smears into the ribs, dried dough flakes out with a brush. Patience does most of the work here.",
        },
        {
          title: "When it genuinely needs washing",
          text: "Mould, or a sour smell from being stored damp. Warm water, no soap, no fragrance, an enzyme cleaner brushed lightly over the affected area, then a thorough rinse.",
        },
        {
          title: "Drying, the part people get wrong",
          text: "It must dry completely and quickly, somewhere airy, ideally in sun. A banneton put away damp grows mould in the ribs, which is a far worse problem than a stuck loaf.",
        },
      ],
    },
    { type: "h2", text: "The Dutch oven", id: "dutch-oven" },
    {
      type: "p",
      text: "This one is a category error worth naming. The dark ring in a Dutch oven after a bake is not dough. It is caramelised and then carbonised sugar and flour, cooked at 250 degrees Celsius. An enzyme cleaner is the wrong tool, and we would rather say so than sell you one for it.",
    },
    {
      type: "table",
      caption: "Dutch oven, by surface",
      head: ["Surface", "Do", "Do not"],
      rows: [
        [
          "Seasoned cast iron",
          "Hot water, stiff brush, dry on the hob, wipe with oil",
          "Soak it, or use a caustic cleaner on the seasoning",
        ],
        [
          "Enamelled cast iron",
          "Warm water soak, then a plastic scraper, then a gentle cream cleaner",
          "Metal tools, which chip enamel permanently",
        ],
        [
          "Stainless",
          "Warm soak, then a mild abrasive if needed",
          "Green scourers, which leave a grain that catches",
        ],
      ],
    },
    {
      type: "p",
      text: "Where an enzyme cleaner does help around a Dutch oven is before the bake: the bowl, the bench and the hands that got you there. That is the [general method](/blog/how-to-dissolve-dough-stuck-to-everything).",
    },
    { type: "h2", text: "A bake day routine that avoids most of this", id: "routine" },
    {
      type: "ol",
      items: [
        "Scrape every bowl and hook into the compost bin **before** anything reaches the sink.",
        "Bulk fermentation container, mixing bowl and hook go into one warm water soak together with two pumps of cleaner while the loaf proofs.",
        "Wipe the bench down warm, then dry it properly rather than leaving it wet.",
        "Brush the banneton once it is bone dry, and put it away dry.",
        "Discard jar and scrapings into the bin, then a warm enzyme flush down the drain at the end of a heavy day.",
      ],
    },
    {
      type: "cta",
      title: "For the ten minutes after the loaf goes in.",
      text: "No fragrance, safe on wood and cloth, mixed by hand in Oakland.",
      label: "See the shelf",
      to: "/shop",
    },
  ],
  faqs: [
    {
      q: "How do you clean a sourdough starter jar?",
      a: "Move the live starter to a clean jar first, then fill the dirty one with warm water and leave it ten minutes so the crust rehydrates. Add a pump of enzyme cleaner, swirl rather than scrub, and rinse thoroughly twice so no cleaner residue remains before the jar goes back into rotation.",
    },
    {
      q: "Can you pour sourdough discard down the sink?",
      a: "No. Discard is wet dough, and it settles in the trap, swells as the starch absorbs water, and holds together because of the gluten, which is why it is the most common cause of a doughy kitchen clog. Bake with it, compost it in moderation, or bin it.",
    },
    {
      q: "Will cleaning products harm my sourdough starter?",
      a: "A properly rinsed jar will not. The real risks are fragrance and sanitiser residue left on the glass, so choose an unscented cleaner, rinse twice, and keep a second jar in rotation so you are never cleaning under time pressure.",
    },
    {
      q: "How often should you wash a banneton?",
      a: "Rarely. Let it dry fully and brush the flour out after each use, since that dried flour layer helps the loaf release. Wash only if it has grown mould or been stored damp, using warm water with no soap or fragrance, then dry it completely before storing.",
    },
    {
      q: "Can I use an enzyme dough cleaner on a Dutch oven?",
      a: "It will not help much. The dark ring after a bake is carbonised sugar and flour rather than dough, so the right approach depends on the surface: a stiff brush and re-oiling for seasoned cast iron, a warm soak and a plastic scraper for enamel.",
    },
  ],
  related: [
    "dough-in-the-drain",
    "how-to-dissolve-dough-stuck-to-everything",
    "what-is-after-dough",
  ],
};
