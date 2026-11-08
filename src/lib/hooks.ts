/**
 * CUSTOM HOOKS
 * What this file does: Exports lightweight reusable UI hooks like useScrollPosition.
 * What to edit: Add or modify scroll, keyboard, or viewport hooks here.
 */

import { useState, useEffect } from "react";

export function useScrollPosition(): number {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollY;
}

