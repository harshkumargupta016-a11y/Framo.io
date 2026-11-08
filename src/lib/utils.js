/**
 * UTILITY HELPERS
 * What this file does: Exports standard className merging and formatting utility functions.
 * What to edit: Add general utility functions here if needed across multiple components.
 */

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
