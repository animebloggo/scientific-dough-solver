/**
 * Central SEO configuration.
 *
 * SITE_URL is the single source of truth for canonical URLs, Open Graph URLs and
 * the sitemap. If the storefront moves to a new domain after the After Dough
 * rebrand, change it here and every canonical tag follows.
 */
export const SITE_URL = "https://dissolvemydough.com";

/** Current brand name. Leads every title, heading and body reference. */
export const BRAND = "After Dough";

/** Previous brand name. Kept in copy so existing searches still land on us. */
export const LEGACY_BRAND = "Dissolve My Dough";

/** Competitor brand we write comparison content against. */
export const RIVAL_BRAND = "Dough Dissolve";

export const BRAND_TAGLINE = "Enzymatic dough cleaner for bakers";

export const ORGANIZATION = {
  name: BRAND,
  legalName: `${BRAND} (formerly ${LEGACY_BRAND})`,
  email: "support@dissolvemydough.com",
  city: "Oakland",
  region: "CA",
  country: "US",
  founded: "2024",
};

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

type MetaTag = Record<string, string>;

export interface PageSeo {
  /** Rendered verbatim as the <title>. Keep it under 60 characters. */
  title: string;
  /** Rendered as meta description. Keep it between 140 and 160 characters. */
  description: string;
  /** Site relative path, used for the canonical and og:url tags. */
  path: string;
  /** Comma joined into the keywords meta tag and reused for internal reporting. */
  keywords?: string[];
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
  noindex?: boolean;
}

export const DEFAULT_OG_IMAGE =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ab56a930-eb4b-4357-8cc5-20d86ff49e81/id-preview-fc048698--bb516b02-85ca-456b-b295-1816fe32d16a.lovable.app-1777749888887.png";

/**
 * Builds the full meta tag set for a page: title, description, keywords,
 * robots, Open Graph, Twitter and article metadata.
 */
export function buildMeta(seo: PageSeo): MetaTag[] {
  const url = absoluteUrl(seo.path);
  const image = seo.image ?? DEFAULT_OG_IMAGE;
  const type = seo.type ?? "website";

  const meta: MetaTag[] = [
    { title: seo.title },
    { name: "description", content: seo.description },
    {
      name: "robots",
      content: seo.noindex
        ? "noindex, nofollow"
        : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    },
    { property: "og:title", content: seo.title },
    { property: "og:description", content: seo.description },
    { property: "og:type", content: type },
    { property: "og:url", content: url },
    { property: "og:image", content: image },
    { property: "og:site_name", content: BRAND },
    { property: "og:locale", content: "en_US" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: seo.title },
    { name: "twitter:description", content: seo.description },
    { name: "twitter:image", content: image },
  ];

  if (seo.keywords?.length) {
    meta.push({ name: "keywords", content: seo.keywords.join(", ") });
  }
  if (type === "article") {
    if (seo.publishedTime) {
      meta.push({ property: "article:published_time", content: seo.publishedTime });
    }
    if (seo.modifiedTime) {
      meta.push({ property: "article:modified_time", content: seo.modifiedTime });
    }
    if (seo.author) {
      meta.push({ property: "article:author", content: seo.author });
    }
    if (seo.section) {
      meta.push({ property: "article:section", content: seo.section });
    }
    for (const tag of seo.tags ?? []) {
      meta.push({ property: "article:tag", content: tag });
    }
  }

  return meta;
}

/** Canonical link, paired with buildMeta in every route head. */
export function buildLinks(path: string) {
  return [{ rel: "canonical", href: absoluteUrl(path) }];
}
