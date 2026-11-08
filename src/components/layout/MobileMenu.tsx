"use client";

/**
 * MOBILE MENU COMPONENT
 * What this file does: Renders the responsive animated slide-down sheet for viewports under 768px with touch targets and Escape key handler.
 * What to edit: Adjust mobile drawer animation, accordion expansion, or action placement here.
 */

import * as React from "react";
import Link from "next/link";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import { NavLinkItem } from "@/config/site";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLinkItem[];
  actions: { login: { label: string; href: string }; signup: { label: string; href: string } };
}

export function MobileMenu({ isOpen, onClose, links, actions }: MobileMenuProps) {
  const [expandedIndex, setExpandedIndex] = React.useState<number | null>(null);

  React.useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      {/* Click-outside backdrop */}
      <div
        className="fixed inset-0 bg-background/60 backdrop-blur-sm z-40 md:hidden pointer-events-auto"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
        className="md:hidden pointer-events-auto fixed inset-x-3 top-18 max-h-[82vh] overflow-y-auto p-5 rounded-2xl bg-card border border-border shadow-float z-50 flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-200"
      >
        <div className="flex flex-col divide-y divide-border/60">
          {links.map((link, idx) => {
            if (link.dropdown) {
              const isExpanded = expandedIndex === idx;
              return (
                <div key={link.label} className="py-1">
                  <button
                    type="button"
                    onClick={() => setExpandedIndex(isExpanded ? null : idx)}
                    className="w-full min-h-[44px] flex items-center justify-between text-sm font-semibold text-foreground py-1"
                  >
                    <span>{link.label}</span>
                    <ChevronDown className={cn("w-4 h-4 transition-transform", isExpanded && "rotate-180")} />
                  </button>
                  {isExpanded && (
                    <div className="mt-1 space-y-1 pl-2 border-l-2 border-border/70">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.title}
                          href={sub.href}
                          onClick={onClose}
                          className="min-h-[40px] flex items-center justify-between py-1.5 text-xs text-muted-foreground hover:text-foreground"
                        >
                          <span>{sub.title}</span>
                          {sub.badge && <Badge variant="accent" className="text-[9px] py-0">{sub.badge}</Badge>}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={link.label}
                href={link.href || "#"}
                onClick={onClose}
                className="min-h-[44px] flex items-center justify-between text-sm font-semibold text-foreground hover:text-foreground/80 py-1"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
              </Link>
            );
          })}
        </div>

        <div className="pt-2 flex flex-col gap-2.5">
          <Button href={actions.login.href} variant="outline" size="md" onClick={onClose} className="w-full min-h-[44px]">
            {actions.login.label}
          </Button>
          <Button href={actions.signup.href} variant="primary" size="md" onClick={onClose} className="w-full min-h-[44px]">
            {actions.signup.label}
          </Button>
        </div>
      </div>
    </>
  );
}
