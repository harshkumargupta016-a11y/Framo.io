# DESIGN SPECIFICATION: FRAMO.IO

A unified, high-craft design system and architecture spec synthesizing the best of **Framer** (visual canvas, interactive viewport previews, modern builder layout), **Linear** (craft precision, typography tightness, monochromatic depth, micro-interactions), and **Raycast** (deep dark atmosphere, ambient directional glow, floating capsule navigation, keyboard ergonomics).

---

## 1. Page Section List (In Order)

1. **Floating Navigation Bar**: Sticky frosted capsule header with logo, product/feature links with dropdown indicators, action buttons (Log in, Sign up / Get Started), and theme toggle.
2. **Hero Section**: High-impact statement headline, subtitle, dual CTAs ("Get started for free" and "Explore Canvas"), feature pill badge ("New: Design Agent 2.0 ->"), and ambient background glow.
3. **Interactive Canvas Viewport (Showcase)**: Live-feeling mock canvas preview featuring viewport switcher tabs (Desktop 1440px / Tablet 768px / Mobile 390px), zoom controls, and interactive layout elements.
4. **Social Proof (Logo Ticker)**: Subtle monochromatic partner/client marquee showcasing teams building with Framo.
5. **Feature Bento Grid (Core Capabilities)**: Multi-column bento showcase highlighting 4 core pillars: Visual Design Engine, Interactive Physics & Motion, CMS & Live Collaboration, and Lightning Fast Publishing.
6. **Workflow & Agent Demonstration (Tabs/Interactive Flow)**: Tabbed walkthrough showing how teams plan, design, and publish in three seamless steps.
7. **Performance & Comparison Metrics**: Side-by-side metric highlight (99.9% uptime, 100/100 Lighthouse performance, sub-50ms interaction latency).
8. **Customer Testimonials (Wall of Love)**: 3-column curated feedback cards with user avatars, roles, verified badges, and pull quotes.
9. **Transparent Pricing Section**: Interactive Monthly / Annual billing toggle (with "-20% discount" badge), 3 tier cards (Starter, Pro, Enterprise) with feature checkmarks and highlight badges.
10. **Frequently Asked Questions (FAQ Accordion)**: Clean accessible accordion answering top developer and designer questions.
11. **Final Call-to-Action (Conversion Banner)**: High-contrast ambient glow container inviting users to build their next product.
12. **Site Footer**: Multi-column navigation links, social icons, status indicator ("All systems operational"), copyright, and legal links.

---

## 2. Typography Specification

Primary Font Family: **Inter** (Google Font — closest match to Linear/Framer SF Pro / Inter display)
Monospace Font Family: **JetBrains Mono** (Google Font — for code pills, shortcuts, and canvas metric tags)

| Element | Font Size (Desktop) | Font Size (Mobile) | Font Weight | Line Height | Letter Spacing |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display / H1** | `64px` (`4rem`) | `36px` (`2.25rem`) | `600` (SemiBold) | `1.08` (`108%`) | `-0.035em` |
| **Section H2** | `44px` (`2.75rem`) | `28px` (`1.75rem`) | `600` (SemiBold) | `1.15` (`115%`) | `-0.025em` |
| **Card H3** | `22px` (`1.375rem`) | `18px` (`1.125rem`) | `600` (SemiBold) | `1.30` (`130%`) | `-0.015em` |
| **Subtitle / Lead** | `18px` (`1.125rem`) | `16px` (`1rem`) | `400` (Regular) | `1.60` (`160%`) | `-0.010em` |
| **Body (Default)** | `15px` (`0.9375rem`) | `14px` (`0.875rem`) | `400` (Regular) | `1.55` (`155%`) | `0em` |
| **Small / Caption** | `13px` (`0.8125rem`) | `12px` (`0.75rem`) | `500` (Medium) | `1.40` (`140%`) | `+0.010em` |
| **Code / Kbd** | `12px` (`0.75rem`) | `11px` (`0.6875rem`) | `500` (Medium) | `1.20` (`120%`) | `-0.010em` |
| **Button Text** | `14px` (`0.875rem`) | `14px` (`0.875rem`) | `500` (Medium) | `1.00` (`100%`) | `-0.010em` |

---

## 3. Color Palette (Tokens)

All colors defined as CSS variables in `src/styles/tokens.css` with semantic mapping for Tailwind CSS.

