"use client";

/**
 * METRICS SECTION
 * What this file does: Renders performance statistics with 3D tilt cards, benchmarks, and interactive Recharts chart.
 * What to edit: Metric copy and numerals come from /src/content/metrics.js; styling uses /src/styles/tokens.css.
 */

import { metricsContent } from "@/content/metrics";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { TiltCard } from "@/components/ui/TiltCard";
import { Scroll3DPopup } from "@/components/ui/Scroll3DPopup";
import { PerformanceChart } from "@/components/ui/PerformanceChart";

export function MetricsSection() {
  const { header, metrics, chartTitle, chartSubtitle } = metricsContent;

  return (
    <section id="metrics" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-content mx-auto space-y-12">
      <Scroll3DPopup hoverLift={false}>
        <SectionHeading badge={header.badge} title={header.title} description={header.description} />
      </Scroll3DPopup>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, idx) => (
          <Scroll3DPopup key={metric.id} delay={idx * 0.07} className="h-full">
            <TiltCard
              maxTilt={6}
              className="rounded-2xl border border-card-border bg-gradient-to-b from-card to-surface/40 p-6 flex flex-col justify-between gap-6 shadow-card hover:border-border-strong h-full transition-colors"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
                    {metric.label}
                  </span>
                  {metric.highlight && (
                    <Badge variant="outline" className="text-[10px] px-1.5 py-0">
                      {metric.highlight}
                    </Badge>
                  )}
                </div>

                <div className="flex items-baseline gap-1 pt-2">
                  <span className="font-mono text-4xl sm:text-5xl font-semibold tracking-tight text-foreground">
                    {metric.value}
                  </span>
                  {metric.unit && (
                    <span className="font-mono text-lg text-muted-foreground font-medium">
                      {metric.unit}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed pt-3 border-t border-border/50">
                {metric.description}
              </p>
            </TiltCard>
          </Scroll3DPopup>
        ))}
      </div>

      {/* Recharts Performance Visualizer */}
      <Scroll3DPopup delay={0.2} perspective={1500}>
        <div className="rounded-2xl border border-card-border bg-card p-6 sm:p-8 shadow-card flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/50 pb-4">
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-foreground">{chartTitle}</h3>
              <p className="text-xs text-muted-foreground">{chartSubtitle}</p>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="inline-flex items-center gap-1.5 text-accent font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-accent" /> Framo
              </span>
              <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                <span className="w-2.5 h-2.5 rounded-full bg-slate-500" /> Traditional
              </span>
            </div>
          </div>

          <PerformanceChart />
        </div>
      </Scroll3DPopup>
    </section>
  );
}
