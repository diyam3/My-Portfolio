"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/lib/data";
import { Github, Linkedin } from "lucide-react";

const username = profile.githubUsername;

/* eslint-disable @next/next/no-img-element -- external, dynamically-sized
   badge images from third-party services; next/image isn't a good fit here */

export default function GithubStats() {
  return (
    <section id="github" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeading
          eyebrow="07 · activity"
          title="GitHub Stats"
          description="A live look at my open-source activity and coding habits."
        />

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="glass rounded-2xl shadow-glass p-4 md:p-6 overflow-hidden"
          >
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=default&bg_color=00000000&title_color=4C5CF0&icon_color=4C5CF0&text_color=5B6B8C&border_color=00000000&hide_border=true`}
              alt="Diya Mittal's GitHub stats"
              className="w-full h-auto"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="glass rounded-2xl shadow-glass p-4 md:p-6 overflow-hidden"
          >
            <img
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=default&background=00000000&border=00000000&stroke=4C5CF0&ring=4C5CF0&fire=4C5CF0&currStreakLabel=4C5CF0&sideLabels=5B6B8C&currStreakNum=0F1A2E&sideNums=0F1A2E&dates=5B6B8C`}
              alt="Diya Mittal's GitHub streak"
              className="w-full h-auto"
              loading="lazy"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="glass rounded-2xl shadow-glass p-4 md:p-6 overflow-hidden mb-10"
        >
          <img
            src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=minimal&bg_color=00000000&color=4C5CF0&line=4C5CF0&point=0B1E3D&area=true&hide_border=true`}
            alt="Diya Mittal's GitHub contribution graph"
            className="w-full h-auto"
            loading="lazy"
          />
        </motion.div>

        <div className="flex flex-wrap items-center justify-between gap-6">
          <div className="flex flex-wrap gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium text-ink dark:text-white hover:-translate-y-0.5 transition-transform"
            >
              <Github size={16} />
              GitHub Profile
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm font-medium text-ink dark:text-white hover:-translate-y-0.5 transition-transform"
            >
              <Linkedin size={16} />
              LinkedIn Profile
            </a>
          </div>

          <img
            src={`https://api.visitorbadge.io/api/visitors?path=${encodeURIComponent(
              "https://diya-mittal-portfolio.vercel.app"
            )}&label=Portfolio%20Views&countColor=%234C5CF0&style=flat-square`}
            alt="Visitor count"
            className="h-6"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
