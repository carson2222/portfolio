"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "next-themes";

const aboutMe = `Technology has been my passion since childhood—I&apos;ve practically lived and breathed it
                      24/7. From an early age, I was fascinated by IT and programming, but it wasn&apos;t until
                      high school that I fully immersed myself in this field. What started as a pursuit of good
                      grades quickly turned into something much bigger: a genuine drive to learn and create.
                      <br />
                      <br />
                      My journey began with JavaScript, a language that remains my strongest ally. Over time, I
                      explored its entire ecosystem, constantly expanding my knowledge by experimenting with new
                      technologies and dedicating every free moment to personal projects.
                      <br />
                      <br />
                      At around 16, I discovered the world of Web3. While my age made it difficult to land a
                      traditional job, I turned to freelancing—a decision that sharpened both my technical skills
                      and my ability to collaborate with clients.
                      <br />
                      <br />
                      Now, as I look ahead to 2025, my goals are clear: excel in my final exams, secure a place in
                      the IT program at the Silesian University of Technology in Gliwice, and find an ambitious
                      role as a Junior Fullstack Developer—one that challenges me to grow and contribute
                      meaningfully to innovative projects.`;

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
