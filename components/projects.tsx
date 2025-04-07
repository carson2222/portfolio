"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, X, ChevronRight } from "lucide-react";
import Image from "next/image";
import Markdown from "react-markdown";

type Project = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  features: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  year: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform with cart functionality and payment integration.",
    longDescription: `# Welcome to my blog

This is my first post using MDX in Next.js!

Here's some **bold** text and _italic_ text.`,
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "Tailwind CSS", "Stripe", "Prisma"],
    features: [
      "Responsive product catalog with filtering and search",
      "User authentication and profile management",
      "Shopping cart with persistent storage",
      "Secure payment processing with Stripe",
      "Order history and tracking",
      "Admin dashboard for inventory management",
    ],
    technologies: [
      "Next.js for frontend and API routes",
      "Tailwind CSS for styling",
      "Prisma ORM with PostgreSQL database",
      "Stripe API for payment processing",
      "NextAuth.js for authentication",
      "Vercel for deployment",
    ],
    liveUrl: "#",
    githubUrl: "#",
    year: "2023",
  },
  {
    id: 2,
    title: "AI Content Generator",
    description: "Web app that generates content using AI models with customizable parameters.",
    longDescription:
      "An innovative content generation tool powered by OpenAI's GPT models. This application allows users to generate various types of content including blog posts, social media captions, product descriptions, and more. Users can customize parameters like tone, length, and style to get tailored results for their specific needs.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Node.js", "OpenAI API", "MongoDB"],
    features: [
      "Multiple content types and templates",
      "Customizable generation parameters",
      "Content history and favorites",
      "Export to various formats (Markdown, HTML, etc.)",
      "Team collaboration features",
      "Usage analytics dashboard",
    ],
    technologies: [
      "React with TypeScript for frontend",
      "Node.js and Express for backend",
      "MongoDB for data storage",
      "OpenAI API integration",
      "JWT for authentication",
      "Docker for containerization",
    ],
    liveUrl: "#",
    githubUrl: "#",
    year: "2023",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A minimalist portfolio website with interactive elements and smooth animations.",
    longDescription:
      "A modern portfolio website showcasing creative work and technical skills. This project features a clean, minimalist design with interactive elements and smooth animations. The site includes sections for projects, skills, about, and contact information, all wrapped in an engaging user interface with dark/light mode support.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "Three.js", "Framer Motion", "Tailwind CSS"],
    features: [
      "Interactive 3D elements with Three.js",
      "Smooth page transitions and animations",
      "Responsive design for all devices",
      "Dark/light mode toggle",
      "Contact form with validation",
      "Project showcase with filtering",
    ],
    technologies: [
      "Next.js for frontend",
      "Tailwind CSS for styling",
      "Framer Motion for animations",
      "Three.js for 3D elements",
      "TypeScript for type safety",
      "Vercel for deployment",
    ],
    liveUrl: "#",
    githubUrl: "#",
    year: "2022",
  },
];

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

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
                className="overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col cursor-pointer"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => openProjectDetails(project)}
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-background/80 backdrop-blur-sm text-foreground"
                    >
                      View Details <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="pt-6 flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="outline" className="bg-muted/50">
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <Dialog open={selectedProject !== null} onOpenChange={(open) => !open && closeProjectDetails()}>
        <DialogContent className="sm:max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <div className="flex items-center justify-between">
                  <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                  <Button variant="ghost" size="icon" onClick={closeProjectDetails} className="h-8 w-8">
                    <X className="h-4 w-4" />
                    <span className="sr-only">Close</span>
                  </Button>
                </div>
                <DialogDescription>
                  <Badge variant="outline" className="mt-1">
                    {selectedProject.year}
                  </Badge>
                </DialogDescription>
              </DialogHeader>

              <div className="relative w-full h-64 sm:h-80 mt-4 rounded-lg overflow-hidden">
                <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="mt-6">
                <p className="text-foreground mb-6 prose lg:prose-xl">
                  <Markdown>{selectedProject.longDescription}</Markdown>
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <Badge key={tag} className="bg-primary/10 text-primary hover:bg-primary/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <ul className="space-y-2 mt-3">
                    {selectedProject.technologies.map((tech, index) => (
                      <li key={index} className="flex items-start">
                        <ChevronRight className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                        <span>{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-4 mt-8">
                  {selectedProject.liveUrl && (
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Live Project
                    </Button>
                  )}
                  {selectedProject.githubUrl && (
                    <Button variant="outline">
                      <Github className="h-4 w-4 mr-2" />
                      View Source Code
                    </Button>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
