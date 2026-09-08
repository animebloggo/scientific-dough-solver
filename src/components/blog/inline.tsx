import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

/**
 * Content links are authored in post files as plain paths, so the router's
 * literal path union cannot be checked at compile time. The cast is isolated
 * to this one component rather than sprinkled through the renderer.
 */
export function ContentLink({ href, children }: { href: string; children: ReactNode }) {
  const className = "text-primary underline decoration-accent underline-offset-4 hover:text-accent";

  if (/^https?:/i.test(href)) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link to={href as never} className={className}>
      {children}
    </Link>
  );
}

const INLINE_PATTERN = /(\[[^\]]+\]\([^)]+\)|\*\*[^*]+\*\*)/g;
const LINK_PATTERN = /^\[([^\]]+)\]\(([^)]+)\)$/;
const BOLD_PATTERN = /^\*\*([^*]+)\*\*$/;

/**
 * A deliberately small inline formatter: bold and links only.
 *
 * Post bodies are structured data rather than markdown documents, so a full
 * markdown parser would be a dependency and a sanitisation surface for two
 * pieces of syntax. Anything not matching is rendered as plain text.
 */
export function renderInline(text: string): ReactNode[] {
  return text.split(INLINE_PATTERN).map((token, i) => {
    const link = token.match(LINK_PATTERN);
    if (link) {
      return (
        <ContentLink key={i} href={link[2]}>
          {link[1]}
        </ContentLink>
      );
    }

    const bold = token.match(BOLD_PATTERN);
    if (bold) {
      return (
        <strong key={i} className="font-semibold text-primary">
          {bold[1]}
        </strong>
      );
    }

    return <span key={i}>{token}</span>;
  });
}
