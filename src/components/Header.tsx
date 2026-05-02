import { Link } from "@tanstack/react-router";
import { CartDrawer } from "./CartDrawer";
import { Wheat } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
            <Wheat className="w-4 h-4" />
          </div>
          <div className="leading-none">
            <div className="font-serif font-semibold text-lg tracking-tight text-primary">Dissolve My Dough</div>
            <div className="font-hand text-accent text-sm mt-0.5">made by bakers</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link to="/" className="hover:text-accent transition-colors" activeProps={{ className: "text-accent" }} activeOptions={{ exact: true }}>Home</Link>
          <Link to="/shop" className="hover:text-accent transition-colors" activeProps={{ className: "text-accent" }}>Shop</Link>
          <Link to="/science" className="hover:text-accent transition-colors" activeProps={{ className: "text-accent" }}>How It Works</Link>
          <Link to="/about" className="hover:text-accent transition-colors" activeProps={{ className: "text-accent" }}>About</Link>
        </nav>
        <CartDrawer />
      </div>
    </header>
  );
}
