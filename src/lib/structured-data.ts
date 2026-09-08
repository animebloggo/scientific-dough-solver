import type { Post } from "@/content/blog-types";
import { absoluteUrl, BRAND, LEGACY_BRAND, ORGANIZATION, SITE_URL } from "./seo";

/**
 * Schema.org builders. These feed the JSON-LD blocks that let search engines
 * show breadcrumbs, article dates and FAQ accordions in the results page.
 */

type Json = Record<string, unknown>;

export function organizationSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: BRAND,
    legalName: ORGANIZATION.legalName,
    /** Tells search engines the old brand name is the same entity. */
    alternateName: [LEGACY_BRAND],
    url: SITE_URL,
    email: ORGANIZATION.email,
    foundingDate: ORGANIZATION.founded,
    address: {
      "@type": "PostalAddress",
      addressLocality: ORGANIZATION.city,
      addressRegion: ORGANIZATION.region,
      addressCountry: ORGANIZATION.country,
    },
  };
}

export function websiteSchema(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: BRAND,
    alternateName: LEGACY_BRAND,
    url: SITE_URL,
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function breadcrumbSchema(trail: Array<{ name: string; path: string }>): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export function blogSchema(posts: Post[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${SITE_URL}/blog#blog`,
    name: `${BRAND} Journal`,
    description:
      "Enzyme chemistry, cleanup method and honest product comparisons from the people who mix the formula.",
    url: absoluteUrl("/blog"),
    publisher: { "@id": `${SITE_URL}/#organization` },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.description,
      url: absoluteUrl(`/blog/${post.slug}`),
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
      author: { "@type": "Organization", name: post.author.name },
    })),
  };
}

export function articleSchema(post: Post, imageUrl: string, wordCount: number): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${absoluteUrl(`/blog/${post.slug}`)}#article`,
    headline: post.title,
    alternativeHeadline: post.seoTitle,
    description: post.description,
    image: [absoluteUrl(imageUrl)],
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    wordCount,
    keywords: post.keywords.join(", "),
    articleSection: post.category,
    inLanguage: "en-US",
    isAccessibleForFree: true,
    author: {
      "@type": "Organization",
      name: post.author.name,
      description: post.author.role,
      url: absoluteUrl("/about"),
    },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(`/blog/${post.slug}`),
    },
  };
}

export function faqSchema(faqs: Array<{ q: string; a: string }>): Json | null {
  if (!faqs.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

/** Marks up a how-to style post so steps can appear as a rich result. */
export function howToSchema(post: Post): Json | null {
  const steps = post.body.find((block) => block.type === "steps");
  if (!steps || steps.type !== "steps") return null;
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: post.title,
    description: post.description,
    step: steps.items.map((item, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: item.title,
      text: item.text,
    })),
  };
}
