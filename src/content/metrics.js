/**
 * METRICS & PERFORMANCE CONTENT
 * What this file does: Single source of truth for all performance benchmarks, Lighthouse scores, and reliability metrics.
 * What to edit: Update performance numerals, latency benchmarks, or chart data here.
 */

export const performanceStats = {
  fps: "60",
  fpsUnit: "FPS",
  fpsLabel: "60 FPS Locked",
  latency: "14ms",
  latencyMax: "sub-20ms",
  latencyLabel: "Sub-20ms Edge Latency",
  ttfb: "14ms",
  uptime: "99.99%",
  cls: "0.00",
  lighthouse: "98+",
  lighthouseFull: "98+/100",
  edgePops: "320+",
};

export const metricsContent = {
  header: {
    badge: "Engineered for Speed",
    title: "Unmatched performance at global scale",
    description: "Every site built with Framo compiles to lean, server-rendered DOM with zero runtime overhead.",
  },
  metrics: [
    {
      id: "lighthouse",
      value: performanceStats.lighthouse,
      unit: "/100",
      label: "Lighthouse Performance",
      description: "Automated tree-shaking, responsive WebP image optimization, and static layout isolation.",
      highlight: "High-Craft Baseline",
    },
    {
      id: "latency",
      value: performanceStats.latency,
      unit: "",
      label: "Global Edge Latency",
      description: "Distributed Anycast edge routing ensures instantaneous page loads from any geographic region.",
      highlight: performanceStats.latencyMax,
    },
    {
      id: "framerate",
      value: performanceStats.fps,
      unit: performanceStats.fpsUnit,
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
      highlight: "Zero Downtime SLA",
    },
  ],
  chartTitle: "Benchmark Comparison: Framo vs Legacy Builders",
  chartSubtitle: "Real-time performance across asset loading, layout shifts, and gesture interaction cycles.",
  chartData: [
    { metric: "Cold Load", Framo: 98, Traditional: 52 },
    { metric: "DOM Tree", Framo: 99, Traditional: 48 },
    { metric: "60FPS Spring", Framo: 100, Traditional: 42 },
    { metric: "WebP / AVIF", Framo: 99, Traditional: 61 },
    { metric: "Edge Routing", Framo: 98, Traditional: 55 },
    { metric: "Lighthouse", Framo: 98, Traditional: 58 },
  ],
};
