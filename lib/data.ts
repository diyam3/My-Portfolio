export const profile = {
  name: "Diya Mittal",
  status: "Final Year B.Tech Computer Science Engineering Student",
  university: "VIT Bhopal",
  cgpa: "9.23",
  tagline: "Turning Ideas into Intelligent Digital Experiences",
  roles: ["Software Engineer", "Full Stack Developer", "AI Enthusiast", "Data Analyst"],
  email: "reach.diyamittal@gmail.com",
  phone: "7060811123",
  github: "https://github.com/diyam3",
  githubUsername: "diyam3",
  linkedin: "https://www.linkedin.com/in/diya-mittal-2105d",
  interests: [
    "Software Development",
    "Full Stack Development",
    "Artificial Intelligence",
    "Data Analytics",
    "Backend Development",
    "Cloud Computing",
  ],
  about: `I'm a final-year Computer Science student at VIT Bhopal, currently holding a 9.23 CGPA, with a habit of learning by building things that actually ship. My work sits at the intersection of full stack development, applied AI, and data — I've spent internships building procurement dashboards in React and Supabase, digging through sales and operational data to surface real business insight, and designing an AI-powered student assistant using LLMs and Retrieval-Augmented Generation. What ties it together is the same instinct every time: understand the problem properly, then build something scalable, usable, and a little more thoughtful than it needed to be. I'm most energized by projects where software, data, and AI meet — and I'm always looking for the next hard problem to learn from.`,
};

export const techStack = {
  Languages: ["Java", "Python", "C++", "JavaScript", "TypeScript", "SQL"],
  Frontend: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Vite"],
  Backend: ["Node.js", "Express.js"],
  Databases: ["MongoDB", "MySQL", "Supabase", "Google Apps Script"],
  AI: ["LLMs", "LangChain", "Retrieval Augmented Generation", "Google Gemini API", "Prompt Engineering", "NLP"],
  Cloud: ["AWS"],
  "Developer Tools": ["Git", "GitHub", "VS Code", "Postman", "Android Studio", "Canva", "Power BI"],
  "Core CS": ["Data Structures", "Algorithms", "Object Oriented Programming", "DBMS", "Operating Systems", "Computer Networks"],
};

export type Experience = {
  company: string;
  role: string;
  duration?: string;
  description: string;
  responsibilities: string[];
  tech?: string[];
};

