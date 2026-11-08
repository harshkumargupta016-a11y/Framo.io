/**
 * MOTION CONFIGURATION
 * What this file does: Centralizes all animation durations, easings, spring physics, and motion variants.
 * 
 * =========================================================================================
 * HOW TO CHANGE ANIMATION SPEED GLOBALLY:
 * 1. Adjust `SPEED_MULTIPLIER` below (e.g., 0.5 for 2x faster, 1.5 for 1.5x slower, 0 for instant).
 * 2. Or adjust `durationFast`, `durationNormal`, `durationSlow` directly.
 * =========================================================================================
 */

import type { Transition, Variants } from "framer-motion";

// Global speed scalar: 1 = normal speed, 0.5 = 2x faster, 1.5 = slower/dramatic
export const SPEED_MULTIPLIER = 1;

export const durations = {
  fast: 0.18 * SPEED_MULTIPLIER,
  normal: 0.35 * SPEED_MULTIPLIER,
  slow: 0.55 * SPEED_MULTIPLIER,
  stagger: 0.08 * SPEED_MULTIPLIER,
};

export const easings = {
  easeOutCubic: [0.22, 1, 0.36, 1] as [number, number, number, number],
  easeOutQuad: [0.16, 1, 0.3, 1] as [number, number, number, number],
  easeInOutSmooth: [0.4, 0, 0.2, 1] as [number, number, number, number],
};

export const transitions: Record<string, Transition> = {
  springQuick: {
    type: "spring",
    stiffness: 380,
    damping: 30,
    mass: 0.8,
  },
  springSmooth: {
    type: "spring",
    stiffness: 260,
    damping: 24,
    mass: 1,
  },
  springPill: {
    type: "spring",
    stiffness: 400,
    damping: 32,
  },
  easeOutQuad: {
    duration: durations.fast,
    ease: easings.easeOutQuad,
  },
  easeOutCubic: {
    duration: durations.normal,
    ease: easings.easeOutCubic,
  },
};

/** Scroll reveal variant for sections */
export const scrollRevealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.easeOutCubic,
  },
};

/** Hero text fade-in upward */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.easeOutCubic,
  },
};

/** Subtle scale-in */
export const fadeInScale: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions.easeOutCubic,
  },
};

/** Container with staggered children */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: durations.stagger,
      delayChildren: 0.05,
    },
  },
};

/** Accordion expand / collapse */
export const accordionMotion: Variants = {
  collapsed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: durations.fast,
      ease: easings.easeInOutSmooth,
    },
  },
  expanded: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: durations.normal,
      ease: easings.easeOutCubic,
    },
  },
};
