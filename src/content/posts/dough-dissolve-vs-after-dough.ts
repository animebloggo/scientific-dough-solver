import type { Post, Block } from "../blog-types.ts";
import { AUTHORS } from "../blog-types.ts";
import { COMPARISON_ROWS, RIVAL_NAME } from "../competitor.ts";

/**
 * The comparison table is generated from src/content/competitor.ts so that
 * filling in verified figures there updates this article. Rows we have not
 * verified print as "Not published" rather than as a guess.
 */
const comparisonTable: Block = {
  type: "table",
  caption: `After Dough and ${RIVAL_NAME}, side by side`,
  head: ["", "After Dough", RIVAL_NAME],
  rows: COMPARISON_ROWS.map((row) => [row.label, row.ours, row.theirs ?? "Not published"]),
  note: `Our column is measured in our own kitchen and we publish the method. Cells marked "Not published" are figures ${RIVAL_NAME} does not state on their own product page or label, and we will not fill them in with a guess. If you work there and want a cell corrected, email us and we will update it with a source.`,
};

export const post: Post = {
  slug: "dough-dissolve-vs-after-dough",
  title: "Dough Dissolve vs After Dough: an honest comparison",
  seoTitle: "Dough Dissolve vs After Dough: Honest Comparison",
  description:
    "Comparing Dough Dissolve and After Dough on the things that matter: mechanism, contact time, safe surfaces and cost per wash. Only figures we can source.",
  excerpt:
    "We sell one of these two products, so read us accordingly. Here is the comparison we would want if we were the one deciding, including the cells we refuse to fill in.",
  primaryKeyword: "dough dissolve",
  keywords: [
    "dough dissolve",
    "dough dissolve vs after dough",
    "dough dissolve alternative",
    "dough dissolve review",
    "after dough",
    "dissolve my dough",
    "best enzymatic dough cleaner",
  ],
  category: "Comparisons",
  publishedAt: "2026-03-11",
  updatedAt: "2026-09-08",
  author: AUTHORS.team,
  readingMinutes: 8,
  featured: true,
  eyebrow: "Comparison",
  body: [
    {
      type: "callout",
      title: "Read this first",
      text: "We make After Dough. We are not a neutral reviewer and you should not treat us as one. What we can promise is that every number in our column was measured by us and every claim about Dough Dissolve is either sourced from their own material or left blank.",
    },
    {
      type: "p",
      text: "**Dough Dissolve** and **After Dough** both sell into the same small, specific problem: the bowl, the bench and the hands after a bake. If you are searching for one of us you are probably about to buy one of us, so here is the comparison laid out the way we would want it laid out if we were on your side of it.",
    },
    { type: "h2", text: "Start with the mechanism, not the marketing", id: "mechanism" },
    {
      type: "p",
      text: "Almost every meaningful difference between dough cleaners comes down to one question: does the product act on the dough, or does it act on the water around the dough?",
    },
    {
      type: "ul",
      items: [
        "**Surfactant cleaners** lower surface tension and emulsify fat. They lift soil that is already loose. This is what most kitchen sprays and degreasers are.",
        "**Enzymatic cleaners** catalyse the breakdown of specific molecules. Amylase shortens starch chains, protease breaks the gluten network. The residue stops being a structure.",
        "**Caustic or abrasive cleaners** remove residue by force. Effective, and hard on wooden boards, bannetons and hands.",
      ],
    },
    {
      type: "p",
      text: "Dough is a starch gel inside a protein web, and neither of those is fat. That is the whole reason a degreaser struggles with it and the reason we build on enzymes. If you want the longer version, we wrote it up in [how After Dough actually works](/blog/what-is-after-dough).",
    },
    {
      type: "p",
      text: `Where does ${RIVAL_NAME} sit? On their own material rather than ours. When they publish the mechanism and the activity, we will put it in the table below with a source next to it.`,
    },
    { type: "h2", text: "The table", id: "the-table" },
    comparisonTable,
    { type: "h2", text: "What to ask before you buy either one", id: "questions" },
    {
      type: "p",
      text: "These are the questions that actually separate dough cleaners. They work on us as well as on anyone else, so use them on both products.",
    },
    {
      type: "steps",
      items: [
        {
          title: "What is the contact time?",
          text: "Not how fast the marketing sounds. How many seconds does the bottle tell you to wait before rinsing? That number is what you will actually experience at the sink. Ours is around 45 seconds on wet residue.",
        },
        {
          title: "What does it cost per wash, not per bottle?",
          text: "Divide price by the number of pumps in the bottle, then multiply by the pumps a bowl needs. A cheaper bottle that needs four pumps is the expensive one.",
        },
        {
          title: "Is it safe on wood and cloth?",
          text: "Bannetons, proofing cloths, wooden benches and boards are the things that a harsh cleaner quietly ruins over a year. Ask specifically, because 'kitchen safe' does not answer it.",
        },
        {
          title: "Is there added fragrance?",
          text: "Fragrance lingers in porous wood and in banneton linen, and it ends up in the crust of the next loaf. We add none.",
        },
        {
          title: "What happens in the drain?",
          text: "The residue has to go somewhere. Enzyme fragments and short sugars are harmless. A rope of intact gluten heading into your trap is the thing that gets a plumber called.",
        },
      ],
    },
    { type: "h2", text: "Where a competitor might genuinely suit you better", id: "when-not-us" },
    {
      type: "p",
      text: "A comparison where the seller wins every row is not a comparison, it is an advert. Some honest cases where we are not the right buy:",
    },
    {
      type: "ul",
      items: [
        "**You need it today.** We ship from Oakland in small batches, and small batches sell out. If a rival is on a shelf near you tonight and your bowl is soaking now, buy theirs.",
        "**Your mess is grease, not dough.** If the real problem is a roasting tin, neither an enzyme dough cleaner nor its rival is the right product. Buy a degreaser.",
        "**You clean commercially, at volume.** Ask us for the bulk formulation rather than buying retail bottles by the case, and ask any rival the same question.",
        "**Price is the only variable that matters to you.** Then compare cost per wash across both and buy the cheaper one. We would rather you did that than felt misled.",
      ],
    },
    { type: "h2", text: "Our honest summary", id: "summary" },
    {
      type: "p",
      text: `If you want a cleaner that works on the chemistry of dough rather than on your forearm, an enzyme product is the category to buy, whichever brand you pick. Within that category we think the things worth paying for are contact time, surface safety on wood and cloth, no added fragrance, and a company that publishes its test method. That is the case for After Dough, and it is a case built on figures you can check.`,
    },
    {
      type: "quote",
      text: "We would rather leave a cell in the table empty than fill it with a guess about somebody else's product.",
      cite: "Our rule for comparison posts",
    },
    {
      type: "cta",
      title: "Decide with your own bowl.",
      text: "If it does not make cleanup easier than what you are using now, we refund the bottle.",
      label: "See the shelf",
      to: "/shop",
    },
  ],
  faqs: [
    {
      q: "What is the difference between Dough Dissolve and After Dough?",
      a: "They are different companies selling into the same problem. After Dough is an enzyme blend that breaks starch and gluten down chemically, measured at around 45 seconds of contact time and 99.4 percent residue removal in our own testing. Where Dough Dissolve does not publish an equivalent figure, we leave the comparison blank rather than guessing.",
    },
    {
      q: "Is After Dough the same company as Dough Dissolve?",
      a: "No. They are separate businesses. After Dough was previously called Dissolve My Dough, which is a similar sounding but different name from a different company.",
    },
    {
      q: "Is an enzymatic dough cleaner better than dish soap for dough?",
      a: "For dough specifically, yes. Dish soap works on fat and loose soil through surfactants, and dough is a starch gel held in a protein web. An enzyme cleaner breaks those two structures apart so the residue rinses instead of needing to be scrubbed.",
    },
    {
      q: "What should I compare when choosing a dough cleaner?",
      a: "Contact time before rinsing, cost per wash rather than per bottle, whether it is safe on wood and banneton cloth, whether fragrance is added, and whether the company publishes how it tested its claims.",
    },
    {
      q: "Is there a reason to buy a competitor instead?",
      a: "Yes, several. If you need it in your hands tonight and a rival is stocked locally, buy theirs. If the mess is grease rather than dough, buy a degreaser. If you clean at commercial volume, ask about a bulk formulation rather than buying retail bottles.",
    },
  ],
  related: [
    "best-dough-cleaners-compared",
    "what-is-after-dough",
    "after-dough-formerly-dissolve-my-dough",
  ],
};
