"use client";

/**
 * WORKFLOW SECTION
 * What this file does: Interactive 3-step walkthrough with animated code snippet transitions and spring tabs.
 * What to edit: Step copy and snippets come from /src/content/workflow.js; styling uses /src/styles/tokens.css.
 */

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { workflowContent } from "@/content/workflow";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Scroll3DPopup } from "@/components/ui/Scroll3DPopup";
import { cn } from "@/lib/utils";

export function WorkflowSection() {
  const [activeStep, setActiveStep] = React.useState(workflowContent.steps[0]);
  const { header, steps } = workflowContent;

  return (
    <section id="workflow" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-content mx-auto space-y-12">
      <Scroll3DPopup hoverLift={false}>
        <SectionHeading badge={header.badge} title={header.title} description={header.description} />
      </Scroll3DPopup>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-5 flex flex-col gap-3">
          {steps.map((step, idx) => {
            const isActive = activeStep.id === step.id;
            return (
              <Scroll3DPopup key={step.id} delay={idx * 0.08} hoverLift={false}>
                <button
                  type="button"
                  onClick={() => setActiveStep(step)}
                  className={cn(
                    "w-full p-5 rounded-2xl text-left transition-all duration-200 border cursor-pointer",
                    isActive
                      ? "bg-card border-border-strong shadow-card scale-[1.01]"
                      : "bg-surface/40 border-border/50 hover:bg-surface-hover hover:border-border"
                  )}
                >
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="font-mono text-xs font-semibold text-accent">{step.stepNumber}</span>
                    <h3 className="text-base sm:text-lg font-semibold text-foreground">{step.title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed pl-7">
                    {step.description}
                  </p>
                </button>
              </Scroll3DPopup>
            );
          })}
        </div>

        <div className="lg:col-span-7">
          <Scroll3DPopup delay={0.2} perspective={1400}>
            <div className="rounded-2xl border border-card-border bg-card p-6 sm:p-8 shadow-card flex flex-col justify-between gap-6 min-h-[340px]">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-border/50 text-xs">
                  <span className="font-mono text-xs font-medium text-foreground">{activeStep.snippetTitle}</span>
                  <span className="text-[11px] font-mono text-muted-foreground">{activeStep.tagline}</span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.pre
                    key={activeStep.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.18 }}
                    className="font-mono text-xs sm:text-sm text-foreground/90 bg-surface/60 p-4 rounded-xl border border-border/40 overflow-x-auto whitespace-pre-wrap leading-relaxed"
                  >
                    {activeStep.snippetContent}
                  </motion.pre>
                </AnimatePresence>
              </div>

              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-border/50">
                {activeStep.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-[11px]">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </Scroll3DPopup>
        </div>
      </div>
    </section>
  );
}
