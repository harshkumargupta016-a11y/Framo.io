/**
 * BUTTON COMPONENT
 * What this file does: Renders an accessible button or link with consistent styling variants.
 * What to edit: Adjust padding, hover transitions, or variant token classes here.
 */

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
}

const variantStyles: Record<string, string> = {
  primary:
    "bg-primary text-primary-foreground hover:opacity-95 shadow-subtle hover:shadow-float active:scale-[0.98] hover:-translate-y-0.5",
  secondary:
    "bg-surface text-foreground border border-border hover:bg-surface-hover hover:border-border-strong active:scale-[0.98] hover:-translate-y-0.5",
  outline:
    "bg-transparent text-foreground border border-border hover:bg-surface hover:border-border-strong active:scale-[0.98] hover:-translate-y-0.5",
  ghost:
    "bg-transparent text-muted-foreground hover:text-foreground hover:bg-surface-hover active:scale-[0.98]",
};

const sizeStyles: Record<string, string> = {
  sm: "h-8 px-3 text-xs rounded-md gap-1.5",
  md: "h-9 px-4 text-sm rounded-md gap-2",
  lg: "h-11 px-6 text-sm font-medium rounded-full gap-2.5",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      href,
      external,
      children,
      ...props
    },
    ref
  ) => {
    const baseClasses = cn(
      "inline-flex items-center justify-center font-medium transition-all duration-150 select-none cursor-pointer",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      "disabled:pointer-events-none disabled:opacity-50",
      variantStyles[variant],
      sizeStyles[size],
      className
    );

    if (href) {
      return (
        <Link
          href={href}
          className={baseClasses}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={baseClasses} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

