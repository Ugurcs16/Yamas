"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
  className?: string;
  external?: boolean;
  ariaLabel?: string;
}

const variants: Record<Variant, string> = {
  primary:
    "btn-gold-gradient text-midnight-dark font-medium tracking-[0.18em] uppercase border border-champagne-light/30 hover:brightness-110",
  secondary:
    "glass-outline text-ivory-warm border-ivory/25 hover:border-champagne/40 hover:bg-ivory/[0.06] hover:shadow-glow-sm",
  outline:
    "border border-champagne/50 text-champagne bg-transparent hover:bg-champagne/8 hover:border-champagne hover:shadow-glow-sm",
  ghost: "text-ivory-muted hover:text-champagne",
};

const sizes: Record<Size, string> = {
  sm: "px-5 py-2.5 text-[11px]",
  md: "px-7 py-3.5 text-xs",
  lg: "px-9 py-4 text-xs",
};

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className,
  external,
  ariaLabel,
}: ButtonProps) {
  const classes = cn(
    "relative inline-flex items-center justify-center gap-2.5 overflow-hidden transition-all duration-500 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-champagne",
    variants[variant],
    sizes[size],
    className
  );

  const content = (
    <motion.span
      className="relative z-10 inline-flex items-center justify-center gap-2.5"
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.span>
  );

  const shimmer =
    variant === "primary" ? (
      <span
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-[shimmer_1.5s_ease-in-out]"
        aria-hidden
      />
    ) : null;

  const inner = (
    <>
      {shimmer}
      {content}
    </>
  );

  if (href) {
    if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("#")) {
      return (
        <a href={href} className={cn(classes, "group")} aria-label={ariaLabel} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
          {inner}
        </a>
      );
    }
    return (
      <Link href={href} className={cn(classes, "group")} aria-label={ariaLabel}>
        {inner}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={cn(classes, "group")} aria-label={ariaLabel}>
      {inner}
    </button>
  );
}
