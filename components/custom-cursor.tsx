"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useMobile } from "@/hooks/use-mobile";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
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

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("mousemove", updatePosition);
    window.addEventListener("mousemove", updateCursorType);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      window.removeEventListener("mousemove", updateCursorType);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
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
        className="fixed top-0 left-0 w-8 h-8 rounded-full bg-primary/20 mix-blend-difference pointer-events-none z-[9999]"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isPointer ? 1.5 : isClicking ? 0.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 400,
          damping: 25,
          mass: 0.2,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-primary pointer-events-none z-[9999]"
        animate={{
          x: position.x - 6,
          y: position.y - 6,
          scale: isClicking ? 0.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 20,
          mass: 0.1,
        }}
      />
    </>
  );
}
