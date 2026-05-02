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
      <div className="label-mono">§ Catalogue</div>
      <h1 className="mt-3 text-5xl md:text-6xl font-serif">Shop</h1>
      <p className="mt-4 text-muted-foreground max-w-xl">
        All formulations are produced in small batches at our certified facility
        and shipped with a lot-specific certificate of analysis.
      </p>
      <div className="mt-12">
        <ProductGrid limit={24} />
      </div>
    </div>
  );
}
