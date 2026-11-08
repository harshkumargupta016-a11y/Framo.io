/**
 * FAQ CONTENT
 * What this file does: Stores frequently asked questions and accordion answers.
 * What to edit: Update questions, answers, or category badges here.
 */

export const faqContent = {
  header: {
    badge: "Frequently Asked Questions",
    title: "Everything you need to know about Framo",
    description: "Got questions? We've got answers. If you need additional assistance, reach out anytime.",
  },
  items: [
    {
      id: "comparison",
      question: "How does Framo compare to classic website builders?",
      answer:
        "Unlike classic drag-and-drop builders that produce bloated markup, Framo is engineered with a real DOM layout engine. It renders native CSS flexbox and grid structures, declarative spring animations, and compiles to ultra-lean static HTML hosted directly on a global edge CDN.",
    },
    {
      id: "code-export",
      question: "Can I export clean production React or Next.js code?",
      answer:
        "Yes! Every section, layout, and component designed in Framo can be exported directly into clean React, Next.js (App Router), or Tailwind CSS tokens with clean component splits and zero unnecessary wrapper divs.",
    },
    {
      id: "ai-agent",
      question: "How does the autonomous AI design agent work?",
      answer:
        "The agent works as a real-time pair designer on your spatial canvas. You describe user flows, color themes, or layout modifications in natural language, and the agent synthesizes responsive multi-breakpoint sections while strictly following your design tokens.",
    },
    {
      id: "performance",
      question: "What kind of performance can I expect for published sites?",
      answer:
        "Sites deployed with Framo consistently achieve 100/100 Lighthouse scores. Automatic WebP/AVIF image generation, edge routing under 20ms, zero layout shift (CLS: 0), and hardware-accelerated 60 FPS spring physics come standard.",
    },
    {
      id: "hosting",
      question: "Do you support custom domains, SSL, and team permissions?",
      answer:
        "All paid plans include custom domain support with automated zero-config SSL certificates, Anycast edge routing across 320 locations, SAML SSO, and granular role-based permissions (Editor, Viewer, Admin).",
    },
  ],
};
