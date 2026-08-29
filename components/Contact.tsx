"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/lib/data";
import { Mail, Phone, Github, Linkedin, Send, Check } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (endpoint) {
      try {
        await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
        setSent(true);
        setForm({ name: "", email: "", message: "" });
        return;
      } catch {
        // fall through to mailto
      }
    }

    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const contactMethods = [
    { Icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { Icon: Phone, label: "Phone", value: profile.phone, href: `tel:+91${profile.phone}` },
    { Icon: Github, label: "GitHub", value: "diyam3", href: profile.github },
    { Icon: Linkedin, label: "LinkedIn", value: "diya-mittal", href: profile.linkedin },
  ];

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeading
          eyebrow="07 · connect"
          title="Let's Build Something"
          description="Have a role, project, or idea in mind? I'd love to hear about it."
        />

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            className="space-y-3"
          >
            {contactMethods.map(({ Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center gap-4 glass rounded-2xl shadow-glass p-5 hover:shadow-glass-lg hover:-translate-y-0.5 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-royal-600/10 text-royal-600 dark:text-royal-300 flex items-center justify-center shrink-0">
                  <Icon size={18} />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[11px] text-royal-600 dark:text-royal-300">
                    {label}
                  </p>
                  <p className="text-ink dark:text-white font-medium truncate">{value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="glass rounded-2xl shadow-glass p-6 md:p-8 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="font-mono text-xs text-mist dark:text-royal-100/50 mb-1.5 block">
                  Name
                </label>
                <input
                  id="name"
                  required
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="w-full rounded-xl glass-solid px-4 py-3 text-sm text-ink dark:text-white outline-none focus:ring-2 focus:ring-royal-500/40 transition-shadow"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="font-mono text-xs text-mist dark:text-royal-100/50 mb-1.5 block">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="w-full rounded-xl glass-solid px-4 py-3 text-sm text-ink dark:text-white outline-none focus:ring-2 focus:ring-royal-500/40 transition-shadow"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="font-mono text-xs text-mist dark:text-royal-100/50 mb-1.5 block">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className="w-full rounded-xl glass-solid px-4 py-3 text-sm text-ink dark:text-white outline-none focus:ring-2 focus:ring-royal-500/40 transition-shadow resize-none"
                placeholder="Tell me about the opportunity or idea..."
              />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-royal-600 hover:bg-royal-700 text-white font-medium px-6 py-3.5 shadow-glow-royal transition-all hover:-translate-y-0.5"
            >
              {sent ? (
                <>
                  <Check size={16} /> Message ready — check your mail app
                </>
              ) : (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
