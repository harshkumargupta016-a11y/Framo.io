/**
 * TESTIMONIALS SECTION
 * What this file does: Renders customer testimonials in an accessible 3-column grid.
 * What to edit: Quotes and author metadata come from /src/content/testimonials.ts; styling uses /src/styles/tokens.css.
 */

import { testimonialsContent } from "@/content/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckCircle2 } from "lucide-react";

export function Testimonials() {
  const { header, testimonials } = testimonialsContent;

  return (
    <section id="testimonials" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-content mx-auto space-y-12">
      <SectionHeading badge={header.badge} title={header.title} description={header.description} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl border border-card-border bg-card p-6 sm:p-7 flex flex-col justify-between gap-6 shadow-card hover:border-border-strong hover:bg-surface-hover/60 transition-all duration-200"
          >
            <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed font-normal">
              &ldquo;{item.quote}&rdquo;
            </p>

            <div className="pt-4 border-t border-border/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-surface border border-border flex items-center justify-center font-semibold text-xs text-foreground">
                  {item.avatarInitial}
                </div>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-semibold text-foreground">{item.author}</span>
                    {item.verified && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                    )}
                  </div>
                  <span className="text-[11px] text-muted-foreground block">
                    {item.role} • {item.company}
                  </span>
                </div>
              </div>

              <span className="text-[11px] font-mono text-muted-foreground opacity-75 hidden sm:inline">
                {item.handle}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

