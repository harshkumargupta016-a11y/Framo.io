# Framo.io — Pro Website & Product Builder

A high-craft frontend web application recreating the **Framer** website experience (spatial canvas, live responsive viewport switcher, and modular builder layout) branded as **Framo**, with visual polish inspired by **Linear** (high-precision typography, technical figures, monochromatic depth) and **Raycast** (dark atmosphere, ambient angled glow streaks, floating capsule navigation).

Built with **React & Next.js 15 (App Router)** in pure JavaScript and JSX (no TypeScript), styled with **Tailwind CSS**, design tokens in CSS variables, **Lucide icons**, **Recharts**, and **Framer Motion**.

---

## 🚀 Run Commands

### 1. Development Server
```bash
npm run dev
```
Runs the local dev server on `http://localhost:3000`.

### 2. Production Build & Start
```bash
npm run build
npm run start
```
Compiles an optimized production build with static prerendering and runs the standalone production server.

### 3. Linting
```bash
npm run lint
```
Runs ESLint across all `.js` and `.jsx` files.

---

## 📁 Project Structure

```
Framo.io/
├── package.json                    -> Next.js 15, Tailwind, Recharts, Lucide, framer-motion, next-themes
├── tailwind.config.js              -> Tailwind configuration mapped to CSS token variables
├── jsconfig.json                   -> Path alias definitions (@/*)
├── next.config.mjs                 -> Next.js configuration
├── public/                         -> Static assets
│
└── src/
    ├── app/                        -> Next.js App Router
    │   ├── layout.jsx              -> Font loaders, ThemeProvider, ModalProvider, SmoothScroll
    │   ├── page.jsx                -> Landing page assembling all sections
    │   ├── coming-soon/
    │   │   └── page.jsx            -> Shared roadmap placeholder route for coming soon pages
    │   └── globals.css             -> CSS reset, tokens import, prefers-reduced-motion
    │
    ├── styles/
    │   └── tokens.css              -> CSS custom properties for light and dark themes
    │
    ├── config/
    │   ├── site.js                 -> Site metadata, external URLs, and navigation links
    │   └── motion.js               -> Animation variants, easings, and reduced-motion handling
    │
    ├── content/                    -> Single source of truth for text, metrics, and pricing
    │   ├── siteModals.js           -> Copy for login, signup, trial, demo, download & MCP modals
    │   ├── metrics.js              -> Single source of truth for performance figures
    │   ├── pricing.js              -> Starter ($0), Pro ($24/$19), and Enterprise (Custom)
    │   ├── hero.js                 -> Headline, pill badge, and hero CTA actions
    │   ├── showcase.js             -> Viewport switcher metadata (Desktop, Tablet, Mobile)
    │   ├── productSpecies.js       -> Linear-inspired 'A new species of product tool' section copy
    │   ├── features.js             -> Bento grid capability descriptions
    │   ├── workflow.js             -> 3-step prompt, polish, and publish walkthrough
    │   ├── testimonials.js         -> Wall of love quotes and customer authors
    │   ├── faq.js                  -> Accessible accordion questions and answers
    │   ├── cta.js                  -> Bottom conversion banner copy and guarantees
    │   ├── commandMenu.js          -> Searchable ⌘K command palette entries
    │   ├── logos.js                -> Partner logos marquee data
    │   └── footer.js               -> Column categories, status link, and legal metadata
    │
    ├── components/
    │   ├── 3d/
    │   │   └── Scene3DBackground.jsx -> Subtle WebGL canvas background
    │   ├── layout/
    │   │   ├── Navbar.jsx          -> Floating capsule navigation with keyboard shortcuts
    │   │   ├── NavDropdown.jsx     -> Dropdown menus with Arrow, Enter, and Esc support
    │   │   ├── MobileMenu.jsx      -> Animated drawer for mobile viewports (≥44px tap targets)
    │   │   ├── ThemeToggle.jsx     -> Light/dark theme switch using tokens
    │   │   └── Footer.jsx          -> Multi-column footer and system status indicator
    │   ├── providers/
    │   │   ├── ThemeProvider.jsx   -> next-themes provider
    │   │   ├── ModalProvider.jsx   -> Global dialog context for signup, demo, and early access
    │   │   └── SmoothScroll.jsx    -> Lenis inertia scrolling provider
    │   ├── sections/
    │   │   ├── HeroSection.jsx     -> Hero headline, atmospheric glow, and modal buttons
    │   │   ├── CanvasShowcase.jsx  -> Viewport mockup resizing between Desktop, Tablet, Mobile
    │   │   ├── CanvasPreview.jsx   -> Simulated canvas visual workspace
    │   │   ├── LogoTicker.jsx      -> Partner logo marquee
    │   │   ├── ProductSpeciesSection.jsx -> Linear-inspired technical tool section
    │   │   ├── SpeciesVisuals.jsx  -> 3D technical SVG figures for the species section
    │   │   ├── BentoGrid.jsx       -> 4-card asymmetric features grid
    │   │   ├── WorkflowSection.jsx -> 3-step walkthrough with code snippets
    │   │   ├── MetricsSection.jsx  -> Real-time metric cards and Recharts visualizer
    │   │   ├── Testimonials.jsx    -> 3-column customer feedback quotes
    │   │   ├── PricingSection.jsx  -> Monthly/Annual billing switcher (20% discount)
    │   │   ├── PricingCard.jsx     -> Individual pricing card with 3D tilt
    │   │   ├── FaqSection.jsx      -> Collapsible accordion with full ARIA attributes
    │   │   └── CtaSection.jsx      -> Bottom conversion banner
    │   └── ui/
    │       ├── ActionModal.jsx     -> Accessible dialog with focus trap and Esc handling
    │       ├── Button.jsx          -> Button and link primitive with states
    │       ├── Badge.jsx           -> Status and feature badge pills
    │       ├── TiltCard.jsx        -> Perspective tilt card container
    │       ├── Scroll3DPopup.jsx   -> Scroll-driven 3D entrance animation
    │       ├── PerformanceChart.jsx-> Recharts latency visualization
    │       ├── CommandMenu.jsx     -> ⌘K / Ctrl+K palette with keyboard navigation
    │       ├── AtmosphericGlow.jsx -> Ambient background light streaks
    │       ├── CustomCursor.jsx    -> Pointer cursor with touch device detection
    │       ├── ScrollProgressBar.jsx -> Top progress indicator
    │       └── SectionHeading.jsx  -> Section title and subtitle header
    │
    └── lib/
        ├── utils.js                -> Class name merge utility (clsx + tailwind-merge)
        └── hooks.js                -> Custom scroll position and window hooks
```

