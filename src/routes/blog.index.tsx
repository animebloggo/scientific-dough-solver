import { createFileRoute, Link } from "@tanstack/react-router";
import { POSTS, CATEGORIES } from "@/content/blog";
import { PostCard } from "@/components/blog/PostCard";
import { JsonLd } from "@/components/JsonLd";
import { blogSchema, breadcrumbSchema } from "@/lib/structured-data";
import { BRAND, buildLinks, buildMeta, LEGACY_BRAND } from "@/lib/seo";

const PATH = "/blog";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: buildMeta({
      title: `Journal | ${BRAND} Enzyme Cleaner`,
      description:
        "Enzyme chemistry, dough cleanup method and honest product comparisons from the small Oakland team that mixes the formula. Formerly Dissolve My Dough.",
      path: PATH,
      keywords: [
        "after dough",
        "dissolve my dough",
        "dough dissolve",
        "enzymatic dough cleaner",
        "how to dissolve dough",
        "best dough cleaner",
      ],
    }),
    links: buildLinks(PATH),
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [lead, ...rest] = POSTS;

  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <JsonLd data={blogSchema(POSTS)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Journal", path: PATH },
        ])}
      />

      <header className="max-w-3xl">
        <div className="font-hand text-2xl text-accent">the journal</div>
        <h1 className="mt-2 font-serif text-5xl leading-tight text-primary md:text-6xl">
          Everything we know about getting dough off things.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-foreground/75">
          {BRAND} is an enzymatic cleaner for the ten minutes after the loaf goes in. This is where
          we write down the chemistry, the method, what we measured, and how we compare against
          everything else on the shelf. We were called {LEGACY_BRAND} until early 2026.
        </p>
        <div className="label-mono mt-8 flex flex-wrap gap-x-4 gap-y-2">
          {CATEGORIES.map((category) => (
            <span key={category}>{category}</span>
          ))}
        </div>
      </header>

      {lead && (
        <div className="mt-14">
          <PostCard post={lead} featured />
        </div>
      )}

      <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {rest.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>

      <section className="mt-20 rounded-2xl bg-cream p-10 text-center md:p-14">
        <h2 className="font-serif text-3xl text-primary md:text-4xl">
          Reading is optional. The bowl is not.
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-foreground/70">
          Small batches, mixed by hand in Oakland, with the batch number written on the label.
        </p>
        <Link
          to="/shop"
          className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          See the shelf
        </Link>
      </section>
    </div>
  );
}
