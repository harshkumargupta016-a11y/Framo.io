"use client";

/**
 * 3D SCROLL POPUP COMPONENT
 * What this file does: Wraps content with 3D perspective popup entrance triggered on viewport scroll like noddal.xyz.
 * What to edit: Adjust rotateX angles, spring damping, perspective depth, or blur intensity here.
 */

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Scroll3DPopup({
  children,
  className,
  delay = 0,
  hoverLift = true,
  perspective = 1200,
}) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div style={{ perspective: `${perspective}px` }} className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 36, rotateX: 16, scale: 0.94, filter: "blur(4px)" }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 24,
          mass: 0.85,
          delay,
        }}
        whileHover={
          hoverLift
            ? {
                y: -6,
                rotateX: 2,
                scale: 1.015,
                transition: { type: "spring", stiffness: 400, damping: 25 },
              }
            : undefined
        }
        style={{ transformStyle: "preserve-3d" }}
        className={cn("w-full transition-shadow duration-300", className)}
      >
        {children}
      </motion.div>
    </div>
  );
}
