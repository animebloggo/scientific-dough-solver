import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ProductGrid } from "@/components/ProductGrid";
import { Leaf, ShieldCheck, Wheat, Heart, ArrowRight, Award } from "lucide-react";
import heroImg from "@/assets/hero-kitchen.jpg";
import flatlayImg from "@/assets/bottle-flatlay.jpg";
import patternImg from "@/assets/bakery-pattern.jpg";
import foundersImg from "@/assets/founders.png";
import doughBlob from "@/assets/dough-blob.png";
import wheatSprig from "@/assets/wheat-sprig.png";
import bubbleImg from "@/assets/bubble.png";

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
              <span className="font-hand text-accent text-6xl md:text-7xl lg:text-8xl font-normal">Dissolves dough.</span>
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
        className="relative overflow-hidden text-primary-foreground"
        style={{
          background:
            "radial-gradient(ellipse at top left, oklch(0.78 0.14 75) 0%, transparent 55%), radial-gradient(ellipse at bottom right, oklch(0.72 0.16 60) 0%, transparent 60%), linear-gradient(135deg, oklch(0.5 0.09 55), oklch(0.46 0.08 60))",
        }}
      >
        {/* Floating bakery doodles */}
        <img src={doughBlob} alt="" aria-hidden="true" className="pointer-events-none select-none absolute -top-6 -left-4 w-20 md:w-28 opacity-80 animate-drift-a" />
        <img src={wheatSprig} alt="" aria-hidden="true" className="pointer-events-none select-none absolute top-10 right-2 w-16 md:w-24 opacity-90 animate-drift-b" />
        <img src={doughBlob} alt="" aria-hidden="true" className="pointer-events-none select-none absolute bottom-6 left-4 w-14 md:w-20 opacity-70 animate-drift-c" />
        <img src={wheatSprig} alt="" aria-hidden="true" className="pointer-events-none select-none absolute -bottom-4 -right-4 w-20 md:w-28 opacity-80 animate-drift-a" />
        <img src={bubbleImg} alt="" aria-hidden="true" className="pointer-events-none select-none absolute top-1/3 left-8 w-10 md:w-14 animate-bubble-rise" style={{ animationDelay: "0s" }} />
        <img src={bubbleImg} alt="" aria-hidden="true" className="pointer-events-none select-none absolute top-1/2 right-12 w-8 md:w-12 animate-bubble-rise" style={{ animationDelay: "2s" }} />
        <img src={bubbleImg} alt="" aria-hidden="true" className="pointer-events-none select-none absolute bottom-20 left-1/3 w-6 md:w-10 animate-bubble-rise" style={{ animationDelay: "4s" }} />

        <div className="relative max-w-6xl mx-auto px-6 py-20 md:py-24 text-center">
          <div className="text-xs tracking-[0.22em] uppercase font-semibold opacity-80">Why Dissolve My Dough</div>
          <h2 className="mt-4 text-3xl md:text-5xl font-serif leading-tight">
            Tough on dough. <br className="sm:hidden" />
            <em className="font-hand text-accent-foreground text-4xl md:text-6xl">Gentle</em> on hands.
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
              <div key={s.t} className="bg-primary-foreground/10 border border-primary-foreground/15 rounded-2xl p-6 backdrop-blur-md">
                <div className="font-serif text-2xl mb-2">{s.t}</div>
                <p className="text-sm opacity-90 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="paper-texture">
        <div className="max-w-7xl mx-auto px-6 pt-24 pb-10">
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

      {/* Meet the Founders */}
      <section className="bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pt-6 pb-20 md:pt-10 md:pb-28">
          <div className="text-center mb-12">
            <div className="font-hand text-accent text-5xl md:text-7xl leading-none">meet</div>
            <h2 className="mt-2 text-4xl md:text-5xl font-serif text-primary">
              Kay <span className="font-hand text-accent">&</span> Kayla
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-1 lg:order-1">
              <div
                className="absolute inset-0 -z-0 rounded-full mx-auto my-auto blur-3xl opacity-60"
                style={{
                  background: "radial-gradient(circle, oklch(0.78 0.13 75 / 0.45), transparent 65%)",
                }}
              />
              <div className="relative">
                <img
                  src={foundersImg}
                  alt="Kay and Kayla, founders of Dissolve My Dough, holding fresh sourdough loaves"
                  className="relative w-full max-w-xl mx-auto animate-float-slow"
                  loading="lazy"
                />
                <div className="absolute top-[18%] left-[2%] md:left-[-2%] bg-card border border-border rounded-full px-4 py-1.5 text-xs font-medium shadow-[var(--shadow-card)] animate-tag-pop">
                  <span className="font-hand text-accent text-base mr-1">Kay</span>
                  <span className="text-foreground/70">· baker</span>
                </div>
                <div className="absolute top-[14%] right-[2%] md:right-[-2%] bg-card border border-border rounded-full px-4 py-1.5 text-xs font-medium shadow-[var(--shadow-card)] animate-tag-pop-right">
                  <span className="font-hand text-accent text-base mr-1">Kayla</span>
                  <span className="text-foreground/70">· chemist</span>
                </div>
                <div className="absolute bottom-[6%] left-1/2 -translate-x-1/2 bg-cream border border-border rounded-lg px-4 py-2 shadow-[var(--shadow-card)] -rotate-2 animate-float-slow-alt">
                  <div className="font-hand text-accent text-lg leading-none">made with care</div>
                  <div className="text-[10px] text-foreground/60 tracking-widest uppercase mt-0.5">Oakland, CA</div>
                </div>
              </div>
            </div>

            <div className="order-2 lg:order-2">
              <p className="text-lg text-foreground/75 leading-relaxed">
                Two friends, two stand mixers, and a whole lot of stuck dough.
                We started Dissolve My Dough in a small Oakland kitchen after one too many
                afternoons scrubbing sourdough off our favorite bowls.
              </p>
              <p className="mt-4 text-foreground/75 leading-relaxed">
                Every bottle is mixed, labeled, and signed off by us — the same way we'd want it
                if it were headed to our own counters.
              </p>
              <div className="mt-6 font-hand text-accent text-2xl">— Kay &amp; Kayla</div>
            </div>
          </div>
        </div>
      </section>

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
