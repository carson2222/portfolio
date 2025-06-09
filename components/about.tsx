"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "next-themes";

const aboutMe = `I've been into technology for as long as I can remember. It&apos;s always been more than just a hobby, it's something I live and breathe. I got into IT and programming pretty early, but it wasn&apos;t until high school that things really clicked for me. What started out as a way to get good grades turned into a genuine passion for learning and building things.
<br />
<br />
I started with JavaScript, and it&apos;s still my go-to language. Over time, I&apos;ve explored its entire ecosystem, always trying out new tools and frameworks, and spending most of my free time working on personal projects just for the fun of it.
<br />
<br />
When I was about 16, I got into Web3. Since I was too young for a regular job, I dove into freelancing instead. It turned out to be the best decision—I not only improved my technical skills but also learned how to work with clients and manage real-world projects.
<br />
<br />
Looking ahead to 2025, I&apos;ve set my sights on a few big goals: ace my final exams, get into the IT program at the Silesian University of Technology in Gliwice, and land a Junior Fullstack Developer role where I can keep learning, push my limits, and contribute to something meaningful.`;


export default function About() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section id="about" className="relative min-h-screen py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
      {/* Background effects similar to Hero section */}
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

      <div className="max-w-7xl mx-auto">
        {/* About Me Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/70 to-primary">
            About Me
          </h2>
          <Card className="bg-card/50 backdrop-blur-sm border border-border/50">
            <CardContent className="pt-6">
              <div
                className="max-w-3xl mx-auto text-muted-foreground leading-relaxed text-lg"
                dangerouslySetInnerHTML={{ __html: aboutMe }}
              />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
