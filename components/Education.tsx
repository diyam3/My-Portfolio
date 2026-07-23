"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { education, extraCurricular } from "@/lib/data";
import { GraduationCap, Heart } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeading eyebrow="06 · foundation" title="Education & Beyond" />

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="glass rounded-2xl shadow-glass p-7"
          >
            <div className="w-11 h-11 rounded-xl bg-royal-600/10 text-royal-600 dark:text-royal-300 flex items-center justify-center mb-5">
              <GraduationCap size={20} />
            </div>
            <h3 className="font-display font-semibold text-lg text-ink dark:text-white mb-1">
              {education.institution}
            </h3>
            <p className="text-mist dark:text-royal-100/60 text-sm mb-4">
              {education.degree}
            </p>
            <div className="flex gap-6">
              <div>
                <p className="font-mono text-[11px] text-royal-600 dark:text-royal-300 mb-0.5">CGPA</p>
                <p className="font-display font-semibold text-ink dark:text-white">{education.cgpa}</p>
              </div>
              <div>
                <p className="font-mono text-[11px] text-royal-600 dark:text-royal-300 mb-0.5">Graduation</p>
                <p className="font-display font-semibold text-ink dark:text-white">{education.graduation}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="glass rounded-2xl shadow-glass p-7"
          >
            <div className="w-11 h-11 rounded-xl bg-royal-600/10 text-royal-600 dark:text-royal-300 flex items-center justify-center mb-5">
              <Heart size={19} />
            </div>
            <h3 className="font-display font-semibold text-lg text-ink dark:text-white mb-1">
              {extraCurricular.role}
            </h3>
            <p className="text-mist dark:text-royal-100/60 text-sm mb-4">
              {extraCurricular.org}
            </p>
            <p className="text-sm text-ink/80 dark:text-royal-100/70 leading-relaxed">
              {extraCurricular.description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
