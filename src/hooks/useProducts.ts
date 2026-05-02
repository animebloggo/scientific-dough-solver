import { useEffect, useState } from "react";
import { storefrontApiRequest, STOREFRONT_QUERY, PRODUCT_BY_HANDLE_QUERY, type ShopifyProduct } from "@/lib/shopify";

export function useProducts(first = 12) {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        setLoading(true);
        const data = await storefrontApiRequest(STOREFRONT_QUERY, { first, query: null });
        if (!active) return;
        setProducts(data?.data?.products?.edges ?? []);
      } catch (e) {
        if (active) setError(e instanceof Error ? e.message : "Failed to load");
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, [first]);

  return { products, loading, error };
}

export function useProduct(handle: string) {
  const [product, setProduct] = useState<ShopifyProduct["node"] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        setLoading(true);
        const data = await storefrontApiRequest(PRODUCT_BY_HANDLE_QUERY, { handle });
        if (!active) return;
        setProduct(data?.data?.product ?? null);
      } catch (e) {
        if (active) setError(e instanceof Error ? e.message : "Failed to load");
      } finally {
        if (active) setLoading(false);
      }
    })();
    return () => {
      active = false;
    };
  }, [handle]);

  return { product, loading, error };
}
