"use client";

import { motion } from "framer-motion";

export function FilmGrain({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 z-[3] opacity-[0.055] mix-blend-overlay ${className}`}
      aria-hidden
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundSize: "180px 180px",
      }}
    />
  );
}

export function CinematicVignette({ className = "" }: { className?: string }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 z-[2] ${className}`}
      aria-hidden
      style={{
        background:
          "radial-gradient(ellipse 75% 65% at 50% 45%, transparent 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.75) 100%)",
      }}
    />
  );
}

export function GoldenBloom({
  position = "35% 42%",
  className = "",
}: {
  position?: string;
  className?: string;
}) {
  return (
    <>
      <div
        className={`pointer-events-none absolute inset-0 z-[1] ${className}`}
        aria-hidden
        style={{
          background: `radial-gradient(ellipse 55% 45% at ${position}, rgba(201,164,92,0.32) 0%, rgba(184,92,56,0.08) 35%, transparent 65%)`,
        }}
      />
      <motion.div
        className="pointer-events-none absolute z-[1] w-[min(90vw,700px)] h-[min(70vh,600px)] rounded-full blur-[100px]"
        style={{ left: "20%", top: "25%", background: "rgba(201, 164, 92, 0.12)" }}
        animate={{ opacity: [0.5, 0.85, 0.5], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
    </>
  );
}

export function AtmosphericFog({ className = "" }: { className?: string }) {
  return (
    <>
      <motion.div
        className={`pointer-events-none absolute bottom-0 left-0 right-0 h-[45%] z-[2] ${className}`}
        style={{
          background:
            "linear-gradient(to top, rgba(20,12,8,0.65) 0%, rgba(111,125,69,0.06) 40%, transparent 100%)",
        }}
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
      <motion.div
        className="pointer-events-none absolute bottom-[10%] left-[-10%] w-[60%] h-[30%] z-[2] rounded-full blur-[80px]"
        style={{ background: "rgba(248, 241, 231, 0.04)" }}
        animate={{ x: [0, 40, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden
      />
    </>
  );
}

const PARTICLES = [
  { x: "12%", y: "28%", size: 3, delay: 0 },
  { x: "78%", y: "35%", size: 2, delay: 1.2 },
  { x: "45%", y: "18%", size: 2, delay: 0.6 },
  { x: "88%", y: "62%", size: 3, delay: 2 },
  { x: "22%", y: "70%", size: 2, delay: 1.8 },
  { x: "62%", y: "55%", size: 2, delay: 0.9 },
];

export function FloatingParticles({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 z-[3] overflow-hidden ${className}`} aria-hidden>
      {PARTICLES.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-champagne/40"
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            boxShadow: "0 0 12px rgba(201,164,92,0.5)",
          }}
          animate={{ y: [0, -18, 0], opacity: [0.2, 0.7, 0.2] }}
          transition={{
            duration: 5 + i * 0.5,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function DriftingLight({ className = "" }: { className?: string }) {
  return (
    <motion.div
      className={`pointer-events-none absolute inset-0 z-[1] ${className}`}
      style={{
        background:
          "linear-gradient(125deg, rgba(184,92,56,0.08) 0%, transparent 40%, rgba(201,164,92,0.06) 60%, transparent 100%)",
      }}
      animate={{ opacity: [0.4, 0.75, 0.4] }}
      transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      aria-hidden
    />
  );
}

export function HeroAtmosphere() {
  return (
    <>
      <DriftingLight />
      <GoldenBloom position="38% 40%" />
      <AtmosphericFog />
      <CinematicVignette />
      <FilmGrain />
      <FloatingParticles />
    </>
  );
}
