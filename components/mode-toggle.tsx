"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  console.log("theme", theme);

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="relative h-9 w-9 rounded-full">
        <span className="sr-only">Toggle theme</span>
        <Sun className="h-4 w-4 rotate-0 scale-100 transition-all" />
      </Button>
    );
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
        console.log("chuj");
      }}
      className="relative h-9 w-9 rounded-full bg-background/80 backdrop-blur-sm border border-border/50"
    >
      <span className="sr-only">Toggle theme</span>
      <Sun
        className={`h-4 w-4 rotate-0 scale-100 transition-all ${theme === "dark" ? "opacity-0" : "opacity-100"}`}
      />
      <Moon
        className={`absolute h-4 w-4 rotate-90 scale-0 transition-all ${
          theme === "dark" ? "rotate-0 scale-100 opacity-100" : "opacity-0"
        }`}
      />
    </Button>
  );
}
