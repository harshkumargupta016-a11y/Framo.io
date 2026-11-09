"use client";

/**
 * SPECIES CARD VISUALS
 * What this file does: High-precision interactive visual illustrations for the 3 Linear-inspired pillars.
 * What to edit: Adjust isometric tilt angles, glowing gradient stops, or node coordinates here.
 */

import { motion } from "framer-motion";

export function PurposeBuiltVisual() {
  return (
    <div className="relative w-full h-44 flex items-center justify-center overflow-hidden rounded-xl bg-surface/50 border border-border/50 group-hover:border-accent/40 transition-colors">
      <div className="relative w-48 h-36 flex items-center justify-center" style={{ perspective: "600px" }}>
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ rotateX: 52, rotateZ: -28, y: i * 22, z: i * 15 }}
            whileHover={{ y: i * 32, z: i * 25, transition: { duration: 0.3 } }}
            className="absolute w-36 h-22 rounded-lg border border-accent/40 bg-gradient-to-tr from-card via-surface to-accent/10 shadow-lg flex items-center justify-between px-3"
          >
            <div className="w-2 h-2 rounded-full bg-accent/60" />
            <div className="h-1 w-16 rounded bg-border" />
            <div className="h-1 w-6 rounded bg-accent/40" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export function PoweredByAgentsVisual() {
  return (
    <div className="relative w-full h-44 flex items-center justify-center overflow-hidden rounded-xl bg-surface/50 border border-border/50 group-hover:border-accent-indigo/40 transition-colors">
      <div className="relative w-full px-6 flex items-center justify-between">
        <div className="flex flex-col items-center gap-1.5 z-10">
          <div className="w-8 h-8 rounded-lg bg-surface border border-border flex items-center justify-center text-[10px] font-mono text-muted-foreground shadow-sm">USER</div>
          <span className="text-[9px] font-mono text-muted-foreground">Prompt</span>
        </div>

        <div className="flex-1 h-0.5 mx-2 bg-gradient-to-r from-border via-accent-indigo/60 to-border relative overflow-hidden">
          <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }} className="w-12 h-full bg-accent-indigo shadow-[0_0_8px_#6366f1]" />
        </div>

        <div className="flex flex-col items-center gap-1.5 z-10">
          <div className="w-10 h-10 rounded-xl bg-accent-indigo/15 border border-accent-indigo/50 flex items-center justify-center text-xs font-mono font-bold text-accent-indigo shadow-[0_0_15px_rgba(99,102,241,0.3)]">AI 2.4</div>
          <span className="text-[9px] font-mono text-accent-indigo font-medium">Agent Core</span>
        </div>

        <div className="flex-1 h-0.5 mx-2 bg-gradient-to-r from-border via-accent/60 to-border relative overflow-hidden">
          <motion.div animate={{ x: ["-100%", "200%"] }} transition={{ duration: 2.2, repeat: Infinity, ease: "linear", delay: 0.8 }} className="w-12 h-full bg-accent shadow-[0_0_8px_#e11d48]" />
        </div>

        <div className="flex flex-col items-center gap-1.5 z-10">
          <div className="w-8 h-8 rounded-lg bg-surface border border-border flex items-center justify-center text-[10px] font-mono text-muted-foreground shadow-sm">DOM</div>
          <span className="text-[9px] font-mono text-muted-foreground">Code</span>
        </div>
      </div>
    </div>
  );
}

export function DesignedForSpeedVisual() {
  return (
    <div className="relative w-full h-44 flex items-center justify-center overflow-hidden rounded-xl bg-surface/50 border border-border/50 group-hover:border-emerald-500/40 transition-colors">
      <div className="relative w-full px-6 flex flex-col items-center gap-3">
        <div className="flex items-baseline gap-2">
          <span className="font-mono text-3xl sm:text-4xl font-bold tracking-tight text-foreground">0.4</span>
          <span className="font-mono text-xs text-emerald-500 font-semibold uppercase tracking-wider">ms latency</span>
        </div>
        <div className="w-full bg-surface border border-border rounded-full h-2 overflow-hidden relative">
          <motion.div
            initial={{ width: "20%" }}
            whileInView={{ width: "96%" }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-emerald-500/40 via-emerald-500 to-accent shadow-[0_0_12px_rgba(16,185,129,0.5)] rounded-full"
          />
        </div>
        <div className="flex items-center justify-between w-full text-[10px] font-mono text-muted-foreground">
          <span>Spring Physics</span>
          <span className="text-emerald-500 font-medium">120 FPS Locked</span>
        </div>
      </div>
    </div>
  );
}
