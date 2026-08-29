"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { education, extraCurricular } from "@/lib/data";
import { GraduationCap, School, BookOpen } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeading eyebrow="06 · foundation" title="Education & Beyond" />

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* B.Tech */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="glass rounded-2xl shadow-glass p-7 flex flex-col min-h-[360px]"
          >
            <div className="w-11 h-11 rounded-xl bg-royal-600/10 text-royal-600 dark:text-royal-300 flex items-center justify-center mb-6">
              <GraduationCap size={20} />
            </div>

            <h3 className="font-display font-semibold text-lg text-ink dark:text-white mb-2">
              B.Tech Computer Science Engineering
            </h3>

            <p className="text-royal-600 dark:text-royal-300 text-sm font-medium mb-6">
              {education.institution}
            </p>

            <div className="border-t border-ink/10 dark:border-white/10 pt-5 mt-auto">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-mono text-[11px] text-royal-600 dark:text-royal-300 mb-1">
                    CGPA
                  </p>
                  <p className="font-display font-semibold text-ink dark:text-white">
                    {education.cgpa}
                  </p>
                </div>

                <div>
                  <p className="font-mono text-[11px] text-royal-600 dark:text-royal-300 mb-1">
                    Graduation
                  </p>
                  <p className="font-display font-semibold text-ink dark:text-white">
                    {education.graduation}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Class XII */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="glass rounded-2xl shadow-glass p-7 flex flex-col min-h-[360px]"
          >
            <div className="w-11 h-11 rounded-xl bg-royal-600/10 text-royal-600 dark:text-royal-300 flex items-center justify-center mb-6">
              <School size={20} />
            </div>

            <h3 className="font-display font-semibold text-lg text-ink dark:text-white mb-2">
              Class XII
            </h3>

            <p className="text-royal-600 dark:text-royal-300 text-sm font-medium mb-6">
              St. Anthony&apos;s Jr. College
            </p>

            <div className="border-t border-ink/10 dark:border-white/10 pt-5 mt-auto space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-mist dark:text-royal-100/60">
                  Stream
                </span>
                <span className="text-sm font-medium text-ink dark:text-white text-right">
                  PCM with Computer Science
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-mist dark:text-royal-100/60">
                  Board
                </span>
                <span className="text-sm font-medium text-ink dark:text-white">
                  ISC
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-mist dark:text-royal-100/60">
                  Percentage
                </span>
                <span className="text-sm font-semibold text-royal-600 dark:text-royal-300">
                  93.25%
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-mist dark:text-royal-100/60">
                  Passing Year
                </span>
                <span className="text-sm font-medium text-ink dark:text-white">
                  2022
                </span>
              </div>
            </div>
          </motion.div>

          {/* Class X */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="glass rounded-2xl shadow-glass p-7 flex flex-col min-h-[360px]"
          >
            <div className="w-11 h-11 rounded-xl bg-royal-600/10 text-royal-600 dark:text-royal-300 flex items-center justify-center mb-6">
              <BookOpen size={20} />
            </div>

            <h3 className="font-display font-semibold text-lg text-ink dark:text-white mb-2">
              Class X
            </h3>

            <p className="text-royal-600 dark:text-royal-300 text-sm font-medium mb-6">
              St. Anthony&apos;s Jr. College
            </p>

            <div className="border-t border-ink/10 dark:border-white/10 pt-5 mt-auto space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-mist dark:text-royal-100/60">
                  Stream
                </span>
                <span className="text-sm font-medium text-ink dark:text-white">
                  Computer Science
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-mist dark:text-royal-100/60">
                  Board
                </span>
                <span className="text-sm font-medium text-ink dark:text-white">
                  ICSE
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-mist dark:text-royal-100/60">
                  Percentage
                </span>
                <span className="text-sm font-semibold text-royal-600 dark:text-royal-300">
                  95.4%
                </span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-sm text-mist dark:text-royal-100/60">
                  Passing Year
                </span>
                <span className="text-sm font-medium text-ink dark:text-white">
                  2020
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Beyond */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.3 }}
          className="glass rounded-2xl shadow-glass p-7 mt-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 shrink-0 rounded-xl bg-royal-600/10 text-royal-600 dark:text-royal-300 flex items-center justify-center">
              <School size={19} />
            </div>

            <div>
              <h3 className="font-display font-semibold text-lg text-ink dark:text-white mb-1">
                {extraCurricular.role}
              </h3>

              <p className="text-mist dark:text-royal-100/60 text-sm mb-2">
                {extraCurricular.org}
              </p>

              <p className="text-sm text-ink/80 dark:text-royal-100/70 leading-relaxed">
                {extraCurricular.description}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}