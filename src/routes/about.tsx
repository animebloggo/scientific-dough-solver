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
      <h1 className="mt-3 text-5xl md:text-6xl font-serif leading-tight">A small studio of bakers and a chemist.</h1>
      <div className="mt-10 space-y-6 text-lg leading-relaxed text-foreground/85">
        <p>
          We started this because cleaning up after a bake had quietly become the worst part of baking.
          A food chemist and a sourdough-obsessed friend sat down at a kitchen table and asked a
          simple question: what if the cleaner understood the dough?
        </p>
        <p>
          What came out is gentle on your hands, kind to your sink, and honest about what it does.
          Each batch is mixed in small runs and checked the same way every time — for activity,
          pH, and shelf life — before it gets a label.
        </p>
        <p>
          We try to be straightforward. If you want to know what's in the bottle, where it's made,
          or how we tested it, just ask. We'll tell you, in plain language.
        </p>
      </div>

      <div className="mt-16 grid sm:grid-cols-3 gap-6 border-t border-border pt-10">
        {[
          { l: "Started", v: "2024" },
          { l: "Made in", v: "Oakland, CA" },
          { l: "Kind to", v: "Hands · Pipes · Animals" },
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
