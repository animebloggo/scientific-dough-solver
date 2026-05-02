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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((p, idx) => {
        const node = p.node;
        const img = node.images.edges[0]?.node;
        const price = node.priceRange.minVariantPrice;
        return (
          <Link
            key={node.id}
            to="/product/$handle"
            params={{ handle: node.handle }}
            className="group block bg-card border border-border rounded-lg overflow-hidden hover:shadow-[var(--shadow-elevated)] transition-all duration-500 hover:-translate-y-1"
          >
            <div className="relative aspect-square bg-secondary overflow-hidden">
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
              <div className="absolute top-3 left-3 label-mono bg-background/80 backdrop-blur px-2 py-1 rounded">
                Spec. {String(idx + 1).padStart(3, "0")}
              </div>
            </div>
            <div className="p-5">
              <h3 className="font-serif text-xl tracking-tight">{node.title}</h3>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{node.description}</p>
              <div className="flex items-center justify-between mt-4">
                <div className="font-mono text-lg">
                  {price.currencyCode} {parseFloat(price.amount).toFixed(2)}
                </div>
                <Button variant="ghost" size="sm" className="text-accent hover:text-accent">
                  View →
                </Button>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
