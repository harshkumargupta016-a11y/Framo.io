/**
 * FEATURES BENTO CONTENT & TYPES
 * What this file does: Defines TypeScript interfaces and structured content for the 4-card feature bento grid.
 * What to edit: Update feature titles, descriptions, badges, and metric pills here.
 */

export interface BentoCardItem {
  id: string;
  badge: string;
  title: string;
  description: string;
  colSpan: "col-span-1" | "col-span-1 md:col-span-2";
  detail: {
    label: string;
    value: string;
  };
}

export interface FeaturesContent {
  header: {
    badge: string;
    title: string;
    description: string;
  };
  cards: BentoCardItem[];
}

export const featuresContent: FeaturesContent = {
  header: {
    badge: "Engineered for Craft",
    title: "Everything you need to ship world-class web products",
    description:
      "A seamless synthesis of visual design speed and production code precision. No compromises between creative freedom and technical excellence.",
  },
  cards: [
    {
      id: "canvas",
      badge: "Visual Canvas",
      title: "Real DOM layout engine with subpixel precision",
      description:
        "Design freely with modern flexbox, CSS grid, and auto-layout rules. Every pixel on your screen maps directly to production-clean HTML & CSS.",
      colSpan: "col-span-1 md:col-span-2",
      detail: {
        label: "Layout Engine",
        value: "Real DOM • Subpixel Grid",
      },
    },
    {
      id: "physics",
      badge: "Physics Engine",
      title: "Spring curves and gesture interactions",
      description:
        "Realistic fluid motion built on declarative spring dynamics. Drag, hover, and scroll triggers that feel physical.",
      colSpan: "col-span-1",
      detail: {
        label: "Frame Rate",
        value: "60 FPS Locked",
      },
    },
    {
      id: "agents",
      badge: "AI Design Agent",
      title: "Autonomous design partner for rapid iterations",
      description:
        "Generate responsive sections, refine color schemes, and refactor layouts instantly using natural language prompts.",
      colSpan: "col-span-1",
      detail: {
        label: "Intelligence",
        value: "Multi-modal Canvas LLM",
      },
    },
    {
      id: "publishing",
      badge: "Global Edge",
      title: "Instant global deployment with sub-20ms latency",
      description:
        "Publish with one click to our globally distributed edge network with built-in asset optimization and real-time CMS sync.",
      colSpan: "col-span-1 md:col-span-2",
      detail: {
        label: "Edge Response",
        value: "<20ms TTFB Globally",
      },
    },
  ],
};

