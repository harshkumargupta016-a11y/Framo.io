"use client";

/**
 * CUSTOM CURSOR COMPONENT
 * What this file does: Smooth spring-interpolated trailing cursor aura with interactive hover states.
 * What to edit: Adjust cursor size, spring damping/stiffness, or accent glow colors here.
 */

import * as React from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

export function CustomCursor() {
  const prefersReduced = useReducedMotion();
  const [isVisible, setIsVisible] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const [cursorText, setCursorText] = React.useState<string | null>(null);

  const rawX = useMotionValue(-100);
  const rawY = useMotionValue(-100);

  // Smooth spring physics for fluid trailing motion
  const springX = useSpring(rawX, { stiffness: 450, damping: 28 });
  const springY = useSpring(rawY, { stiffness: 450, damping: 28 });

  React.useEffect(() => {
    // Only enable on pointer-capable devices (mouse/trackpad, not touch)
    if (window.matchMedia("(pointer: coarse)").matches || prefersReduced) return;

    const handleMouseMove = (e: MouseEvent) => {
      rawX.set(e.clientX);
      rawY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      // Check if target or parent is an interactive element
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("button, a, [role='button'], [data-cursor]");
      if (interactive) {
        setIsHovered(true);
        const text = interactive.getAttribute("data-cursor-text");
        setCursorText(text || null);
      } else {
        setIsHovered(false);
        setCursorText(null);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [rawX, rawY, isVisible, prefersReduced]);

  if (prefersReduced || !isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden hidden md:block">
      {/* Outer Spring Trailing Ring / Aura */}
      <motion.div
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 1.6 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
        className="w-8 h-8 rounded-full border border-accent/40 bg-accent/10 backdrop-blur-[1px] flex items-center justify-center shadow-[0_0_15px_rgba(225,29,72,0.25)]"
      >
        {cursorText && (
          <span className="text-[8px] font-mono font-semibold uppercase text-accent tracking-wider">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Center Precise Dot */}
      <motion.div
        style={{
          x: rawX,
          y: rawY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{ scale: isHovered ? 0 : 1 }}
        transition={{ duration: 0.1 }}
        className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(225,29,72,0.8)]"
      />
    </div>
  );
}

