import type { Post } from "../blog-types.ts";
import { AUTHORS } from "../blog-types.ts";

export const post: Post = {
  slug: "how-to-dissolve-dough-stuck-to-everything",
  title: "How to dissolve dough stuck to bowls, boards and hands",
  seoTitle: "How to Dissolve Dough Stuck to Bowls, Boards, Hands",
  description:
    "A method that works for wet dough, dried dough and dough welded to a mixer hook. Warm water, not hot. Plus what to do when it has been sitting for days.",
  excerpt:
    "The reflex is a hot tap and a scraper, and both make it worse. Here is the order of operations that actually gets dough off, surface by surface.",
  primaryKeyword: "how to dissolve dough",
  keywords: [
    "how to dissolve dough",
    "how to get dough off a bowl",
    "remove dried dough from mixing bowl",
    "clean dough off hands",
    "dough stuck to dough hook",
    "dissolve my dough",
    "after dough",
  ],
  category: "Guides",
  publishedAt: "2026-03-28",
  updatedAt: "2026-09-08",
  author: AUTHORS.kitchen,
  readingMinutes: 8,
  eyebrow: "Guide",
  body: [
    {
      type: "p",
      text: "Dough gets on everything. That is not a failure of technique, it is what a hydrated starch and protein network does. What you can change is the order you attack it in, because the standard reflex, hot water and force, makes the job harder in a way that is genuinely counter intuitive.",
    },
    {
      type: "callout",
      title: "The single most useful thing on this page",
      text: "Use warm water, not hot. Heat sets protein. A hot tap firms up the gluten web you are trying to remove, which is why a bowl often feels worse after 30 seconds under the hot tap than it did before.",
    },
    { type: "h2", text: "The general method", id: "the-method" },
    {
      type: "ol",
      items: [
        "**Scrape the bulk off dry**, into the compost or the bin. Never into the sink. Dough in the drain is its own problem and we wrote about it [here](/blog/dough-in-the-drain).",
        "**Wet the surface with warm water.** Body temperature. If it feels hot on the inside of your wrist, it is too hot.",
        "**Apply an enzyme cleaner and wait.** Around 45 seconds for fresh residue. The waiting is not padding, it is the part that does the work.",
        "**Rinse without scrubbing.** If it needs force, it needed more time.",
        "**Wash normally afterwards** if the item also had butter or oil on it. Enzymes handle the dough, soap handles the fat.",
      ],
    },
    { type: "h2", text: "Mixing bowls, stainless and glass", id: "bowls" },
    {
      type: "p",
      text: "The classic case. Scrape, wet, one pump, wait, rinse. The place people go wrong is the tide line: a ring of dried starch just above where the dough sat. That ring never got wet, so nothing has been able to act on it. Re-wet it specifically and give it a second pass rather than reaching for a scourer, which will leave fine scratches that give the next batch something to grip.",
    },
    { type: "h2", text: "Dough hooks and stand mixer bowls", id: "hooks" },
    {
      type: "p",
      text: "A dough hook is the worst object in the kitchen for this, because the residue collects in the spiral and at the collar where you cannot reach with a cloth. Do not try. Fill the mixer bowl with warm water, drop the hook in, add two pumps, and leave it while you clean up the bench. Come back in two minutes and the spiral rinses clean under the tap.",
    },
    {
      type: "callout",
      title: "Do not run it under a hot tap first",
      text: "The most common version of this mess is a hook that got rinsed hot, went stiff and grey, and then would not come clean at all. That is set protein. Once it happens you need a long soak in warm water to undo it.",
    },
    { type: "h2", text: "Wooden benches, boards and rolling pins", id: "wood" },
    {
      type: "p",
      text: "Wood is where harsh cleaners do permanent damage, so this is the surface to be careful about. Three rules:",
    },
    {
      type: "ul",
      items: [
        "**Do not soak wood.** Wet it, treat it, rinse it, dry it. Standing water raises the grain and splits boards over time.",
        "**Do not use anything caustic or abrasive.** It strips the finish and leaves the surface more porous, which means the next batch sticks harder.",
        "**Do not use anything fragranced.** Wood holds scent, and the scent ends up in the crust of the next loaf.",
      ],
    },
    {
      type: "p",
      text: "A plastic bench scraper takes off the bulk without gouging. Then warm water, enzyme cleaner, 45 seconds, wipe, dry properly with a cloth rather than leaving it to air dry.",
    },
    { type: "h2", text: "Bannetons and proofing cloths", id: "bannetons" },
    {
      type: "p",
      text: "Most of the time a banneton should not be washed at all. Let it dry completely, then knock the flour out with a stiff brush. The thin layer of dried flour that builds up is doing you a favour.",
    },
    {
      type: "p",
      text: "Wash it only when dough has actually stuck and torn the shape, or when it has been somewhere humid and smells off. Then: warm water, no soap, no fragrance, enzyme cleaner brushed lightly over the affected ribs, rinse, and dry it fully somewhere airy. A banneton put away damp grows mould in the ribs, which is a much bigger problem than a stuck loaf.",
    },
    { type: "h2", text: "Hands", id: "hands" },
    {
      type: "p",
      text: "Do not start with soap and hot water. It coats the dough, warms it, and welds a grey layer to your fingers and around your rings.",
    },
    {
      type: "ol",
      items: [
        "Rub your hands together **dry** first. Most of the dough will ball up and come off in flakes.",
        "A pinch of dry flour helps here. It sounds wrong and it works, because the dough sticks to the flour more readily than to your skin.",
        "Then warm water and a pump of enzyme cleaner, worked around the nails and any rings.",
        "Rinse and moisturise. Repeated washing after a bake day is what actually wrecks a baker's hands.",
      ],
    },
    { type: "h2", text: "Dough that dried on days ago", id: "dried-on" },
    {
      type: "p",
      text: "Dried dough is not a different substance, it is the same substance with the water taken out. Nothing can act on it until the water is put back.",
    },
    {
      type: "steps",
      items: [
        {
          title: "Re-wet first, and be patient",
          text: "Warm water, 10 minutes, no cleaner yet. You are rehydrating the starch gel so that something can reach it.",
        },
        {
          title: "Then treat it, and double the time",
          text: "Apply the cleaner and give it 90 seconds rather than 45. Cement-hard residue may want two cycles.",
        },
        {
          title: "Only then consider mechanical help",
          text: "A plastic scraper, never a metal blade or a green scourer, on stainless or wood. Scratches are permanent and they make next time worse.",
        },
      ],
    },
    {
      type: "table",
      caption: "Quick reference by surface",
      head: ["Surface", "Water", "Wait", "Never"],
      rows: [
        ["Stainless bowl", "Warm", "45 s", "Green scourer"],
        ["Dough hook", "Warm soak", "2 min", "Hot rinse first"],
        ["Wooden bench", "Warm, wipe on", "45 s", "Soaking, fragrance"],
        ["Banneton", "Usually none", "Brush dry", "Soap, putting it away damp"],
        ["Hands", "Dry rub, then warm", "30 s", "Hot water first"],
        ["Dried on, any surface", "Warm, 10 min soak", "90 s", "Metal blades"],
      ],
    },
    {
      type: "p",
      text: "The reason all of this works is worth understanding once: [what the enzymes are actually doing](/blog/what-is-after-dough). And if you are comparing products to do it with, the criteria are in [the best dough cleaners compared](/blog/best-dough-cleaners-compared).",
    },
    {
      type: "cta",
      title: "Forty five seconds, then rinse.",
      text: "An enzyme blend mixed by hand in Oakland, with the batch number written on the label.",
      label: "See the shelf",
      to: "/shop",
    },
  ],
  faqs: [
    {
      q: "How do you dissolve dough stuck to a bowl?",
      a: "Scrape the bulk into the bin, wet the bowl with warm water rather than hot, apply an enzyme cleaner, wait about 45 seconds while the amylase and protease break the starch and gluten down, then rinse. If it still needs force, it needed more time rather than more pressure.",
    },
    {
      q: "Why does hot water make dough harder to clean?",
      a: "Heat sets protein. Hot water firms up the gluten network holding the residue together, so the dough grips the surface more tightly. Warm water at around body temperature keeps the residue soft and is also where cleaning enzymes are most active.",
    },
    {
      q: "How do you get dried dough off after a few days?",
      a: "Rehydrate it first. Soak in warm water for about 10 minutes with no cleaner, then apply an enzyme cleaner and allow roughly 90 seconds instead of 45. Dried dough is the same material with the water removed, so nothing can act on it until the water goes back in.",
    },
    {
      q: "How do you get dough off your hands?",
      a: "Rub your hands together dry first so the dough balls up and flakes away, optionally with a pinch of dry flour. Only then use warm water and cleaner. Starting with hot water and soap coats and warms the dough and welds it to your skin and rings.",
    },
    {
      q: "Can you wash a banneton?",
      a: "Usually you should not. Let it dry fully and brush the flour out. Wash only if dough has stuck and torn, or if it has been stored damp, and then use warm water with no soap or fragrance and dry it completely before putting it away.",
    },
  ],
  related: ["what-is-after-dough", "dough-in-the-drain", "sourdough-starter-cleanup"],
};
