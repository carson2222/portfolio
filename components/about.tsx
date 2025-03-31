"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { BicepsFlexed, Dot } from "lucide-react";

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
    description: "Compile errors > bedtime. I’ll obsess until it’s fixed.",
  },
  {
    title: "Proactive Attitude",
    description: "Always looking for ways to optimize processes or learn something new.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Code, Coffee & Constant Learning </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card/50 backdrop-blur-sm border border-border/50">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
                <p className="text-muted-foreground mb-4">
                  Technology has been my passion since childhood—I’ve practically lived and breathed it 24/7. From
                  an early age, I was fascinated by IT and programming, but it wasn’t until high school that I
                  fully immersed myself in this field. What started as a pursuit of good grades quickly turned into
                  something much bigger: a genuine drive to learn and create.
                </p>
                <p className="text-muted-foreground mb-4">
                  My journey began with JavaScript, a language that remains my strongest ally. Over time, I
                  explored its entire ecosystem, constantly expanding my knowledge by experimenting with new
                  technologies and dedicating every free moment to personal projects.
                </p>
                <p className="text-muted-foreground mb-4">
                  At around 16, I discovered the world of Web3. While my age made it difficult to land a
                  traditional job, I turned to freelancing—a decision that sharpened both my technical skills and
                  my ability to collaborate with clients.
                </p>

                <p className="text-muted-foreground">
                  Now, as I look ahead to 2025, my goals are clear: excel in my final exams, secure a place in the
                  IT program at the Silesian University of Technology in Gliwice, and find an ambitious role as a
                  Junior Fullstack Developer—one that challenges me to grow and contribute meaningfully to
                  innovative projects.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 flex items-center justify-center gap-2">
              My Strengths <BicepsFlexed />
            </h3>
            <div className="space-y-8">
              {strengths.map((item, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start gap-4">
                    {/* <div className="min-w-[60px] text-sm font-medium text-primary">{item.year}</div> */}
                    <Dot size={32} />
                    <div>
                      <h4 className="text-lg font-medium">{item.title}</h4>
                      <p className="text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  </div>
                  {index < strengths.length - 1 && <Separator className="my-4 bg-border/50" />}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
