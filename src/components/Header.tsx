import { Link } from "@tanstack/react-router";
import { CartDrawer } from "./CartDrawer";
import { FlaskConical } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-background/85 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-md bg-primary text-primary-foreground flex items-center justify-center">
            <FlaskConical className="w-4 h-4" />
          </div>
          <div className="leading-none">
            <div className="font-serif font-semibold text-lg tracking-tight">Dissolve My Dough</div>
            <div className="label-mono text-[0.6rem] mt-0.5">Enzymatic Cleaning Lab</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link to="/" className="hover:text-accent transition-colors" activeProps={{ className: "text-accent" }} activeOptions={{ exact: true }}>Home</Link>
          <Link to="/shop" className="hover:text-accent transition-colors" activeProps={{ className: "text-accent" }}>Shop</Link>
          <Link to="/science" className="hover:text-accent transition-colors" activeProps={{ className: "text-accent" }}>The Science</Link>
          <Link to="/about" className="hover:text-accent transition-colors" activeProps={{ className: "text-accent" }}>About</Link>
        </nav>
        <CartDrawer />
      </div>
    </header>
  );
}
