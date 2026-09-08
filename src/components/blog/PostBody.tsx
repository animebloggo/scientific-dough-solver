import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import type { Block } from "@/content/blog-types";
import { renderInline } from "./inline";

/**
 * Renders the structured body of a post. Every block type maps to one piece of
 * semantic markup, so the document outline a crawler sees matches the outline a
 * reader sees: one h1 in the article header, h2 for sections, h3 beneath them.
 */
export function PostBody({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => (
        <BlockView key={i} block={block} />
      ))}
    </div>
  );
}

function BlockView({ block }: { block: Block }) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          id={block.id}
          className="scroll-mt-24 pt-6 font-serif text-3xl md:text-4xl text-primary"
        >
          {block.text}
        </h2>
      );

    case "h3":
      return <h3 className="pt-2 font-serif text-2xl text-primary/90">{block.text}</h3>;

    case "p":
      return (
        <p className="text-lg leading-relaxed text-foreground/85">{renderInline(block.text)}</p>
      );

    case "ul":
      return (
        <ul className="space-y-3 pl-1">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-lg leading-relaxed text-foreground/85">
              <span
                aria-hidden="true"
                className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
              />
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ul>
      );

    case "ol":
      return (
        <ol className="space-y-3">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-4 text-lg leading-relaxed text-foreground/85">
              <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-secondary font-mono text-xs font-semibold text-secondary-foreground">
                {i + 1}
              </span>
              <span>{renderInline(item)}</span>
            </li>
          ))}
        </ol>
      );

    case "quote":
      return (
        <blockquote className="border-l-2 border-accent pl-6 py-1">
          <p className="font-serif text-2xl leading-snug text-primary">{block.text}</p>
          {block.cite && <cite className="label-mono mt-3 block not-italic">{block.cite}</cite>}
        </blockquote>
      );

    case "callout":
      return (
        <aside className="rounded-xl border border-accent/40 bg-accent/10 p-6">
          <div className="font-hand text-2xl text-accent-foreground/80">{block.title}</div>
          <p className="mt-1 leading-relaxed text-foreground/85">{renderInline(block.text)}</p>
        </aside>
      );

    case "steps":
      return (
        <div className="grid gap-4 sm:grid-cols-2">
          {block.items.map((item, i) => (
            <div key={i} className="rounded-lg border border-border bg-card p-6">
              <div className="label-mono text-accent">Step {i + 1}</div>
              <div className="mt-2 font-serif text-xl text-primary">{item.title}</div>
              <p className="mt-2 leading-relaxed text-muted-foreground">
                {renderInline(item.text)}
              </p>
            </div>
          ))}
        </div>
      );

    case "table":
      return (
        <figure className="my-2">
          {block.caption && <figcaption className="label-mono mb-3">{block.caption}</figcaption>}
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full min-w-[34rem] text-left text-sm">
              <thead className="bg-secondary">
                <tr>
                  {block.head.map((cell) => (
                    <th
                      key={cell}
                      scope="col"
                      className="px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider"
                    >
                      {cell}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {block.rows.map((row, i) => (
                  <tr key={i} className={i === block.highlightRow ? "bg-accent/10" : undefined}>
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className={
                          j === 0
                            ? "px-5 py-3 font-medium text-primary"
                            : "px-5 py-3 text-foreground/80"
                        }
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.note && (
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{block.note}</p>
          )}
        </figure>
      );

    case "cta":
      return (
        <div className="rounded-2xl bg-primary p-10 text-center text-primary-foreground md:p-12">
          <h2 className="font-serif text-3xl md:text-4xl">{block.title}</h2>
          <p className="mx-auto mt-3 max-w-xl text-primary-foreground/70">{block.text}</p>
          <Link to={block.to as never}>
            <Button size="lg" className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90">
              {block.label}
            </Button>
          </Link>
        </div>
      );
  }
}
