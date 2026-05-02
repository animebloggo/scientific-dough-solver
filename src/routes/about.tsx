import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Dissolve My Dough" },
      { name: "description", content: "We are a small team of chemists and bakers building lab-grade cleaning solutions for everyday kitchens." },
      { property: "og:title", content: "About — Dissolve My Dough" },
      { property: "og:description", content: "Chemists and bakers solving the dough problem." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
      <div className="label-mono">About</div>
      <h1 className="mt-3 text-5xl md:text-6xl font-serif leading-tight">Built by chemists who bake.</h1>
      <div className="mt-10 space-y-6 text-lg leading-relaxed text-foreground/85">
        <p>
          Dissolve My Dough began in a home kitchen and a university bench. After
          one too many ruined sponges and clogged drains, our founders — a food
          chemist and a sourdough obsessive — set out to design a cleaner that
          worked <em>with</em> the chemistry of dough rather than against it.
        </p>
        <p>
          The result is a stabilized enzyme blend that is gentle on hands and
          surfaces yet ruthless on starch and gluten residues. Every batch is
          analyzed for enzymatic activity, pH, and microbial cleanliness before
          it leaves our facility in California.
        </p>
        <p>
          We believe cleaning products should be transparent about what's inside.
          Our full formulation, safety data, and biodegradability test results
          are available on request — because real expertise has nothing to hide.
        </p>
      </div>

      <div className="mt-16 grid sm:grid-cols-3 gap-6 border-t border-border pt-10">
        {[
          { l: "Founded", v: "2024" },
          { l: "Headquartered", v: "Oakland, CA" },
          { l: "Certifications", v: "Leaping Bunny · USDA BioPreferred" },
        ].map((b) => (
          <div key={b.l}>
            <div className="label-mono">{b.l}</div>
            <div className="font-serif text-xl mt-1">{b.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
