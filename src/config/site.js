/**
 * SITE CONFIGURATION
 * What this file does: Stores top-level website metadata, branding details, theme labels, and external & navigation links.
 * What to edit: Update site name, external URLs, social channels, and navigation structure here.
 */

export const siteConfig = {
  name: "Framo",
  monogram: "F",
  title: "Framo — The Pro Website & Product Builder for Teams and Agents",
  description:
    "Purpose-built for designing, building, and publishing modern web experiences with visual precision, spatial physics, and AI agents.",
  url: "https://framo.io",
  ogImage: "/og.jpg",
  creator: "@framo_hq",
  links: {
    status: "https://status.framo.io",
    twitter: "https://twitter.com/framo_hq",
    github: "https://github.com/framo-hq",
    discord: "https://discord.gg/framo",
    documentation: "/coming-soon?feature=Documentation",
    guides: "/coming-soon?feature=Guides",
  },
  themeToggle: {
    lightLabel: "Switch to light theme",
    darkLabel: "Switch to dark theme",
    defaultTitle: "Toggle theme",
  },
  navigation: {
    links: [
      {
        label: "Product",
        dropdown: [
          {
            title: "Canvas Studio",
            description: "Freeform visual design surface with real DOM layout fidelity.",
            href: "#showcase",
            badge: "New",
          },
          {
            title: "Physics & Motion",
            description: "Fluid spring animations, layout transitions, and scroll effects.",
            href: "#features",
          },
          {
            title: "Design Agent",
            description: "AI pair designer that creates and refactors responsive layouts.",
            href: "#workflow",
            badge: "AI",
          },
          {
            title: "Headless CMS",
            description: "Dynamic content collections, localization, and rapid publishing.",
            href: "#features",
          },
        ],
      },
      {
        label: "Solutions",
        dropdown: [
          {
            title: "For Product Teams",
            description: "Bridge the gap between product design and production code.",
            href: "#species",
          },
          {
            title: "For Founders",
            description: "Launch world-class landing pages and apps in hours.",
            href: "#workflow",
          },
          {
            title: "For Agencies",
            description: "Deliver bespoke client experiences at scale.",
            href: "#testimonials",
          },
        ],
      },
      {
        label: "Resources",
        dropdown: [
          {
            title: "Documentation",
            description: "Comprehensive guides, API references, and quickstarts.",
            href: "/coming-soon?feature=Documentation",
          },
          {
            title: "Showcase Gallery",
            description: "Explore the best websites designed with Framo.",
            href: "#showcase",
          },
          {
            title: "Changelog",
            description: "See what's new in our weekly product releases.",
            href: "/coming-soon?feature=Changelog",
            badge: "v2.4",
          },
        ],
      },
      {
        label: "Customers",
        href: "#testimonials",
      },
      {
        label: "Pricing",
        href: "#pricing",
      },
    ],
    actions: {
      login: {
        label: "Log in",
        modalType: "login",
      },
      signup: {
        label: "Sign up",
        modalType: "signup",
      },
    },
  },
};
