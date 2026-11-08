/**
 * METRICS CONTENT
 * What this file does: Stores performance benchmarks, Lighthouse scores, and reliability statistics including chart data.
 * What to edit: Update metric numerals, descriptions, or benchmark labels here.
 */

export const metricsContent = {
  header: {
    badge: "Engineered for Speed",
    title: "Unmatched performance at global scale",
    description: "Every site built with Framo compiles to lean, server-rendered DOM with zero runtime overhead.",
  },
  metrics: [
    {
      id: "lighthouse",
      value: "100",
      unit: "/100",
      label: "Lighthouse Performance",
      description: "Automated tree-shaking, responsive WebP image optimization, and static layout isolation.",
      highlight: "Perfect Score",
    },
    {
      id: "latency",
      value: "<15",
      unit: "ms",
      label: "Global Edge Latency",
      description: "Distributed Anycast edge routing ensures instantaneous page loads from any geographic region.",
      highlight: "Sub-20ms",
    },
    {
      id: "framerate",
      value: "60",
      unit: "FPS",
      label: "Interaction Fidelity",
      description: "Declarative CSS transform pipelines guarantee fluid 60 FPS spring animations without CPU spikes.",
      highlight: "Hardware Accelerated",
    },
    {
      id: "uptime",
      value: "99.99",
      unit: "%",
      label: "Enterprise Uptime",
      description: "Multi-cloud redundancy with automatic failover and zero-downtime continuous deployment.",
      highlight: "Zero Downtime",
    },
  ],
  chartTitle: "Benchmark Comparison: Framo vs Legacy Builders",
  chartSubtitle: "Real-time Lighthouse score across asset loading, layout shifts, and gesture interaction cycles.",
  chartData: [
    { metric: "Cold Load", Framo: 98, Traditional: 52 },
    { metric: "DOM Tree", Framo: 99, Traditional: 48 },
    { metric: "60FPS Spring", Framo: 100, Traditional: 42 },
    { metric: "WebP / AVIF", Framo: 99, Traditional: 61 },
    { metric: "Edge Routing", Framo: 100, Traditional: 55 },
    { metric: "Lighthouse", Framo: 100, Traditional: 58 },
  ],
};
