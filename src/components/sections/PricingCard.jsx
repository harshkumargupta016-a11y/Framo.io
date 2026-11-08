"use client";

/**
 * PRICING CARD COMPONENT
 * What this file does: Renders an individual pricing tier card with 3D tilt, popular tier glow, and CTA button.
 * What to edit: Card styling, checkmark icons, or tier layout here; data comes from /src/content/pricing.js.
 */

import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { TiltCard } from "@/components/ui/TiltCard";
import { cn } from "@/lib/utils";

export function PricingCard({ tier, isAnnual }) {
  const price = isAnnual ? tier.priceAnnual : tier.priceMonthly;

  return (
    <TiltCard
      maxTilt={5}
      className={cn(
        "relative rounded-2xl border p-6 sm:p-8 flex flex-col justify-between gap-8 h-full transition-colors",
        tier.popular
          ? "bg-card border-accent/40 shadow-float ring-1 ring-accent/30"
          : "bg-surface/50 border-card-border shadow-card hover:border-border-strong hover:bg-surface-hover/70"
      )}
    >
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold text-foreground">{tier.name}</h3>
          {tier.badge && <Badge variant={tier.popular ? "accent" : "outline"}>{tier.badge}</Badge>}
        </div>

        <p className="text-xs text-muted-foreground min-h-[32px]">{tier.description}</p>

        <div className="flex items-baseline gap-1.5 pt-2 border-t border-border/50">
          <span className="font-mono text-4xl sm:text-5xl font-semibold text-foreground tracking-tight">
            {price}
          </span>
          <span className="text-xs text-muted-foreground font-mono">{tier.period}</span>
        </div>

        <ul className="space-y-2.5 pt-4 text-xs text-muted-foreground border-t border-border/50">
          {tier.features.map((feat) => (
            <li key={feat} className="flex items-center gap-2">
              <Check className="w-3.5 h-3.5 text-accent shrink-0" />
              <span className="text-foreground/90">{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      <Button href={tier.cta.href} variant={tier.cta.variant} size="lg" className="w-full">
        {tier.cta.label}
      </Button>
    </TiltCard>
  );
}
