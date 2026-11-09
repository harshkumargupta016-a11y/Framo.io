/**
 * FOOTER COMPONENT
 * What this file does: Renders the site footer with columns, status indicator, socials, and legal metadata.
 * What to edit: Content is imported from /src/content/footer.js; styling uses /src/styles/tokens.css.
 */

import Link from "next/link";
import { footerContent } from "@/content/footer";
import { siteConfig } from "@/config/site";
import { Badge } from "@/components/ui/Badge";

export function Footer() {
  const { brand, columns, socials, meta, copyright } = footerContent;

  return (
    <footer className="border-t border-border bg-surface/40 text-foreground py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-content mx-auto flex flex-col gap-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-border/60">
          <div className="space-y-1.5 max-w-sm">
            <Link
              href="/"
              className="flex items-center gap-2 font-semibold tracking-tight text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground rounded-md w-fit"
            >
              <span className="w-5 h-5 rounded-md bg-foreground text-background flex items-center justify-center text-xs font-bold">
                {siteConfig.monogram}
              </span>
              <span>{brand.name}</span>
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed">{brand.description}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {columns.map((column) => (
            <div key={column.title} className="space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {column.title}
              </h3>
              <ul className="space-y-1">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="min-h-[32px] text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground rounded-sm py-1"
                    >
                      <span>{link.label}</span>
                      {link.badge && (
                        <Badge variant="outline" className="text-[10px] px-1.5 py-0">
                          {link.badge}
                        </Badge>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>{copyright}</p>
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px]">{meta.version}</span>
            <span>•</span>
            <span className="text-[11px]">{meta.compliance}</span>
            <span>•</span>
            {socials.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[36px] inline-flex items-center hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground rounded-sm"
              >
                {social.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
