import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="font-serif text-2xl mb-2">Dissolve My Dough</div>
          <div className="font-hand text-accent text-xl mb-3">made with care in Oakland</div>
          <p className="text-primary-foreground/70 max-w-md text-sm leading-relaxed">
            A gentle enzyme blend that quietly takes dough off your bowls, boards, and hands.
            Simple enough for home kitchens. Smart enough for people who care how things work.
          </p>
          <div className="mt-6 text-xs tracking-[0.2em] uppercase font-semibold text-primary-foreground/50">
            Small batches · Cruelty free · Plant based
          </div>
        </div>
        <div>
          <div className="text-xs tracking-[0.2em] uppercase font-semibold mb-4 text-primary-foreground/50">Shop</div>
          <ul className="space-y-2 text-sm">
            <li><Link to="/shop" className="hover:text-accent">All Products</Link></li>
            <li><Link to="/science" className="hover:text-accent">How It Works</Link></li>
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs tracking-[0.2em] uppercase font-semibold mb-4 text-primary-foreground/50">Say hello</div>
          <ul className="space-y-2 text-sm text-primary-foreground/80">
            <li>support@dissolvemydough.com</li>
            <li>Mon–Fri · 9am–5pm PT</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between text-xs text-primary-foreground/50 gap-2">
          <span>© {new Date().getFullYear()} Dissolve My Dough · Made in Oakland</span>
          <span className="font-hand text-base text-accent">batch 042 · mixed by hand</span>
        </div>
      </div>
    </footer>
  );
}
