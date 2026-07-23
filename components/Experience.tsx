"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { Pill } from "@/components/ui/Card";
import { experiences } from "@/lib/data";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeading
          eyebrow="03 · timeline"
          title="Experience"
          description="Internships and freelance work where I turned requirements into shipped software."
        />

        <div className="relative">
          <div className="absolute left-[19px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-royal-300/60 via-royal-300/30 to-transparent dark:from-royal-400/30 md:-translate-x-1/2" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: 0.05 }}
                className={`relative flex flex-col md:flex-row items-start gap-6 ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="absolute left-0 md:left-1/2 top-1 w-10 h-10 rounded-full glass-solid shadow-glass flex items-center justify-center text-royal-600 dark:text-royal-300 md:-translate-x-1/2 z-10">
                  <Briefcase size={16} />
                </div>

                <div className="pl-14 md:pl-0 md:w-1/2" />

                <div
                  className={`pl-14 md:pl-0 md:w-1/2 ${
                    i % 2 === 1 ? "md:pr-12" : "md:pl-12"
                  }`}
                >
                  <div className="glass rounded-2xl shadow-glass p-6 hover:shadow-glass-lg transition-shadow">
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-1">
                      <h3 className="font-display font-semibold text-lg text-ink dark:text-white">
                        {exp.role}
                      </h3>
                      {exp.duration && (
                        <span className="font-mono text-[11px] text-royal-600 dark:text-royal-300">
                          {exp.duration}
                        </span>
                      )}
                    </div>
                    <p className="text-royal-700 dark:text-royal-300 font-medium text-sm mb-3">
                      {exp.company}
                    </p>
                    <p className="text-mist dark:text-royal-100/60 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <ul className="space-y-1.5 mb-4">
                      {exp.responsibilities.map((r) => (
                        <li
                          key={r}
                          className="text-sm text-ink/80 dark:text-royal-100/70 flex gap-2"
                        >
                          <span className="text-royal-500 mt-1.5 w-1 h-1 rounded-full bg-royal-500 shrink-0" />
                          {r}
                        </li>
                      ))}
                    </ul>
                    {exp.tech && (
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((t) => (
                          <Pill key={t}>{t}</Pill>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
