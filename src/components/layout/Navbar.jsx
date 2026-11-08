"use client";

/**
 * NAVBAR COMPONENT
 * What this file does: Floating capsule nav with dropdowns, mobile menu, theme toggle, and ⌘K Command Palette.
 * What to edit: Navigation links come from /src/config/site.js; styling is mapped to /src/styles/tokens.css.
 */

import * as React from "react";
import Link from "next/link";
import { Menu, X, Search } from "lucide-react";
import { siteConfig } from "@/config/site";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { NavDropdown } from "@/components/layout/NavDropdown";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { CommandMenu } from "@/components/ui/CommandMenu";
import { Button } from "@/components/ui/Button";
import { useScrollPosition } from "@/lib/hooks";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [commandMenuOpen, setCommandMenuOpen] = React.useState(false);
  const isScrolled = useScrollPosition() > 20;
  const { links, actions } = siteConfig.navigation;

  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setCommandMenuOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-2.5 sm:p-4 pointer-events-none">
      <nav
        aria-label="Main Navigation"
        className={cn(
          "pointer-events-auto w-full max-w-content mx-auto transition-all duration-200",
          "rounded-full px-3.5 sm:px-6 py-2 sm:py-2.5 flex items-center justify-between",
          isScrolled ? "bg-background/80 backdrop-blur-md border border-border shadow-float" : "bg-surface/70 backdrop-blur-sm border border-border/60"
        )}
      >
        <Link href="/" className="flex items-center gap-2 text-foreground font-semibold tracking-tight text-sm sm:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground rounded-full px-1">
          <span className="w-5 h-5 rounded-md bg-foreground text-background flex items-center justify-center text-xs font-bold shadow-sm">{siteConfig.monogram}</span>
          <span>{siteConfig.name}</span>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {links.map((link) =>
            link.dropdown ? (
              <NavDropdown key={link.label} label={link.label} items={link.dropdown} />
            ) : (
              <Link key={link.label} href={link.href || "#"} className="text-xs lg:text-sm text-muted-foreground hover:text-foreground px-3 py-1.5 rounded-full transition-colors hover:bg-surface-hover font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground">
                {link.label}
              </Link>
            )
          )}
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2.5">
          <button type="button" onClick={() => setCommandMenuOpen(true)} className="hidden lg:inline-flex items-center gap-1.5 px-2.5 py-1 text-xs text-muted-foreground hover:text-foreground bg-surface/80 hover:bg-surface-hover border border-border rounded-full transition-colors cursor-pointer" aria-label="Open Command Menu (Ctrl+K)">
            <Search className="w-3 h-3" />
            <span className="font-mono text-[10px] bg-muted px-1.5 py-0.2 rounded border border-border/50">⌘K</span>
          </button>
          <ThemeToggle />
          <Link href={actions.login.href} className="hidden sm:inline-flex text-xs lg:text-sm text-muted-foreground hover:text-foreground px-3 py-1.5 font-medium transition-colors hover:bg-surface-hover rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground">
            {actions.login.label}
          </Link>
          <Button href={actions.signup.href} size="sm" variant="primary" className="rounded-full text-xs font-medium">
            {actions.signup.label}
          </Button>
          <button type="button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden w-10 h-10 flex items-center justify-center text-muted-foreground hover:text-foreground rounded-full hover:bg-surface-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground cursor-pointer" aria-label={mobileMenuOpen ? "Close menu" : "Open menu"} aria-expanded={mobileMenuOpen}>
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} links={links} actions={actions} />
      <CommandMenu isOpen={commandMenuOpen} onClose={() => setCommandMenuOpen(false)} />
    </header>
  );
}
