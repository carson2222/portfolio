import Hero from "@/components/hero";
import Projects from "@/components/projects";
import About from "@/components/about";
import Contact from "@/components/contact";
import CustomCursor from "@/components/custom-cursor";
import { ModeToggle } from "@/components/mode-toggle";
import SkillsMarquee from "@/components/skills-marquee";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <CustomCursor />
      <div className="fixed top-6 right-6 z-50">
        <ModeToggle />
      </div>
      <Hero />
      <About />
      <SkillsMarquee />
      <Projects />
      <Contact />
    </main>
  );
}
