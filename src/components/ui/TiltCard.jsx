"use client";

/**
 * TILT CARD COMPONENT (3D INTERACTION)
 * What this file does: Wraps content in a 3D perspective tilt container with dynamic cursor specular spotlight.
 * What to edit: Adjust maxTilt angle, glare intensity, or spring stiffness here.
 */

import * as React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export function TiltCard({ children, className, maxTilt = 8, ...props }) {
  const cardRef = React.useRef(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const glareX = useMotionValue(0);
  const glareY = useMotionValue(0);
  const [isHovered, setIsHovered] = React.useState(false);

  const rotateX = useSpring(useTransform(y, [0, 1], [maxTilt, -maxTilt]), { stiffness: 300, damping: 24 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-maxTilt, maxTilt]), { stiffness: 300, damping: 24 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const clientX = e.clientX - rect.left;
    const clientY = e.clientY - rect.top;

    x.set(clientX / rect.width);
    y.set(clientY / rect.height);
    glareX.set(clientX);
    glareY.set(clientY);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <div style={{ perspective: 1200 }} className="h-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={cn("relative transition-shadow duration-200", className)}
        {...props}
      >
        {children}

        <motion.div
          style={{
            background: useTransform(
              [glareX, glareY],
              ([gx, gy]) =>
                `radial-gradient(400px circle at ${gx}px ${gy}px, rgba(225,29,72,0.12), transparent 70%)`
            ),
          }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className="pointer-events-none absolute inset-0 rounded-[inherit] z-20"
        />
      </motion.div>
    </div>
  );
}
