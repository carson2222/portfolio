"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

const timeline: TimelineItem[] = [
  {
    year: "2020",
    title: " Lorem, ipsum dolor.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, sapiente?",
  },
  {
    year: "2021",
    title: " Lorem, ipsum dolor.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, sapiente?",
  },
  {
    year: "2022",
    title: " Lorem, ipsum dolor.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, sapiente?",
  },
  {
    year: "2023",
    title: " Lorem, ipsum dolor.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, sapiente?",
  },
  {
    year: "Present",
    title: " Lorem, ipsum dolor.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, sapiente?",
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
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam, alias.{" "}
          </p>
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur deserunt officiis, voluptas
                  debitis magni suscipit in dolorum a sunt, doloremque odit, hic neque nam ipsa saepe dignissimos
                  voluptatem veniam aliquam?
                </p>
                <p className="text-muted-foreground mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quam tempore incidunt unde sed?
                  Aut culpa unde voluptatum, tempora labore enim animi est exercitationem fuga.
                </p>
                <p className="text-muted-foreground">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dignissimos nobis molestias.
                  Laborum suscipit neque quisquam velit cumque. Tempora, repudiandae!
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
            <h3 className="text-2xl font-semibold mb-6">Skill Progression</h3>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start gap-4">
                    <div className="min-w-[60px] text-sm font-medium text-primary">{item.year}</div>
                    <div>
                      <h4 className="text-lg font-medium">{item.title}</h4>
                      <p className="text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  </div>
                  {index < timeline.length - 1 && <Separator className="my-4 bg-border/50" />}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
