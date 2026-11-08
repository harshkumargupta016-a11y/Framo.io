/**
 * METRICS SECTION
 * What this file does: Renders performance statistics and Lighthouse benchmark cards.
 * What to edit: Metric copy and numerals come from /src/content/metrics.ts; styling uses /src/styles/tokens.css.
 */

import { metricsContent } from "@/content/metrics";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";

export function MetricsSection() {
  const { header, metrics } = metricsContent;

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-content mx-auto space-y-12">
      <SectionHeading badge={header.badge} title={header.title} description={header.description} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric) => (
          <div
            key={metric.id}
            className="rounded-2xl border border-card-border bg-gradient-to-b from-card to-surface/40 p-6 flex flex-col justify-between gap-6 shadow-card hover:border-border-strong transition-all duration-200"
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
          </div>
        ))}
      </div>
    </section>
  );
}

