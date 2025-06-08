"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "next-themes";
import { Rocket } from "lucide-react";

type WorkItem = {
  title: string;
  company: string;
  period: string;
  description: string;
  status: "past" | "present" | "future";
};

const workHistory: WorkItem[] = [
  {
    title: "Freelancer",
    company: "Self-Employed",
    period: "2023 - Present",
    description: "Building custom web solutions and bringing client visions to life through code.",
    status: "present",
  },
  {
    title: "Web3 Developer",
    company: "Trippin Ape Tribe",
    period: "2024 - 2025",
    description: "Building a Solana dapp and maintaining an NFT collection",
    status: "present",
  },
  {
    title: "Your Next Developer",
    company: "Your Company",
    period: "Future 🚀",
    description: "Ready to bring my passion for coding and problem-solving to your team!",
    status: "future",
  },
];

export default function WorkHistory() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const timelineRef = useRef(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "center center"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 15,
    restDelta: 0.001,
  });

  return (
    <section ref={containerRef} className="py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div
          className={`absolute inset-0 ${
            isDark
              ? "bg-gradient-to-br from-black via-slate-900 to-slate-800"
              : "bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200"
          }`}
        />

        {/* Animated grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
        </div>

        {/* Glowing orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full filter blur-[120px] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl pb-4 font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/70 to-primary">
            Work History
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            My journey through the tech landscape, from freelancing to future opportunities
          </p>
        </motion.div>

        <div ref={timelineRef} className="relative pb-16">
          {/* Animated Timeline line */}
          <motion.div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 origin-top"
            style={{ scaleY }}
          />

          {/* Timeline items */}
          <div className="space-y-24">
            {" "}
            {/* Increased spacing between items */}
            {workHistory.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -50 : 50,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: 0.8,
                    delay: index * 0.2,
                  },
                }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <div className={`md:text-right ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}>
                  <Card
                    className={`bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 
                    ${item.status === "future" ? "border-dashed" : ""}
                    hover:scale-105 hover:-translate-y-1`}
                  >
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
                      <h4 className="text-primary font-medium mb-2">{item.company}</h4>
                      <p className="text-sm text-muted-foreground mb-3">{item.period}</p>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Timeline node */}
                <motion.div
                  className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 400, damping: 10, delay: index * 0.2 + 0.3 }}
                >
                  <div className={`group relative ${item.status === "future" ? "animate-pulse" : ""}`}>
                    {/* Outer ring */}
                    <div
                      className={`absolute inset-0 rounded-full 
                      ${item.status === "future" ? "bg-primary/20" : "bg-slate-700"} 
                      scale-150 transition-transform duration-300 group-hover:scale-[2]`}
                    />
                    {/* Inner dot */}
                    <div
                      className={`w-3 h-3 rounded-full relative z-10 shadow-lg
                      ${item.status === "future" ? "bg-primary/50" : "bg-slate-900"}`}
                    />
                  </div>
                </motion.div>

                <div className={`${index % 2 === 0 ? "md:order-2" : "md:order-1"}`} />
              </motion.div>
            ))}
          </div>

          {/* Future indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute -bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              className="rounded-full p-2 shadow-lg -mt-10 bg-primary/20"
              animate={{
                rotate: [0, -10, 10, -10, 10, 0],
                y: [0, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Rocket className="w-6 h-6 text-primary" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