export const experiences: Experience[] = [
  {
    company: "ColorJet India Ltd.",
    role: "IT Intern",
    duration: "May 2026",
    description:
      "Worked on developing a modern Supplier Procurement Analytics Dashboard for enterprise procurement management, focused on responsive UI, reusable components, and clear data visualization.",
    responsibilities: [
      "Developed a Supplier Procurement Analytics Dashboard.",
      "Built reusable React components.",
      "Created supplier analytics pages.",
      "Built procurement dashboard.",
      "Integrated Supabase.",
      "Implemented filtering.",
      "Developed KPI dashboards.",
      "Built responsive UI.",
      "Worked with production frontend.",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Framer Motion", "React Router", "Vite"],
  },
  {
    company: "Beginera Adventures Pvt Ltd",
    role: "Data Analytics Intern",
    duration: "December 2025",
    description:
      "Analyzed customer, sales, and operational datasets to uncover business insight, focusing on trend analysis and KPI reporting to support decision-making.",
    responsibilities: [
      "Analyzed customer, sales and operational datasets.",
      "Generated business insights.",
      "Performed trend analysis.",
      "Created dashboards.",
      "Worked on KPI reporting.",
      "Supported business decision making.",
    ],
  },
  {
    company: "Sai Nath University",
    role: "Research Intern",
    duration: "May 2025",
    description:
      "Designed and built an AI Student Assistance Chatbot using LLMs, RAG, and NLP to deliver conversational, context-aware academic support.",
    responsibilities: [
      "Built AI Student Assistance Chatbot.",
      "Used LLMs, RAG, NLP, and the Google Gemini API.",
      "Designed conversational workflows.",
      "Implemented authentication.",
      "Built backend APIs.",
    ],
    tech: ["LLMs", "RAG", "NLP", "Google Gemini API"],
  },
  {
    company: "GIFI – Take A Break",
    role: "Freelance Frontend Developer",
    duration: "May 2024",
    description:
      "Designed and built the company website end to end, translating client requirements into a responsive, production-ready site.",
    responsibilities: [
      "Designed company website.",
      "Built responsive pages.",
      "Optimized mobile UI.",
      "Translated client requirements into production website.",
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  features?: string[];
  responsibilities?: string[];
  tech: string[];
  github?: string;
  live?: string;
  team?: string;
};

export const projects: Project[] = [
  {
    slug: "campus-copilot",
    title: "Campus Copilot",
    category: "AI + Full Stack",
    description:
      "AI-powered Student Assistance Chatbot using LLMs and Retrieval-Augmented Generation for instant, context-aware academic support.",
    features: ["Authentication", "RAG pipeline", "Real-time AI conversations", "Knowledge retrieval", "Modern responsive UI"],
    tech: ["React", "Node", "Express", "MongoDB", "JWT", "LangChain", "Gemini API"],
    github: "https://github.com/diyam3/Student-AI-Chatbot",
    live: "https://student-ai-chatbot-1.onrender.com/",
  },
  {
    slug: "discover-the-college",
    title: "Discover the College",
    category: "Frontend Development",
    description: "Modern college discovery platform helping students explore and compare colleges through an intuitive, responsive interface.",
    features: ["College comparison", "Responsive design", "Interactive UI", "Modern layouts"],
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/diyam3/college_discovery",
    live: "https://discover-the-college-i9b6.vercel.app/",
  },
  {
    slug: "gradlink",
    title: "GradLink",
    category: "Full Stack / Education",
    description: "Alumni networking platform built in a team of six, bridging students and alumni through mentorship, forums, and AI assistance.",
    features: ["Mentorship", "Career Roadmaps", "Discussion Forums", "AI Chatbot", "Centralized Alumni Database"],
    tech: ["React", "Node.js", "MongoDB"],
    team: "Built in a team of six.",
  },
  {
    slug: "krishisetu",
    title: "KrishiSetu",
    category: "Backend Development",
    description: "Agriculture marketplace connecting farmers and buyers, with secure authentication and product management APIs.",
    responsibilities: ["Backend Development", "Authentication", "Product APIs", "Secure user management"],
    tech: ["Node.js", "Express.js", "MongoDB", "JWT", "Git"],
    live: "https://warm-fox-6ec615.netlify.app/",
  },
  {
    slug: "coupon-genie",
    title: "Coupon Genie",
    category: "Frontend Development",
    description: "Coupon discovery platform for finding discounts and deals through a clean, modern, responsive interface.",
    features: ["Modern responsive UI", "Coupon browsing", "Search", "Filtering"],
    tech: ["React", "JavaScript", "Tailwind CSS"],
    live: "https://cozy-valkyrie-06c75a.netlify.app/",
  },
];

export type Certification = {
  title: string;
  issuer: string;
};

export const certifications: Certification[] = [
  { title: "IBM AI Engineering", issuer: "Coursera" },
  { title: "Machine Learning", issuer: "NPTEL" },
  { title: "Marketing Analytics", issuer: "NPTEL" },
  { title: "MongoDB Database Admin Path", issuer: "MongoDB University" },
];

export const education = {
  institution: "VIT Bhopal",
  degree: "B.Tech Computer Science Engineering",
  cgpa: "9.23",
  graduation: "Expected May 2027",
};

export const extraCurricular = {
  role: "Field Manager",
  org: "Unfold Foundation",
  description: "Worked in community engagement and event management.",
};
