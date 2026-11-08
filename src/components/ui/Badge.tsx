/**
 * BADGE COMPONENT
 * What this file does: Renders a pill badge with semantic border and text.
 * What to edit: Modify default padding or variant classes here.
 */

import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "outline" | "accent";
}

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  const variantStyles = {
    default: "bg-surface border-border text-foreground",
    outline: "bg-transparent border-border text-muted-foreground",
    accent: "bg-accent/10 border-accent/30 text-accent",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border transition-colors",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

