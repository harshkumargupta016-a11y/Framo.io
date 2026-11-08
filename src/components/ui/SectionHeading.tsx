/**
 * SECTION HEADING COMPONENT
 * What this file does: Renders consistent section headers with optional pill badge, title, and subtitle.
 * What to edit: Adjust spacing, typography sizes, or alignment styling here.
 */

import * as React from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({
  badge,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        isCenter ? "items-center text-center max-w-2xl mx-auto" : "items-start text-left max-w-xl",
        className
      )}
    >
      {badge && <Badge variant="accent">{badge}</Badge>}
      <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold tracking-[-0.025em] text-foreground leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

