"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMobile } from "@/hooks/use-mobile";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const isMobile = useMobile();

  useEffect(() => {
    if (isMobile) return;

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const updateCursorType = () => {
      const hoveredElement = document.elementFromPoint(position.x, position.y);
      const isPointerElement =
        hoveredElement?.tagName === "BUTTON" ||
        hoveredElement?.tagName === "A" ||
        hoveredElement?.closest("button") ||
        hoveredElement?.closest("a");
      setIsPointer(!!isPointerElement);
    };

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mousemove", updateCursorType);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mousemove", updateCursorType);
    };
  }, [position.x, position.y, isMobile]);

  if (isMobile) return null;

  return (
    <>
      <style jsx global>{`
        body {
          cursor: none;
        }
        a,
        button,
        [role="button"] {
          cursor: none;
        }
      `}</style>
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full bg-primary/30 mix-blend-difference pointer-events-none z-[9999]"
        animate={{
          x: position.x - 12,
          y: position.y - 12,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary pointer-events-none z-[9999]"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
        }}
        transition={{
          type: "spring",
          stiffness: 1000,
          damping: 28,
          mass: 0.1,
        }}
      />
    </>
  );
}
