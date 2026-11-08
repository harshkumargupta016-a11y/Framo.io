/**
 * LANDING PAGE
 * What this file does: Assembles all landing page sections in exact sequence from DESIGN_SPEC.md.
 * What to edit: Reorder or toggle section visibility here; individual section content is in /src/content/*.ts.
 */

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { CanvasShowcase } from "@/components/sections/CanvasShowcase";
import { LogoTicker } from "@/components/sections/LogoTicker";
import { BentoGrid } from "@/components/sections/BentoGrid";
import { WorkflowSection } from "@/components/sections/WorkflowSection";
import { MetricsSection } from "@/components/sections/MetricsSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { PricingSection } from "@/components/sections/PricingSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { CtaSection } from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />

      <main className="flex-1 pt-20 flex flex-col gap-14 sm:gap-20">
        <HeroSection />
        <CanvasShowcase />
        <LogoTicker />
        <BentoGrid />
        <WorkflowSection />
        <MetricsSection />
        <Testimonials />
        <PricingSection />
        <FaqSection />
        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}
