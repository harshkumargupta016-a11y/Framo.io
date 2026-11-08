"use client";

/**
 * COMMAND MENU COMPONENT (⌘K / Ctrl+K)
 * What this file does: Raycast-style floating command palette modal for searching sections, actions, and theme toggling.
 * What to edit: Command list and shortcuts come from /src/content/commandMenu.ts; styling uses /src/styles/tokens.css.
 */

import * as React from "react";
import { Search, X, ArrowRight, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import { commandMenuContent, CommandItem } from "@/content/commandMenu";

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandMenu({ isOpen, onClose }: CommandMenuProps) {
  const [query, setQuery] = React.useState("");
  const { setTheme, resolvedTheme } = useTheme();
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  // Handle Escape key
  React.useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (isOpen) document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filtered = commandMenuContent.commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (cmd: CommandItem) => {
    if (cmd.actionId === "toggle-theme") {
      setTheme(resolvedTheme === "dark" ? "light" : "dark");
    } else if (cmd.href) {
      window.location.hash = cmd.href.replace("#", "");
    }
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command Palette"
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 p-4 bg-background/70 backdrop-blur-md animate-in fade-in duration-150"
    >
      <div className="w-full max-w-lg rounded-2xl border border-border bg-card shadow-float overflow-hidden flex flex-col">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border">
          <Search className="w-4 h-4 text-muted-foreground shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={commandMenuContent.placeholder}
            className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
          />
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-md text-muted-foreground hover:text-foreground cursor-pointer"
            aria-label="Close command palette"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-72 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <p className="p-4 text-xs text-center text-muted-foreground">
              {commandMenuContent.emptyMessage}
            </p>
          ) : (
            filtered.map((cmd) => (
              <button
                key={cmd.id}
                type="button"
                onClick={() => handleSelect(cmd)}
                className="w-full flex items-center justify-between p-2.5 rounded-xl text-left text-xs text-foreground hover:bg-surface-hover transition-colors group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
              >
                <div className="flex items-center gap-2.5">
                  {cmd.actionId === "toggle-theme" ? (
                    resolvedTheme === "dark" ? <Sun className="w-3.5 h-3.5 text-accent" /> : <Moon className="w-3.5 h-3.5 text-accent" />
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5 text-muted-foreground group-hover:text-foreground transition-colors" />
                  )}
                  <span className="font-medium">{cmd.title}</span>
                </div>
                {cmd.shortcut && (
                  <span className="font-mono text-[10px] text-muted-foreground bg-muted px-1.5 py-0.5 rounded border border-border/50">
                    {cmd.shortcut}
                  </span>
                )}
              </button>
            ))
          )}
        </div>

        {/* Bottom Shortcut Hint */}
        <div className="px-4 py-2 border-t border-border/50 bg-surface/40 flex items-center justify-between text-[11px] text-muted-foreground font-mono">
          <span>{commandMenuContent.shortcutHint}</span>
          <span className="text-[10px]">{commandMenuContent.badge}</span>
        </div>
      </div>
    </div>
  );
}
