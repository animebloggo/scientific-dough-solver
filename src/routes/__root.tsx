import { Outlet, createRootRoute, HeadContent, Scripts, Link } from "@tanstack/react-router";
import { Toaster } from "sonner";
import appCss from "../styles.css?url";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useCartSync } from "@/hooks/useCartSync";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="font-hand text-accent text-2xl mb-2">oh no —</div>
        <h1 className="text-7xl font-serif text-primary">404</h1>
        <p className="mt-3 text-foreground/70">This page has dissolved.</p>
        <Link to="/" className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90">
          Return home
        </Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Dissolve My Dough — Enzymatic Cleaner Engineered for Sticky Dough" },
      { name: "description", content: "Lab-grade enzymatic cleaner that breaks down dough, starch and gluten at the molecular level. Patent-pending, non-toxic, biodegradable." },
      { property: "og:title", content: "Dissolve My Dough — Enzymatic Cleaner Engineered for Sticky Dough" },
      { property: "og:description", content: "Lab-grade enzymatic cleaner that breaks down dough, starch and gluten at the molecular level. Patent-pending, non-toxic, biodegradable." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Dissolve My Dough — Enzymatic Cleaner Engineered for Sticky Dough" },
      { name: "twitter:description", content: "Lab-grade enzymatic cleaner that breaks down dough, starch and gluten at the molecular level. Patent-pending, non-toxic, biodegradable." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ab56a930-eb4b-4357-8cc5-20d86ff49e81/id-preview-fc048698--bb516b02-85ca-456b-b295-1816fe32d16a.lovable.app-1777749888887.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/ab56a930-eb4b-4357-8cc5-20d86ff49e81/id-preview-fc048698--bb516b02-85ca-456b-b295-1816fe32d16a.lovable.app-1777749888887.png" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  useCartSync();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1"><Outlet /></main>
      <Footer />
      <Toaster position="top-center" richColors />
    </div>
  );
}
