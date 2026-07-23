"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div
          className={`flex items-center justify-between rounded-2xl px-4 md:px-6 py-3 transition-all duration-300 ${
            scrolled ? "glass-solid shadow-glass" : ""
          }`}
        >
          <a
            href="#top"
            className="font-display font-semibold text-lg text-ink dark:text-white tracking-tight"
          >
            Diya<span className="text-royal-600">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="font-mono text-sm text-mist dark:text-royal-100/70 hover:text-royal-600 dark:hover:text-royal-300 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-royal-600 hover:bg-royal-700 text-white text-sm font-medium px-4 py-2 transition-colors shadow-glow-royal"
            >
              <Download size={14} />
              Resume
            </a>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              className="w-9 h-9 rounded-full glass flex items-center justify-center text-ink dark:text-white"
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden mt-2 glass-solid rounded-2xl shadow-glass"
            >
              <div className="flex flex-col p-4 gap-1">
                {links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="font-mono text-sm text-mist dark:text-royal-100/70 hover:text-royal-600 dark:hover:text-royal-300 py-2.5 px-2 rounded-lg hover:bg-royal-50 dark:hover:bg-royal-500/10 transition-colors"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="/resume.pdf"
                  download
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-royal-600 text-white text-sm font-medium px-4 py-2.5"
                >
                  <Download size={14} />
                  Download Resume
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
