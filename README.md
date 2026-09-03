# Diya Mittal — Developer Portfolio

A premium, animated, production-ready developer portfolio built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

Live sections: Hero · About · Skills · Experience Timeline · Projects (with filtering + detail modal) · Certifications · Education · Contact · Footer.

## ✨ Features

- Glassmorphism UI on a premium white aesthetic (royal blue / navy accent palette) — light **and** dark mode
- Animated hero with typewriter role rotation, floating/orbiting tech icons, cursor glow
- Scroll-reveal animations, animated stat counters, magnetic hover states throughout (Framer Motion)
- Filterable project grid with an animated detail popup per project
- Visitor badge, back-to-top button, downloadable resume button
- Fully responsive (mobile, tablet, desktop), keyboard-accessible, respects `prefers-reduced-motion`
- SEO-ready: metadata, Open Graph, `sitemap.xml`, `robots.txt`, generated favicon

## 🛠 Tech Stack

Next.js 15 · TypeScript · Tailwind CSS · Framer Motion · Lucide React · React Icons

## 🚀 Getting Started

```bash
npm install
cp .env.example .env.local   # fill in values (optional, sensible defaults included)
npm run dev
```

Visit `http://localhost:3000`.

## 📁 Project Structure

```
app/
  layout.tsx        Root layout, fonts, metadata, theme init
  page.tsx           Composes all sections
  globals.css         Design tokens & glass utilities
  icon.tsx            Generated favicon
  robots.ts / sitemap.ts
components/
  Hero.tsx, About.tsx, Skills.tsx, Experience.tsx,
  Projects.tsx, Certifications.tsx, Education.tsx,
  GithubStats.tsx, Contact.tsx, Navbar.tsx, Footer.tsx,
  ThemeToggle.tsx, CursorGlow.tsx, BackToTop.tsx
  ui/  →  Card.tsx, SectionHeading.tsx, AnimatedCounter.tsx
lib/
  data.ts   All portfolio content (single source of truth)
  utils.ts
public/
  resume.pdf   ⚠️ Placeholder — replace with your real resume
```

## ✏️ Editing Content

All text content — name, bio, experience, projects, certifications, education — lives in **`lib/data.ts`**. Edit that one file to update the entire site; no need to touch component code.

## 📄 Resume

Replace `public/resume.pdf` with your actual resume (same filename) — the navbar "Resume" button downloads it directly.

## 🌐 Deploy on Vercel

1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Framework preset: **Next.js** (auto-detected). No extra config needed.
4. (Optional) Add environment variables from `.env.example` in the Vercel dashboard.
5. Click **Deploy**.

Or via CLI:

```bash
npm i -g vercel
vercel --prod
```

## ⚙️ Environment Variables

| Variable | Description | Required |
|---|---|---|
| `NEXT_PUBLIC_FORM_ENDPOINT` | POST endpoint (e.g. Formspree) for the contact form | No (falls back to a `mailto:` link) |
