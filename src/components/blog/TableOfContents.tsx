import type { Block } from "@/content/blog-types";

/**
 * Built from the h2 blocks of the post. Beyond being useful to a reader on a
 * long page, the anchor list is what search engines use to offer jump links
 * straight to a section from the results page.
 */
export function TableOfContents({ blocks }: { blocks: Block[] }) {
  const headings = blocks.filter((b): b is Extract<Block, { type: "h2" }> => b.type === "h2");
  if (headings.length < 3) return null;

  return (
    <nav aria-label="On this page" className="rounded-xl border border-border bg-card p-6">
      <div className="label-mono">On this page</div>
      <ol className="mt-3 space-y-2">
        {headings.map((heading, i) => (
          <li key={heading.id} className="flex gap-3 text-sm">
            <span className="font-mono text-xs text-muted-foreground">
              {String(i + 1).padStart(2, "0")}
            </span>
            <a href={`#${heading.id}`} className="text-foreground/80 hover:text-accent">
              {heading.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
