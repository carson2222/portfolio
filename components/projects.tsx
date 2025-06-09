"use client";

import { useState, useCallback, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ChevronRight, ChevronLeft, CircleDot, Circle } from "lucide-react";
import Image from "next/image";
import Markdown from "react-markdown";
import { Project, projects } from "@/data/projects";

// Constants
const ANIMATION_DURATION = 0.3;
const SLIDE_TRANSITION = { type: "spring", stiffness: 300, damping: 30 };

// Components
interface ImageGalleryProps {
  images: string[];
}

interface FullScreenImageProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

function FullScreenImage({ images, currentIndex, isOpen, onClose, onNavigate }: FullScreenImageProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        onNavigate((currentIndex - 1 + images.length) % images.length);
      } else if (e.key === "ArrowRight") {
        onNavigate((currentIndex + 1) % images.length);
      } else if (e.key === "Escape") {
        onClose();
      }
    },
    [currentIndex, images.length, onClose, onNavigate]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }
    return undefined;
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] p-0">
        <div className="relative h-[95vh] w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative h-full w-full"
            >
              <Image
                src={images[currentIndex]}
                alt={`Full screen image ${currentIndex + 1}`}
                fill
                className="object-contain"
                sizes="95vw"
                priority
              />
            </motion.div>
          </AnimatePresence>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm"
            onClick={() => onNavigate((currentIndex - 1 + images.length) % images.length)}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm"
            onClick={() => onNavigate((currentIndex + 1) % images.length)}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, index) => (
              <button key={index} onClick={() => onNavigate(index)} className="p-1.5">
                {index === currentIndex ? <CircleDot className="h-2 w-2" /> : <Circle className="h-2 w-2" />}
              </button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function ImageGallery({ images }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const goToNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const goToPrevious = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  const goToImage = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const openFullScreen = useCallback(() => {
    setIsFullScreen(true);
  }, []);

  const closeFullScreen = useCallback(() => {
    setIsFullScreen(false);
  }, []);

  if (!images || images.length === 0) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-zinc-900">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-zinc-500">No preview available</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="relative w-full">
        <div 
          className="relative aspect-video w-full overflow-hidden rounded-lg cursor-pointer"
          onClick={openFullScreen}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={SLIDE_TRANSITION}
            >
              <Image
                src={images[currentIndex]}
                alt={`Project image ${currentIndex + 1}`}
                fill
                className="object-cover"
                priority={currentIndex === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {images.length > 1 && (
          <>
            <Button
              variant="outline"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm"
              onClick={goToPrevious}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm"
              onClick={goToNext}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
            <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
              {images.map((_, index) => (
                <button key={index} onClick={() => goToImage(index)} className="p-1.5">
                  {index === currentIndex ? <CircleDot className="h-2 w-2" /> : <Circle className="h-2 w-2" />}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      <FullScreenImage
        images={images}
        currentIndex={currentIndex}
        isOpen={isFullScreen}
        onClose={closeFullScreen}
        onNavigate={goToImage}
      />
    </>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openProjectDetails = useCallback((project: Project) => {
    setSelectedProject(project);
  }, []);

  const closeProjectDetails = useCallback(() => {
    setSelectedProject(null);
  }, []);

  const featuredProjects = useMemo(() => projects.filter((p) => p.featured), []);
  const regularProjects = useMemo(() => projects.filter((p) => !p.featured), []);

  return (
    <section id="projects" className="container space-y-8 py-24">
      <div className="flex flex-col items-start gap-4">
        <h2 className="text-3xl font-bold leading-tight tracking-tighter md:text-4xl">Featured Projects</h2>
        <p className="text-muted-foreground">
          Here are some of my recent projects that showcase my skills and experience.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[...featuredProjects, ...regularProjects].map((project) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: ANIMATION_DURATION }}
          >
            <Card
              className={`group relative cursor-pointer overflow-hidden transition-all hover:shadow-lg ${
                project.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
              onClick={() => openProjectDetails(project)}
            >
              <CardContent className="p-0">
                <div className="relative aspect-video overflow-hidden">
                  {project.thumbnail ? (
                    <div className="absolute inset-0 overflow-hidden">
                      <Image
                        src={project.thumbnail}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  ) : (
                    <div className="absolute inset-0 bg-zinc-900" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/0 p-6 transition-opacity duration-300 group-hover:opacity-90">
                    <div className="flex h-full flex-col justify-end gap-4">
                      <h3 className="font-bold text-lg text-white drop-shadow-md">{project.title}</h3>
                      <p className="text-sm text-gray-200 drop-shadow-md line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <Badge key={tech} variant="secondary" className="bg-white/10 text-white hover:bg-white/20">
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > 3 && (
                          <Badge variant="secondary" className="bg-white/10 text-white hover:bg-white/20">
                            +{project.technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <Dialog open={!!selectedProject} onOpenChange={() => closeProjectDetails()}>
        {selectedProject && (
          <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[800px]">
            <DialogHeader>
              <DialogTitle>{selectedProject.title}</DialogTitle>
              <DialogDescription>
                <div className="flex flex-wrap gap-2 py-2">
                  {selectedProject.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </DialogDescription>
            </DialogHeader>

            <ImageGallery images={selectedProject.images} />

            <div className="prose prose-sm dark:prose-invert">
              <Markdown>{selectedProject.longDescription}</Markdown>
            </div>

            <div className="flex flex-wrap gap-4">
              {selectedProject.liveUrls?.map((link) => (
                <Button key={link.url} asChild>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    {link.label}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              ))}
              {selectedProject.githubUrl && (
                <Button variant="outline" asChild>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    GitHub
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
}