### Dark Theme (Default — Linear & Raycast inspired)
- **Background (`--bg-base`)**: `#08090A` (Deepest neutral charcoal-black)
- **Surface / Card (`--bg-surface`)**: `#121316` (Subtle elevated dark gray)
- **Surface Hover (`--bg-surface-hover`)**: `#1A1C20`
- **Foreground (`--text-primary`)**: `#F7F8F8` (Crisp off-white)
- **Muted Foreground (`--text-secondary`)**: `#8A8F98` (Sophisticated slate-gray)
- **Subtle Foreground (`--text-tertiary`)**: `#565A61`
- **Border (`--border-subtle`)**: `rgba(255, 255, 255, 0.08)` (1px precision border)
- **Border Strong (`--border-strong`)**: `rgba(255, 255, 255, 0.16)`
- **Primary Accent (`--accent-primary`)**: `#FFFFFF` (Linear-style high-contrast pure white button)
- **Primary Accent Foreground**: `#08090A`
- **Secondary Accent (Raycast Glow)**: `#FF4B4B` (Crimson beam) & `#6366F1` (Indigo beam)
- **Gradients**:
  - Hero Glow: `radial-gradient(circle at 50% -20%, rgba(255, 75, 75, 0.18), rgba(99, 102, 241, 0.12), transparent 70%)`
  - Card Sheen: `linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.00) 100%)`

### Light Theme (Clean High-Contrast Studio)
- **Background (`--bg-base`)**: `#FFFFFF` (Pure white)
- **Surface / Card (`--bg-surface`)**: `#F9FAFB` (Subtle soft gray)
- **Surface Hover (`--bg-surface-hover`)**: `#F3F4F6`
- **Foreground (`--text-primary`)**: `#0B0C0E` (Deep ink black)
- **Muted Foreground (`--text-secondary`)**: `#4B5563`
- **Subtle Foreground (`--text-tertiary`)**: `#9CA3AF`
- **Border (`--border-subtle`)**: `rgba(0, 0, 0, 0.08)`
- **Border Strong (`--border-strong`)**: `rgba(0, 0, 0, 0.16)`
- **Primary Accent (`--accent-primary`)**: `#0B0C0E`
- **Primary Accent Foreground**: `#FFFFFF`
- **Secondary Accent**: `#E11D48` & `#4F46E5`

---

## 4. Spacing Scale, Layout & Shapes

- **Base Spacing Grid**: 4px baseline (`4px`, `8px`, `12px`, `16px`, `24px`, `32px`, `48px`, `64px`, `80px`, `112px`)
- **Container Max-Width**: `1200px` (`max-w-6xl` for focused content; `1360px` for canvas showcase)
- **Section Padding**:
  - Desktop (1440px): `py-24 px-6` (96px vertical)
  - Tablet (768px): `py-16 px-6` (64px vertical)
  - Mobile (390px): `py-12 px-4` (48px vertical)
- **Border Radii**:
  - Small (Pills, badges, kbd): `9999px` (`rounded-full`) or `6px` (`rounded-sm`)
  - Medium (Buttons, inputs): `8px` (`rounded-md`)
  - Large (Cards, preview containers): `16px` (`rounded-2xl`)
  - Floating Nav Capsule: `24px` (`rounded-full`)
- **Elevation / Shadows**:
  - Card Shadow: `0 0 0 1px var(--border-subtle), 0 8px 24px -4px rgba(0, 0, 0, 0.4)`
  - Glow Shadow: `0 0 40px -10px rgba(255, 75, 75, 0.25)`

---

## 5. Interactions, Animations & Micro-states

1. **Floating Navbar**:
   - Scroll effect: background opacity transitions from `0` to `backdrop-blur-md bg-background/80` after 20px scroll.
   - Dropdown hover: smooth opacity and translateY fade (`150ms ease-out`).
   - Mobile sheet: smooth slide-down sheet when hamburger icon is clicked.
2. **Buttons**:
   - Primary: Hover brightness 1.05, active scale `0.98`, focus-visible `ring-2 ring-primary ring-offset-2`.
   - Secondary / Ghost: 1px border highlight on hover, subtle background shift.
3. **Interactive Canvas Viewport (Showcase)**:
   - Interactive tab triggers: clicking `Desktop`, `Tablet`, `Mobile` triggers a smooth spring animation resizing the canvas frame width (100% -> 768px -> 390px).
   - Zoom pill: increments / resets preview scale.
4. **Bento Grid Cards**:
   - Hover glow effect: mouse-tracking subtle border shine or top-to-bottom shimmer (`transition: border-color 0.2s`).
   - Inner interactive mock: interactive toggle or switch inside the card.
5. **Pricing Switcher**:
   - Smooth pill slider animating between "Monthly" and "Annual" with Framer Motion `layoutId="billing-pill"`.
6. **FAQ Accordion**:
   - Single or multi-expand animated height using Framer Motion `AnimatePresence` and spring easing (`damping: 24, stiffness: 260`).
7. **Scroll Reveal Motion**:
   - Shared config in `src/config/motion.ts`: staggered fade-in + slight upward shift (`y: 16 -> 0`, `opacity: 0 -> 1`, `duration: 0.5s`).

