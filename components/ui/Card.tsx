"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function Card({
  children,
  className,
  hover = true,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={hover ? { y: -6 } : undefined}
      className={cn(
        "glass rounded-2xl shadow-glass transition-shadow duration-300",
        hover && "hover:shadow-glass-lg",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

export function Pill({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-royal-200/70 dark:border-royal-400/20 bg-royal-50/70 dark:bg-royal-500/10 px-3 py-1 font-mono text-[11px] md:text-xs text-royal-700 dark:text-royal-200 tracking-tight",
        className
      )}
    >
      {children}
    </span>
  );
}
