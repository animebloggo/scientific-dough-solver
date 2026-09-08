import type { Post } from "../blog-types.ts";
import { AUTHORS } from "../blog-types.ts";

export const post: Post = {
  slug: "dough-in-the-drain",
  title: "Dough in the drain: why it clogs, and how to clear it safely",
  seoTitle: "Dough in the Drain: Why It Clogs and How to Clear It",
  description:
    "Flour and dough set like grout inside a trap. Here is why a doughy sink clogs, how to clear it without caustic drain cleaner, and how to stop it happening.",
  excerpt:
    "Every plumber has a flour story. Here is what dough actually does inside a pipe, why boiling water is the wrong first move, and the order to clear it in.",
  primaryKeyword: "dough clogged drain",
  keywords: [
    "dough clogged drain",
    "flour clogged drain",
    "dough down the sink",
    "how to clear a dough clog",
    "sourdough starter down the drain",
    "after dough",
  ],
  category: "Guides",
  publishedAt: "2026-04-16",
  updatedAt: "2026-09-08",
  author: AUTHORS.kitchen,
  readingMinutes: 6,
  eyebrow: "Guide",
  body: [
    {
      type: "p",
      text: "Ask a plumber about kitchens and they will eventually tell you a flour story. Dough is one of the few kitchen materials that genuinely sets inside a pipe, and it does it in a way that grease does not: grease coats, dough plugs.",
    },
    {
      type: "callout",
      title: "The rule that prevents all of this",
      text: "Dough goes in the bin or the compost. Never in the sink, and never in the disposal. A disposal chops dough into small pieces of dough, which is a larger surface area of the same problem.",
    },
    { type: "h2", text: "What dough does inside a pipe", id: "what-happens" },
    {
      type: "p",
      text: "Flour and water make a paste that behaves like unset grout. Send it down the drain and three things happen in order:",
    },
    {
      type: "ol",
      items: [
        "The paste settles in the **trap**, the U bend under the sink where water sits by design.",
        "Starch granules keep absorbing water and **swell**, so the plug grows rather than washing through.",
        "The gluten in it stays **elastic and cohesive**, so the mass holds together as one piece instead of breaking up in the flow. Then it catches everything else that comes past: coffee grounds, fat, a bit of onion skin.",
      ],
    },
    {
      type: "p",
      text: "The result is a plug that is not going anywhere on its own and is not soluble in the way that sugar or salt would be. Water alone runs around the outside of it, which is why a slow drain gets slowly worse rather than clearing itself.",
    },
    { type: "h2", text: "Why boiling water is the wrong first move", id: "boiling-water" },
    {
      type: "p",
      text: "The internet's default advice is a kettle of boiling water. For a fat clog that is reasonable. For dough it is actively counterproductive for the same reason hot water is wrong at the sink: heat sets protein. You firm up the gluten and make the plug more solid and more cohesive.",
    },
    {
      type: "p",
      text: "Caustic drain cleaner is the other default, and it is worth avoiding for a different reason. Sodium hydroxide generates heat as it reacts, it is hard on older pipe joints and on the seals in a trap, and if it fails you now have a clogged pipe full of caustic liquid that a plumber has to deal with.",
    },
    { type: "h2", text: "Clearing it, in order", id: "clearing-it" },
    {
      type: "steps",
      items: [
        {
          title: "1. Stop adding water",
          text: "Do not keep running the tap hoping it goes. You are compacting the plug and filling the basin with water you will have to bail out later.",
        },
        {
          title: "2. Warm water and an enzyme cleaner, given time",
          text: "Pour a generous amount of enzyme cleaner into the standing water and leave it, ideally overnight. Amylase and protease work slowly at drain temperatures, and slow is fine when you are asleep. This is the step that acts on the plug itself rather than pushing at it.",
        },
        {
          title: "3. Plunge, do not blast",
          text: "A sink plunger with a good seal, steady strokes. If there is a second basin, block its outlet or you are just moving air between them.",
        },
        {
          title: "4. Open the trap",
          text: "Bucket underneath, unscrew the trap by hand, and empty it. This is unglamorous and it is the step that actually works. Most dough clogs are sitting right there in the U bend and can be scooped straight out.",
        },
        {
          title: "5. Call a plumber if it is past the trap",
          text: "If the trap was clear and the drain is still slow, the plug is further down the branch line and you need a drain snake and someone who owns one.",
        },
      ],
    },
    { type: "h2", text: "Prevention, which is almost all of it", id: "prevention" },
    {
      type: "ul",
      items: [
        "**Scrape everything dry into the bin first.** Bowls, hooks, benches, scrapers. Nothing doughy touches the sink until it has been scraped.",
        "**Fit a fine mesh sink strainer.** A coarse one lets paste through. Fine mesh catches it and costs a few dollars.",
        "**Pour starter discard into the bin or compost, not the sink.** This is the most common single cause. A cup of discard is a cup of wet dough.",
        "**Wipe the bowl with a paper towel or a dedicated dough rag** before rinsing, so what reaches the drain is a film rather than a mass.",
        "**Run a warm enzyme flush after a heavy bake day.** Cheap insurance, and it acts on the film already lining the pipe.",
      ],
    },
    {
      type: "table",
      caption: "What works on a dough clog and what does not",
      head: ["Approach", "Verdict", "Why"],
      rows: [
        ["Boiling water", "Avoid", "Heat sets the gluten and makes the plug firmer"],
        [
          "Caustic drain cleaner",
          "Last resort",
          "Hard on seals and older joints, dangerous if it fails",
        ],
        [
          "Enzyme cleaner, left overnight",
          "Best first move",
          "Acts on the starch and protein rather than pushing at them",
        ],
        ["Plunger", "Good second move", "Mechanical, safe on pipes, needs a proper seal"],
        [
          "Opening the trap",
          "The reliable fix",
          "Most dough clogs sit in the U bend and lift straight out",
        ],
        ["Garbage disposal", "Never", "Makes many small pieces of the same problem"],
      ],
      highlightRow: 2,
    },
    {
      type: "p",
      text: "The same chemistry that clears a trap is what gets the bowl clean in the first place: [how the enzymes work](/blog/what-is-after-dough). And if the sourdough discard jar is the usual culprit in your kitchen, that has its own guide: [sourdough starter cleanup](/blog/sourdough-starter-cleanup).",
    },
    {
      type: "cta",
      title: "Kind to your hands. Kind to your pipes.",
      text: "Biodegradable, no fragrance, and safe for septic systems.",
      label: "See the shelf",
      to: "/shop",
    },
  ],
  faqs: [
    {
      q: "Can dough clog a drain?",
      a: "Yes, easily. Flour and water form a paste that settles in the trap, keeps swelling as the starch absorbs water, and holds together because of the gluten. It then catches other debris passing through, so the blockage grows rather than clearing itself.",
    },
    {
      q: "Should I pour boiling water down a drain clogged with dough?",
      a: "No. Heat sets protein, so boiling water firms up the gluten and makes the plug more solid. Boiling water helps with a fat clog, but dough is starch and protein rather than fat.",
    },
    {
      q: "How do you clear a dough clog without caustic drain cleaner?",
      a: "Pour an enzyme cleaner into the standing water and leave it overnight so the amylase and protease can act on the plug, then plunge with a proper seal. If it is still slow, put a bucket under the sink and open the trap by hand, since most dough clogs sit in the U bend.",
    },
    {
      q: "Can I put sourdough starter down the sink?",
      a: "No. Starter discard is wet dough and it is the single most common cause of a doughy kitchen clog. Put discard in the bin or the compost, or bake with it.",
    },
    {
      q: "Is it safe to put dough in a garbage disposal?",
      a: "No. A disposal turns one piece of dough into many small pieces of dough with more surface area, which then reassemble as paste further down the pipe.",
    },
  ],
  related: [
    "how-to-dissolve-dough-stuck-to-everything",
    "sourdough-starter-cleanup",
    "what-is-after-dough",
  ],
};
