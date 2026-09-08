import type { Post } from "../blog-types.ts";
import { AUTHORS } from "../blog-types.ts";

export const post: Post = {
  slug: "dissolve-my-dough-questions-answered",
  title: "Dissolve My Dough: every question we get asked, answered",
  seoTitle: "Dissolve My Dough: Your Questions, Answered Honestly",
  description:
    "Does it really work, is it safe, what is in it, and is it worth the money? The questions people actually email us about Dissolve My Dough, now After Dough.",
  excerpt:
    "The unglamorous questions: does it work on dried dough, is it safe around kids and pets, what is actually in the bottle, and when is it not worth buying.",
  primaryKeyword: "dissolve my dough",
  keywords: [
    "dissolve my dough",
    "dissolve my dough reviews",
    "does dissolve my dough work",
    "after dough review",
    "is after dough safe",
    "dough dissolve",
    "enzymatic dough cleaner safety",
  ],
  category: "Answers",
  publishedAt: "2026-07-21",
  updatedAt: "2026-09-08",
  author: AUTHORS.team,
  readingMinutes: 8,
  eyebrow: "Answers",
  body: [
    {
      type: "p",
      text: "These are the questions that arrive in our inbox, roughly in order of how often. Some of the answers are not flattering to us, which is the point. If you are still deciding, the useful ones are probably the last two sections.",
    },
    {
      type: "callout",
      title: "Name check",
      text: "Dissolve My Dough is now After Dough. Same formula, same kitchen, same guarantee. If you have an older bottle, nothing about these answers changes. The full story is in the [rebrand note](/blog/after-dough-formerly-dissolve-my-dough).",
    },
    { type: "h2", text: "Does it actually work?", id: "does-it-work" },
    {
      type: "p",
      text: "On dough, yes, and we publish the method rather than just the number. Same bowl, same 72 percent hydration dough, same warm water, one hundred runs: 43 seconds average to clean to the touch, 99.4 percent of residue removed. Dish soap on the same test took 2 minutes 48 seconds and left roughly one part in six behind.",
    },
    {
      type: "p",
      text: "The honest caveat: those are our numbers from our kitchen. We would rather you tested it on your own worst bowl, which is why the refund exists.",
    },
    { type: "h2", text: "What is actually in it?", id: "ingredients" },
    {
      type: "ul",
      items: [
        "**Amylase**, which cuts long starch chains into short, water soluble sugars.",
        "**Protease**, which breaks down the gluten network holding the residue together.",
        "**A mild plant derived surfactant** to wet the surface so the enzymes reach it.",
        "**A stabiliser and a pH buffer**, because enzymes lose activity outside a narrow band.",
        "**Water.**",
      ],
    },
    {
      type: "p",
      text: "No fragrance, no dye, no bleach, no quaternary ammonium sanitisers. If you want to know exactly what went into your specific bottle, email us the batch number written on the label and we will tell you.",
    },
    { type: "h2", text: "Is it safe?", id: "safety" },
    {
      type: "steps",
      items: [
        {
          title: "On hands",
          text: "Yes. It is food grade and unscented. It is a cleaner rather than a moisturiser, so a bake day of repeated washing still dries your hands out, whatever you use.",
        },
        {
          title: "Around children and pets",
          text: "It is non toxic and biodegradable, and it is still a cleaning product. Store it out of reach, do not drink it, and rinse surfaces that will touch food.",
        },
        {
          title: "On food contact surfaces",
          text: "Yes, rinsed. Benches, boards, bowls and hooks are exactly what it is designed for.",
        },
        {
          title: "For drains and septic",
          text: "Yes. It is biodegradable, and short sugars and peptide fragments are the friendliest thing you can send into a trap.",
        },
        {
          title: "For a sourdough culture",
          text: "Rinse the jar twice and you are fine. What harms cultures is fragrance and sanitiser residue, neither of which is in the bottle. Details in [sourdough cleanup](/blog/sourdough-starter-cleanup).",
        },
      ],
    },
    { type: "h2", text: "Will it work on dough that dried on last week?", id: "dried-dough" },
    {
      type: "p",
      text: "Yes, with a different method. Dried dough is the same material with the water removed, and nothing can act on it until the water goes back in. Soak in warm water for ten minutes with no cleaner at all, then treat it and allow 90 seconds instead of 45. Genuinely cement-hard residue may want two cycles. The full surface by surface version is in [how to dissolve dough stuck to everything](/blog/how-to-dissolve-dough-stuck-to-everything).",
    },
    { type: "h2", text: "How does it compare to Dough Dissolve?", id: "vs-dough-dissolve" },
    {
      type: "p",
      text: "Dough Dissolve is a different company and a separate product, and the two names get confused constantly. We wrote a full comparison and left blank every cell we could not source from their own material: [Dough Dissolve vs After Dough](/blog/dough-dissolve-vs-after-dough).",
    },
    { type: "h2", text: "Is it worth the money?", id: "worth-it" },
    {
      type: "p",
      text: "It depends entirely on how often you bake, and here is the arithmetic rather than the sales pitch.",
    },
    {
      type: "table",
      caption: "Roughly, by how much you bake",
      head: ["You bake", "Time saved per session", "Our honest view"],
      rows: [
        ["Once or twice a year", "About 2 minutes", "Buy a plastic bench scraper instead"],
        ["Monthly", "About 2 minutes", "Nice to have, not essential"],
        ["Weekly", "About 8 minutes a month", "This is the sweet spot"],
        [
          "Several times a week",
          "Half an hour a month, plus your boards last longer",
          "Worth it, and ask us about the larger size",
        ],
      ],
      highlightRow: 2,
      note: "Time saved is against dish soap and a scraper on our own comparison test. Your dough, hydration and bowls will move the number around.",
    },
    { type: "h2", text: "When should you not buy it?", id: "when-not" },
    {
      type: "ul",
      items: [
        "**Your mess is grease.** Roasting tins and burnt sugar want an alkaline degreaser. An enzyme dough cleaner is the wrong chemistry and we will keep saying so.",
        "**Your Dutch oven has a dark ring.** That is carbonised sugar, not dough. [What to use instead](/blog/sourdough-starter-cleanup).",
        "**You need it tonight.** We ship from Oakland in small batches. If something is on a shelf near you and your bowl is soaking now, buy that.",
        "**You bake twice a year.** A scraper and a bit of patience will do, and we would rather tell you that than take the order.",
      ],
    },
    {
      type: "quote",
      text: "If it does not make cleanup easier, we refund the bottle. That has been the deal since 2024 and it survived the name change.",
      cite: "The After Dough guarantee",
    },
    {
      type: "cta",
      title: "Test it on your worst bowl.",
      text: "If it does not beat what you use now, tell us and we refund it.",
      label: "See the shelf",
      to: "/shop",
    },
  ],
  faqs: [
    {
      q: "Does Dissolve My Dough actually work?",
      a: "In our own testing on the same bowl and dough across one hundred runs, it cleared 99.4 percent of residue in an average of 43 seconds, against 84 percent in 2 minutes 48 seconds for dish soap. Those are our figures from our kitchen, which is why the bottle carries a refund if it does not beat what you currently use.",
    },
    {
      q: "What is in After Dough, formerly Dissolve My Dough?",
      a: "Amylase to break down starch, protease to break down gluten, a mild plant derived surfactant to wet the surface, a stabiliser and pH buffer to keep the enzymes active, and water. There is no fragrance, dye, bleach or quaternary ammonium sanitiser.",
    },
    {
      q: "Is an enzymatic dough cleaner safe around children and pets?",
      a: "It is non toxic and biodegradable, and it is still a cleaning product, so store it out of reach and rinse food contact surfaces after use. It is food grade and unscented, which is why it is safe on the hands, benches and boards it is designed for.",
    },
    {
      q: "Will it remove dough that dried on a week ago?",
      a: "Yes, but rehydrate first. Soak in warm water for about ten minutes with no cleaner, then apply and allow roughly 90 seconds rather than 45. Very hard residue may need two cycles.",
    },
    {
      q: "Is it worth buying if I only bake occasionally?",
      a: "Probably not. If you bake once or twice a year, a plastic bench scraper and some patience will do the job. The value shows up at weekly baking and above, where it saves around eight minutes a month and is gentler on wooden boards.",
    },
    {
      q: "Is Dissolve My Dough the same as Dough Dissolve?",
      a: "No. Dissolve My Dough is the former name of After Dough. Dough Dissolve is a separate company selling a separate product, and the similar names cause a lot of confusion.",
    },
  ],
  related: [
    "after-dough-formerly-dissolve-my-dough",
    "dough-dissolve-vs-after-dough",
    "what-is-after-dough",
  ],
};
