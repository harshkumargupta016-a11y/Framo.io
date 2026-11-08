/**
 * COMMAND MENU CONTENT
 * What this file does: Stores searchable quick actions, navigation shortcuts, and metadata for the Command Palette (⌘K).
 * What to edit: Add or modify quick actions, keyboard shortcuts, or category groups here.
 */

export const commandMenuContent = {
  placeholder: "Search commands, sections, or documentation...",
  emptyMessage: "No matching commands found.",
  shortcutHint: "ESC to close • ↑↓ to navigate • ↵ to select",
  badge: "Raycast Mode",
  categories: ["Navigation", "Actions", "Preferences"],
  commands: [
    { id: "hero", title: "Go to Overview / Hero", category: "Navigation", href: "#" },
    { id: "showcase", title: "Go to Interactive Canvas", category: "Navigation", href: "#showcase", shortcut: "G C" },
    { id: "features", title: "Explore Core Features", category: "Navigation", href: "#features", shortcut: "G F" },
    { id: "workflow", title: "View 3-Step Workflow", category: "Navigation", href: "#workflow", shortcut: "G W" },
    { id: "pricing", title: "Compare Pricing Plans", category: "Navigation", href: "#pricing", shortcut: "G P" },
    { id: "faq", title: "Read Frequently Asked Questions", category: "Navigation", href: "#faq" },
    { id: "signup", title: "Get Started / Create Account", category: "Actions", href: "#pricing", actionId: "signup", shortcut: "↵" },
    { id: "theme", title: "Toggle Theme (Light / Dark)", category: "Preferences", actionId: "toggle-theme", shortcut: "⌘T" },
  ],
};
