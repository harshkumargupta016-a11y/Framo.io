/**
 * CARD COMPONENT
 * What this file does: Renders a container with surface background and 1px precision border.
 * What to edit: Adjust surface styling, default padding, or elevation shadow here.
 */

import { cn } from "@/lib/utils";

export function Card({ className, hoverEffect = false, children, ...props }) {
  return (
    <div
      className={cn(
        "rounded-lg border border-card-border bg-card p-5 text-card-foreground shadow-sm transition-all duration-200",
        hoverEffect && "hover:border-border hover:bg-surface-hover hover:shadow-md",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
