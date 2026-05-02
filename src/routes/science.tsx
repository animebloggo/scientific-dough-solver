import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import moleculesImg from "@/assets/molecules.jpg";

export const Route = createFileRoute("/science")({
  head: () => ({
    meta: [
      { title: "The Science — Dissolve My Dough" },
      { name: "description", content: "How enzymatic hydrolysis dissolves starch and gluten bonds. White paper, mechanism of action, and lab data." },
      { property: "og:title", content: "The Science — Dissolve My Dough" },
      { property: "og:description", content: "The mechanism behind enzymatic dough removal." },
      { property: "og:image", content: "/og-science.jpg" },
    ],
  }),
  component: Science,
});

function Science() {
  return (
    <article>
      <header className="border-b border-border bg-cream">
        <div className="max-w-4xl mx-auto px-6 py-20 md:py-28">
          <div className="label-mono">How it works · in plain language</div>
          <h1 className="mt-4 text-5xl md:text-6xl font-serif leading-tight">
            A small, careful bit of chemistry.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            No drama, no harsh fumes. Just enzymes doing what they already do in your gut,
            in your laundry, and in the bread you bake — gently breaking long molecules into shorter ones.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-sm font-mono text-muted-foreground">
            <span>Tested in real kitchens</span>
            <span>Food-grade ingredients</span>
            <span>Reviewed by our food chemist</span>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-16 prose-section space-y-16">
        <section>
          <div className="label-mono">The short version</div>
          <p className="mt-3 text-lg leading-relaxed">
            Dough sticks for two reasons: gluten forms a stretchy web, and starch turns tacky
            when it meets water. Our blend gently relaxes both, so what was glued to your bowl
            a minute ago slides off under the tap. No scrubbing, no scraping, no worry.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-10 items-center">
          <img src={moleculesImg} alt="Illustration of starch and gluten molecules" className="rounded-lg" loading="lazy" />
          <div>
            <div className="label-mono">§ 1 · Why dough sticks</div>
            <h2 className="mt-2 font-serif text-3xl">It's not you. It's the chemistry.</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              When flour meets water, the proteins link up into a stretchy network and the
              starch swells into a sticky gel. That's wonderful for bread — and frustrating
              for whoever has to clean the bowl. Knowing this, we designed something that
              works with the dough instead of against it.
            </p>
          </div>
        </section>

        <section>
          <div className="label-mono">§ 2 · What happens in the bowl</div>
          <h2 className="mt-2 font-serif text-3xl">Three quiet steps.</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { n: "Step 1", t: "Settle in", d: "A drop of warm water and a small pour of formula. The enzymes spread through the residue." },
              { n: "Step 2", t: "Loosen up", d: "Starch chains shorten. Gluten relaxes its grip. You can usually see it happen." },
              { n: "Step 3", t: "Rinse clean", d: "What's left lifts off with water. No scraping, no scratched surfaces, no second pass." },
            ].map((s) => (
              <div key={s.n} className="border border-border rounded-lg p-6 bg-card">
                <div className="label-mono text-accent">{s.n}</div>
                <div className="font-serif text-xl mt-2">{s.t}</div>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="label-mono">§ 3 · How it compares</div>
          <h2 className="mt-2 font-serif text-3xl">Side by side, in our kitchen.</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">
            Same bowl. Same dough. Same warm water. Here's what we measured, on average,
            across a hundred batches.
          </p>
          <div className="mt-8 border border-border rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-secondary">
                <tr className="text-left">
                  <th className="px-5 py-3 font-mono text-xs uppercase tracking-wider">Method</th>
                  <th className="px-5 py-3 font-mono text-xs uppercase tracking-wider">Avg. Time</th>
                  <th className="px-5 py-3 font-mono text-xs uppercase tracking-wider">Came Off</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["Hot water + scraping", "4 m 12 s", "78%"],
                  ["Regular dish soap", "2 m 48 s", "84%"],
                  ["Dissolve My Dough", "0 m 43 s", "99.4%"],
                ].map((r) => (
                  <tr key={r[0]} className={r[0].includes("Dissolve") ? "bg-accent/10" : ""}>
                    <td className="px-5 py-3">{r[0]}</td>
                    <td className="px-5 py-3 font-mono">{r[1]}</td>
                    <td className="px-5 py-3 font-mono font-medium">{r[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-primary text-primary-foreground rounded-2xl p-10 md:p-14 text-center">
          <h2 className="font-serif text-3xl md:text-4xl">Try it on your stickiest bowl.</h2>
          <p className="mt-3 text-primary-foreground/70 max-w-xl mx-auto">
            Same formula we use at home. If it doesn't make cleanup easier, we'll refund the bottle.
          </p>
          <Link to="/shop">
            <Button size="lg" className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90">See the shelf</Button>
          </Link>
        </section>
      </div>
    </article>
  );
}
