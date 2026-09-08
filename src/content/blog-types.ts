/**
 * Content model for the journal.
 *
 * Body content is stored as structured blocks rather than raw HTML so that every
 * post renders in the storefront's own type system, and so headings can be turned
 * into an anchored table of contents and Article structured data automatically.
 *
 * Keep this file free of framework imports: a plain Node script reads the post
 * registry to build sitemap.xml.
 */

export interface Faq {
  q: string;
  a: string;
}

export interface TableBlock {
  type: "table";
  caption?: string;
  head: string[];
  rows: string[][];
  /** Index into rows that gets the accent treatment, usually our own product. */
  highlightRow?: number;
  /** Rendered under the table as a small print note. */
  note?: string;
}

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string; id: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "callout"; title: string; text: string }
  | { type: "steps"; items: { title: string; text: string }[] }
  | { type: "cta"; title: string; text: string; label: string; to: string }
  | TableBlock;

export interface Author {
  name: string;
  role: string;
}

export interface Post {
  slug: string;
  /** On page H1. */
  title: string;
  /** Document title. Aim for 50 to 60 characters including the brand. */
  seoTitle: string;
  /** Meta description. Aim for 140 to 160 characters. */
  description: string;
  /** Card and feed summary. */
  excerpt: string;
  /** The single term this post is built to rank for. */
  primaryKeyword: string;
  /** Secondary and long tail terms, also emitted as the keywords meta tag. */
  keywords: string[];
  category: string;
  publishedAt: string;
  updatedAt: string;
  author: Author;
  readingMinutes: number;
  featured?: boolean;
  /** Small line above the H1. */
  eyebrow: string;
  body: Block[];
  faqs: Faq[];
  /** Slugs of posts linked at the foot of the article. */
  related: string[];
}

/**
 * Bylines are team level on purpose: we do not publish invented names.
 * Swap in the real chemist and head baker once they are happy to be named,
 * which is also the stronger authorship signal for search.
 */
export const AUTHORS: Record<string, Author> = {
  lab: { name: "After Dough Lab", role: "Formulation and testing, Oakland CA" },
  kitchen: { name: "After Dough Test Kitchen", role: "Real bakes, real cleanup" },
  team: { name: "The After Dough Team", role: "Oakland, California" },
};
