"use client";

/**
 * SMOOTH SCROLL PROVIDER
 * What this file does: Initializes Lenis smooth inertial scrolling inspired by noddal.xyz with frame synchronization.
 * What to edit: Adjust lerp duration, easing curves, or touch responsiveness here.
 */

import * as React from "react";
import Lenis from "lenis";

export function SmoothScroll({ children }) {
  React.useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Intercept in-page hash links for fluid lenis scroll target
    const handleAnchorClick = (e) => {
      const link = e.target.closest("a[href^='#']");
      if (!link) return;
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        lenis.scrollTo(targetEl, { offset: -70 });
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}

