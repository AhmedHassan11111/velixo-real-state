import { content } from "@/data/content";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 w-full">
      <nav className="flex items-center justify-between w-full max-w-5xl px-8 py-4 glass-navbar rounded-full">
        <div className="font-display font-bold text-lg text-paper">
          Velixo.io
        </div>
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {content.nav.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-sm font-medium uppercase tracking-wider text-paper/80 hover:text-paper transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <Button variant="liquid-glass" className="text-xs uppercase tracking-widest px-6 py-2 rounded-full">
            {content.footer.ctaLabel}
          </Button>
        </div>
      </nav>
    </div>
  );
}
