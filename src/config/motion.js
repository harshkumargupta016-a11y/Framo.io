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

export const SPEED_MULTIPLIER = 1;

export const durations = {
  fast: 0.18 * SPEED_MULTIPLIER,
  normal: 0.35 * SPEED_MULTIPLIER,
  slow: 0.55 * SPEED_MULTIPLIER,
  stagger: 0.08 * SPEED_MULTIPLIER,
};

export const easings = {
  easeOutCubic: [0.22, 1, 0.36, 1],
  easeOutQuad: [0.16, 1, 0.3, 1],
  easeInOutSmooth: [0.4, 0, 0.2, 1],
};

export const transitions = {
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

export const scrollRevealVariants = {
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

export const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.easeOutCubic,
  },
};

export const fadeInScale = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions.easeOutCubic,
  },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: durations.stagger,
      delayChildren: 0.05,
    },
  },
};

export const accordionMotion = {
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
