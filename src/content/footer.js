/**
 * FOOTER CONTENT
 * What this file does: Stores column categories, navigation links, status indicators, and legal copy for the footer.
 * What to edit: Update footer links, categories, or copyright text here.
 */

import { siteConfig } from "@/config/site";

export const footerContent = {
  brand: {
    name: "Framo",
    description: "The pro website and product development canvas designed for high-craft teams and modern AI agents.",
  },
  columns: [
    {
      title: "Product",
      links: [
        { label: "Visual Canvas", href: "#showcase" },
        { label: "Design Agents", href: "#workflow", badge: "AI" },
        { label: "Interactions & Physics", href: "#features" },
        { label: "Pricing & Plans", href: "#pricing" },
        { label: "Changelog", href: "/coming-soon?feature=Changelog", badge: "v2.4" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "/coming-soon?feature=Documentation" },
        { label: "Community Showcase", href: "#showcase" },
        { label: "Component Library", href: "#features" },
        { label: "Framo MCP Server", href: "#workflow" },
        { label: "Guides & Tutorials", href: "/coming-soon?feature=Guides" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Framo", href: "/coming-soon?feature=About+Framo" },
        { label: "Customers", href: "#testimonials" },
        { label: "Careers", href: "/coming-soon?feature=Careers", badge: "Hiring" },
        { label: "Brand Kit", href: "/coming-soon?feature=Brand+Kit" },
        { label: "Contact Us", href: "/coming-soon?feature=Contact+Us" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/coming-soon?feature=Privacy+Policy" },
        { label: "Terms of Service", href: "/coming-soon?feature=Terms+of+Service" },
        { label: "Security & Compliance", href: "/coming-soon?feature=Security+and+Compliance" },
        { label: "Cookie Preferences", href: "/coming-soon?feature=Cookie+Preferences" },
      ],
    },
  ],
  socials: [
    { label: "Twitter", href: siteConfig.links.twitter },
    { label: "GitHub", href: siteConfig.links.github },
    { label: "Discord", href: siteConfig.links.discord },
  ],
  meta: {
    version: "Framo v2.4",
    compliance: "High-Craft Baseline",
  },
  copyright: `© ${new Date().getFullYear()} Framo Inc. All rights reserved.`,
};
