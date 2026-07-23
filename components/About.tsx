"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { profile, experiences, projects, certifications } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeading eyebrow="01 · about" title="About Me" />

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-mist dark:text-royal-100/70 text-base md:text-lg leading-relaxed"
          >
            <p>{profile.about}</p>
            <div className="flex flex-wrap gap-2.5 pt-2">
              {profile.interests.map((interest) => (
                <span
                  key={interest}
                  className="rounded-full glass px-3.5 py-1.5 text-xs md:text-sm text-navy-800 dark:text-royal-100"
                >
                  {interest}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass rounded-3xl shadow-glass p-8 grid grid-cols-2 gap-8"
          >
            <AnimatedCounter value={9.22} decimals={2} label="CGPA" />
            <AnimatedCounter value={experiences.length} label="Internships" />
            <AnimatedCounter value={projects.length} label="Projects Built" />
            <AnimatedCounter value={certifications.length} label="Certifications" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
