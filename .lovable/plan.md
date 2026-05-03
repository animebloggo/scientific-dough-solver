I found the likely cause of the 404: the cart is being created correctly in Shopify, but the checkout button is currently a normal link using `target="_top"`. In the Lovable preview/custom-domain context, that can navigate inside the app shell instead of handing off cleanly to Shopify checkout. I also found that the cart sync query only checks quantity and does not refresh the stored `checkoutUrl`, so an older persisted checkout URL can linger.

Plan:

1. Update the checkout button behavior
   - Replace the plain `<a href={checkoutUrl} target="_top">` checkout link with a real click handler.
   - On click, read the current Shopify checkout URL from the cart store and open it with `window.open(checkoutUrl, '_blank', 'noopener,noreferrer')`.
   - Close the cart drawer after the redirect starts.
   - Keep the button disabled while cart operations are loading/syncing.

2. Refresh checkout URLs from Shopify before use
   - Expand the cart query in `src/stores/cartStore.ts` to request `checkoutUrl` as well as `totalQuantity`.
   - In `syncCart()`, update the stored checkout URL from Shopify whenever the cart is still valid.
   - Keep the `channel=online_store` parameter on the checkout URL.

3. Make checkout resilient for persisted/older carts
   - Add a store action such as `ensureCheckoutUrl()` or `checkout()` that syncs the cart right before checkout.
   - If the cart has expired or Shopify says it no longer exists, clear the local cart and show a friendly message instead of sending the customer to a broken page.
   - If checkout URL is temporarily missing, show a loading state while it is being regenerated/refreshed.

4. Keep the products in the cart
   - Leave the existing Storefront API cart mutations in place: `cartCreate`, `cartLinesAdd`, `cartLinesUpdate`, and `cartLinesRemove`.
   - Do not construct manual Shopify cart/checkout URLs.
   - Continue using Shopify’s generated `checkoutUrl`, which includes the exact cart lines already added.

5. Small cleanup aligned with your brand
   - Replace lab/clinical cart copy/icons like “Specimen Tray” with warmer bakery-style wording, since that is already part of your project memory and avoids confusing customers.

After approval, I’ll implement this in `src/components/CartDrawer.tsx` and `src/stores/cartStore.ts`, then verify the checkout URL points to `5558pj-ry.myshopify.com` and includes the cart products.