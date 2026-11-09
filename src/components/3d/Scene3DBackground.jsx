"use client";

/**
 * 3D INTERACTIVE BACKGROUND SCENE
 * What this file does: High-performance Three.js WebGL canvas responding to cursor & scroll like noddal.xyz.
 * What to edit: Adjust damping friction, scroll travel distance, or opacity here.
 */

import * as React from "react";
import * as THREE from "three";
import { useTheme } from "next-themes";
import { create3DWorld } from "@/lib/threeScene";

export function Scene3DBackground() {
  const mountRef = React.useRef(null);
  const { resolvedTheme } = useTheme();

  React.useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDark = resolvedTheme !== "light";
    const world = create3DWorld(container, isDark);
    const { scene, camera, renderer, modelGroup, ring1, ring2, particles, disposables } = world;

    let targetX = 0;
    let targetY = 0;
    const onMouseMove = (e) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 1.2;
      targetY = (e.clientY / window.innerHeight - 0.5) * 1.2;
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    let animId;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      const scrollY = window.scrollY || 0;
      const scrollMax = Math.max(1, document.body.scrollHeight - window.innerHeight);
      const progress = scrollY / scrollMax;

      if (!prefersReduced) {
        modelGroup.rotation.y += (targetX - modelGroup.rotation.y) * 0.05 + 0.002;
        modelGroup.rotation.x += (-targetY - modelGroup.rotation.x) * 0.05;
        modelGroup.rotation.z = progress * Math.PI * 1.5;
        modelGroup.position.y = -progress * 2.5 + Math.sin(elapsed * 0.8) * 0.12;
        modelGroup.position.z = Math.sin(progress * Math.PI) * 0.8;

        ring1.rotation.z = elapsed * 0.25;
        ring2.rotation.x = elapsed * -0.2;
        particles.rotation.y = elapsed * 0.03;
      }
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
      renderer.dispose();
      disposables.forEach((d) => d.dispose());
    };
  }, [resolvedTheme]);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-80 dark:opacity-75 transition-opacity duration-300"
    />
  );
}
