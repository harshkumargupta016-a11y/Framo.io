"use client";

/**
 * CANVAS SHOWCASE SECTION
 * What this file does: Interactive viewport preview with spring-animated Desktop/Tablet/Mobile switcher and overflow protection.
 * What to edit: Viewport tabs and meta come from /src/content/showcase.ts; motion springs from /src/config/motion.ts.
 */

import * as React from "react";
import { motion } from "framer-motion";
import { Monitor, Tablet, Smartphone, Maximize2 } from "lucide-react";
import { showcaseContent, ViewportOption } from "@/content/showcase";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CanvasPreview } from "@/components/sections/CanvasPreview";
import { transitions } from "@/config/motion";
import { cn } from "@/lib/utils";

export function CanvasShowcase() {
  const [activeViewport, setActiveViewport] = React.useState<ViewportOption>(
    showcaseContent.viewports[0]
  );
  const { header, viewports, canvasMeta } = showcaseContent;

  const icons = {
    desktop: <Monitor className="w-3.5 h-3.5" />,
    tablet: <Tablet className="w-3.5 h-3.5" />,
    mobile: <Smartphone className="w-3.5 h-3.5" />,
  };

  return (
    <section id="showcase" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-canvas mx-auto flex flex-col items-center gap-10">
      <SectionHeading badge={header.badge} title={header.title} description={header.description} />

      {/* Viewport Control Bar */}
      <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 rounded-full border border-border bg-surface shadow-subtle overflow-x-auto max-w-full">
        {viewports.map((vp) => {
          const isActive = activeViewport.id === vp.id;
          return (
            <button
              key={vp.id}
              type="button"
              onClick={() => setActiveViewport(vp)}
              className={cn(
                "relative flex items-center gap-2 px-3 sm:px-3.5 py-1.5 min-h-[36px] rounded-full text-xs font-medium transition-colors cursor-pointer shrink-0",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground",
                isActive ? "text-primary-foreground bg-primary shadow-sm" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {icons[vp.id]}
              <span>{vp.label}</span>
              <span className="text-[10px] opacity-75 font-mono hidden sm:inline">{vp.pixelWidth}px</span>
            </button>
          );
        })}
      </div>

      {/* Outer Canvas Frame Container with Overflow Protection */}
      <div className="w-full flex justify-center overflow-x-auto pb-4">
        <motion.div
          animate={{ width: activeViewport.width }}
          transition={transitions.springSmooth}
          className="relative rounded-2xl border border-card-border bg-card shadow-card overflow-hidden max-w-full min-w-[320px]"
        >
          {/* Top Frame Toolbar */}
          <div className="flex items-center justify-between px-4 py-2.5 bg-surface/80 border-b border-border text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-border" />
              <span className="w-2.5 h-2.5 rounded-full bg-border" />
              <span className="w-2.5 h-2.5 rounded-full bg-border" />
              <span className="ml-2 font-mono text-[11px] font-medium text-foreground">{canvasMeta.projectName}</span>
            </div>
            <div className="flex items-center gap-3 font-mono text-[11px]">
              <span className="px-2 py-0.5 rounded bg-muted text-muted-foreground">{canvasMeta.status}</span>
              <span>{activeViewport.pixelWidth} × {canvasMeta.viewportHeight}</span>
              <Maximize2 className="w-3 h-3 text-muted-foreground" />
            </div>
          </div>

          {/* Inner Website Preview */}
          <CanvasPreview />
        </motion.div>
      </div>
    </section>
  );
}
