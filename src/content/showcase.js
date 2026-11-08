/**
 * CANVAS SHOWCASE CONTENT
 * What this file does: Stores mock project data, viewport switcher options, and preview elements for the interactive canvas.
 * What to edit: Update viewport modes, mock site copy, or canvas inspector tags here.
 */

export const showcaseContent = {
  header: {
    badge: "Interactive Canvas",
    title: "Real DOM fidelity. Zero abstraction lag.",
    description: "Switch viewports to experience how Framo dynamically adapts layout, typography, and responsive components in real time.",
  },
  viewports: [
    { id: "desktop", label: "Desktop", width: "100%", pixelWidth: 1200 },
    { id: "tablet", label: "Tablet", width: "768px", pixelWidth: 768 },
    { id: "mobile", label: "Mobile", width: "390px", pixelWidth: 390 },
  ],
  canvasMeta: {
    projectName: "MERIDIAN / HAUS",
    status: "Live Canvas",
    zoom: "100%",
    version: "v2.4",
    viewportHeight: 800,
  },
  mockProject: {
    tagline: "Architecture & Visual Systems",
    heading: "Spatial design engineered for speed.",
    body: "Transform ideas into high-performance web products with sub-millisecond layout responsiveness and declarative CSS animations.",
    cta: "View Case Study",
    metrics: [
      { label: "Rendering Performance", value: "60 FPS" },
      { label: "Lighthouse Score", value: "100/100" },
      { label: "Layout Shift (CLS)", value: "0.00" },
    ],
  },
};
