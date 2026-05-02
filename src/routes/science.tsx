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
          <div className="label-mono">White Paper · Rev. 04</div>
          <h1 className="mt-4 text-5xl md:text-6xl font-serif leading-tight">
            The Science of Enzymatic Dough Dissolution
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            A mechanistic study of α-amylase and protease activity on hydrated wheat-flour
            adhesion under domestic-kitchen conditions.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-sm font-mono text-muted-foreground">
            <span>Authored: Dissolve My Dough Labs</span>
            <span>Subjects: 1,240 kitchen surfaces</span>
            <span>pH range: 6.8–7.4</span>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-16 prose-section space-y-16">
        <section>
          <div className="label-mono">Abstract</div>
          <p className="mt-3 text-lg leading-relaxed">
            Wheat-flour dough adheres to surfaces through a dual mechanism: a viscoelastic
            gluten network (glutenin + gliadin) and starch-mediated adhesion. We demonstrate
            that targeted enzymatic hydrolysis using a stabilized α-amylase / protease blend
            achieves complete dough dissolution in under 60 seconds at ambient temperature,
            outperforming surfactant-only formulations by 4.7×.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-10 items-center">
          <img src={moleculesImg} alt="Molecular structures" className="rounded-lg" loading="lazy" />
          <div>
            <div className="label-mono">§ 1 · The Substrate</div>
            <h2 className="mt-2 font-serif text-3xl">Why dough sticks.</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              When flour hydrates, glutenin chains entangle with gliadin to form a continuous
              elastic matrix. Starch granules swell and gelatinize, contributing tackiness
              through exposed hydroxyl groups that hydrogen-bond aggressively to ceramic,
              steel, and porous surfaces.
            </p>
          </div>
        </section>

        <section>
          <div className="label-mono">§ 2 · Mechanism of Action</div>
          <h2 className="mt-2 font-serif text-3xl">A three-stage cascade.</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
              { n: "Stage 1", t: "Penetration", d: "Surfactant carrier reduces interfacial tension and shuttles enzymes into the dough matrix." },
              { n: "Stage 2", t: "Hydrolysis", d: "α-amylase cleaves α-1,4 glycosidic bonds; protease cleaves peptide bonds; chains shorten." },
              { n: "Stage 3", t: "Suspension", d: "Fragments are emulsified into the wash water for rinse-away with no scrubbing." },
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
          <div className="label-mono">§ 3 · Results</div>
          <h2 className="mt-2 font-serif text-3xl">Performance vs. control.</h2>
          <div className="mt-8 border border-border rounded-lg overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-secondary">
                <tr className="text-left">
                  <th className="px-5 py-3 font-mono text-xs uppercase tracking-wider">Method</th>
                  <th className="px-5 py-3 font-mono text-xs uppercase tracking-wider">Avg. Time</th>
                  <th className="px-5 py-3 font-mono text-xs uppercase tracking-wider">Dissolution</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {[
                  ["Hot water + scraping", "4 m 12 s", "78%"],
                  ["Standard dish soap", "2 m 48 s", "84%"],
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
          <h2 className="font-serif text-3xl md:text-4xl">Ready to test it yourself?</h2>
          <p className="mt-3 text-primary-foreground/70 max-w-xl mx-auto">
            Every bottle ships with the same lab-grade formulation referenced above.
          </p>
          <Link to="/shop">
            <Button size="lg" className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90">Shop now</Button>
          </Link>
        </section>
      </div>
    </article>
  );
}
