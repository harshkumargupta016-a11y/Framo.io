/**
 * ROOT LAYOUT
 * What this file does: Configures fonts, metadata, theme provider, 3D WebGL background, and smooth inertia scroll.
 * What to edit: Update top-level font configuration, favicon, or global providers here.
 */

import { Inter, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { Scene3DBackground } from "@/components/3d/Scene3DBackground";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { siteConfig } from "@/config/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans min-h-screen bg-background text-foreground antialiased selection:bg-accent selection:text-white`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SmoothScroll>
            <Scene3DBackground />
            <ScrollProgressBar />
            <CustomCursor />
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
