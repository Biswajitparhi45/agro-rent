import { motion } from "motion/react";

const leaves = [
  { left: "6%", delay: 0, dur: 18, size: 18 },
  { left: "22%", delay: 4, dur: 24, size: 12 },
  { left: "41%", delay: 9, dur: 20, size: 22 },
  { left: "63%", delay: 2, dur: 26, size: 14 },
  { left: "78%", delay: 12, dur: 22, size: 18 },
  { left: "91%", delay: 6, dur: 28, size: 11 },
];

export function FloatingLeaves() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {leaves.map((leaf, i) => (
        <span
          key={i}
          className="absolute top-0 text-primary/25"
          style={{
            left: leaf.left,
            animation: `leaf-fall ${leaf.dur}s linear ${leaf.delay}s infinite`,
          }}
        >
          <svg width={leaf.size} height={leaf.size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 3C10 3 3 9 3 17c0 1.5.3 2.9.9 4.1C6 15 11 11 17 10c-4.6 2-8.3 5.6-10.2 10.6C15 21 21 14 21 3Z" />
          </svg>
        </span>
      ))}
    </div>
  );
}

export function DriftingClouds() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-64 overflow-hidden">
      {[
        { top: "12%", dur: 90, delay: 0, scale: 1 },
        { top: "34%", dur: 130, delay: 20, scale: 0.7 },
        { top: "58%", dur: 110, delay: 45, scale: 1.3 },
      ].map((c, i) => (
        <span
          key={i}
          className="absolute text-card/80"
          style={{
            top: c.top,
            transform: `scale(${c.scale})`,
            animation: `drift-cloud ${c.dur}s linear ${c.delay}s infinite`,
          }}
        >
          <svg width="140" height="52" viewBox="0 0 140 52" fill="currentColor">
            <ellipse cx="40" cy="34" rx="40" ry="18" />
            <ellipse cx="72" cy="24" rx="30" ry="22" />
            <ellipse cx="104" cy="34" rx="34" ry="16" />
          </svg>
        </span>
      ))}
    </div>
  );
}

export function FlyingBirds() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {[0, 1, 2].map((i) => (
        <motion.svg
          key={i}
          width="26"
          height="12"
          viewBox="0 0 26 12"
          className="absolute text-foreground/25"
          style={{ top: `${18 + i * 7}%` }}
          initial={{ x: "-10vw" }}
          animate={{ x: "110vw", y: [0, -14, 6, 0] }}
          transition={{
            duration: 34 + i * 6,
            delay: i * 5,
            repeat: Infinity,
            ease: "linear",
            y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
        >
          <path
            d="M1 7c4-5 7-5 11 0 4-5 7-5 11 0"
            stroke="currentColor"
            strokeWidth="1.6"
            fill="none"
            strokeLinecap="round"
          />
        </motion.svg>
      ))}
    </div>
  );
}

export function AmbientGlow() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden -z-10">
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.5, 0.35],
          x: [0, 20, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[350px] w-[500px] rounded-full bg-emerald-500/20 blur-[120px]"
      />
    </div>
  );
}
