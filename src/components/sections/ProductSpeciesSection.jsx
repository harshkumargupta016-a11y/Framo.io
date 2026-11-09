"use client";

/**
 * PRODUCT SPECIES SECTION (LINEAR-INSPIRED)
 * What this file does: Renders the "A new species of product tool" section with elevated typography and 3D technical figures.
 * What to edit: Content is imported from /src/content/productSpecies.js; visual illustrations in /src/components/sections/SpeciesVisuals.jsx.
 */

import { productSpeciesContent } from "@/content/productSpecies";
import { Scroll3DPopup } from "@/components/ui/Scroll3DPopup";
import { TiltCard } from "@/components/ui/TiltCard";
import { Badge } from "@/components/ui/Badge";
import { PurposeBuiltVisual, PoweredByAgentsVisual, DesignedForSpeedVisual } from "@/components/sections/SpeciesVisuals";

export function ProductSpeciesSection() {
  const { headline, subtitle, badge, pillars } = productSpeciesContent;

  const visuals = {
    "purpose-built": <PurposeBuiltVisual />,
    "powered-by-agents": <PoweredByAgentsVisual />,
    "designed-for-speed": <DesignedForSpeedVisual />,
  };

  return (
    <section id="species" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-content mx-auto space-y-16">
      <Scroll3DPopup hoverLift={false}>
        <div className="space-y-6 max-w-5xl">
          <Badge variant="accent" className="text-xs uppercase tracking-widest font-mono">
            {badge}
          </Badge>
          <h2 className="text-3xl sm:text-5xl lg:text-[56px] tracking-[-0.035em] leading-[1.12]">
            <span className="font-semibold text-foreground">{headline}</span>{" "}
            <span className="font-normal text-muted-foreground">{subtitle}</span>
          </h2>
        </div>
      </Scroll3DPopup>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {pillars.map((pillar, idx) => (
          <Scroll3DPopup key={pillar.id} delay={idx * 0.1} className="h-full">
            <TiltCard
              maxTilt={5}
              className="group relative rounded-2xl border border-card-border bg-gradient-to-b from-card via-card to-surface/30 p-6 sm:p-7 flex flex-col justify-between gap-6 shadow-card hover:border-border-strong hover:shadow-float h-full transition-all"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs font-mono text-muted-foreground">
                  <span className="font-semibold text-accent">{pillar.figure}</span>
                  <span>{pillar.figureLabel}</span>
                </div>

                {visuals[pillar.id]}

                <div className="pt-2 space-y-2">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-border/50 flex items-center justify-between text-xs font-mono">
                <span className="text-muted-foreground">{pillar.metric}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-accent/70 group-hover:scale-125 transition-transform" />
              </div>
            </TiltCard>
          </Scroll3DPopup>
        ))}
      </div>
    </section>
  );
}
