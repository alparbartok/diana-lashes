"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function ThemeToggle({ className, size = "md" }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-9 w-9",
    lg: "h-10 w-10",
  };

  const iconSizes = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6",
  };

  if (!mounted) {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-full",
          "glass-card hover:bg-accent/20 transition-all duration-300",
          sizeClasses[size],
          className
        )}
        aria-label="Toggle theme"
      >
        <span className={cn("opacity-0", iconSizes[size])} />
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={cn(
        "inline-flex items-center justify-center rounded-full",
        "glass-card hover:bg-accent/20 transition-all duration-300",
        "hover:scale-105 active:scale-95",
        sizeClasses[size],
        className
      )}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      <Sun
        className={cn(
          iconSizes[size],
          "text-champagne-gold transition-all duration-300",
          isDark ? "rotate-0 scale-100" : "rotate-90 scale-0 absolute"
        )}
      />
      <Moon
        className={cn(
          iconSizes[size],
          "text-champagne-gold transition-all duration-300",
          isDark ? "-rotate-90 scale-0 absolute" : "rotate-0 scale-100"
        )}
      />
    </button>
  );
}
