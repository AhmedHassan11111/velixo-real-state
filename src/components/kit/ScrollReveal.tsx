"use client";

import { motion, useReducedMotion } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  distance = 30,
  duration = 0.8,
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  // Disable translation transforms if prefers-reduced-motion is true
  const isNone = direction === "none" || shouldReduceMotion;

  const variants = {
    hidden: {
      opacity: 0,
      y: isNone ? 0 : direction === "up" ? distance : direction === "down" ? -distance : 0,
      x: isNone ? 0 : direction === "left" ? distance : direction === "right" ? -distance : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: duration,
        ease: [0.16, 1, 0.3, 1] as const, // Luxury cubic-bezier easing
        delay: delay,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
