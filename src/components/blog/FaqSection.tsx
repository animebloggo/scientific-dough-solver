import type { Faq } from "@/content/blog-types";

/**
 * Native details elements rather than a JavaScript accordion. Collapsed answers
 * stay in the server rendered HTML, which is what the FAQ structured data on the
 * page needs to be consistent with, and they work with keyboard and screen
 * readers without any code of ours.
 */
export function FaqSection({
  faqs,
  heading = "Common questions",
}: {
  faqs: Faq[];
  heading?: string;
}) {
  if (!faqs.length) return null;

  return (
    <section className="mt-16 border-t border-border pt-10">
      <div className="label-mono">Answers</div>
      <h2 id="faq" className="mt-2 scroll-mt-24 font-serif text-3xl text-primary">
        {heading}
      </h2>
      <div className="mt-6 divide-y divide-border border-y border-border">
        {faqs.map((faq) => (
          <details key={faq.q} className="group py-4">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-serif text-xl text-primary marker:content-none">
              <span>{faq.q}</span>
              <span
                aria-hidden="true"
                className="mt-1 shrink-0 font-mono text-accent transition-transform group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="mt-3 max-w-2xl leading-relaxed text-foreground/80">{faq.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
