"use client";

/**
 * CANVAS SHOWCASE SECTION
 * What this file does: 3D perspective scroll-unfolding viewport preview with spring-animated device switcher.
 * What to edit: Viewport tabs and meta come from /src/content/showcase.js; motion springs from /src/config/motion.js.
 */

import * as React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Monitor, Tablet, Smartphone, Maximize2 } from "lucide-react";
import { showcaseContent } from "@/content/showcase";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CanvasPreview } from "@/components/sections/CanvasPreview";
import { Scroll3DPopup } from "@/components/ui/Scroll3DPopup";
import { transitions } from "@/config/motion";
import { cn } from "@/lib/utils";

export function CanvasShowcase() {
  const [activeViewport, setActiveViewport] = React.useState(showcaseContent.viewports[0]);
  const sectionRef = React.useRef(null);
  const { header, viewports, canvasMeta } = showcaseContent;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const rawRotateX = useTransform(scrollYProgress, [0, 1], [16, 0]);
  const rawScale = useTransform(scrollYProgress, [0, 1], [0.92, 1]);
  const rotateX = useSpring(rawRotateX, { stiffness: 200, damping: 25 });
  const scale = useSpring(rawScale, { stiffness: 200, damping: 25 });

  const icons = {
    desktop: <Monitor className="w-3.5 h-3.5" />,
    tablet: <Tablet className="w-3.5 h-3.5" />,
    mobile: <Smartphone className="w-3.5 h-3.5" />,
  };

  return (
    <section ref={sectionRef} id="showcase" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-canvas mx-auto flex flex-col items-center gap-10">
      <Scroll3DPopup hoverLift={false}>
        <SectionHeading badge={header.badge} title={header.title} description={header.description} />
      </Scroll3DPopup>

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

      <div style={{ perspective: 1400 }} className="w-full flex justify-center overflow-x-auto pb-4">
        <motion.div
          style={{ rotateX, scale, transformStyle: "preserve-3d" }}
          animate={{ width: activeViewport.width }}
          transition={transitions.springSmooth}
          className="relative rounded-2xl border border-card-border bg-card shadow-2xl overflow-hidden max-w-full min-w-[320px]"
        >
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

          <CanvasPreview />
        </motion.div>
      </div>
    </section>
  );
}
