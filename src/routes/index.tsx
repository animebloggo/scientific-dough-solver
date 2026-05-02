import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ProductGrid } from "@/components/ProductGrid";
import { Leaf, ShieldCheck, Wheat, Heart, ArrowRight, Award } from "lucide-react";
import heroImg from "@/assets/hero-kitchen.jpg";
import flatlayImg from "@/assets/bottle-flatlay.jpg";
import patternImg from "@/assets/bakery-pattern.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-background">
        <div className="relative max-w-7xl mx-auto px-6 pt-8 pb-10 lg:pt-20 lg:pb-28 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-medium leading-[1.02] text-primary">
              The soap that <br />
              <span className="font-hand text-accent text-6xl md:text-7xl lg:text-8xl font-normal">loosens dough.</span>
            </h1>
            <p className="mt-6 text-lg text-foreground/80 max-w-lg leading-relaxed">
              A gentle blend of plant enzymes that takes sticky dough off bowls, boards,
              and hands — without scrubbing. Simple enough for home kitchens.
              Smart enough for people who care how things work.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link to="/shop">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-base h-12 px-7 rounded-full">
                  Shop now <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/science">
                <Button size="lg" variant="ghost" className="text-base h-12 px-7 rounded-full hover:bg-card">
                  How it works
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <img
              src={heroImg}
              alt="Hands using artisan dough cleaner in a sunlit kitchen"
              className="relative rounded-2xl shadow-[var(--shadow-elevated)] w-full"
              width={1600}
              height={1200}
            />
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-border bg-cream">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Wheat, t: "Plant-based enzymes" },
            { icon: ShieldCheck, t: "Safe & non-toxic" },
            { icon: Leaf, t: "Biodegradable" },
            { icon: Heart, t: "Cruelty free" },
          ].map((b) => (
            <div key={b.t} className="flex flex-col items-center text-center gap-2">
              <b.icon className="w-7 h-7 text-accent" />
              <span className="text-sm font-medium text-primary">{b.t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Why */}
      <section
        className="relative bg-primary text-primary-foreground"
        style={{
          backgroundImage: `linear-gradient(oklch(0.42 0.06 55 / 0.94), oklch(0.42 0.06 55 / 0.94)), url(${patternImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24 text-center">
          <div className="text-xs tracking-[0.22em] uppercase font-semibold opacity-70">Why Dissolve My Dough</div>
          <h2 className="mt-4 text-4xl md:text-5xl font-serif">
            Cleaning that's actually <em className="font-hand text-accent text-5xl md:text-6xl">kind</em> to your kitchen.
          </h2>
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                t: "Enzyme-powered",
                d: "Food-grade enzymes quietly break down starch and gluten, so dough lifts away on its own.",
              },
              {
                t: "Gentle on hands",
                d: "No harsh chemistry, no fumes. Safe to use every day, even on the most well-worn baker's hands.",
              },
              {
                t: "Made in small batches",
                d: "Mixed by hand in Oakland, California. Labeled with the date it was made and what's inside.",
              },
            ].map((s) => (
              <div key={s.t} className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-6 backdrop-blur">
                <div className="font-serif text-2xl mb-2">{s.t}</div>
                <p className="text-sm opacity-80 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="paper-texture border-y border-border">
        <div className="max-w-7xl mx-auto px-6 py-24">
          <div className="text-center mb-12">
            <div className="text-xs tracking-[0.22em] uppercase font-semibold text-kraft">The shelf</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-serif text-primary">
              Pick what fits your <span className="font-hand text-accent">kitchen.</span>
            </h2>
          </div>
          <ProductGrid limit={6} />
          <div className="text-center mt-12">
            <Link to="/shop">
              <Button variant="outline" className="rounded-full border-primary/30 h-11 px-6">
                View all <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mechanism — story style */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src={flatlayImg}
              alt="Amber bottle of dough cleaner with wheat and a wooden spoon"
              className="rounded-2xl w-full shadow-[var(--shadow-card)]"
              width={1400}
              height={1400}
              loading="lazy"
            />
            <div className="absolute -bottom-5 -right-5 bg-card border border-border rounded-xl p-4 shadow-[var(--shadow-card)] hidden md:block max-w-[220px]">
              <div className="font-hand text-2xl text-accent leading-none">P.S.</div>
              <div className="text-xs text-foreground/70 mt-1 leading-relaxed">
                Each bottle ships with a handwritten note from whoever mixed it.
              </div>
            </div>
          </div>
          <div>
            <div className="text-xs tracking-[0.22em] uppercase font-semibold text-kraft">How it works</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-serif text-primary">
              A quieter way to clean.
            </h2>
            <p className="mt-5 text-foreground/75 leading-relaxed">
              Dough sticks because gluten forms a stretchy web and starch turns tacky in water.
              Most cleaners try to push through it. Ours gently takes it apart, so it can rinse away on its own.
            </p>
            <ol className="mt-8 space-y-6">
              {[
                { n: "1", t: "Enzymes find the starch", d: "α-amylase loosens the long starch chains that make dough cling." },
                { n: "2", t: "Gluten softens", d: "A food-grade protease relaxes the gluten network without harsh chemistry." },
                { n: "3", t: "Everything rinses away", d: "Plant-based surfactants lift the loosened bits so warm water carries them off." },
              ].map((s) => (
                <li key={s.n} className="flex gap-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent text-accent-foreground font-serif text-lg flex items-center justify-center">
                    {s.n}
                  </div>
                  <div>
                    <div className="font-serif text-lg text-primary">{s.t}</div>
                    <div className="text-sm text-foreground/70 mt-1">{s.d}</div>
                  </div>
                </li>
              ))}
            </ol>
            <Link to="/science" className="inline-flex items-center mt-8 text-accent font-medium hover:underline">
              Read the full breakdown <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Sticky note CTA */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <div className="inline-block bg-cream border border-border rounded-lg px-10 py-12 shadow-[var(--shadow-card)] -rotate-1">
          <div className="font-hand text-accent text-3xl">— a little note —</div>
          <h2 className="mt-4 text-3xl md:text-4xl font-serif text-primary">
            Quietly considered. Honestly made.
          </h2>
          <p className="mt-4 text-foreground/75 max-w-xl mx-auto">
            We test every batch and write down what we find. If you want the numbers, just ask — we'll send them.
          </p>
          <Link to="/shop">
            <Button size="lg" className="mt-7 h-12 px-8 rounded-full">Try a bottle</Button>
          </Link>
        </div>
      </section>
    </>
  );
}
