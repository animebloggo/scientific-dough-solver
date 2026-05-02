import { createFileRoute } from "@tanstack/react-router";
import { ProductGrid } from "@/components/ProductGrid";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — Dissolve My Dough" },
      { name: "description", content: "Browse all enzymatic dough cleaner formulations. Lab-tested, biodegradable, patent-pending." },
      { property: "og:title", content: "Shop — Dissolve My Dough" },
      { property: "og:description", content: "Lab-grade enzyme cleaners for kitchens." },
    ],
  }),
  component: Shop,
});

function Shop() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
      <div className="text-center mb-12">
        <div className="font-hand text-accent text-2xl">the shelf</div>
        <h1 className="mt-2 text-5xl md:text-6xl font-serif text-primary">Pick a bottle.</h1>
        <p className="mt-4 text-foreground/70 max-w-xl mx-auto">
          Mixed in small batches, labeled by hand, and shipped with a note telling you
          when it was made and what's inside. Nothing fancy — just done carefully.
        </p>
      </div>
      <ProductGrid limit={24} />
    </div>
  );
}
