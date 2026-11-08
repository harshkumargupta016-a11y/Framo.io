"use client";

/**
 * BENTO GRID SECTION
 * What this file does: Renders the 4-card asymmetric bento grid with 3D cursor tilt and spotlight reflection.
 * What to edit: Card copy comes from /src/content/features.ts; styling mapped to /src/styles/tokens.css.
 */

import { featuresContent } from "@/content/features";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { TiltCard } from "@/components/ui/TiltCard";
import { Sparkles, Zap, Layers, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

export function BentoGrid() {
  const { header, cards } = featuresContent;

  const cardIcons = {
    canvas: <Layers className="w-4 h-4 text-accent" />,
    physics: <Zap className="w-4 h-4 text-accent" />,
    agents: <Sparkles className="w-4 h-4 text-accent-indigo" />,
    publishing: <Globe className="w-4 h-4 text-accent-indigo" />,
  };

  return (
    <section id="features" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-content mx-auto space-y-12">
      <SectionHeading badge={header.badge} title={header.title} description={header.description} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className={card.colSpan === "col-span-1 md:col-span-2" ? "lg:col-span-2" : "lg:col-span-1"}
          >
            <TiltCard
              maxTilt={7}
              className={cn(
                "group relative rounded-2xl border border-card-border bg-gradient-to-b from-card to-surface/40 p-6 sm:p-8 flex flex-col justify-between gap-6 shadow-card h-full transition-colors",
                "hover:border-border-strong hover:bg-surface-hover hover:shadow-float"
              )}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-xs gap-1.5">
                    {cardIcons[card.id as keyof typeof cardIcons]}
                    <span>{card.badge}</span>
                  </Badge>
                  <span className="text-[11px] font-mono text-muted-foreground">{card.detail.label}</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-foreground">
                  {card.title}
                </h3>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {card.description}
                </p>
              </div>

              <div className="pt-4 border-t border-border/50 flex items-center justify-between text-xs">
                <span className="font-mono text-[11px] text-muted-foreground">{card.detail.value}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent/60 group-hover:scale-125 transition-transform" />
              </div>
            </TiltCard>
          </div>
        ))}
      </div>
    </section>
  );
}
