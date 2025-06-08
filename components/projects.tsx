"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, X, ChevronRight, ChevronLeft, CircleDot, Circle } from "lucide-react";
import Image from "next/image";
import Markdown from "react-markdown";
import { useEffect } from "react";
import { useTheme } from "next-themes";

type Project = {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  // images: string;
  images: string[]; // Array of images instead of a single image
  thumbnail: string; // Main thumbnail image for the card
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  links?: {
    displayName: string;
    url: string;
    icon: SVGSVGElement;
  }[];
  year: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform with cart functionality and payment integration.",
    longDescription: `## Socialfi Engage 2 Airdrop Web3 Platform

A Web3 engagement platform where users earn points by completing tasks for a memecoin airdrop. Built with modern web technologies and security-focused design.  

**Key Features:**  
- Task-based reward system  
- Multi-tier referral program  
- 24-hour streak bonus  
- Twitter OAuth login (Next-Auth) 

**Tech Stack:**  
- Next.js (TypeScript)  
- Tailwind CSS + Shadcn  
- Vercel Shield & Captcha for bot prevention  
- Secured backend/database against cheating  

**Results (2 weeks):**  
✓ 154,000 tasks submitted  
✓ 17,500 active users  
✓ Significant Twitter growth  
`,
    images: ["/projects/shibaNibu1.png", "/projects/shibaNibu2.png"],
    thumbnail: "/projects/shibaNibu1.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn",
      "SupaBase",
      "Telegram API",
      "reCAPTCHA",
      "PL/pgSQL",
      "RESTful APIs",
      "NextAuth.js",
    ],

    liveUrl: "",
    githubUrl: "",
    year: "2023",
  },
  {
    id: 2,
    title: "AI Content Generator",
    description: "Web app that generates content using AI models with customizable parameters.",
    longDescription: `## Browser-Based Farming Game (Prototype)

A paused development project featuring blockchain integration and core farming simulation mechanics. Developed part-time over one month before being shelved.

**Core Features Implemented:**
- TON wallet authentication
- Crop cultivation system
- Animal husbandry mechanics
- Token staking with 24-hour yields
- Supabase backend integration

**Technical Stack:**
- Next.js (TypeScript)
- Tailwind CSS + Shadcn
- TON blockchain integration
- Supabase database
- Anti-cheat request validation

**Current State:**
- Functional prototype with placeholder assets
- Core gameplay systems operational
- Blockchain features planned but not implemented:
  - Cryptocurrency deposits
  - NFT integration

**Note:** All visual assets are temporary placeholders, with professional artwork planned for future iterations.`,
    images: [
      "/projects/tonGame1.png",
      "/projects/tonGame2.png",
      "/projects/tonGame3.png",
      "/projects/tonGame4.png",
      "/projects/tonGame5.png",
    ],
    thumbnail: "/projects/tonGame1.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "TON Blockchain SDK", "Supabase"],
    liveUrl: "#",
    githubUrl: "#",

    year: "2023",
  },
  {
    id: 3,
    title: "Pump.fun memecoin Bot",
    description: "Pump.Fun sniping bot for new created memecoins",
    longDescription: `## PumpFun Bot

It's a Bot for sniping memecoins on Pump.Fun in your CMD. Fully made in Typescript. It uses the Solana blockchain and the Anchor framework to interact with the Pump.Fun bonding curve contract. The bot is designed to be fast and efficient, allowing you to quickly and easily snipe memecoins. It includes features such as automatic token acquisition, automatic price monitoring, and configurable settings.

## Bot speed

The bot works pretty fast, it's in typescript so it will be obviously outperformed by other bots in Go/Rust, tho. That's why it's more likely a toy to experiment & learn than opportunity to earn some Sol.
However, the speed of the script is still second and RPC is another matter.
It is the RPC that determines how fast the tx will go through.
Using a free Quicknode RPC & automatic mode it took around 5-15s to be a coin since it's created.

## Main tools

- **Automatic sniper**: Launch a monitor on every new coin and automatically buy it
- **Single sniper**: Buy a single coin just by providing it's contract address
- _Soon more..._`,
    images: ["/projects/pumpfunBot1.png"],
    thumbnail: "/projects/pumpfunBot1.png",
    technologies: [
      "TypeScript",
      "Solana web3.js",
      "@coral-xyz/anchor",
      "@coral-xyz/borsh",
      "@solana-developers/helpers",
      "@solana/spl-token",
      "@solana/web3.js",
      "bn.js",
      "inquirer",
    ],
    liveUrl: "#",
    githubUrl: "https://github.com/carson2222/pumpfun-bot",
    year: "2024",
  },
  {
    id: 4,
    title: "antibotaio.dev",
    description: "A sleek authentication system with Polar OAuth integration and dynamic UI components",
    longDescription:
      "## Modern Authentication UI with Polar Integration\n\nA sophisticated authentication system that combines modern UI design with secure Polar OAuth integration. The project features a beautiful, responsive interface built with Next.js and Tailwind CSS, offering a seamless user experience with real-time feedback and smooth transitions.\n\n**Key Features:**\n- Secure OAuth2 authentication flow with Polar\n- Modern, responsive UI with dark mode support\n- Interactive 3D globe visualization using Three.js\n- Real-time form validation and error handling\n- Animated transitions and loading states\n- Session management with secure token handling\n- Custom UI components built with Radix UI primitives\n\n**Tech Stack:**\n- Next.js 13+ with App Router\n- TypeScript for type safety\n- Tailwind CSS for styling\n- Radix UI for accessible components\n- Three.js/React Three Fiber for 3D graphics\n- Polar SDK for authentication\n- Framer Motion for animations\n- Shadcn UI component system\n\n**Results:**\n✓ Implemented a secure authentication flow with Polar OAuth2\n✓ Created a reusable component library with 15+ custom components\n✓ Achieved smooth 60fps animations and transitions\n✓ Built a responsive design that works across all device sizes\n✓ Integrated real-time session management and token refresh",
    images: ["/projects/antibotaio1.png", "/projects/antibotaio2.png", "/projects/antibotaio3.png"],
    thumbnail: "/projects/antibotaio1.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Three.js",
      "Polar",
      "Framer Motion",
      "Shadcn UI",
      "JWT",
    ],
    liveUrl: "https://antibotaio.dev/",
    githubUrl: "",
    year: "2025",
  },

  {
    id: 5,
    title: "Todo List CRUD App",
    description: "A simple and modern web app for managing todos with full CRUD functionality.",
    longDescription: `## Todo List CRUD App

A user-friendly to-do list application that allows users to create, read, update, and delete tasks in an intuitive interface.

**Key Features:**
- Add, edit, and delete tasks
- Mark tasks as completed or pending
- Persistent storage in browser (localStorage)
- Responsive design for mobile and desktop
- User-friendly UI with instant feedback

**Tech Stack:**
- JavaScript (ES6+)
- HTML5 & CSS3
- LocalStorage API

**Results:**
✓ Enabled efficient task management for users  
✓ Achieved fast load times with lightweight frontend  
✓ Demonstrated solid understanding of CRUD operations and state management
`,
    images: [],
    thumbnail: "",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    liveUrl: "",
    githubUrl: "https://github.com/carson2222/todo-list-CRUD",
    year: "2023",
  },
  {
    id: 6,
    title: "Seimians Website",
    description: "A modern personal portfolio website designed and built from scratch.",
    longDescription:
      "## Seimians Website\n\nA custom portfolio website to showcase my work, skills, and contact information. This project was built as a personal branding tool and to demonstrate proficiency in modern web development practices. The entire UI design was meticulously crafted in Figma before implementation, ensuring a cohesive and polished user experience.\n\n[🔗 View Figma Design](https://www.figma.com/design/Xxvg6YnPojLumVfoNcBVW1/Untitled?node-id=0-1&t=5jaStqIUy6yV4vsA-1) \n\n**Key Features:**\n- Responsive and visually appealing UI\n- Interactive project showcase section\n- About, Skills, and Contact pages\n- Deployed to Vercel for high availability\n- Complete Figma design system and wireframes\n\n**Tech Stack:**\n- JavaScript\n- HTML5 & CSS3\n- Vercel (Deployment)\n- Figma (UI/UX Design)\n\n",
    images: ["/projects/seimian1.png", "/projects/seimian2.png", "/projects/seimian3.png"],
    thumbnail: "/projects/seimian1.png",
    technologies: ["React", "JavaScript", "Vercel", "Vite"],
    liveUrl: "https://seimians-website-eight.vercel.app",
    githubUrl: "https://github.com/carson2222/seimians_website",
    year: "2024",
  },
];

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const openProjectDetails = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProjectDetails = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden">
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

        {/* Glowing orbs */}
        <div className="absolute top-1/3 left-1/4 w-60 h-60 bg-primary/20 rounded-full filter blur-[80px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-primary/20 rounded-full filter blur-[100px] animate-pulse delay-700" />
      </div>

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
                    src={project.thumbnail || "/placeholder.svg"}
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
                    {project.technologies.slice(0, 3).map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="bg-muted/50">
                        +{project.technologies.length - 3}
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
                {/* <Image
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.title}
                  fill
                  className="object-cover"
                /> */}
                <ImageGallery images={selectedProject.images} />
              </div>

              <div className="mt-6">
                <p className="text-foreground mb-6 prose lg:prose-xl">
                  <Markdown>{selectedProject.longDescription}</Markdown>
                </p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tag) => (
                      <Badge key={tag} className="bg-primary/10 text-primary hover:bg-primary/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
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

// Image Gallery Component
function ImageGallery({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(autoSlide); // Cleanup on unmount or dependency change
  }, [images.length, currentIndex]);
  return (
    <div className="relative w-full">
      {/* Main Image */}
      <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden">
        <Image
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`Project image ${currentIndex + 1}`}
          fill
          className="object-cover transition-opacity duration-300"
          priority
        />

        {/* Navigation Arrows */}
        <div className="absolute inset-0 flex items-center justify-between p-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm border-border/50"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous image</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm border-border/50"
            onClick={goToNext}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next image</span>
          </Button>
        </div>

        {/* Image Counter */}
        <div className="absolute bottom-2 right-2 bg-background/80 backdrop-blur-sm rounded-full px-2 py-1 text-xs">
          {currentIndex + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex justify-center mt-4 gap-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`relative w-16 h-16 rounded-md overflow-hidden transition-all ${
              currentIndex === index ? "ring-2 ring-primary" : "ring-1 ring-border/50 opacity-70 hover:opacity-100"
            }`}
            aria-label={`View image ${index + 1}`}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>

      {/* Dot Indicators (for mobile) */}
      <div className="flex justify-center mt-2 md:hidden">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className="p-1"
            aria-label={`Go to image ${index + 1}`}
          >
            {currentIndex === index ? (
              <CircleDot className="h-4 w-4 text-primary" />
            ) : (
              <Circle className="h-4 w-4 text-muted-foreground" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
