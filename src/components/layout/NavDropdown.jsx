"use client";

/**
 * NAV DROPDOWN COMPONENT
 * What this file does: Accessible, click-toggled navigation dropdown with opaque high-contrast styling and smooth dismiss.
 * What to edit: Adjust dropdown width, item layout, or badge styles here.
 */

import * as React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export function NavDropdown({ label, items }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    const handleClickOutside = (e) => {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={containerRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        className={cn(
          "inline-flex items-center gap-1 text-xs lg:text-sm px-3 py-1.5 rounded-full font-medium transition-colors cursor-pointer",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-1",
          isOpen ? "text-foreground bg-surface-hover" : "text-muted-foreground hover:text-foreground hover:bg-surface-hover"
        )}
      >
        <span>{label}</span>
        <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", isOpen && "rotate-180")} />
      </button>

      {isOpen && (
        <div
          role="menu"
          aria-label={`${label} menu`}
          className="absolute top-full left-0 mt-3 w-80 sm:w-96 rounded-2xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#0E1116] p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.18)] dark:shadow-[0_25px_65px_rgba(0,0,0,0.85)] z-50 pointer-events-auto"
        >
          <div className="flex flex-col gap-1">
            {items.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                role="menuitem"
                onClick={() => setIsOpen(false)}
                className="flex flex-col gap-1 p-3 rounded-xl border border-transparent hover:border-black/5 dark:hover:border-white/5 hover:bg-slate-100/80 dark:hover:bg-white/[0.06] transition-all group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-semibold text-slate-900 dark:text-zinc-100 group-hover:text-accent transition-colors">
                    {item.title}
                  </span>
                  {item.badge && (
                    <Badge variant="accent" className="text-[10px] py-0 px-1.5 font-medium">
                      {item.badge}
                    </Badge>
                  )}
                </div>
                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
