"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { certifications } from "@/lib/data";
import { Award } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeading eyebrow="05 · credentials" title="Certifications" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl shadow-glass hover:shadow-glass-lg transition-shadow p-6"
            >
              <div className="w-11 h-11 rounded-xl bg-royal-600/10 text-royal-600 dark:text-royal-300 flex items-center justify-center mb-4">
                <Award size={19} />
              </div>
              <h3 className="font-display font-semibold text-ink dark:text-white leading-snug mb-1.5">
                {cert.title}
              </h3>
              <p className="font-mono text-xs text-mist dark:text-royal-100/50">
                {cert.issuer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
