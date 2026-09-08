import type { Post } from "../blog-types.ts";
import { AUTHORS } from "../blog-types.ts";

export const post: Post = {
  slug: "what-is-after-dough",
  title: "What is After Dough, and how does it actually work?",
  seoTitle: "What Is After Dough? The Enzyme Cleaner, Explained",
  description:
    "After Dough is an enzymatic cleaner that breaks starch and gluten down instead of scrubbing them off. Here is the chemistry, the method, and what we measured.",
  excerpt:
    "An enzyme cleaner is not a stronger soap. It is a different mechanism. Here is what amylase and protease are doing inside the bowl, and how to use them properly.",
  primaryKeyword: "after dough",
  keywords: [
    "after dough",
    "after dough enzymatic cleaner",
    "what is after dough",
    "enzymatic dough cleaner",
    "amylase protease cleaner",
    "after dough review",
    "dissolve my dough",
  ],
  category: "How it works",
  publishedAt: "2026-02-03",
  updatedAt: "2026-09-08",
  author: AUTHORS.lab,
  readingMinutes: 7,
  featured: true,
  eyebrow: "How it works",
  body: [
    {
      type: "p",
      text: "**After Dough** is an enzymatic cleaner made for one specific mess: raw dough, dried dough, and the film of starch that a bake leaves behind on bowls, boards, dough hooks and hands. It was called Dissolve My Dough until early 2026. Same formula, [new name](/blog/after-dough-formerly-dissolve-my-dough).",
    },
    {
      type: "p",
      text: "The important thing to understand is that it is not a stronger dish soap. It works on a different principle, and once you know which principle, you will also know why the usual advice about hot water and elbow grease has been making your life harder.",
    },
    { type: "h2", text: "Why dough is so hard to clean off", id: "why-dough-sticks" },
    {
      type: "p",
      text: "Flour plus water gives you two problems at once, and they need opposite solutions.",
    },
    {
      type: "ul",
      items: [
        "**Gluten** is a protein network. Knead it and the proteins link into a stretchy, elastic web that grips whatever it is sitting on. It is the same property that makes bread chewy and a mixing bowl miserable.",
        "**Starch** granules swell in water into a tacky gel. As that gel dries it shrinks onto the surface and turns into something closer to a glue than a food.",
      ],
    },
    {
      type: "p",
      text: "A normal detergent is built around surfactants, which lift loose soil and emulsify fat so water can carry it away. Dough is neither loose nor fatty. So the surfactant has very little to grab, and you supply the missing energy yourself with a scraper and four minutes of scrubbing.",
    },
    {
      type: "callout",
      title: "The hot water trap",
      text: "Hot water is the standard reflex and it is the wrong one. Heat sets protein. Run a doughy bowl under a hot tap and you firm up the gluten web you were trying to remove. Warm water, around body temperature, is where the enzymes work best and where the dough stays soft.",
    },
    { type: "h2", text: "What the enzymes are actually doing", id: "the-enzymes" },
    {
      type: "p",
      text: "Enzymes are catalysts. They speed up one specific reaction and are not consumed doing it, which is why a small amount of liquid handles a large bowl. After Dough uses two families, each pointed at one of the two problems above.",
    },
    {
      type: "steps",
      items: [
        {
          title: "Amylase takes apart the starch",
          text: "Amylase cuts the long chains of amylose and amylopectin into short sugars. A long chain is a sticky gel. Short sugars are water soluble and simply rinse away. This is the same enzyme family your saliva uses on bread, and the same one already in most laundry powder.",
        },
        {
          title: "Protease relaxes the gluten",
          text: "Protease breaks the peptide bonds holding the gluten network together. The web stops being a web. What was one stretchy sheet gripping the bowl becomes fragments with nothing to hold on to.",
        },
        {
          title: "Water carries the pieces off",
          text: "Once both structures are broken there is nothing left with mechanical strength. The residue releases from the surface under a normal tap. No scraper, no scouring pad, no scratched bowl.",
        },
      ],
    },
    {
      type: "quote",
      text: "The formula does not attack the surface your dough is stuck to. It attacks the reason the dough is stuck.",
      cite: "After Dough Lab",
    },
    { type: "h2", text: "How to use it properly", id: "how-to-use" },
    {
      type: "ol",
      items: [
        "Scrape the big stuff into the compost first. Enzymes are for the film that is left, not for a fistful of dough.",
        "Wet the surface with **warm** water, not hot. Body temperature is the target.",
        "One pump for a bowl, two for a stand mixer bowl and hook together.",
        "Wait. This is the step people skip. Give it around 45 seconds and let the chemistry do the work you would otherwise do with your arm.",
        "Rinse. If a stubborn ring remains at the waterline, it is usually dried starch that never got wet. Re-wet it and give it another 30 seconds.",
      ],
    },
    {
      type: "callout",
      title: "The one mistake worth avoiding",
      text: "Do not use it dry, and do not rinse it off after five seconds. An enzyme needs water to work in and time to work over. Those two things are the entire method.",
    },
    { type: "h2", text: "What we measured", id: "what-we-measured" },
    {
      type: "p",
      text: "Same bowl, same dough at 72 percent hydration, same warm water, one hundred runs. We timed to the point where the bowl was clean to the touch and weighed what was left behind.",
    },
    {
      type: "table",
      head: ["Method", "Average time", "Residue removed"],
      rows: [
        ["Hot water and a bench scraper", "4 m 12 s", "78 percent"],
        ["Regular dish soap", "2 m 48 s", "84 percent"],
        ["After Dough", "0 m 43 s", "99.4 percent"],
      ],
      highlightRow: 2,
      note: "Our own kitchen, our own dough, measured by us. We publish the method so you can repeat it rather than take our word for it.",
    },
    { type: "h2", text: "Where it works and where it does not", id: "surfaces" },
    {
      type: "ul",
      items: [
        "**Works well on:** stainless bowls, dough hooks, plastic tubs, silicone mats, wooden boards and benches, banneton cloth, tea towels, and hands.",
        "**Works, with patience:** dough that dried on three days ago. Re-wet it first and let it sit twice as long.",
        "**Not what it is for:** baked-on grease, burnt sugar, and scorched pans. Those are different chemistry and a degreaser is the right tool.",
      ],
    },
    {
      type: "p",
      text: "If your particular problem is a sink that drains slowly after bread day, that is worth its own read: [dough in the drain](/blog/dough-in-the-drain). If you are choosing between us and another enzyme cleaner, we put the criteria side by side in [the best dough cleaners compared](/blog/best-dough-cleaners-compared).",
    },
    {
      type: "cta",
      title: "Try it on your stickiest bowl.",
      text: "If it does not make cleanup easier, we refund the bottle. That has been the deal since 2024.",
      label: "See the shelf",
      to: "/shop",
    },
  ],
  faqs: [
    {
      q: "What is After Dough?",
      a: "After Dough is an enzymatic cleaner for dough residue. It uses amylase to break starch chains and protease to break down the gluten network, so dough rinses off with water instead of being scrubbed off. It was previously sold as Dissolve My Dough.",
    },
    {
      q: "How is an enzyme cleaner different from dish soap?",
      a: "Dish soap uses surfactants, which lift loose soil and emulsify fat. Dough is neither loose nor fatty, so a surfactant has little to grab and you supply the energy by scrubbing. An enzyme cleaner chemically breaks the starch and gluten apart, so there is no structure left to scrub.",
    },
    {
      q: "How long do I leave After Dough on before rinsing?",
      a: "About 45 seconds on wet dough residue. Dough that dried on days ago should be re-wet first and given roughly 90 seconds. The waiting is the method, so rinsing immediately is the most common mistake.",
    },
    {
      q: "Should I use hot water with an enzyme dough cleaner?",
      a: "No. Use warm water at around body temperature. Hot water sets the gluten proteins and makes the residue harder to remove, and very hot water reduces enzyme activity.",
    },
    {
      q: "Is After Dough safe on wooden boards and bannetons?",
      a: "Yes. It is a food grade, fragrance free enzyme blend rather than a caustic or abrasive cleaner, so it will not strip or dull a wooden bench, and it does not leave a scent behind in banneton cloth.",
    },
    {
      q: "Is After Dough safe for drains and septic systems?",
      a: "Yes. It is biodegradable, and the sugars and peptide fragments it leaves behind are exactly what you want going into a drain rather than a rope of raw gluten.",
    },
  ],
  related: [
    "how-to-dissolve-dough-stuck-to-everything",
    "dough-dissolve-vs-after-dough",
    "dough-in-the-drain",
  ],
};
