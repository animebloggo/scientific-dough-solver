import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getPost, getRelated, wordCount } from "@/content/blog";
import { getPostImage } from "@/content/postImages";
import { PostBody } from "@/components/blog/PostBody";
import { PostCard } from "@/components/blog/PostCard";
import { FaqSection } from "@/components/blog/FaqSection";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { JsonLd } from "@/components/JsonLd";
import { articleSchema, breadcrumbSchema, faqSchema, howToSchema } from "@/lib/structured-data";
import { absoluteUrl, BRAND, buildLinks, buildMeta } from "@/lib/seo";
import { formatPostDate } from "@/lib/date";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    if (!getPost(params.slug)) throw notFound();
    return null;
  },
  head: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) {
      return {
        meta: buildMeta({
          title: `Not found | ${BRAND}`,
          description: "This piece has dissolved.",
          path: `/blog/${params.slug}`,
          noindex: true,
        }),
      };
    }

    const path = `/blog/${post.slug}`;
    return {
      meta: buildMeta({
        title: post.seoTitle,
        description: post.description,
        path,
        keywords: post.keywords,
        image: absoluteUrl(getPostImage(post.slug).src),
        type: "article",
        publishedTime: post.publishedAt,
        modifiedTime: post.updatedAt,
        author: post.author.name,
        section: post.category,
        tags: post.keywords,
      }),
      links: buildLinks(path),
    };
  },
  component: PostPage,
  notFoundComponent: () => (
    <div className="mx-auto max-w-md px-6 py-24 text-center">
      <div className="font-hand text-2xl text-accent">oh no</div>
      <h1 className="mt-2 font-serif text-4xl text-primary">This piece has dissolved.</h1>
      <Link to="/blog" className="label-mono mt-6 inline-flex text-primary hover:text-accent">
        Back to the journal
      </Link>
    </div>
  ),
});

function PostPage() {
  const { slug } = Route.useParams();
  const post = getPost(slug);
  if (!post) return null;

  const image = getPostImage(post.slug);
  const related = getRelated(post);
  const path = `/blog/${post.slug}`;

  return (
    <article>
      <JsonLd data={articleSchema(post, image.src, wordCount(post))} />
      <JsonLd data={faqSchema(post.faqs)} />
      <JsonLd data={howToSchema(post)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Journal", path: "/blog" },
          { name: post.title, path },
        ])}
      />

      <header className="border-b border-border bg-cream">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
          <nav aria-label="Breadcrumb" className="label-mono">
            <Link to="/blog" className="hover:text-accent">
              Journal
            </Link>
            <span aria-hidden="true" className="mx-2">
              /
            </span>
            <span className="text-accent">{post.category}</span>
          </nav>

          <div className="font-hand mt-4 text-2xl text-accent">{post.eyebrow}</div>
          <h1 className="mt-2 font-serif text-4xl leading-tight text-primary md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-foreground/75">{post.excerpt}</p>

          <div className="label-mono mt-8 flex flex-wrap items-center gap-x-3 gap-y-1">
            <span>{post.author.name}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readingMinutes} min read</span>
          </div>
          {post.updatedAt !== post.publishedAt && (
            <div className="mt-2 text-xs text-muted-foreground">
              Last checked and updated {formatPostDate(post.updatedAt)}
            </div>
          )}
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-6">
        <img
          src={image.src}
          alt={image.alt}
          className="-mt-8 aspect-[16/9] w-full rounded-xl border border-border object-cover shadow-sm"
        />
      </div>

      <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <div className="mb-12">
          <TableOfContents blocks={post.body} />
        </div>

        <PostBody blocks={post.body} />

        <FaqSection faqs={post.faqs} />

        <footer className="mt-16 border-t border-border pt-10">
          <div className="label-mono">Written by</div>
          <div className="mt-1 font-serif text-2xl text-primary">{post.author.name}</div>
          <p className="mt-1 text-muted-foreground">{post.author.role}</p>
          <p className="mt-4 max-w-xl leading-relaxed text-muted-foreground">
            We mix {BRAND} in small batches in Oakland, California. If something here is wrong or
            out of date, tell us and we will fix it and say what changed.
          </p>
          <Link to="/about" className="label-mono mt-4 inline-flex text-primary hover:text-accent">
            More about us
          </Link>
        </footer>
      </div>

      {related.length > 0 && (
        <section className="border-t border-border bg-cream">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="label-mono">Read next</div>
            <h2 className="mt-2 font-serif text-3xl text-primary">Keep going.</h2>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              {related.map((item) => (
                <PostCard key={item.slug} post={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
