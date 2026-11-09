"use client";

/**
 * PERFORMANCE CHART COMPONENT (RECHARTS)
 * What this file does: Renders interactive performance & speed area chart comparing Framo vs Legacy builders.
 * What to edit: Metric data comes from /src/content/metrics.js; stroke and fill colors match design tokens.
 */

import * as React from "react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { metricsContent } from "@/content/metrics";

function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-xl border border-border bg-card p-3 shadow-card text-xs font-mono space-y-1">
        <p className="font-semibold text-foreground mb-1">{label}</p>
        <p className="text-accent flex items-center justify-between gap-4">
          <span>Framo:</span>
          <span className="font-bold">{payload[0].value}/100</span>
        </p>
        <p className="text-muted-foreground flex items-center justify-between gap-4">
          <span>Traditional:</span>
          <span>{payload[1].value}/100</span>
        </p>
      </div>
    );
  }
  return null;
}

export function PerformanceChart() {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return <div className="h-64 w-full rounded-2xl bg-surface/30 animate-pulse" />;

  return (
    <div className="w-full h-72 sm:h-80 pt-4">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={metricsContent.chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="framoGlow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#E11D48" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#E11D48" stopOpacity={0.0} />
            </linearGradient>
            <linearGradient id="legacyGlow" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#64748B" stopOpacity={0.2} />
              <stop offset="95%" stopColor="#64748B" stopOpacity={0.0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(150, 150, 150, 0.15)" />
          <XAxis dataKey="metric" tickLine={false} axisLine={false} stroke="var(--muted-foreground)" fontSize={11} />
          <YAxis domain={[30, 105]} tickLine={false} axisLine={false} stroke="var(--muted-foreground)" fontSize={11} />
          <Tooltip content={<CustomTooltip />} />
          <Area type="monotone" dataKey="Framo" stroke="#E11D48" strokeWidth={2.5} fillOpacity={1} fill="url(#framoGlow)" />
          <Area type="monotone" dataKey="Traditional" stroke="#64748B" strokeWidth={1.5} strokeDasharray="4 4" fillOpacity={1} fill="url(#legacyGlow)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
