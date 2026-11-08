/**
 * WORKFLOW CONTENT & TYPES
 * What this file does: Stores step-by-step walkthrough data and interactive preview mockups for the workflow section.
 * What to edit: Update step titles, descriptions, code snippets, or prompt examples here.
 */

export interface WorkflowStep {
  id: string;
  stepNumber: string;
  title: string;
  tagline: string;
  description: string;
  snippetTitle: string;
  snippetContent: string;
  tags: string[];
}

export interface WorkflowContent {
  header: {
    badge: string;
    title: string;
    description: string;
  };
  steps: WorkflowStep[];
}

export const workflowContent: WorkflowContent = {
  header: {
    badge: "The Three-Step Flow",
    title: "From initial thought to deployed product in minutes",
    description: "Framo bridges the gap between creative intuition and production engineering with an autonomous design agent workflow.",
  },
  steps: [
    {
      id: "prompt",
      stepNumber: "01",
      title: "Plan & Prompt with Design Agent",
      tagline: "Natural language spatial orchestration",
      description:
        "Describe your product, target audience, and layout hierarchy. Framo's agent generates high-fidelity responsive canvases with semantic structure.",
      snippetTitle: "agent_prompt.prompt",
      snippetContent:
        'prompt: "Generate a high-converting hero for a robotics company with dark mode first, angled light streaks, and 3-step interactive tabs."\n\nstatus: "Synthesized 3 variants in 4.2 seconds"',
      tags: ["Multi-modal LLM", "Semantic DOM", "Auto-Tokenized"],
    },
    {
      id: "craft",
      stepNumber: "02",
      title: "Visual Polish & Fluid Physics",
      tagline: "Subpixel layout and spring curves",
      description:
        "Fine-tune padding, typography scales, and interactive hover states directly on the infinite spatial canvas with zero abstraction lag.",
      snippetTitle: "motion_engine.ts",
      snippetContent:
        'const springPhysics = {\n  type: "spring",\n  stiffness: 380,\n  damping: 30,\n  mass: 1\n};\n// Rendered at native 60 FPS',
      tags: ["Spring Curves", "Zero Jitter", "60 FPS Locked"],
    },
    {
      id: "publish",
      stepNumber: "03",
      title: "One-Click Edge Deployment",
      tagline: "Global CDN distribution",
      description:
        "Publish instantly to a distributed worldwide edge network. Built-in image optimization, custom domain management, and zero server maintenance.",
      snippetTitle: "edge_distribution.json",
      snippetContent:
        '{\n  "status": "200 OK",\n  "regions": 320,\n  "cacheHitRate": "99.8%",\n  "ttfb": "14ms"\n}',
      tags: ["Zero-Config SSL", "320 Edge PoPs", "Lighthouse 100"],
    },
  ],
};

