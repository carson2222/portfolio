"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

type StrengthsItem = {
  title: string;
  description: string;
};

const strengths: StrengthsItem[] = [
  {
    title: "Self-Taught Developer",
    description: "Constantly expanding my skills through courses, projects, and hands-on experimentation.",
  },
  {
    title: "Problem-Solving Mindset",
    description: "I enjoy breaking down complex challenges into logical, manageable steps.",
  },
  {
    title: "Adaptability",
    description: "Quick to embrace new technologies and frameworks as needed.",
  },
  {
    title: "Collaborative Spirit",
    description: "Comfortable working in teams, sharing ideas, and giving/receiving feedback.",
  },
  {
    title: "Persistence",
    description: "Compile errors > bedtime. I'll obsess until it's fixed.",
  },
  {
    title: "Proactive Attitude",
    description: "Always looking for ways to optimize processes or learn something new.",
  },
];

export default function Strengths() {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl pb-4 font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/70 to-primary">
            My Strengths
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Key qualities that define my approach to development and problem-solving
          </p>
        </motion.div>

        {/* Strengths grid with glassmorphic cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {strengths.map((strength, index) => (
            <motion.div
              key={strength.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-colors duration-300">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{strength.title}</h3>
                  <p className="text-muted-foreground">{strength.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
