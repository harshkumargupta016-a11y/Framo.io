"use client";

/**
 * THEME PROVIDER
 * What this file does: Wraps application with next-themes provider to handle dark/light mode switching without hydration flash.
 * What to edit: Adjust defaultTheme or attribute settings here if changing theme behavior.
 */

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}

