"use client";

import { useEffect, useState } from "react";
import { content } from "@/data/content";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const updateScrolled = () => {
      setIsScrolled(window.scrollY > 24);
    };

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });

    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 w-full">
      <nav
        className="flex items-center justify-between w-full max-w-5xl px-5 py-3 md:px-8 md:py-4 glass-navbar rounded-full"
        data-scrolled={isScrolled}
        aria-label="Primary navigation"
      >
        <div className="font-display font-bold text-base md:text-lg text-paper">
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

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="md:hidden inline-flex items-center justify-center rounded-full p-2 text-paper/90 hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" x2="6" y1="6" y2="18" />
              <line x1="6" x2="18" y1="6" y2="18" />
            </svg>
          ) : (
            <svg className="size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          )}
        </button>
      </nav>

      <div
        className={`md:hidden fixed inset-0 top-16 bg-ink/95 backdrop-blur-lg transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        aria-hidden={!isOpen}
      >
        <div
          className={`mx-auto w-full max-w-5xl px-6 py-8 transition-all duration-300 ease-in-out ${
            isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <ul className="flex flex-col items-center gap-6">
            {content.nav.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium uppercase tracking-widest text-paper/90 hover:text-accent transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={content.footer.ctaHref}
                onClick={() => setIsOpen(false)}
                className="glass-cta inline-flex items-center justify-center rounded-full px-8 py-3.5 text-base font-medium uppercase tracking-wider"
              >
                {content.footer.ctaLabel}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
