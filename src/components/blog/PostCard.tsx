import { Link } from "@tanstack/react-router";
import type { Post } from "@/content/blog-types";
import { getPostImage } from "@/content/postImages";
import { formatPostDate } from "@/lib/date";

export function PostCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  const image = getPostImage(post.slug);

  return (
    <article
      className={
        featured
          ? "group grid gap-8 rounded-2xl border border-border bg-card p-6 md:grid-cols-2 md:p-8"
          : "group flex flex-col overflow-hidden rounded-xl border border-border bg-card"
      }
    >
      <Link
        to="/blog/$slug"
        params={{ slug: post.slug }}
        className={featured ? "order-last md:order-first" : ""}
      >
        <img
          src={image.src}
          alt={image.alt}
          loading="lazy"
          className={
            featured
              ? "aspect-[4/3] w-full rounded-xl object-cover"
              : "aspect-[3/2] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          }
        />
      </Link>

      <div className={featured ? "flex flex-col justify-center" : "flex flex-1 flex-col p-6"}>
        <div className="label-mono flex flex-wrap items-center gap-x-3 gap-y-1">
          <span className="text-accent">{post.category}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
          <span aria-hidden="true">·</span>
          <span>{post.readingMinutes} min read</span>
        </div>

        <h3
          className={featured ? "mt-3 font-serif text-3xl md:text-4xl" : "mt-3 font-serif text-2xl"}
        >
          <Link
            to="/blog/$slug"
            params={{ slug: post.slug }}
            className="text-primary hover:text-accent"
          >
            {post.title}
          </Link>
        </h3>

        <p className="mt-3 leading-relaxed text-muted-foreground">{post.excerpt}</p>

        <Link
          to="/blog/$slug"
          params={{ slug: post.slug }}
          className="label-mono mt-5 inline-flex text-primary hover:text-accent"
        >
          Read the piece
        </Link>
      </div>
    </article>
  );
}