---

## 6. Responsive Breakdown (390px, 768px, 1440px)

| Section | Mobile (390px) | Tablet (768px) | Desktop (1440px) |
| :--- | :--- | :--- | :--- |
| **Navbar** | Logo + Theme Toggle + Sign up + Hamburger | Logo + Links visible + Sign up | Centered floating capsule with all menu items & CTAs |
| **Hero** | Stacked vertically, centered 36px H1, full-width CTAs | Centered 48px H1, inline button row | Max-width 880px headline, inline CTA buttons + side badge |
| **Canvas Showcase** | Fits 100% width with horizontal drag/scroll indicator | Scaled preview with tab selector | Full 1280px interactive frame with live viewport mode switcher |
| **Logo Ticker** | Auto-scrolling marquee (4 logos visible) | Auto-scrolling marquee (6 logos) | Static/marquee balanced grid with 8 logos |
| **Bento Grid** | 1 column stacked cards | 2 columns grid | 3 columns asymmetric bento layout (span-2 + span-1) |
| **Workflow Tabs** | Stacked step cards with accordions | 3 horizontal tabs, preview below | Left column interactive steps, right column live graphic |
| **Pricing** | Stacked 3 cards, recommended card first | 3 cards in vertical or 2+1 layout | 3 equal columns with center card highlighted |
| **FAQ** | Full-width single column accordion | Max-width 720px centered | Max-width 840px centered |
| **Footer** | 2-column link stacks + bottom legal row | 4-column links | 5-column comprehensive footer with newsletter & status |

---

## 7. Component Architecture & Content Mapping

All components strictly adhere to the no-hardcoding rule. Content resides in `/src/content/*.ts` and design tokens in `/src/styles/tokens.css`.

| Component Name | File Path | Content Data Source (`/src/content/`) | Key Props / Responsibilities |
| :--- | :--- | :--- | :--- |
| `Navbar` | `/src/components/layout/Navbar.tsx` | `site.ts`, `navigation.ts` | Sticky capsule, links, mobile sheet state, theme toggle |
| `Footer` | `/src/components/layout/Footer.tsx` | `site.ts`, `footer.ts` | Multi-column links, status pill, social icons |
| `ThemeToggle` | `/src/components/layout/ThemeToggle.tsx` | `tokens.css` | Accessible Dark/Light mode switcher |
| `HeroSection` | `/src/components/sections/HeroSection.tsx` | `hero.ts` | Headline, subtitle, CTA links, announcement pill |
| `CanvasShowcase` | `/src/components/sections/CanvasShowcase.tsx` | `showcase.ts` | Interactive canvas container, viewport mode tabs |
| `LogoTicker` | `/src/components/sections/LogoTicker.tsx` | `logos.ts` | Infinite marquee of partner logos |
| `BentoGrid` | `/src/components/sections/BentoGrid.tsx` | `features.ts` | 4 bento cards with micro-illustrations & tags |
| `WorkflowSection` | `/src/components/sections/WorkflowSection.tsx` | `workflow.ts` | Interactive tabbed workflow demonstrator |
| `MetricsSection` | `/src/components/sections/MetricsSection.tsx` | `metrics.ts` | Stat cards with big numerals and sub-labels |
| `Testimonials` | `/src/components/sections/Testimonials.tsx` | `testimonials.ts` | Curated quote cards with author metadata |
| `PricingSection` | `/src/components/sections/PricingSection.tsx` | `pricing.ts` | Monthly/annual switcher, tier feature checkmarks |
| `FaqSection` | `/src/components/sections/FaqSection.tsx` | `faq.ts` | Accessible animated accordion item list |
| `CtaSection` | `/src/components/sections/CtaSection.tsx` | `cta.ts` | Closing conversion banner with ambient glow |
| `Button` | `/src/components/ui/Button.tsx` | N/A (Reusable primitive) | Variant (`primary`, `secondary`, `ghost`), size, href |
| `Badge` | `/src/components/ui/Badge.tsx` | N/A (Reusable primitive) | Variant (`neutral`, `accent`, `outline`), size, icon |
| `Card` | `/src/components/ui/Card.tsx` | N/A (Reusable primitive) | Surface token, 1px border, hover highlight |
| `SectionHeading` | `/src/components/ui/SectionHeading.tsx` | N/A (Reusable primitive) | Overline pill, title, subtitle, alignment |

---

## 8. Approval Checklist

- [x] Clear design harmony across Framer, Linear, and Raycast references
- [x] Zero hard-coded values requirement baked into content files
- [x] Full responsive specifications (390px, 768px, 1440px)
- [x] Accessibility (WCAG AA contrast, focus indicators, aria attributes)
- [x] Component size constraint (<100 lines per file, clear single responsibility)

