"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiPython,
  SiTailwindcss,
} from "react-icons/si";
import { profile } from "@/lib/data";

const orbitIcons = [
  { Icon: SiReact, color: "#61DAFB", radius: 150, duration: 22, delay: 0 },
  { Icon: SiNextdotjs, color: "#0B1E3D", radius: 190, duration: 28, delay: -6 },
  { Icon: SiTypescript, color: "#3178C6", radius: 130, duration: 18, delay: -3 },
  { Icon: SiMongodb, color: "#47A248", radius: 210, duration: 32, delay: -12 },
  { Icon: SiPython, color: "#3776AB", radius: 170, duration: 25, delay: -9 },
  { Icon: SiTailwindcss, color: "#38BDF8", radius: 150, duration: 20, delay: -15 },
];

function useTypewriter(words: string[], speed = 90, pause = 1400) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    } else {
      timeout = setTimeout(() => {
        setText((t) =>
          deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
        );
      }, deleting ? speed / 2 : speed);
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, speed, pause]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 w-full grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        {/* Left: copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 font-mono text-xs text-royal-700 dark:text-royal-300 mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-royal-500 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-royal-600" />
            </span>
            {profile.status}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-ink dark:text-white leading-[1.08]"
          >
            Hi, I&apos;m {profile.name.split(" ")[0]}
            <br />
            <span className="text-gradient">{profile.tagline}</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 h-8 font-mono text-lg md:text-xl text-royal-700 dark:text-royal-300"
          >
            <span className="text-mist dark:text-royal-100/50">{"> "}</span>
            {typed}
            <span className="inline-block w-[2px] h-5 bg-royal-600 ml-1 translate-y-0.5 animate-blink" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-mist dark:text-royal-100/60 text-base md:text-lg max-w-xl"
          >
            Building scalable full-stack applications and AI-powered products —
            currently maintaining a {profile.cgpa} CGPA at {profile.university} while
            shipping real software in the wild.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-royal-600 hover:bg-royal-700 text-white font-medium px-6 py-3 shadow-glow-royal transition-all hover:-translate-y-0.5"
            >
              View My Work
              <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass-solid text-ink dark:text-white font-medium px-6 py-3 hover:-translate-y-0.5 transition-all"
            >
              Get In Touch
            </a>

            <div className="flex items-center gap-2 ml-1">
              {[
                { href: profile.github, Icon: Github, label: "GitHub" },
                { href: profile.linkedin, Icon: Linkedin, label: "LinkedIn" },
                { href: `mailto:${profile.email}`, Icon: Mail, label: "Email" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-full glass flex items-center justify-center text-ink dark:text-white hover:text-royal-600 dark:hover:text-royal-300 hover:-translate-y-0.5 transition-all"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right: signature orbit + terminal panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:flex items-center justify-center h-[460px]"
        >
          {orbitIcons.map(({ Icon, color, radius, duration, delay }, i) => (
            <div
              key={i}
              className="absolute animate-orbit"
              style={{
                // @ts-expect-error custom property
                "--orbit-radius": `${radius}px`,
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`,
              }}
            >
              <div
                className="w-11 h-11 rounded-xl glass-solid shadow-glass flex items-center justify-center animate-float"
                style={{ animationDelay: `${delay}s` }}
              >
                <Icon size={20} color={color} />
              </div>
            </div>
          ))}

          <div className="glass-solid rounded-3xl shadow-glass-lg w-[300px] px-6 py-6 font-mono text-xs">
            <div className="flex items-center gap-1.5 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
              <span className="ml-2 text-mist dark:text-royal-100/40 text-[11px]">whoami.ts</span>
            </div>
            <div className="space-y-1.5 text-ink dark:text-royal-100/90">
              <p><span className="text-royal-600 dark:text-royal-300">const</span> dev = {"{"}</p>
              <p className="pl-4">name: <span className="text-emerald-600 dark:text-emerald-400">&quot;Diya Mittal&quot;</span>,</p>
              <p className="pl-4">cgpa: <span className="text-orange-500">{profile.cgpa}</span>,</p>
              <p className="pl-4">focus: [<span className="text-emerald-600 dark:text-emerald-400">&quot;AI&quot;</span>, <span className="text-emerald-600 dark:text-emerald-400">&quot;Full Stack&quot;</span>],</p>
              <p className="pl-4">status: <span className="text-emerald-600 dark:text-emerald-400">&quot;open_to_work&quot;</span></p>
              <p>{"};"}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
