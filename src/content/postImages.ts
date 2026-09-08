import heroKitchen from "@/assets/hero-kitchen.jpg";
import heroLab from "@/assets/hero-lab.jpg";
import molecules from "@/assets/molecules.jpg";
import bakeryPattern from "@/assets/bakery-pattern.jpg";
import bottleFlatlay from "@/assets/bottle-flatlay.jpg";
import founders from "@/assets/founders.png";

/**
 * Hero imagery per post, kept out of src/content/blog.ts so that the post
 * registry stays importable by plain Node for sitemap generation.
 *
 * Alt text is descriptive rather than keyword stuffed: it is read aloud by
 * screen readers, and search engines discount alt text that reads like a
 * keyword list.
 */
export interface PostImage {
  src: string;
  alt: string;
}

const FALLBACK: PostImage = {
  src: bottleFlatlay,
  alt: "A bottle of After Dough enzymatic cleaner on a floured bench",
};

export const POST_IMAGES: Record<string, PostImage> = {
  "after-dough-formerly-dissolve-my-dough": {
    src: founders,
    alt: "The two founders in the Oakland kitchen where every batch is mixed",
  },
  "what-is-after-dough": {
    src: molecules,
    alt: "Illustration of starch chains and gluten proteins being broken into fragments",
  },
  "dough-dissolve-vs-after-dough": {
    src: bottleFlatlay,
    alt: "A bottle of After Dough photographed from above beside a bench scraper",
  },
  "how-to-dissolve-dough-stuck-to-everything": {
    src: heroKitchen,
    alt: "A home kitchen bench after a bake, with a doughy mixing bowl and scraper",
  },
  "dough-in-the-drain": {
    src: bakeryPattern,
    alt: "Flour scattered across a dark work surface",
  },
  "best-dough-cleaners-compared": {
    src: heroLab,
    alt: "Laboratory glassware used for testing enzyme activity between batches",
  },
  "sourdough-starter-cleanup": {
    src: bakeryPattern,
    alt: "A floured surface beside sourdough proofing equipment",
  },
  "dissolve-my-dough-questions-answered": {
    src: heroLab,
    alt: "Small batch testing equipment in the After Dough lab",
  },
};

export function getPostImage(slug: string): PostImage {
  return POST_IMAGES[slug] ?? FALLBACK;
}
