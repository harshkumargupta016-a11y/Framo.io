/**
 * ATMOSPHERIC GLOW COMPONENT
 * What this file does: Renders Raycast-style diagonal ambient light beams in dark mode and warm studio aura in light mode.
 * What to edit: Adjust beam angles, blur amounts, or radial gradient opacities here.
 */

import * as React from "react";
import { cn } from "@/lib/utils";

interface AtmosphericGlowProps {
  className?: string;
}

export function AtmosphericGlow({ className }: AtmosphericGlowProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden flex items-center justify-center select-none",
        className
      )}
    >
      {/* Central Ambient Radial Glow */}
      <div className="absolute top-[-10%] w-[800px] h-[500px] rounded-full bg-accent/10 dark:bg-accent/15 blur-[140px] opacity-70" />

      {/* Raycast-style Angled Crimson Light Streaks */}
      <div className="absolute top-[-15%] w-[600px] sm:w-[900px] h-[700px] opacity-25 dark:opacity-45 dark:mix-blend-screen pointer-events-none">
        <div className="w-full h-full rotate-[-25deg] bg-[radial-gradient(ellipse_at_center,_var(--accent)_0%,_rgba(255,74,74,0.3)_25%,_rgba(99,102,241,0.15)_50%,_transparent_75%)] blur-[90px]" />
      </div>

      {/* Secondary Cool Tone Atmospheric Halo */}
      <div className="absolute top-[5%] right-[10%] w-[450px] h-[350px] rounded-full bg-accent-indigo/5 dark:bg-accent-indigo/10 blur-[110px] opacity-50" />
    </div>
  );
}
