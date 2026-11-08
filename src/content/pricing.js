/**
 * PRICING CONTENT
 * What this file does: Stores pricing tiers, billing cycle options, and feature comparison lists.
 * What to edit: Update plan prices, feature checkmarks, CTA buttons, or discounts here.
 */

export const pricingContent = {
  header: {
    badge: "Transparent Pricing",
    title: "Simple, predictable plans for every stage",
    description: "Start designing for free. Upgrade as your team grows and ships high-impact products.",
  },
  discountBadge: "Save 20% on Annual",
  intervals: {
    monthly: "Monthly",
    annual: "Annual",
  },
  tiers: [
    {
      id: "starter",
      name: "Starter",
      description: "Ideal for freelancers and side-project builders exploring spatial web design.",
      priceMonthly: "$0",
      priceAnnual: "$0",
      period: "forever free",
      features: [
        "Up to 3 active live projects",
        "Full spatial visual canvas editor",
        "Standard physics and spring animations",
        "Community support & templates",
        "Framo sub-domain hosting",
      ],
      cta: {
        label: "Get started for free",
        href: "#pricing",
        variant: "secondary",
      },
    },
    {
      id: "pro",
      name: "Pro",
      description: "Designed for high-craft designers and teams requiring AI agents and custom domains.",
      priceMonthly: "$24",
      priceAnnual: "$19",
      period: "/ editor / month",
      popular: true,
      badge: "Most Popular",
      features: [
        "Unlimited live production projects",
        "Autonomous AI design agent access",
        "Custom domains & automatic SSL",
        "Global edge CDN with sub-20ms latency",
        "Full CMS with 10,000 items",
        "Remove Framo branding badge",
        "Priority email & chat support",
      ],
      cta: {
        label: "Start 14-day free trial",
        href: "#pricing",
        variant: "primary",
      },
    },
    {
      id: "enterprise",
      name: "Enterprise",
      description: "For scaling organizations demanding dedicated agents, SSO, and guaranteed SLAs.",
      priceMonthly: "$79",
      priceAnnual: "$64",
      period: "/ editor / month",
      badge: "Custom Scale",
      features: [
        "Everything in Pro without limits",
        "Dedicated fine-tuned AI design models",
        "SAML SSO & advanced role permissions",
        "99.99% guaranteed uptime SLA",
        "Unlimited CMS items and asset storage",
        "Dedicated customer success manager",
        "Custom billing & invoicing terms",
      ],
      cta: {
        label: "Contact sales",
        href: "#pricing",
        variant: "outline",
      },
    },
  ],
};
