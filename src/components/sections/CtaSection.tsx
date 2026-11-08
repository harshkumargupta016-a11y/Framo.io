/**
 * CALL TO ACTION SECTION
 * What this file does: Renders the final high-impact conversion banner with ambient glow and action buttons.
 * What to edit: Content is imported from /src/content/cta.ts; styling uses /src/styles/tokens.css.
 */

import { ctaContent } from "@/content/cta";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { AtmosphericGlow } from "@/components/ui/AtmosphericGlow";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function CtaSection() {
  const { badge, title, subtitle, actions, guarantees } = ctaContent;

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-content mx-auto">
      <div className="relative overflow-hidden rounded-3xl border border-card-border bg-gradient-to-b from-card via-surface/60 to-card p-8 sm:p-14 lg:p-16 text-center shadow-float">
        {/* Raycast-style background glow */}
        <AtmosphericGlow />

        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
          <Badge variant="accent">{badge}</Badge>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] text-foreground leading-[1.1]">
            {title}
          </h2>

          <p className="text-xs sm:text-base text-muted-foreground leading-relaxed">
            {subtitle}
          </p>

          <div className="pt-2 flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <Button href={actions.primary.href} variant="primary" size="lg" className="w-full sm:w-auto">
              <span>{actions.primary.label}</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
            <Button href={actions.secondary.href} variant="secondary" size="lg" className="w-full sm:w-auto">
              <span>{actions.secondary.label}</span>
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4 text-xs text-muted-foreground">
            {guarantees.map((guarantee) => (
              <div key={guarantee} className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                <span>{guarantee}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

