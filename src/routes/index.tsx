import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ProductGrid } from "@/components/ProductGrid";
import { Leaf, ShieldCheck, Wheat, Heart, ArrowRight, Award } from "lucide-react";
import heroImg from "@/assets/hero-kitchen.jpg";
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

      {/* Why */}
      <section
        className="relative z-10 text-primary overflow-visible max-w-full"
        style={{
          background:
            "radial-gradient(ellipse at top left, oklch(0.92 0.07 78) 0%, transparent 60%), radial-gradient(ellipse at bottom right, oklch(0.9 0.08 68) 0%, transparent 65%), linear-gradient(180deg, oklch(0.93 0.05 78), oklch(0.91 0.06 72))",
        }}
      >
        {/* Top wave divider — matches hero (background) above */}
        <svg aria-hidden="true" className="block w-full h-8 md:h-12 -mb-px text-background" viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,0 L1200,0 L1200,30 C1000,60 800,10 600,30 C400,50 200,5 0,35 Z" />
        </svg>
        {/* Floating bakery doodles — allowed to drift across section edges */}
        <div className="pointer-events-none absolute inset-0 z-20 select-none [clip-path:inset(-96px_0_-96px_0)] md:[clip-path:inset(-128px_0_-128px_0)]">
          <img src={doughBlob} alt="" aria-hidden="true" className="absolute -top-12 left-1 w-20 opacity-80 animate-drift-a md:-top-16 md:left-6 md:w-28" />
          <img src={wheatSprig} alt="" aria-hidden="true" className="absolute top-10 right-1 w-16 opacity-90 animate-drift-b md:right-6 md:w-24" />
          <img src={doughBlob} alt="" aria-hidden="true" className="absolute bottom-6 left-0 w-14 opacity-70 animate-drift-c md:-left-2 md:w-20" />
          <img src={wheatSprig} alt="" aria-hidden="true" className="absolute -bottom-14 right-1 w-20 opacity-80 animate-drift-a md:-bottom-20 md:right-6 md:w-28" />
          <img src={bubbleImg} alt="" aria-hidden="true" className="absolute top-1/3 left-8 w-10 opacity-70 animate-bubble-rise md:w-14" style={{ animationDelay: "0s" }} />
          <img src={bubbleImg} alt="" aria-hidden="true" className="absolute top-1/2 right-12 w-8 opacity-70 animate-bubble-rise md:w-12" style={{ animationDelay: "2s" }} />
          <img src={bubbleImg} alt="" aria-hidden="true" className="absolute bottom-20 left-1/3 w-6 opacity-70 animate-bubble-rise md:w-10" style={{ animationDelay: "4s" }} />
        </div>

        <div className="relative z-30 max-w-6xl mx-auto px-6 py-20 md:py-24 text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-tight text-primary">
            Tough on dough. <br className="sm:hidden" />
            <em className="font-hand text-accent text-5xl md:text-7xl lg:text-8xl">Gentle</em> on hands.
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
              <div key={s.t} className="bg-card/70 border border-border/60 rounded-2xl p-6 backdrop-blur-md shadow-[var(--shadow-card)]">
                <div className="font-serif text-2xl mb-2 text-primary">{s.t}</div>
                <p className="text-sm text-foreground/75 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Bottom wave divider — matches paper-texture (cream) below */}
        <svg aria-hidden="true" className="block w-full h-8 md:h-12 -mt-px text-cream" viewBox="0 0 1200 60" preserveAspectRatio="none">
          <path fill="currentColor" d="M0,60 L1200,60 L1200,30 C1000,0 800,50 600,30 C400,10 200,55 0,25 Z" />
        </svg>
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
                <div className="absolute top-[6%] left-[2%] md:left-[-4%] bg-card border border-border rounded-full px-4 py-1.5 text-xs font-medium shadow-[var(--shadow-card)] animate-tag-pop">
                  <span className="font-hand text-accent text-base mr-1">Kay</span>
                  <span className="text-foreground/70">· baker</span>
                </div>
                <div className="absolute top-[4%] right-[2%] md:right-[-4%] bg-card border border-border rounded-full px-4 py-1.5 text-xs font-medium shadow-[var(--shadow-card)] animate-tag-pop-right">
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
                Every bottle is mixed, labeled, and signed off by us, the same way we'd want it
                if it were headed to our own counters.
              </p>
              <div className="mt-6 font-hand text-accent text-2xl">love, Kay &amp; Kayla</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-cream/60 paper-texture">
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
          <div className="text-center mb-12">
            <div className="text-xs tracking-[0.22em] uppercase font-semibold text-kraft">Kind words</div>
            <h2 className="mt-3 text-4xl md:text-5xl font-serif text-primary">
              From other <span className="font-hand text-accent">bakers.</span>
            </h2>
            <div className="mt-4 inline-flex items-center gap-2 text-sm text-foreground/70">
              <span className="font-serif text-2xl text-primary">4.9</span>
              <span className="text-accent text-lg tracking-tight">★★★★★</span>
              <span className="text-foreground/50">·</span>
              <span>237 honest reviews</span>
            </div>
          </div>

          <div className="-mx-6 px-6 overflow-x-auto scroll-smooth snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex gap-5 pb-4 w-max">
              {[
                {
                  quote: "Pumped a little into a bowl crusted with two-day-old sourdough, walked away, came back, rinsed. That was it.",
                  name: "Maren P.",
                  tag: "home baker · Portland",
                  product: "1-pack",
                  source: "Shopify",
                },
                {
                  quote: "I run a tiny cottage bakery and my hands feel like hands again. Cleanup time on dough hooks went from forever to a quick warm rinse.",
                  name: "Jules R.",
                  tag: "cottage baker · Austin",
                  product: "2-pack",
                  source: "Trustpilot",
                },
                {
                  quote: "Skeptical at first, but the proofing tubs that used to need scraping just slid clean. The bottle even came with a little handwritten note, which was a nice touch.",
                  name: "Theo K.",
                  tag: "weekend sourdough person",
                  product: "2-pack",
                  source: "Shopify",
                },
                {
                  quote: "My banneton liners used to be a nightmare. A quick soak and the dough just lets go. No scraping, no soaking overnight.",
                  name: "Priya M.",
                  tag: "home baker · Brooklyn",
                  product: "1-pack",
                  source: "Trustpilot",
                },
                {
                  quote: "Bought it for my pizza dough station. Wiping the bench at the end of service is honestly faster than it's ever been.",
                  name: "Marco D.",
                  tag: "pizzaiolo · Chicago",
                  product: "2-pack",
                  source: "Shopify",
                },
                {
                  quote: "Smells like nothing, which I love. No perfume, no chemical bite, just clean bowls.",
                  name: "Hana S.",
                  tag: "weekend baker · Seattle",
                  product: "1-pack",
                  source: "Shopify",
                },
                {
                  quote: "I was suspicious of the enzyme thing but it really does just lift the dough. My KitchenAid bowl looks new again.",
                  name: "Ellis W.",
                  tag: "home baker · Denver",
                  product: "1-pack",
                  source: "Trustpilot",
                },
                {
                  quote: "Tiny bakery, two of us, four mixers. This cut our end-of-day cleanup in half. Worth every penny.",
                  name: "Sana B.",
                  tag: "cottage bakery · Oakland",
                  product: "2-pack",
                  source: "Shopify",
                },
              ].map((r) => (
                <div
                  key={r.name}
                  className="snap-start shrink-0 w-[78vw] sm:w-[360px] bg-card border border-border/60 rounded-2xl p-7 shadow-[var(--shadow-card)] flex flex-col"
                >
                  <div className="text-accent text-lg tracking-tight mb-3">★★★★★</div>
                  <p className="text-foreground/80 leading-relaxed flex-1">
                    &ldquo;{r.quote}&rdquo;
                  </p>
                  <div className="mt-6 pt-4 border-t border-border/50">
                    <div className="font-serif text-primary text-lg leading-tight">{r.name}</div>
                    <div className="text-xs text-foreground/60 mt-1">{r.tag}</div>
                    <div className="text-[11px] tracking-widest uppercase text-kraft mt-2">
                      via {r.source} · {r.product}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-foreground/50">
            Reviews sourced from Shopify &amp; Trustpilot.
          </p>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-cream border-y border-border/60 relative">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-10">
            {[
              { icon: Award, t: "Small batch\nmade" },
              { icon: ShieldCheck, t: "Safe &\nnontoxic" },
              { icon: Leaf, t: "Plant\nbased" },
              { icon: Heart, t: "Women\nowned" },
            ].map((b) => (
              <div key={b.t} className="flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-background flex items-center justify-center shadow-[var(--shadow-card)] border border-border/50">
                  <b.icon className="w-8 h-8 md:w-10 md:h-10 text-kraft" strokeWidth={1.5} />
                </div>
                <span className="text-xs md:text-sm font-serif tracking-[0.2em] uppercase text-kraft whitespace-pre-line leading-tight">
                  {b.t}
                </span>
              </div>
            ))}
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
