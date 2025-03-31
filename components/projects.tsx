"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, sapiente?",
    image: "https://placehold.co/800x600.png",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "Prisma"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "AI Content Generator",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, sapiente?",
    image: "https://placehold.co/800x600.png",
    tags: ["React", "Node.js", "OpenAI API", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A, sapiente?",
    image: "https://placehold.co/800x600.png",
    tags: ["Next.js", "Three.js", "Framer Motion", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 px-4 md:px-8 lg:px-16 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects Showcase</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work showcasing my skills and passion for creating digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className="overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden h-48">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className={`object-cover transition-transform duration-500 ${
                      hoveredProject === project.id ? "scale-110" : "scale-100"
                    }`}
                  />
                </div>
                <CardContent className="pt-6 flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2 pt-2 pb-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-muted transition-colors"
                      aria-label="View GitHub repository"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full hover:bg-muted transition-colors"
                      aria-label="View live project"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
