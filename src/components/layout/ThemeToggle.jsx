"use client";

/**
 * THEME TOGGLE
 * What this file does: Accessible theme toggle with touch-friendly 40px+ tap area, crisp contrast, and visible focus rings.
 * What to edit: Change icons, button sizing, or theme transition behavior here.
 */

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { siteConfig } from "@/config/site";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (resolvedTheme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  const isDark = mounted ? resolvedTheme === "dark" : true;
  const { lightLabel, darkLabel, defaultTitle } = siteConfig.themeToggle;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="relative inline-flex items-center justify-center w-10 h-10 sm:w-9 sm:h-9 rounded-md border border-black/10 dark:border-white/10 bg-white dark:bg-[#12151B] text-slate-800 dark:text-zinc-100 transition-colors hover:bg-slate-100 dark:hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-background cursor-pointer shadow-sm"
      aria-label={mounted ? (isDark ? lightLabel : darkLabel) : defaultTitle}
      title={mounted ? (isDark ? lightLabel : darkLabel) : defaultTitle}
    >
      {isDark ? (
        <Sun className="h-4 w-4 text-amber-400 dark:text-zinc-100 transition-transform duration-200 rotate-0 scale-100" />
      ) : (
        <Moon className="h-4 w-4 text-slate-800 dark:text-zinc-100 transition-transform duration-200 rotate-0 scale-100" />
      )}
    </button>
  );
}
