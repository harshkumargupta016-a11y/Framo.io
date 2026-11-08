/**
 * FOOTER CONTENT
 * What this file does: Stores column categories, navigation links, status indicators, and legal copy for the footer.
 * What to edit: Update footer links, categories, or copyright text here.
 */

export const footerContent = {
  brand: {
    name: "Framo",
    description: "The pro website and product development canvas designed for high-craft teams and modern AI agents.",
  },
  status: {
    indicator: "operational",
    label: "All systems normal",
    href: "https://status.framo.io",
  },
  columns: [
    {
      title: "Product",
      links: [
        { label: "Visual Canvas", href: "#features" },
        { label: "Design Agents", href: "#workflow", badge: "AI" },
        { label: "Interactions & Physics", href: "#showcase" },
        { label: "Pricing & Plans", href: "#pricing" },
        { label: "Changelog", href: "#changelog", badge: "v2.4" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "#features" },
        { label: "Community Showcase", href: "#showcase" },
        { label: "Component Library", href: "#features" },
        { label: "Framer MCP Server", href: "#workflow" },
        { label: "Guides & Tutorials", href: "#features" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Framo", href: "#about" },
        { label: "Customers", href: "#testimonials" },
        { label: "Careers", href: "#careers", badge: "Hiring" },
        { label: "Brand Kit", href: "#brand" },
        { label: "Contact Us", href: "#contact" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#privacy" },
        { label: "Terms of Service", href: "#terms" },
        { label: "Security & Compliance", href: "#security" },
        { label: "Cookie Preferences", href: "#cookies" },
      ],
    },
  ],
  socials: [
    { label: "Twitter", href: "https://twitter.com/framo_hq" },
    { label: "GitHub", href: "https://github.com/framo-hq" },
    { label: "Discord", href: "https://discord.gg/framo" },
  ],
  meta: {
    version: "Framo v2.4",
    compliance: "WCAG 2.1 AA Compliant",
  },
  copyright: `© ${new Date().getFullYear()} Framo Inc. All rights reserved.`,
};
