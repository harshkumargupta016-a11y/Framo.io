"use client";

/**
 * NAV DROPDOWN COMPONENT
 * What this file does: Renders an accessible navigation dropdown with keyboard navigation and focus management.
 * What to edit: Adjust popover layout, arrow indicators, or hover delay timing here.
 */

import * as React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { NavDropdownItem } from "@/config/site";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface NavDropdownProps {
  label: string;
  items: NavDropdownItem[];
}

export function NavDropdown({ label, items }: NavDropdownProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Close when clicking outside or pressing Escape
  React.useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={cn(
          "inline-flex items-center gap-1 text-xs lg:text-sm px-3 py-1.5 rounded-full font-medium transition-colors cursor-pointer",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-1",
          isOpen
            ? "text-foreground bg-surface-hover"
            : "text-muted-foreground hover:text-foreground hover:bg-surface-hover"
        )}
      >
        <span>{label}</span>
        <ChevronDown
          className={cn("w-3.5 h-3.5 transition-transform duration-200", isOpen && "rotate-180")}
        />
      </button>

      {/* Dropdown Menu Container */}
      {isOpen && (
        <div
          role="menu"
          className="absolute top-full left-0 mt-2 w-72 rounded-2xl border border-border bg-card/95 backdrop-blur-md p-2 shadow-float animate-in fade-in zoom-in-95 duration-150 z-50"
        >
          {items.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              role="menuitem"
              onClick={() => setIsOpen(false)}
              className="flex flex-col gap-0.5 p-2.5 rounded-xl hover:bg-surface-hover transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-foreground group-hover:text-foreground">
                  {item.title}
                </span>
                {item.badge && (
                  <Badge variant="accent" className="text-[10px] py-0 px-1.5">
                    {item.badge}
                  </Badge>
                )}
              </div>
              <p className="text-[11px] text-muted-foreground line-clamp-2 leading-relaxed">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

