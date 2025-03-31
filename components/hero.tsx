"use client";

import type React from "react";

import { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [tiltMagnitude, setTiltMagnitude] = useState(0);
  const [tiltAngle, setTiltAngle] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Calculate tilt magnitude and angle whenever rotation changes
  useEffect(() => {
    // Calculate overall tilt magnitude (0-1 scale)
    const magnitude = Math.sqrt(rotateX * rotateX + rotateY * rotateY) / 14;
    setTiltMagnitude(Math.min(magnitude, 1));

    // Calculate tilt angle in degrees (0-360)
    let angle = Math.atan2(-rotateX, rotateY) * (180 / Math.PI);
    if (angle < 0) angle += 360; // Convert to 0-360 range
    setTiltAngle(angle);
  }, [rotateX, rotateY]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || isMobile) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    // Calculate mouse position relative to card center (in percentage)
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseXRelative = ((e.clientX - centerX) / (rect.width / 2)) * 100;
    const mouseYRelative = ((e.clientY - centerY) / (rect.height / 2)) * 100;

    // Set rotation (limited to +/- 10 degrees)
    setRotateX(-1 * (mouseYRelative * 0.1));
    setRotateY(mouseXRelative * 0.1);
  };

  const handleMouseLeave = () => {
    // Reset to neutral position
    setRotateX(0);
    setRotateY(0);
  };

  // Get holographic color based on tilt angle (continuous color wheel)
  const getHolographicGradient = () => {
    // Convert angle to hue (0-360)
    const hue = tiltAngle;

    // Create two colors with the same hue but different lightness for the gradient
    const color1 = `hsl(${hue}, 100%, 70%)`;
    const color2 = `hsl(${hue}, 100%, 50%)`;

    // Determine gradient direction based on angle
    const gradientAngle = (tiltAngle + 90) % 360; // Perpendicular to tilt

    return `linear-gradient(${gradientAngle}deg, ${color1}, ${color2})`;
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 w-full h-full -z-10">
        {/* Gradient background */}
        <div
          className={`absolute inset-0 ${
            isDark
              ? "bg-gradient-to-br from-black via-slate-900 to-slate-800"
              : "bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200"
          }`}
        ></div>

        {/* Animated grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        </div>

        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-60 h-60 bg-primary/20 rounded-full filter blur-[80px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-primary/20 rounded-full filter blur-[100px] animate-pulse delay-700"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-primary/30 rounded-full filter blur-[60px] animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 w-full z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Building Digital Experiences
            </motion.h1>
            <motion.p
              className="text-lg mb-10 max-w-md mx-auto md:mx-0 text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Crafting innovative web solutions with modern technologies and minimalist design principles.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="#projects">
                <Button
                  size="lg"
                  className="rounded-full px-8 py-6 text-lg bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Explore My Work
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Holographic Card Effect */}
          <motion.div
            className="flex justify-center items-center perspective-[1000px]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div
              ref={cardRef}
              className="relative w-[280px] h-[400px] md:w-[350px] md:h-[500px] rounded-2xl overflow-hidden transition-transform duration-200 ease-out transform-style-3d"
              style={{
                transform: isMobile
                  ? "perspective(1000px) rotateY(10deg)"
                  : `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transition: "transform 0.1s ease-out",
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {/* Card border */}
              <div className="absolute inset-0 rounded-2xl border-4 border-white/30 z-20 pointer-events-none"></div>

              {/* Base image */}
              <div className="absolute inset-0 z-10">
                <Image src="/whale.png" alt="Developer Portrait" fill className="object-cover" priority />
              </div>

              {/* Smooth holographic color effect */}
              <div
                className="absolute inset-0 z-10 pointer-events-none transition-all duration-300"
                style={{
                  opacity: tiltMagnitude * 0.5,
                  background: getHolographicGradient(),
                  mixBlendMode: "color-dodge",
                }}
              ></div>

              {/* Light reflection effect */}
              <div
                className="absolute inset-0 z-10 pointer-events-none transition-all duration-300"
                style={{
                  opacity: tiltMagnitude * 0.3,
                  background: `radial-gradient(
                    circle at ${50 + rotateY * 5}% ${50 - rotateX * 5}%, 
                    rgba(255,255,255,0.8) 0%, 
                    rgba(255,255,255,0) 50%
                  )`,
                }}
              ></div>

              {/* Glitter effect - only visible when tilted */}
              <div
                className="absolute inset-0 z-10 mix-blend-overlay pointer-events-none transition-opacity duration-300"
                style={{ opacity: tiltMagnitude * 0.8 }}
              >
                {Array.from({ length: 30 }).map((_, i) => {
                  // Assign fixed positions to each glitter particle
                  const left = (i % 5) * 20 + Math.random() * 10;
                  const top = Math.floor(i / 5) * 20 + Math.random() * 10;

                  return (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full"
                      style={{
                        left: `${left}%`,
                        top: `${top}%`,
                        opacity: Math.random() * 0.7 + 0.3,
                        transform: `scale(${1 + tiltMagnitude})`,
                        transition: "transform 0.3s ease-out, opacity 0.3s ease-out",
                      }}
                    ></div>
                  );
                })}
              </div>

              {/* Card shadow */}
              <div
                className="absolute -bottom-10 -left-10 -right-10 h-20 bg-black/30 blur-xl z-0 transform-style-3d transition-transform duration-300"
                style={{
                  transform: `translateX(${rotateY * 2}px) translateY(${10 + rotateX}px)`,
                }}
              ></div>

              {/* Card content overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20">
                <h3 className="text-white text-xl font-bold">Your Name</h3>
                <p className="text-white/80 text-sm">Full Stack Developer</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
