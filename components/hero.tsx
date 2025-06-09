"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Github, Linkedin, Twitter, Mail, ChevronRight } from "lucide-react";

// Types
interface MousePosition {
  x: number;
  y: number;
}

interface GlitterParticle {
  x: number;
  y: number;
  delay: number;
  size: number;
}

interface LastRotation {
  x: number;
  y: number;
}

// Constants
const ROTATION_FACTOR = 0.1;
const MAX_PARTICLES = 50;
const RETURN_ANIMATION_DURATION = 500;
const MOBILE_BREAKPOINT = 768;

// Update animations with spring return
const animations = `
  @keyframes rainbow-shift {
    0% { --rainbow-angle: 0deg; }
    100% { --rainbow-angle: 360deg; }
  }

  .animate-rainbow-shift {
    animation: rainbow-shift 2.5s linear infinite;
  }

  @keyframes sparkle {
    0%, 100% { opacity: 0; transform: scale(0); }
    50% { opacity: 1; transform: scale(1); }
  }

  @keyframes float {
    0% { transform: translateY(0) translateX(0); }
    50% { transform: translateY(-1px) translateX(0.5px); }
    100% { transform: translateY(0) translateX(0); }
  }

  @keyframes attention-wiggle {
    0%, 100% { transform: perspective(1000px) rotateY(0deg) scale(1); }
    25% { transform: perspective(1000px) rotateY(5deg) scale(1.02); }
    75% { transform: perspective(1000px) rotateY(-5deg) scale(1.02); }
  }

  @keyframes return-spring {
    0% { transform: perspective(1000px) rotateX(var(--from-x)) rotateY(var(--from-y)); }
    25% { transform: perspective(1000px) rotateX(calc(var(--from-x) * 0.2)) rotateY(calc(var(--from-y) * -0.1)); }
    50% { transform: perspective(1000px) rotateX(calc(var(--from-x) * -0.1)) rotateY(calc(var(--from-y) * 0.05)); }
    75% { transform: perspective(1000px) rotateX(calc(var(--from-x) * 0.05)) rotateY(calc(var(--from-y) * -0.02)); }
    100% { transform: perspective(1000px) rotateX(0deg) rotateY(0deg); }
  }

  .return-animation {
    animation: return-spring 0.5s ease-out forwards;
  }

  .glitter-container {
    pointer-events: none;
    mix-blend-mode: color-dodge;
    background: 
      radial-gradient(2px 2px at 20px 30px, #fff, rgba(0,0,0,0)),
      radial-gradient(2px 2px at 40px 70px, #fff, rgba(0,0,0,0)),
      radial-gradient(2px 2px at 50px 160px, #fff, rgba(0,0,0,0)),
      radial-gradient(2px 2px at 90px 40px, #fff, rgba(0,0,0,0)),
      radial-gradient(2px 2px at 130px 80px, #fff, rgba(0,0,0,0)),
      radial-gradient(2px 2px at 160px 120px, #fff, rgba(0,0,0,0));
    background-repeat: repeat;
    animation: float 3s ease-in-out infinite;
  }

  .attention-animation {
    animation: attention-wiggle 3s ease-in-out infinite;
  }
`;

