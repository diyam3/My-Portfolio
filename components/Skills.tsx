"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { techStack } from "@/lib/data";
import {
  Code2,
  LayoutPanelLeft,
  Server,
  Database,
  Sparkles,
  Cloud,
  Wrench,
  BrainCircuit,
} from "lucide-react";

const categoryIcons: Record<string, React.ElementType> = {
  Languages: Code2,
  Frontend: LayoutPanelLeft,
  Backend: Server,
  Databases: Database,
  AI: Sparkles,
  Cloud: Cloud,
  "Developer Tools": Wrench,
  "Core CS": BrainCircuit,
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeading
          eyebrow="02 · stack"
          title="Tech Stack"
          description="Tools and technologies I reach for when turning an idea into something real."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(techStack).map(([category, items], i) => {
            const Icon = categoryIcons[category] ?? Code2;
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className="glass rounded-2xl shadow-glass p-6 hover:shadow-glass-lg transition-shadow"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-royal-600/10 text-royal-600 dark:text-royal-300 flex items-center justify-center">
                    <Icon size={17} />
                  </div>
                  <h3 className="font-display font-semibold text-ink dark:text-white">
                    {category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {items.map((item, idx) => (
                    <motion.span
                      key={item}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.04 }}
                      className="font-mono text-xs rounded-lg bg-royal-50 dark:bg-royal-500/10 text-navy-800 dark:text-royal-100 px-2.5 py-1.5 border border-royal-100 dark:border-royal-400/10"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
