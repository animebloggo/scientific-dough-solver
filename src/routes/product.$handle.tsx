import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, Minus, Plus, ShieldCheck, Truck, FlaskConical } from "lucide-react";
import { useProduct } from "@/hooks/useProducts";
import { useCartStore } from "@/stores/cartStore";
import { toast } from "sonner";

export const Route = createFileRoute("/product/$handle")({
  head: ({ params }) => ({
    meta: [
      { title: `${params.handle.replace(/-/g, " ")} — Dissolve My Dough` },
      { name: "description", content: "Lab-grade enzymatic dough cleaner. Patent-pending formulation." },
    ],
  }),
  component: ProductPage,
  errorComponent: ({ error, reset }) => {
    const router = useRouter();
    return (
      <div className="max-w-md mx-auto px-6 py-24 text-center">
        <p className="text-destructive mb-4">{error.message}</p>
        <Button onClick={() => { router.invalidate(); reset(); }}>Retry</Button>
      </div>
    );
  },
  notFoundComponent: () => (
    <div className="max-w-md mx-auto px-6 py-24 text-center">
      <h1 className="text-3xl font-serif">Product not found</h1>
      <Link to="/shop"><Button className="mt-4">Back to shop</Button></Link>
    </div>
  ),
});

function ProductPage() {
  const { handle } = Route.useParams();
  const { product, loading } = useProduct(handle);
  const addItem = useCartStore((s) => s.addItem);
  const isLoading = useCartStore((s) => s.isLoading);
  const [variantIdx, setVariantIdx] = useState(0);
  const [qty, setQty] = useState(1);
  const [imgIdx, setImgIdx] = useState(0);

  const variants = product?.variants.edges ?? [];
  const selected = variants[variantIdx]?.node;
  const images = product?.images.edges ?? [];

  const productNode = useMemo(
    () => (product ? { node: product } : null),
    [product],
  );

  if (loading) {
    return (
      <div className="flex items-center justify-center py-32">
        <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-md mx-auto px-6 py-24 text-center">
        <h1 className="text-3xl font-serif">Product not found</h1>
        <Link to="/shop"><Button className="mt-4">Back to shop</Button></Link>
      </div>
    );
  }

  const handleAdd = async () => {
    if (!selected || !productNode) return;
    await addItem({
      product: productNode as never,
      variantId: selected.id,
      variantTitle: selected.title,
      price: selected.price,
      quantity: qty,
      selectedOptions: selected.selectedOptions || [],
    });
    toast.success("Added to cart", { description: `${product.title} · ${selected.title}` });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
      <Link to="/shop" className="label-mono hover:text-accent">← Back to catalogue</Link>
      <div className="mt-6 grid md:grid-cols-2 gap-12">
        {/* Images */}
        <div>
          <div className="aspect-square bg-cream border border-border rounded-lg overflow-hidden">
            {images[imgIdx] && (
              <img src={images[imgIdx].node.url} alt={product.title} className="w-full h-full object-cover" />
            )}
          </div>
          {images.length > 1 && (
            <div className="mt-4 grid grid-cols-5 gap-2">
              {images.map((img, i) => (
                <button
                  key={img.node.url}
                  onClick={() => setImgIdx(i)}
                  className={`aspect-square rounded-md overflow-hidden border-2 transition ${i === imgIdx ? "border-accent" : "border-transparent opacity-60 hover:opacity-100"}`}
                >
                  <img src={img.node.url} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div>
          <div className="label-mono">Formulation · Patent Pending</div>
          <h1 className="mt-2 text-4xl md:text-5xl font-serif">{product.title}</h1>
          <div className="mt-4 text-2xl font-mono">
            {selected ? `${selected.price.currencyCode} ${parseFloat(selected.price.amount).toFixed(2)}` : "—"}
          </div>
          <p className="mt-6 text-muted-foreground leading-relaxed whitespace-pre-line">{product.description}</p>

          {variants.length > 1 && (
            <div className="mt-8">
              <div className="label-mono mb-3">Select size</div>
              <div className="flex flex-wrap gap-2">
                {variants.map((v, i) => (
                  <button
                    key={v.node.id}
                    onClick={() => setVariantIdx(i)}
                    className={`px-4 py-2 rounded-md border text-sm transition ${i === variantIdx ? "border-primary bg-primary text-primary-foreground" : "border-border hover:border-primary/50"}`}
                  >
                    {v.node.title}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mt-8 flex items-center gap-4">
            <div className="flex items-center border border-border rounded-md">
              <Button variant="ghost" size="icon" onClick={() => setQty(Math.max(1, qty - 1))}><Minus className="w-4 h-4" /></Button>
              <span className="w-12 text-center font-mono">{qty}</span>
              <Button variant="ghost" size="icon" onClick={() => setQty(qty + 1)}><Plus className="w-4 h-4" /></Button>
            </div>
            <Button
              onClick={handleAdd}
              disabled={!selected?.availableForSale || isLoading}
              size="lg"
              className="flex-1 bg-primary hover:bg-primary/90 h-12"
            >
              {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : selected?.availableForSale ? "Add to Cart" : "Sold Out"}
            </Button>
          </div>

          <div className="mt-10 border-t border-border pt-6 grid grid-cols-3 gap-4">
            {[
              { i: ShieldCheck, t: "Non-toxic" },
              { i: Truck, t: "Free US shipping $35+" },
              { i: FlaskConical, t: "Lab certified" },
            ].map((b) => (
              <div key={b.t} className="text-center">
                <b.i className="w-5 h-5 mx-auto text-accent" />
                <div className="text-xs mt-2 text-muted-foreground">{b.t}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
