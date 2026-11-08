/**
 * HERO SECTION CONTENT & TYPES
 * What this file does: Defines TypeScript interfaces and structured content for the Hero section.
 * What to edit: Update headline copy, subtitle, action buttons, or announcement badge here.
 */

export interface HeroAction {
  label: string;
  href: string;
  icon?: "arrow" | "download";
}

export interface HeroBadge {
  tag: string;
  label: string;
  href: string;
}

export interface HeroContent {
  badge: HeroBadge;
  headline: {
    prefix: string;
    emphasis: string;
    suffix?: string;
  };
  subtitle: string;
  actions: {
    primary: HeroAction;
    secondary: HeroAction;
    tertiary: HeroAction;
  };
}

export const heroContent: HeroContent = {
  badge: {
    tag: "New",
    label: "Design Agent 2.4 — Autonomous canvas building",
    href: "#workflow",
  },
  headline: {
    prefix: "Framo is the pro website builder with a",
    emphasis: "world-class design agent",
    suffix: "for modern teams.",
  },
  subtitle:
    "Build your website with agents and make it your own on a fully editable spatial design canvas. Purpose-built for speed, fluid physics, and production code fidelity.",
  actions: {
    primary: {
      label: "Get started for free",
      href: "#signup",
      icon: "arrow",
    },
    secondary: {
      label: "Download app",
      href: "#download",
      icon: "download",
    },
    tertiary: {
      label: "Get the Framo MCP",
      href: "#mcp",
      icon: "arrow",
    },
  },
};
