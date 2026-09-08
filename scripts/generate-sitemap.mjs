/**
 * Writes public/sitemap.xml and public/robots.txt from the real post registry.
 *
 * Runs automatically before `npm run build` and `npm run dev` via the prebuild
 * and predev hooks, so adding a post cannot leave the sitemap stale. Node reads
 * the TypeScript sources directly using its own type stripping, which is why
 * src/content/blog.ts and src/lib/seo.ts avoid framework and asset imports.
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

import { POSTS } from "../src/content/blog.ts";
import { SITE_URL } from "../src/lib/seo.ts";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

/**
 * Static pages take the newest post date as their lastmod. Using the current
 * date would rewrite the sitemap on every build and leave a dirty working tree
 * with no real change in it.
 */
const siteLastmod = POSTS.reduce(
  (latest, post) => (post.updatedAt > latest ? post.updatedAt : latest),
  "2024-01-01",
);

/**
 * Static routes. Shopify product pages are fetched at runtime rather than known
 * at build time, so they are not enumerable here. If you add product URLs to the
 * sitemap later, pull them from the Storefront API in this script.
 */
const STATIC_ROUTES = [
  { path: "/", lastmod: siteLastmod },
  { path: "/shop", lastmod: siteLastmod },
  { path: "/science", lastmod: siteLastmod },
  { path: "/blog", lastmod: siteLastmod },
  { path: "/about", lastmod: siteLastmod },
];

const entries = [
  ...STATIC_ROUTES,
  ...POSTS.map((post) => ({ path: `/blog/${post.slug}`, lastmod: post.updatedAt })),
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (entry) =>
      `  <url>\n    <loc>${SITE_URL}${entry.path}</loc>\n    <lastmod>${entry.lastmod}</lastmod>\n  </url>`,
  )
  .join("\n")}
</urlset>
`;

const robots = `# ${SITE_URL}
User-agent: *
Allow: /

# Checkout and cart URLs carry session state and have no search value.
Disallow: /cart
Disallow: /checkout

Sitemap: ${SITE_URL}/sitemap.xml
`;

mkdirSync(resolve(root, "public"), { recursive: true });
writeFileSync(resolve(root, "public/sitemap.xml"), sitemap);
writeFileSync(resolve(root, "public/robots.txt"), robots);

console.log(`sitemap: ${entries.length} urls written to public/sitemap.xml`);
