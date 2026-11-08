"use client";

/**
 * HERO SECTION
 * What this file does: Renders the landing Hero with atmospheric beam glow, headline, subtitle, and action buttons.
 * What to edit: Content is imported from /src/content/hero.ts; motion variants from /src/config/motion.ts.
 */

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { heroContent } from "@/content/hero";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { AtmosphericGlow } from "@/components/ui/AtmosphericGlow";

export function HeroSection() {
  const { badge, headline, subtitle, actions } = heroContent;

  return (
    <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24 px-4 sm:px-6 lg:px-8">
      {/* Raycast-style Atmospheric Light Beams */}
      <AtmosphericGlow />

      <div className="relative z-10 max-w-content mx-auto flex flex-col items-center text-center">
        {/* Announcement Pill Badge */}
        <div>
          <Link
            href={badge.href}
            className="group inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-surface/80 hover:bg-surface-hover backdrop-blur-sm text-xs font-medium text-foreground transition-all duration-150 hover:border-border-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
          >
            <Badge variant="accent" className="text-[10px] px-1.5 py-0 font-semibold">
              {badge.tag}
            </Badge>
            <span className="text-muted-foreground group-hover:text-foreground transition-colors">
              {badge.label}
            </span>
            <ArrowRight className="w-3 h-3 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Display Headline */}
        <h1 className="mt-6 text-4xl sm:text-6xl lg:text-[68px] font-semibold tracking-[-0.035em] text-foreground leading-[1.08] max-w-4xl">
          <span>{headline.prefix} </span>
          <span className="text-foreground underline decoration-accent/40 decoration-wavy decoration-from-font">
            {headline.emphasis}
          </span>
          {headline.suffix && <span className="text-muted-foreground"> {headline.suffix}</span>}
        </h1>

        {/* Lead Subtitle */}
        <p className="mt-5 text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">
          {subtitle}
        </p>

        {/* Action Row matching Framer reference layout */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 w-full max-w-2xl px-2">
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <Button href={actions.primary.href} variant="primary" size="lg" className="w-full sm:w-auto">
              <span>{actions.primary.label}</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Button>

            <Button href={actions.secondary.href} variant="secondary" size="lg" className="w-full sm:w-auto">
              <span>{actions.secondary.label}</span>
              <Download className="w-4 h-4 ml-1 opacity-80" />
            </Button>
          </div>

          {/* Right-aligned tertiary MCP link */}
          <Link
            href={actions.tertiary.href}
            className="text-xs sm:text-sm text-muted-foreground hover:text-foreground font-medium inline-flex items-center gap-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground rounded-sm py-1"
          >
            <span>{actions.tertiary.label}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