---

## 🛠️ How to Change...

### 1. How to Change Text, Headings & Copy
No component contains hard-coded text or numbers. To update copy:
- **Hero headline or buttons**: Edit [`src/content/hero.js`](src/content/hero.js)
- **Features & bento grid**: Edit [`src/content/features.js`](src/content/features.js)
- **Linear-inspired Species section**: Edit [`src/content/productSpecies.js`](src/content/productSpecies.js)
- **Pricing plans & features**: Edit [`src/content/pricing.js`](src/content/pricing.js)
- **FAQs**: Edit [`src/content/faq.js`](src/content/faq.js)
- **Modal text and form fields**: Edit [`src/content/siteModals.js`](src/content/siteModals.js)
- **Footer columns & legal copy**: Edit [`src/content/footer.js`](src/content/footer.js)

### 2. How to Change Performance Figures
All benchmark values (FPS, latency, uptime, Lighthouse, CLS) are centralized in [`src/content/metrics.js`](src/content/metrics.js). Any change made there propagates across metric cards, FAQ answers, feature cards, and the performance chart.

### 3. How to Change Colors & Theme Tokens
All colors are CSS custom properties defined in [`src/styles/tokens.css`](src/styles/tokens.css):
- **Dark Theme**: Edit `--background`, `--foreground`, `--surface`, `--card`, `--accent`, `--border` under `.dark, :root[data-theme='dark']`.
- **Light Theme**: Edit the same variables under `:root`.

### 4. How to Change Navigation & External Links
- Site title, description, social links, and external services are defined in [`src/config/site.js`](src/config/site.js).
- Top navigation links and dropdown menus are managed under `siteConfig.navigation`.

### 5. How to Adjust Animations & Reduced Motion
Spring configs, fade transitions, and timings live in [`src/config/motion.js`](src/config/motion.js). Reduced-motion queries are respected via `prefers-reduced-motion` in CSS and Framo's motion components.

---

## ♿ Accessibility & Quality Standards

- **Single H1 & Semantic Headings**: Exactly one `<h1>` in the Hero, followed by proper `<h2>` and `<h3>` section hierarchies.
- **Keyboard Navigation**: Full Tab navigation with visible `focus-visible:ring-2` focus rings on all interactive elements. Menus and modals close with the `Escape` key.
- **Section Anchors**: All navigation items link to actual in-page IDs (`#hero`, `#showcase`, `#species`, `#features`, `#workflow`, `#metrics`, `#testimonials`, `#pricing`, `#faq`, `#cta`).
- **Touch Targets**: Minimum 44px tap targets across mobile views (tested at 390px, 768px, and 1440px).
- **Vercel Ready**: Redundant `vercel.json` removed; Next.js 15 App Router deploys with zero configuration.
