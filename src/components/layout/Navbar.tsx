"use client";

import { useEffect, useState } from "react";
import { content } from "@/data/content";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrolled = () => {
      setIsScrolled(window.scrollY > 24);
    };

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 w-full">
      <nav
        className="flex items-center justify-between w-full max-w-5xl px-6 py-3 md:px-8 md:py-4 glass-navbar rounded-full"
        data-scrolled={isScrolled}
        aria-label="Primary navigation"
      >
        <div className="font-display font-bold text-lg text-paper">
          Velixo.io
        </div>
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {content.nav.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="glass-link text-sm font-medium uppercase tracking-wider text-paper/80 hover:text-paper transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={content.footer.ctaHref}
            className="glass-cta inline-flex items-center justify-center rounded-full px-6 py-2 text-xs font-medium uppercase tracking-widest"
          >
            {content.footer.ctaLabel}
          </a>
        </div>
      </nav>
    </div>
  );
}
