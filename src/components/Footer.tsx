import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-32">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="font-serif text-2xl mb-3">Dissolve My Dough</div>
          <p className="text-primary-foreground/70 max-w-md text-sm leading-relaxed">
            A gentle enzyme blend that quietly takes dough off your bowls, boards, and hands.
            Simple enough for home kitchens. Smart enough for people who care how things work.
          </p>
          <div className="label-mono mt-6 text-primary-foreground/50">
            Made in small batches · Cruelty free · Plant based
          </div>
        </div>
        <div>
          <div className="label-mono mb-4 text-primary-foreground/50">Shop</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/shop" className="hover:text-accent">All Products</Link></li>
            <li><Link to="/science" className="hover:text-accent">The Science</Link></li>
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
          </ul>
        </div>
        <div>
          <div className="label-mono mb-4 text-primary-foreground/50">Contact</div>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li>support@dissolvemydough.com</li>
            <li>Mon–Fri · 9am–5pm PT</li>
          </ul>
        </div>
      </div>
        <div className="border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between text-xs text-primary-foreground/50 font-mono gap-2">
          <span>© {new Date().getFullYear()} Dissolve My Dough · Made in Oakland</span>
          <span>Batch 042 · Mixed by hand</span>
        </div>
      </div>
    </footer>
  );
}
