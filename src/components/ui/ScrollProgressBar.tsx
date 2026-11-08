"use client";

/**
 * SCROLL PROGRESS BAR COMPONENT
 * What this file does: Fixed glowing gradient progress indicator tracking total page scroll progress.
 * What to edit: Adjust bar height, gradient colors, or shadow glow here.
 */

import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="fixed top-0 left-0 right-0 h-[2.5px] z-[60] pointer-events-none bg-transparent">
      <motion.div
        style={{ scaleX, transformOrigin: "0%" }}
        className="h-full w-full bg-gradient-to-r from-accent via-accent-indigo to-accent shadow-[0_0_12px_rgba(225,29,72,0.6)]"
      />
    </div>
  );
}

