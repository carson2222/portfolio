"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Hero() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 w-full h-full -z-10">
        {/* Gradient background */}
        <div
          className={`absolute inset-0 ${
            isDark
              ? "bg-gradient-to-br from-black via-slate-900 to-slate-800"
              : "bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200"
          }`}
        ></div>

        {/* Animated grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        </div>

        {/* Glowing orbs */}
        <div className="absolute top-1/4 left-1/4 w-60 h-60 bg-primary/20 rounded-full filter blur-[80px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-80 h-80 bg-primary/20 rounded-full filter blur-[100px] animate-pulse delay-700"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-primary/30 rounded-full filter blur-[60px] animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 text-center z-10">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 flex"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Building Digital{" "}
          <Image src={"/pokemons/unknown_e.png"} className="ml-2" alt="E" width={65} height={40} />
          xperiences
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl mb-10 max-w-2xl mx-auto text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, asperiores qui quis animi atque,
          commodi consequuntur quia
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link href="#projects">
            <Button
              size="lg"
              className="rounded-full px-8 py-6 text-lg bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Explore My Work
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
