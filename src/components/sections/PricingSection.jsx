"use client";

/**
 * PRICING SECTION
 * What this file does: Renders pricing tier cards with an interactive Monthly/Annual billing switcher.
 * What to edit: Plans, prices, and features come from /src/content/pricing.js; motion springs from /src/config/motion.js.
 */

import * as React from "react";
import { motion } from "framer-motion";
import { pricingContent } from "@/content/pricing";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PricingCard } from "@/components/sections/PricingCard";
import { Badge } from "@/components/ui/Badge";
import { transitions } from "@/config/motion";
import { cn } from "@/lib/utils";

export function PricingSection() {
  const [isAnnual, setIsAnnual] = React.useState(true);
  const { header, discountBadge, intervals, tiers } = pricingContent;

  return (
    <section id="pricing" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-content mx-auto space-y-12">
      <SectionHeading badge={header.badge} title={header.title} description={header.description} />

      <div className="flex items-center justify-center gap-3">
        <div className="relative flex items-center p-1 rounded-full border border-border bg-surface shadow-subtle">
          <button
            type="button"
            onClick={() => setIsAnnual(false)}
            className={cn(
              "relative px-4 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground",
              !isAnnual ? "text-primary-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
            )}
          >
            {!isAnnual && (
              <motion.div
                layoutId="pricing-active-pill"
                transition={transitions.springPill}
                className="absolute inset-0 rounded-full bg-primary"
              />
            )}
            <span className="relative z-10">{intervals.monthly}</span>
          </button>

          <button
            type="button"
            onClick={() => setIsAnnual(true)}
            className={cn(
              "relative px-4 py-1.5 rounded-full text-xs font-medium transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground",
              isAnnual ? "text-primary-foreground font-semibold" : "text-muted-foreground hover:text-foreground"
            )}
          >
            {isAnnual && (
              <motion.div
                layoutId="pricing-active-pill"
                transition={transitions.springPill}
                className="absolute inset-0 rounded-full bg-primary"
              />
            )}
            <span className="relative z-10">{intervals.annual}</span>
          </button>
        </div>

        <Badge variant="accent" className="text-[11px] py-1 px-2.5">
          {discountBadge}
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
        {tiers.map((tier) => (
          <PricingCard key={tier.id} tier={tier} isAnnual={isAnnual} />
        ))}
      </div>
    </section>
  );
}
