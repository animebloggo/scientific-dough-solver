import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ProductGrid } from "@/components/ProductGrid";
import { FlaskConical, Atom, Leaf, ShieldCheck, ArrowRight, Beaker } from "lucide-react";
import heroImg from "@/assets/hero-lab.jpg";
import moleculesImg from "@/assets/molecules.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-cream">
        <div className="absolute inset-0 grid-bg opacity-60" />
        <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 label-mono bg-card border border-border rounded-full px-3 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Patent-Pending Enzyme Formulation
            </div>
            <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.02]">
              The molecular<br />solution to <em className="text-accent not-italic font-serif">stuck dough.</em>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-lg leading-relaxed">
              A precisely calibrated blend of α-amylase, protease, and lipase enzymes
              that hydrolyze the polysaccharide and protein bonds holding dough to your surfaces.
              No scrubbing. No harsh chemicals. Just chemistry.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link to="/shop">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-base h-12 px-7">
                  Shop the Formula <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/science">
                <Button size="lg" variant="outline" className="border-primary/30 text-base h-12 px-7">
                  See How It Works
                </Button>
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              {[
                { v: "99.4%", l: "Dough Dissolution" },
                { v: "<60s", l: "Reaction Time" },
                { v: "100%", l: "Biodegradable" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-serif text-2xl text-primary">{s.v}</div>
                  <div className="label-mono mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-accent/10 rounded-2xl blur-2xl" />
            <img
              src={heroImg}
              alt="Enzyme cleaner dissolving dough in a laboratory beaker"
              className="relative rounded-xl shadow-[var(--shadow-elevated)] w-full"
              width={1600}
              height={1200}
            />
            <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-lg p-4 shadow-[var(--shadow-card)] hidden md:block">
              <div className="label-mono">Test Specimen 0042</div>
              <div className="font-mono text-sm mt-1">pH 7.2 · 22°C · t=43s</div>
              <div className="text-xs text-accent mt-1 font-medium">✓ Complete dissolution</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-border bg-card">
        <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: FlaskConical, t: "Lab Formulated" },
            { icon: ShieldCheck, t: "Non-Toxic & Safe" },
            { icon: Leaf, t: "Plant-Based Enzymes" },
            { icon: Atom, t: "Patent Pending" },
          ].map((b) => (
            <div key={b.t} className="flex items-center gap-3">
              <b.icon className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">{b.t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Mechanism */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src={moleculesImg}
              alt="Molecular illustration of enzymes breaking down starch and gluten bonds"
              className="rounded-xl w-full"
              width={1400}
              height={1000}
              loading="lazy"
            />
          </div>
          <div>
            <div className="label-mono">§ 02 · The Mechanism</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-serif">How enzymes break the bonds.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Dough adheres because gluten proteins form an elastic network and starch
              granules act as a viscous binder. Conventional cleaners attack the surface.
              We attack the structure.
            </p>
            <ol className="mt-8 space-y-6">
              {[
                {
                  n: "01",
                  t: "α-Amylase locates starch",
                  d: "Cleaves α-1,4 glycosidic bonds in amylose & amylopectin chains.",
                },
                {
                  n: "02",
                  t: "Protease unwinds gluten",
                  d: "Hydrolyzes peptide bonds in glutenin and gliadin networks.",
                },
                {
                  n: "03",
                  t: "Surfactants lift residue",
                  d: "Plant-derived surfactants encapsulate the dissolved fragments for rinse-off.",
                },
              ].map((s) => (
                <li key={s.n} className="flex gap-5">
                  <div className="font-mono text-accent text-sm pt-1">{s.n}</div>
                  <div>
                    <div className="font-serif text-lg">{s.t}</div>
                    <div className="text-sm text-muted-foreground mt-1">{s.d}</div>
                  </div>
                </li>
              ))}
            </ol>
            <Link to="/science" className="inline-flex items-center mt-8 text-accent font-medium hover:underline">
              Read the full white paper <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="bg-cream border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <div className="label-mono">§ 03 · Catalogue</div>
              <h2 className="mt-3 text-4xl md:text-5xl font-serif">Available formulations.</h2>
            </div>
            <Link to="/shop">
              <Button variant="outline" className="border-primary/30">View all <ArrowRight className="ml-2 w-4 h-4" /></Button>
            </Link>
          </div>
          <ProductGrid limit={6} />
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <Beaker className="w-10 h-10 mx-auto text-accent" />
        <h2 className="mt-6 text-4xl md:text-5xl font-serif">Engineered, not improvised.</h2>
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
          Every bottle ships with a certificate of analysis. Every batch is tested for
          enzymatic activity, pH stability, and biodegradability.
        </p>
        <Link to="/shop">
          <Button size="lg" className="mt-8 h-12 px-8">Order yours</Button>
        </Link>
      </section>
    </>
  );
}
