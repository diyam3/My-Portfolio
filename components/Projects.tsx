"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { Pill } from "@/components/ui/Card";
import { projects, type Project } from "@/lib/data";
import { Github, ExternalLink, X, Users } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category)))],
    []
  );
  const [active, setActive] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeading
          eyebrow="04 · work"
          title="Projects"
          description="A selection of things I've designed, built, and shipped — from AI chatbots to full-stack platforms."
        />

        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-2 text-xs md:text-sm font-mono transition-all ${
                active === cat
                  ? "bg-royal-600 text-white shadow-glow-royal"
                  : "glass text-mist dark:text-royal-100/60 hover:text-royal-600 dark:hover:text-royal-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.button
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92 }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelected(project)}
                className="group text-left glass rounded-2xl shadow-glass hover:shadow-glass-lg transition-shadow overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden bg-navy-900/5 dark:bg-white/5">
  {project.image ? (
    <Image
      src={project.image}
      alt={`${project.title} preview`}
      fill
      className="object-cover transition-transform duration-500 group-hover:scale-105"
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
    />
  ) : (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-royal-500/15 via-royal-400/10 to-navy-900/10 dark:from-royal-500/20 dark:via-royal-400/10 dark:to-navy-900/20">
      <span className="font-display text-3xl font-semibold text-royal-600/30 dark:text-royal-300/25">
        {project.title
          .split(" ")
          .map((w) => w[0])
          .join("")
          .slice(0, 3)}
      </span>
    </div>
  )}

  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/50 via-transparent to-transparent pointer-events-none" />

  <span className="absolute top-3 left-3 font-mono text-[10px] rounded-full bg-white/80 dark:bg-navy-900/80 text-royal-700 dark:text-royal-300 px-2.5 py-1">
    {project.category}
  </span>
</div>
                <div className="p-5">
                  <h3 className="font-display font-semibold text-ink dark:text-white mb-1.5 flex items-center justify-between">
                    {project.title}
                    <ExternalLink
                      size={14}
                      className="text-mist dark:text-royal-100/40 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </h3>
                  <p className="text-sm text-mist dark:text-royal-100/60 leading-relaxed line-clamp-2 mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 3).map((t) => (
                      <Pill key={t}>{t}</Pill>
                    ))}
                    {project.tech.length > 3 && (
                      <Pill>+{project.tech.length - 3}</Pill>
                    )}
                  </div>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[60] bg-navy-900/40 dark:bg-black/60 backdrop-blur-sm flex items-center justify-center p-5"
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="glass-solid rounded-3xl shadow-glass-lg max-w-lg w-full max-h-[85vh] overflow-y-auto p-7 md:p-8"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="font-mono text-[11px] text-royal-600 dark:text-royal-300">
                    {selected.category}
                  </span>
                  <h3 className="font-display text-2xl font-semibold text-ink dark:text-white mt-1">
                    {selected.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelected(null)}
                  aria-label="Close"
                  className="w-8 h-8 rounded-full glass flex items-center justify-center text-ink dark:text-white shrink-0"
                >
                  <X size={15} />
                </button>
              </div>

              <p className="text-mist dark:text-royal-100/70 text-sm leading-relaxed mb-5">
                {selected.description}
              </p>

              {selected.features && (
                <div className="mb-5">
                  <h4 className="font-mono text-xs text-royal-600 dark:text-royal-300 mb-2">
                    Key Features
                  </h4>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                    {selected.features.map((f) => (
                      <li
                        key={f}
                        className="text-sm text-ink/80 dark:text-royal-100/70 flex gap-2"
                      >
                        <span className="text-royal-500 mt-1.5 w-1 h-1 rounded-full bg-royal-500 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selected.responsibilities && (
                <div className="mb-5">
                  <h4 className="font-mono text-xs text-royal-600 dark:text-royal-300 mb-2">
                    Responsibilities
                  </h4>
                  <ul className="space-y-1.5">
                    {selected.responsibilities.map((r) => (
                      <li
                        key={r}
                        className="text-sm text-ink/80 dark:text-royal-100/70 flex gap-2"
                      >
                        <span className="text-royal-500 mt-1.5 w-1 h-1 rounded-full bg-royal-500 shrink-0" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selected.team && (
                <p className="flex items-center gap-2 text-sm text-mist dark:text-royal-100/60 mb-5">
                  <Users size={14} className="text-royal-500" />
                  {selected.team}
                </p>
              )}

              <div className="mb-6">
                <h4 className="font-mono text-xs text-royal-600 dark:text-royal-300 mb-2">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selected.tech.map((t) => (
                    <Pill key={t}>{t}</Pill>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                {selected.github && (
                  <a
                    href={selected.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-full glass text-ink dark:text-white font-medium text-sm px-5 py-2.5 hover:-translate-y-0.5 transition-transform"
                  >
                    <Github size={15} />
                    Code
                  </a>
                )}
                {selected.live && (
                  <a
                    href={selected.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-royal-600 hover:bg-royal-700 text-white font-medium text-sm px-5 py-2.5 shadow-glow-royal hover:-translate-y-0.5 transition-all"
                  >
                    <ExternalLink size={15} />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
