"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "motion/react";
import { glassHover } from "@/lib/animations";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  variant?: "default" | "strong" | "dark";
  hover?: boolean;
}

const GlassCard = React.forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, variant = "default", hover = true, children, ...props }, ref) => {
    const variantClasses = {
      default: "glass-card",
      strong: "glass-strong",
      dark: "glass-dark",
    };

    return (
      <motion.div
        ref={ref}
        initial="rest"
        whileHover={hover ? "hover" : undefined}
        variants={hover ? glassHover : undefined}
        className={cn(
          variantClasses[variant],
          "rounded-2xl p-6",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

GlassCard.displayName = "GlassCard";

export { GlassCard };
