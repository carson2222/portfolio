import Hero from "@/components/hero";
import Projects from "@/components/projects";
import About from "@/components/about";
import Contact from "@/components/contact";
import CustomCursor from "@/components/custom-cursor";
import { ModeToggle } from "@/components/mode-toggle";
import SkillsMarquee from "@/components/skills-marquee";
import Strengths from "@/components/strengths";
import WorkHistory from "@/components/work-history";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <CustomCursor />
      <div className="fixed top-6 right-6 z-50">
        <ModeToggle />
      </div>
      <Hero />
      <About />
      <Strengths />
      <WorkHistory />
      <SkillsMarquee />
      <Projects />
      <Contact />
    </main>
  );
}
