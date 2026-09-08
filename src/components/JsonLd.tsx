/**
 * Renders a JSON-LD block. Search engines read structured data anywhere in the
 * document, and this markup is present in the server rendered HTML, so it does
 * not depend on the crawler executing JavaScript.
 *
 * The `<` escape prevents a string in the data from closing the script tag.
 */
export function JsonLd({ data }: { data: Record<string, unknown> | null }) {
  if (!data) return null;
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
