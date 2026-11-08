/**
 * METRICS CONTENT & TYPES
 * What this file does: Stores performance benchmarks, Lighthouse scores, and reliability statistics.
 * What to edit: Update metric numerals, descriptions, or benchmark labels here.
 */

export interface MetricItem {
  id: string;
  value: string;
  unit?: string;
  label: string;
  description: string;
  highlight?: string;
}

export interface MetricsContent {
  header: {
    badge: string;
    title: string;
    description: string;
  };
  metrics: MetricItem[];
}

export const metricsContent: MetricsContent = {
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
};

