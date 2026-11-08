/**
 * LOGO TICKER SECTION
 * What this file does: Renders the monochromatic partner/client logo social proof section.
 * What to edit: Company names and copy come from /src/content/logos.js; styling mapped to /src/styles/tokens.css.
 */

import { logoTickerContent } from "@/content/logos";

export function LogoTicker() {
  const { label, logos } = logoTickerContent;

  return (
    <section className="py-12 border-y border-border/50 bg-surface/30 overflow-hidden">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
          {label}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 sm:gap-8 items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex flex-col items-center justify-center gap-1 group cursor-default"
            >
              <span className="font-semibold text-xs sm:text-sm text-foreground/80 group-hover:text-foreground tracking-tight transition-colors">
                {logo.name}
              </span>
              <span className="text-[10px] text-muted-foreground font-mono">
                {logo.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