// Add the animation styles to the document
if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.textContent = animations;
  document.head.appendChild(style);
}

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [tiltMagnitude, setTiltMagnitude] = useState(0);
  const [tiltAngle, setTiltAngle] = useState(0);
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [glitterParticles, setGlitterParticles] = useState<GlitterParticle[]>([]);
  const [isReturning, setIsReturning] = useState(false);
  const lastRotation = useRef<LastRotation>({ x: 0, y: 0 });

  // Initialize glitter particles
  useEffect(() => {
    const particles = Array.from({ length: MAX_PARTICLES }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
      size: Math.random() * 2 + 1,
    }));
    setGlitterParticles(particles);
  }, []);

  // Handle window resize
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Calculate tilt effects
  useEffect(() => {
    const magnitude = Math.sqrt(rotateX * rotateX + rotateY * rotateY) / 14;
    setTiltMagnitude(Math.min(magnitude, 1));

    let angle = Math.atan2(-rotateX, rotateY) * (180 / Math.PI);
    if (angle < 0) angle += 360;
    setTiltAngle(angle);
  }, [rotateX, rotateY]);

  // Memoized handlers
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current || isMobile) return;
      setIsReturning(false);
      if (!hasInteracted) setHasInteracted(true);

      const card = cardRef.current;
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const mouseXRelative = ((e.clientX - centerX) / (rect.width / 2)) * 100;
      const mouseYRelative = ((e.clientY - centerY) / (rect.height / 2)) * 100;

      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });

      const newRotateX = -1 * (mouseYRelative * ROTATION_FACTOR);
      const newRotateY = mouseXRelative * ROTATION_FACTOR;

      lastRotation.current = { x: newRotateX, y: newRotateY };
      setRotateX(newRotateX);
      setRotateY(newRotateY);
    },
    [isMobile, hasInteracted]
  );

  const handleMouseLeave = useCallback(() => {
    if (!cardRef.current) return;

    cardRef.current.style.setProperty("--from-x", `${lastRotation.current.x}deg`);
    cardRef.current.style.setProperty("--from-y", `${lastRotation.current.y}deg`);
    setIsReturning(true);

    setTimeout(() => {
      setRotateX(0);
      setRotateY(0);
      setMousePosition({ x: 0.5, y: 0.5 });
      setIsReturning(false);
    }, RETURN_ANIMATION_DURATION);
  }, []);

  const getHolographicGradient = useCallback(() => {
    const hue = tiltAngle;
    const saturation = 100;
    const lightness = 60 + tiltMagnitude * 20;

    const color1 = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    const color2 = `hsl(${(hue + 30) % 360}, ${saturation}%, ${lightness - 10}%)`;
    const color3 = `hsl(${(hue + 60) % 360}, ${saturation}%, ${lightness}%)`;

    return `linear-gradient(${(tiltAngle + 90) % 360}deg, ${color1}, ${color2}, ${color3})`;
  }, [tiltAngle, tiltMagnitude]);

  const handleSmoothScroll = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (!href) return;

    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (!element) return;

    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, []);

  const socialLinks = [
    { name: "GitHub", icon: <Github className="h-5 w-5" />, url: "https://github.com/carson2222" },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://www.linkedin.com/in/carson-ts-830479321/",
    },
    { name: "Twitter", icon: <Twitter className="h-5 w-5" />, url: "https://x.com/carson3068" },
    { name: "Email", icon: <Mail className="h-5 w-5" />, url: "mailto:example@example.com" },
  ];

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
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent animate-gradient bg-[length:400%_400%] bg-gradient-to-r from-primary via-primary/70 to-primary py-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Building Digital Experiences
            </motion.h1>
            <motion.p
              className="text-lg mb-6 max-w-md mx-auto md:mx-0 text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Crafting innovative web solutions with modern technologies and minimalist design principles.
            </motion.p>
            <motion.div
              className="flex flex-col items-center md:items-start gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link href="#projects" onClick={handleSmoothScroll}>
                <Button
                  size="lg"
                  className="rounded-full px-8 py-6 text-lg bg-primary hover:bg-primary/90 text-primary-foreground group"
                >
                  Explore My Work
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              
              <div className="flex items-center gap-4 mt-2">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-primary/10 transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ y: -2 }}
                    aria-label={link.name}
                  >
                    <div className="text-muted-foreground hover:text-primary transition-colors">
                      {link.icon}
                    </div>
                  </motion.a>
                ))}
              </div>
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
              className={`relative w-[280px] h-[400px] md:w-[350px] md:h-[500px] rounded-2xl overflow-hidden transform-style-3d
                ${!hasInteracted ? "attention-animation" : ""}
                ${isReturning ? "return-animation" : "transition-transform duration-200 ease-out"}
              `}
              style={{
                transform: isReturning
                  ? undefined
                  : isMobile
                  ? "perspective(1000px) rotateY(10deg)"
                  : `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onTouchStart={() => setHasInteracted(true)}
            >
              {/* Card border */}
              <div className="absolute inset-0 rounded-2xl border-4 border-white/30 z-20 pointer-events-none"></div>

              {/* Base image */}
              <div className="absolute inset-0 z-10">
                <Image src="/card.png" alt="Developer Portrait" fill className="object-cover" priority />
              </div>

              {/* Fine grain texture */}
              <div
                className="absolute inset-0 z-15 pointer-events-none"
                style={{
                  opacity: 0.3,
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                  mixBlendMode: "overlay",
                }}
              ></div>

              {/* Dynamic glitter particles */}
              <div className="absolute inset-0 z-20 overflow-hidden">
                {glitterParticles.map((particle, index) => (
                  <div
                    key={index}
                    className="absolute w-[2px] h-[2px] rounded-full bg-white"
                    style={{
                      left: `${particle.x}%`,
                      top: `${particle.y}%`,
                      opacity: 0,
                      transform: "scale(0)",
                      animation: `sparkle ${1 + particle.delay}s ease-in-out infinite`,
                      animationDelay: `${particle.delay}s`,
                      width: `${particle.size}px`,
                      height: `${particle.size}px`,
                      boxShadow: "0 0 2px #fff",
                    }}
                  />
                ))}
              </div>

              {/* Static glitter pattern */}
              <div
                className="absolute inset-0 z-20 glitter-container"
                style={{
                  opacity: 0.5 * tiltMagnitude,
                  transform: `rotate(${tiltAngle * 0.2}deg)`,
                }}
              ></div>

              {/* Holographic scanline texture */}
              <div
                className="absolute inset-0 z-15 pointer-events-none"
                style={{
                  opacity: 0.4 * tiltMagnitude,
                  backgroundImage: `repeating-linear-gradient(
                    ${90 + tiltAngle * 0.5}deg,
                    transparent,
                    rgba(255,255,255,0.1) 1px,
                    rgba(255,255,255,0.2) 2px,
                    rgba(255,255,255,0.1) 3px,
                    transparent 4px
                  )`,
                  backgroundSize: "8px 8px",
                  mixBlendMode: "color-dodge",
                  transition: "opacity 0.2s ease-out",
                }}
              ></div>

              {/* Holographic texture pattern from image */}
              <div
                className="absolute inset-0 z-20 pointer-events-none mix-blend-overlay"
                style={{
                  opacity: 0.7 * tiltMagnitude,
                  transform: `rotate(${tiltAngle * 0.5}deg) scale(${1 + tiltMagnitude * 0.1})`,
                  backgroundImage: `url('/holo-texture.png')`,
                  backgroundSize: "200% 200%",
                  backgroundPosition: `${mousePosition.x * 100}% ${mousePosition.y * 100}%`,
                  transition: "transform 0.2s ease-out, background-position 0.2s ease-out",
                }}
              ></div>

              {/* Animated rainbow reflection */}
              <div
                className="absolute inset-0 z-20 pointer-events-none animate-rainbow-shift mix-blend-soft-light"
                style={{
                  opacity: 0.4 * tiltMagnitude,
                  backgroundImage: `url('/holo-texture.png')`,
                  backgroundSize: "200% 200%",
                  backgroundPosition: `${100 - mousePosition.x * 100}% ${100 - mousePosition.y * 100}%`,
                  filter: "hue-rotate(calc(var(--rainbow-angle, 0deg)))",
                  transition: "background-position 0.2s ease-out",
                }}
              ></div>

              {/* Holographic texture pattern */}
              <div
                className="absolute inset-0 z-10 pointer-events-none mix-blend-overlay opacity-30"
                style={{
                  backgroundImage: `
                    repeating-linear-gradient(
                      ${tiltAngle + 45}deg,
                      transparent,
                      rgba(255,255,255,0.1) 1px,
                      transparent 2px
                    ),
                    repeating-linear-gradient(
                      ${tiltAngle - 45}deg,
                      transparent,
                      rgba(255,255,255,0.1) 1px,
                      transparent 2px
                    )
                  `,
                  backgroundSize: "8px 8px",
                  transition: "background-image 0.3s ease-out",
                }}
              ></div>

              {/* Smooth holographic color effect */}
              <div
                className="absolute inset-0 z-10 pointer-events-none transition-all duration-300"
                style={{
                  opacity: tiltMagnitude * 0.2,
                  background: getHolographicGradient(),
                  mixBlendMode: "color-dodge",
                }}
              ></div>

              {/* Enhanced light reflection effect */}
              <div
                className="absolute inset-0 z-10 pointer-events-none transition-all duration-300"
                style={{
                  opacity: tiltMagnitude * 0.15,
                  background: `
                    radial-gradient(
                      circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
                      rgba(255,255,255,0.8) 0%, 
                      rgba(255,255,255,0.3) 20%,
                      rgba(255,255,255,0.1) 40%,
                      transparent 60%
                    ),
                    linear-gradient(
                      ${tiltAngle}deg,
                      rgba(255,255,255,0.5) 0%,
                      transparent 80%
                    )
                  `,
                  transition: "background 0.2s ease-out",
                }}
              ></div>

              {/* Rainbow edge effect */}
              <div
                className="absolute inset-0 z-10 pointer-events-none transition-all duration-300"
                style={{
                  opacity: tiltMagnitude * 0.3,
                  background: `
                    linear-gradient(
                      ${tiltAngle + 90}deg,
                      rgba(255,0,0,0.2),
                      rgba(255,165,0,0.2),
                      rgba(255,255,0,0.2),
                      rgba(0,255,0,0.2),
                      rgba(0,0,255,0.2),
                      rgba(238,130,238,0.2)
                    )
                  `,
                  mixBlendMode: "color-dodge",
                }}
              ></div>

              {/* Card shadow */}
              <div
                className="absolute -bottom-12 -left-12 -right-12 h-24 bg-black/40 blur-2xl z-0 transform-style-3d transition-transform duration-300"
                style={{
                  transform: `translateX(${rotateY * 2}px) translateY(${10 + rotateX}px)`,
                }}
              ></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
