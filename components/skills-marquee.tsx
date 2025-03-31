"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { useTheme } from "next-themes";
import Image from "next/image";
import shuffleArray from "@/lib/shuffleArray";

interface Skill {
  name: string;
  src: string;
}
const skills: Skill[] = [
  { name: "JavaScript", src: "/marquee/js.png" },
  { name: "React", src: "/marquee/react.png" },
  { name: "Next.js", src: "/marquee/nextjs.png" },
  { name: "TypeScript", src: "/marquee/ts.png" },
  { name: "Node.js", src: "/marquee/nodejs.png" },
  { name: "Tailwind", src: "/marquee/tailwind.png" },
  { name: "Figma", src: "/marquee/figma.png" },
  { name: "GitHub", src: "/marquee/github.png" },
  { name: "Git", src: "/marquee/git.png" },
  { name: "CSS", src: "/marquee/css.png" },
  { name: "HTML", src: "/marquee/html.png" },
  { name: "AWS", src: "/marquee/aws.png" },
  { name: "ExpressJS", src: "/marquee/express.png" },

  { name: "Solana", src: "/marquee/solana.png" },
  { name: "PostgreSQL", src: "/marquee/postgresql.png" },
  { name: "MySQL", src: "/marquee/mysql.png" },
  { name: "Supabase", src: "/marquee/supabase.png" },
  { name: "Vercel", src: "/marquee/vercel.png" },
  { name: "ShdwDrive", src: "/marquee/shdwdrive.png" },
  { name: "Jest", src: "/marquee/jest.png" },
  { name: "Metaplex", src: "/marquee/metaplex.png" },

  { name: "Telegram", src: "/marquee/telegram.png" },
  { name: "Discord", src: "/marquee/discord.png" },
  { name: "OpenAI", src: "/marquee/OpenAI.png" },
  { name: "ai16z", src: "/marquee/ai16z.png" },
  { name: "Shadcn", src: "/marquee/shadcn.png" },
  { name: "Redux", src: "/marquee/redux.png" },

  { name: "WebSockets", src: "/marquee/websocket.png" },
  { name: "Docker", src: "/marquee/docker.png" },
];

export default function SkillsMarquee() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-[200px] w-full flex items-center justify-center">Loading skills...</div>;
  }

  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <section id="skills" className="py-20  relative overflow-hidden">
        <div className="w-full">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">My Skills</h2>

          <div className="space-y-12">
            {/* First marquee - left to right */}
            <Marquee gradient={false} speed={40} pauseOnHover={true} className="py-4">
              {shuffleArray(skills).map((skill, index) => (
                <motion.div
                  key={`row1-${index}`}
                  className={`
                mx-4 px-8 py-6 rounded-xl flex items-center
                backdrop-blur-sm border transition-all duration-300 gap-2
                ${isDark ? "bg-slate-900/50 border-slate-700" : "bg-white/50 border-slate-200"}
                hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10
              `}
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <div className="w-10 h-10 flex items-center justify-center">
                    <Image
                      src={skill.src}
                      alt={skill.name}
                      width={40}
                      height={40}
                      className="max-w-10 max-h-10 w-auto h-auto"
                    />
                  </div>
                  <span className="text-xl font-semibold w-max-[40px] h-auto">{skill.name}</span>
                </motion.div>
              ))}
            </Marquee>

            {/* Second marquee - right to left (opposite direction) */}
            <Marquee gradient={false} speed={40} direction="right" pauseOnHover={true} className="py-4">
              {shuffleArray(skills).map((skill, index) => (
                <motion.div
                  key={`row2-${index}`}
                  className={`
                mx-4 px-8 py-6 rounded-xl flex items-center gap-2
                backdrop-blur-sm border transition-all duration-300
                ${isDark ? "bg-slate-900/50 border-slate-700" : "bg-white/50 border-slate-200"}
                hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10
              `}
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <div className="w-10 h-10 flex items-center justify-center">
                    <Image
                      src={skill.src}
                      alt={skill.name}
                      width={40}
                      height={40}
                      className="max-w-10 max-h-10 w-auto h-auto"
                    />
                  </div>{" "}
                  <span className="text-xl font-semibold">{skill.name}</span>
                </motion.div>
              ))}
            </Marquee>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
