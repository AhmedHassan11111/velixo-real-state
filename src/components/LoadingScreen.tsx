"use client";

import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const duration = 1800;

    const tick = (now: number) => {
      const elapsed = now - start;
      const p = Math.min(elapsed / duration, 1);
      setProgress(p);
      if (p < 1) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => setVisible(false), 200);
      }
    };
    const raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink text-paper"
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-6 px-6">
        <svg
          className="w-16 h-16 md:w-20 md:h-20 text-accent"
          viewBox="0 0 64 64"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M8 56h48" />
          <path d="M12 56V24l8-8v12h8V16l8-8v20h8V12l8-8v40" />
          <path d="M28 44h8" />
          <path d="M20 44h4" />
        </svg>
        <span className="font-display text-xl md:text-2xl font-semibold tracking-tight">
          VELIXO Estates
        </span>
        <div className="w-48 md:w-56 h-[2px] bg-paper/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-accent rounded-full"
            style={{ width: `${progress * 100}%`, transition: "width 0.1s linear" }}
          />
        </div>
      </div>
    </div>
  );
}
