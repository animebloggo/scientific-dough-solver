import { Link } from "@tanstack/react-router";
import { Loader2 } from "lucide-react";
import { useProducts } from "@/hooks/useProducts";
import { Button } from "@/components/ui/button";

interface Props {
  limit?: number;
}

export function ProductGrid({ limit = 12 }: Props) {
  const { products, loading } = useProducts(limit);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-24 border border-dashed border-border rounded-lg">
        <p className="text-muted-foreground">No products found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((p) => {
        const node = p.node;
        const img = node.images.edges[0]?.node;
        const price = node.priceRange.minVariantPrice;
        return (
          <Link
            key={node.id}
            to="/product/$handle"
            params={{ handle: node.handle }}
            className="group block bg-card border border-border rounded-2xl overflow-hidden hover:shadow-[var(--shadow-elevated)] transition-all duration-500 hover:-translate-y-1"
          >
            <div className="relative aspect-square bg-cream overflow-hidden">
              {img ? (
                <img
                  src={img.url}
                  alt={img.altText || node.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full grid-bg" />
              )}
            </div>
            <div className="p-6 text-center">
              <h3 className="font-serif text-xl tracking-tight text-primary">{node.title}</h3>
              <div className="mt-2 text-foreground/70">
                {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
              </div>
              <Button
                size="sm"
                className="mt-4 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-elevated)] transition-all group-hover:-translate-y-0.5"
              >
                Shop now →
              </Button>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
