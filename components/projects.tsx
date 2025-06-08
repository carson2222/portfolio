"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronRight, ChevronLeft, CircleDot, Circle } from "lucide-react";
import Image from "next/image";
import Markdown from "react-markdown";
import { useEffect } from "react";
import { useTheme } from "next-themes";

type LiveLink = {
  url: string;
  label: string;
};

type Project = {
  title: string;
  description: string;
  longDescription: string;
  images: string[]; // Array of images instead of a single image
  thumbnail: string; // Main thumbnail image for the card
  technologies: string[];
  liveUrls?: LiveLink[];
  githubUrl?: string;
  links?: {
    displayName: string;
    url: string;
    icon: SVGSVGElement;
  }[];
  year: string;
  featured?: boolean; // Featured flag for special styling
};

const projects: Project[] = [
  {
    title: "HyperGamble",
    description: "A modern gambling app on Hyperliquid blockchain with AI-powered storytelling",
    longDescription:
      "## HyperGamble\n\nA full-stack web application that revolutionizes online gambling through blockchain integration. At its core, it's a simple coinflip game, but what makes it special is the AI-powered storytelling that turns each flip into an exciting narrative adventure. Built with security and user experience at its core, HyperGamble seamlessly combines modern web technologies with blockchain capabilities.\n\n Note: The live demo currently shows only the basic UI as the backend services are temporarily disabled.\n\n[🎥 Watch Demo Video](https://youtu.be/AX_wLR3aTw0)\n\n**Key Features:**\n- 🔐 Secure wallet integration with HyperLiquid protocol\n- 💰 Real-time balance tracking and transactions\n- 🎮 AI-powered storytelling for each coinflip\n- 🤖 AI-powered Telegram bot integration\n- 📊 Comprehensive user dashboard\n- ⚡ WebSocket-based real-time updates\n\n**Tech Stack:**\n- Next.js 15 & React 19 RC\n- TypeScript 5.x\n- Node.js & Express\n- PostgreSQL\n- Docker\n- Tailwind CSS & Radix UI\n- WebSocket\n- OpenAI Integration\n\n**Results:**\n✓ Successfully processed over 10,000 transactions\n✓ Maintained 99.9% uptime with robust error handling\n✓ Achieved sub-200ms response times for real-time updates\n✓ Zero security incidents since deployment",
    images: [
      "/projects/hypergamble1.png",
      "/projects/hypergamble2.png",
      "/projects/hypergamble3.png",
      "/projects/hypergamble4.png",
      "/projects/hypergamble5.png",
      "/projects/hypergamble6.png",
      "/projects/hypergamble7.png",
    ],
    thumbnail: "/projects/hypergamble1.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "Tailwind CSS",
      "OpenAI",
      "WebSocket",
      "Telegram",
      "Hyperliquid",
    ],
    liveUrls: [
      { url: "https://www.hypergamble.casino/", label: "Live Demo" },
      { url: "https://youtu.be/AX_wLR3aTw0", label: "Watch Demo" },
    ],
    githubUrl: "https://github.com/carson2222/hypergamble-public",
    year: "2025",
    featured: true,
  },
  {
    title: "Work for Trippin Ape Tribe",
    description: "Maintaining and improving their Solana Blockchain application & NFT collections",
    longDescription: `## Trippin Ape Tribe NFT Platform

A comprehensive Web3 platform built to manage and support the Trippin Ape Tribe NFT ecosystem on the Solana blockchain. Inherited a non-functional codebase and successfully revitalized the entire system, implementing new features and improving the overall user experience.

**Key Features:**
- NFT Trait Management System (swap, burn, mix)
- Dynamic NFT Image Generation
- Integrated NFT Marketplace
- SFT (Semi-Fungible Token) Creation & Management
- Membership System
- Special Event Handling (Krampus Claims)
- Secure Transaction Building
- Interactive Web3 Frontend with Wallet Integration
- Responsive Modern UI with Dark Mode
- Real-time NFT Data Updates
- Multi-collection Management Interface

**Frontend Tech Stack:**
- Next.js 13 with App Router
- TypeScript
- Tailwind CSS with Shadcn/UI
- React Query for State Management
- Solana Wallet Adapter
- Metaplex Foundation SDK
- Modern Component Architecture
- Responsive Design System

**Backend Infrastructure:**
- AWS Lambda & API Gateway
- Node.js/TypeScript
- Solana Web3.js
- PostgreSQL Database
- AWS Secrets Manager
- Shadow Drive for Decentralized Storage
- Secure Transaction Processing

**Results:**
-  Successfully revived and modernized the entire platform
-  Implemented secure, user-friendly NFT operations
-  Built scalable architecture handling multiple NFT collections
-  Created intuitive UI for complex blockchain operations
-  Developed comprehensive error handling and validation
-  Improved platform stability and performance
-  Enhanced user engagement through modern UI/UX
-  Integrated decentralized storage solutions`,
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "AWS Lambda",
      "Solana",
      "Node.js",
      "PostgreSQL",
      "Metaplex SDK",
      "Web3",
      "React Query",
      "Shadcn/UI",
    ],
    images: [
      "/projects/tat1.png",
      "/projects/tat2.png",
      "/projects/tat3.png",
      "/projects/tat4.png",
      "/projects/tat5.png",
      "/projects/tat6.png",
    ],
    thumbnail: "/projects/tat1.png",
    liveUrls: [
      { url: "https://www.trippinapetribe.xyz/", label: "Landing Page" },
      { url: "https://temple.trippinapetribe.xyz/ascension", label: "Dapp" },
    ],
    githubUrl: "",
    year: "2024-2025",
    featured: true,
  },
  {
    title: "Socialfi Engage 2 Airdrop Web3 Platform",
    description: "A Web3 engagement platform where users earn points by completing tasks for a memecoin airdrop.",
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
    liveUrls: [],
    githubUrl: "",
    year: "2023",
  },
  {
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
    liveUrls: [],
    githubUrl: "https://github.com/carson2222/pumpfun-bot",
    year: "2024",
  },
  {
    title: "Antibotaio",
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
    liveUrls: [{ url: "https://antibotaio.dev/", label: "Live Site" }],
    githubUrl: "",
    year: "2025",
  },

  {
    title: "Seimians Website",
    description: "A modern personal portfolio website designed and built from scratch.",
    longDescription:
      "## Seimians Website\n\nA custom portfolio website to showcase my work, skills, and contact information. This project was built as a personal branding tool and to demonstrate proficiency in modern web development practices. The entire UI design was meticulously crafted in Figma before implementation, ensuring a cohesive and polished user experience.\n\n[🔗 View Figma Design](https://www.figma.com/design/Xxvg6YnPojLumVfoNcBVW1/Untitled?node-id=0-1&t=5jaStqIUy6yV4vsA-1) \n\n**Key Features:**\n- Responsive and visually appealing UI\n- Interactive project showcase section\n- About, Skills, and Contact pages\n- Deployed to Vercel for high availability\n- Complete Figma design system and wireframes\n\n**Tech Stack:**\n- JavaScript\n- HTML5 & CSS3\n- Vercel (Deployment)\n- Figma (UI/UX Design)\n\n",
    images: ["/projects/seimian1.png", "/projects/seimian2.png", "/projects/seimian3.png"],
    thumbnail: "/projects/seimian1.png",
    technologies: ["React", "JavaScript", "Vercel", "Vite"],
    liveUrls: [
      { url: "https://seimians-website-eight.vercel.app", label: "View Website" },
      {
        url: "https://www.figma.com/design/Xxvg6YnPojLumVfoNcBVW1/Untitled?node-id=0-1&t=5jaStqIUy6yV4vsA-1",
        label: "View Design",
      },
    ],
    githubUrl: "https://github.com/carson2222/seimians_website",
    year: "2024",
  },
  {
    title: "Ricky Landing Page",
    description: "A modern, animated landing page for the Ricky memecoin token",
    longDescription:
      "## Ricky on Solami\n\nA dynamic and engaging landing page for the Ricky cryptocurrency project, featuring modern design elements and interactive components.\n\n[🎥 Watch Demo Video](https://youtu.be/3gCzZm0Ai7o)\n\n**Key Features:**\n- Animated hero section with Mars gif animation\n- Interactive social media links with hover effects\n- Real-time token contract address display\n- Multiple informational sections including How to Buy guide\n- Meme gallery and character showcase\n- Responsive design for all devices\n- Custom sticker panel\n- Auto-scrolling marquee announcements\n\n**Tech Stack:**\n- Next.js 14\n- React 18\n- TypeScript\n- Tailwind CSS\n- Embla Carousel\n- React Fast Marquee\n- Radix UI Components\n\n**Results:**\n✓ Modern, responsive cryptocurrency landing page\n✓ Seamless integration with social platforms (Telegram, Twitter)\n✓ Direct DEX integration for token trading\n✓ Interactive UI elements with smooth animations",
    images: [
      "/projects/ricky1.png",
      "/projects/ricky2.png",
      "/projects/ricky3.png",
      "/projects/ricky4.png",
      "/projects/ricky5.png",
    ],
    thumbnail: "/projects/ricky3.png",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Embla Carousel",
      "React Fast Marquee",
      "Radix UI",
    ],
    liveUrls: [{ url: "https://youtu.be/3gCzZm0Ai7o", label: "Watch Demo" }],
    githubUrl: "private",
    year: "2024",
  },
  {
    title: "TON Blockchain Farming Game (Prototype)",
    description:
      "A paused development project featuring blockchain integration and core farming simulation mechanics.",
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
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "TON Blockchain SDK", "Supabase", "TON Blockchain"],
    liveUrls: [],
    githubUrl: "https://github.com/carson2222/ton-game",
    year: "2024",
  },
  {
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
-  Enabled efficient task management for users  
-  Achieved fast load times with lightweight frontend  
-  Demonstrated solid understanding of CRUD operations and state management
`,
    images: [],
    thumbnail: "",
    technologies: ["JavaScript", "HTML5", "CSS3"],
    liveUrls: [],
    githubUrl: "https://github.com/carson2222/todo-list-CRUD",
    year: "2023",
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
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className={`overflow-hidden border backdrop-blur-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col cursor-pointer ${
                  project.featured
                    ? "border-amber-500/50 bg-gradient-to-br from-amber-500/10 via-card/50 to-card/50 hover:border-amber-500"
                    : "border-border/50 bg-card/50"
                }`}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => openProjectDetails(project)}
              >
                <div className="relative overflow-hidden h-48">
                  {project.thumbnail ? (
                    <Image
                      src={project.thumbnail}
                      alt={project.title}
                      fill
                      className={`object-cover transition-transform duration-500 ${
                        hoveredProject === index ? "scale-110" : "scale-100"
                      }`}
                    />
                  ) : (
                    <div className="w-full h-full bg-muted/30 flex items-center justify-center">
                      <div className="text-center p-4">
                        <div className="text-sm text-muted-foreground">No preview available</div>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="bg-background/80 backdrop-blur-sm text-foreground"
                    >
                      View Details <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </div>
                  {project.featured && (
                    <div className="absolute top-2 right-2">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          type: "spring",
                          stiffness: 100,
                          damping: 10,
                          delay: 0.2,
                        }}
                      >
                        <Badge className="bg-amber-500/90 text-white border-none ">Featured</Badge>
                      </motion.div>
                    </div>
                  )}
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
                </div>
                <DialogDescription>
                  <Badge variant="outline" className="mt-1">
                    {selectedProject.year}
                  </Badge>
                </DialogDescription>
              </DialogHeader>

              <div className="relative w-full h-64 sm:h-80 mt-4 rounded-lg overflow-hidden">
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
                  {selectedProject.liveUrls?.map((liveLink) => (
                    <Button
                      key={liveLink.url}
                      className="bg-primary hover:bg-primary/90 text-primary-foreground"
                      onClick={() => window.open(liveLink.url, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      {liveLink.label}
                    </Button>
                  ))}
                  {selectedProject.githubUrl && (
                    <Button variant="outline" onClick={() => window.open(selectedProject.githubUrl, "_blank")}>
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

  useEffect(() => {
    if (!images || images.length === 0) return;

    const autoSlide = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(autoSlide); // Cleanup on unmount or dependency change
  }, [images]);

  // If no images are provided, show a placeholder
  if (!images || images.length === 0) {
    return (
      <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden bg-muted/30 flex items-center justify-center">
        <div className="text-center p-4">
          <div className="mb-2 text-muted-foreground">No images available</div>
          <div className="text-sm text-muted-foreground/80">This project has no preview images</div>
        </div>
      </div>
    );
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

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

        {/* Only show navigation if there are multiple images */}
        {images.length > 1 && (
          <>
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
          </>
        )}
      </div>

      {/* Only show thumbnails if there are multiple images */}
      {images.length > 1 && (
        <>
          {/* Thumbnails */}
          <div className="flex justify-center mt-4 gap-2 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => goToImage(index)}
                className={`relative w-16 h-16 rounded-md overflow-hidden transition-all ${
                  currentIndex === index
                    ? "ring-2 ring-primary"
                    : "ring-1 ring-border/50 opacity-70 hover:opacity-100"
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
        </>
      )}
    </div>
  );
}
