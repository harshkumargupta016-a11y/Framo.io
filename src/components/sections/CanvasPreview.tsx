/**
 * CANVAS PREVIEW COMPONENT
 * What this file does: Renders the inner mock website design inside the interactive canvas viewport.
 * What to edit: Mock design elements, typography, or metric cards come from /src/content/showcase.ts.
 */

import { showcaseContent } from "@/content/showcase";
import { Badge } from "@/components/ui/Badge";
import { ArrowUpRight } from "lucide-react";

export function CanvasPreview() {
  const { mockProject, canvasMeta } = showcaseContent;

  return (
    <div className="w-full bg-background/90 p-5 sm:p-8 lg:p-10 flex flex-col justify-between gap-8 min-h-[360px] sm:min-h-[440px] text-foreground select-none">
      {/* Mock Navigation Header */}
      <div className="flex items-center justify-between pb-4 border-b border-border/40">
        <span className="font-mono text-xs tracking-wider uppercase font-semibold">
          MERIDIAN
        </span>
        <div className="flex items-center gap-3">
          <Badge variant="outline" className="text-[10px] hidden sm:inline-flex">
            {mockProject.tagline}
          </Badge>
          <span className="text-[11px] font-mono text-muted-foreground">{canvasMeta.version}</span>
        </div>
      </div>

      {/* Mock Hero Headline */}
      <div className="space-y-3 max-w-xl">
        <h3 className="text-xl sm:text-3xl lg:text-4xl font-semibold tracking-[-0.025em] leading-tight">
          {mockProject.heading}
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
          {mockProject.body}
        </p>
        <div className="pt-2">
          <button
            type="button"
            className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-1.5 rounded-full bg-foreground text-background hover:opacity-90 transition-opacity cursor-pointer"
          >
            <span>{mockProject.cta}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Mock Metrics Footer */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-border/40">
        {mockProject.metrics.map((metric) => (
          <div key={metric.label} className="p-3 rounded-lg bg-surface/50 border border-border/40">
            <span className="text-xs text-muted-foreground block">{metric.label}</span>
            <span className="text-sm sm:text-base font-semibold font-mono text-foreground">
              {metric.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
