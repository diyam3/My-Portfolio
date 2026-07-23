"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center mx-auto" : ""}`}
    >
      <span className="font-mono text-xs md:text-sm text-royal-600 dark:text-royal-300 tracking-wide">
        {`// ${eyebrow}`}
      </span>
      <h2 className="mt-2 font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-ink dark:text-white tracking-tight">
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-mist dark:text-royal-100/60 max-w-2xl text-base md:text-lg ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
