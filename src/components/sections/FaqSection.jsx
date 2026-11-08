"use client";

/**
 * FAQ SECTION
 * What this file does: Renders an accessible animated accordion answering frequently asked questions with ARIA attributes.
 * What to edit: Questions and answers come from /src/content/faq.js; motion variants from /src/config/motion.js.
 */

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faqContent } from "@/content/faq";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { accordionMotion } from "@/config/motion";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const [openId, setOpenId] = React.useState(faqContent.items[0].id);
  const { header, items } = faqContent;

  const toggleItem = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto space-y-12">
      <SectionHeading badge={header.badge} title={header.title} description={header.description} />

      <div className="space-y-3">
        {items.map((item) => {
          const isOpen = openId === item.id;
          const contentId = `faq-answer-${item.id}`;
          const triggerId = `faq-trigger-${item.id}`;

          return (
            <div
              key={item.id}
              className="rounded-2xl border border-border/70 bg-card overflow-hidden transition-colors hover:border-border-strong"
            >
              <button
                id={triggerId}
                type="button"
                onClick={() => toggleItem(item.id)}
                aria-expanded={isOpen}
                aria-controls={contentId}
                className="w-full min-h-[52px] flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
              >
                <span className="text-sm sm:text-base font-semibold text-foreground pr-4">
                  {item.question}
                </span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 text-muted-foreground shrink-0 transition-transform duration-200",
                    isOpen && "rotate-180 text-foreground"
                  )}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    id={contentId}
                    role="region"
                    aria-labelledby={triggerId}
                    key="content"
                    initial="collapsed"
                    animate="expanded"
                    exit="collapsed"
                    variants={accordionMotion}
                  >
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border/40">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
