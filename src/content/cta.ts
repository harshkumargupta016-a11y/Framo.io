/**
 * CALL TO ACTION CONTENT & TYPES
 * What this file does: Stores headlines, subcopy, conversion buttons, and trust guarantees for the bottom CTA banner.
 * What to edit: Update banner titles, button URLs, or guarantee badges here.
 */

export interface CtaContent {
  badge: string;
  title: string;
  subtitle: string;
  actions: {
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
  };
  guarantees: string[];
}

export const ctaContent: CtaContent = {
  badge: "Start Building Today",
  title: "Ready to build at the speed of thought?",
  subtitle: "Join thousands of world-class designers, founders, and engineering teams crafting high-performance digital products on Framo.",
  actions: {
    primary: {
      label: "Get started for free",
      href: "#signup",
    },
    secondary: {
      label: "Schedule a demo",
      href: "#demo",
    },
  },
  guarantees: [
    "No credit card required",
    "Free forever tier included",
    "Instant edge publishing",
  ],
};

