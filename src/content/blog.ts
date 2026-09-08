import type { Post } from "./blog-types.ts";
import { post as rebrand } from "./posts/after-dough-formerly-dissolve-my-dough.ts";
import { post as whatIs } from "./posts/what-is-after-dough.ts";
import { post as versus } from "./posts/dough-dissolve-vs-after-dough.ts";
import { post as howTo } from "./posts/how-to-dissolve-dough-stuck-to-everything.ts";
import { post as drain } from "./posts/dough-in-the-drain.ts";
import { post as bestOf } from "./posts/best-dough-cleaners-compared.ts";
import { post as sourdough } from "./posts/sourdough-starter-cleanup.ts";
import { post as questions } from "./posts/dissolve-my-dough-questions-answered.ts";

/**
 * Every post, newest first. This module is deliberately free of framework and
 * asset imports so that scripts/generate-sitemap.mjs can read it directly.
 */
export const POSTS: Post[] = [
  rebrand,
  whatIs,
  versus,
  howTo,
  drain,
  bestOf,
  sourdough,
  questions,
].sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}

export function getRelated(post: Post): Post[] {
  return post.related
    .map((slug) => getPost(slug))
    .filter((p): p is Post => Boolean(p) && p!.slug !== post.slug);
}

export const CATEGORIES: string[] = Array.from(new Set(POSTS.map((p) => p.category)));

export const FEATURED: Post[] = POSTS.filter((p) => p.featured);

/** Newest first, excluding the given slug. Used for the read next rail. */
export function getRecent(excludeSlug: string, limit = 3): Post[] {
  return POSTS.filter((p) => p.slug !== excludeSlug).slice(0, limit);
}

/** Word count of the body, used to sanity check that a post is substantial. */
export function wordCount(post: Post): number {
  let words = `${post.title} ${post.description}`.split(/\s+/).length;
  for (const block of post.body) {
    if ("text" in block && typeof block.text === "string") {
      words += block.text.split(/\s+/).length;
    }
    if (block.type === "ul" || block.type === "ol") {
      words += block.items.join(" ").split(/\s+/).length;
    }
    if (block.type === "steps") {
      words += block.items
        .map((i) => `${i.title} ${i.text}`)
        .join(" ")
        .split(/\s+/).length;
    }
    if (block.type === "table") {
      words += block.rows.flat().join(" ").split(/\s+/).length;
    }
  }
  for (const faq of post.faqs) {
    words += `${faq.q} ${faq.a}`.split(/\s+/).length;
  }
  return words;
}
