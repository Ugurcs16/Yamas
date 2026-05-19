"use client";

import { usePrefersReducedMotion } from "@/lib/use-media";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export function FadeIn({
  children,
  className,
  delay = 0,
  direction = "up",
}: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const reducedMotion = usePrefersReducedMotion();

  const offsets = {
    up: { y: reducedMotion ? 0 : 24 },
    down: { y: reducedMotion ? 0 : -24 },
    left: { x: reducedMotion ? 0 : 24 },
    right: { x: reducedMotion ? 0 : -24 },
    none: {},
  };

  if (reducedMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={{ opacity: 0, ...offsets[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, ...offsets[direction] }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
