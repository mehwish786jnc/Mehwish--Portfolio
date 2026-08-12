// Central content for the portfolio.
// Language-neutral data lives here; translatable text lives in src/i18n/translations.js
// and is merged with these arrays by index.

export const personal = {
  name: "Mehwish Sultana",
  company: "SAP Labs India",
  email: "mehwishsultana2@gmail.com",
  linkedin: "https://www.linkedin.com/in/mehwish-sultana-a497041b3/",
  github: "https://github.com/mehwish786jnc",
  resumeUrl: "https://drive.google.com/uc?export=download&id=1A5tLLOEQnYMUgpFpyIc5zNl0gy7sTGli",
};

export const navLinks = [
  { id: "home" },
  { id: "about" },
  { id: "skills" },
  { id: "experience" },
  { id: "projects" },
  { id: "education" },
  { id: "certificates" },
  { id: "publications" },
  { id: "play" },
  { id: "contact" },
];

export const languageSkills = [
  { name: "Python", level: 72 },
  { name: "TypeScript", level: 65 },
  { name: "JavaScript", level: 70 },
  { name: "Bash", level: 55 },
];

export const skillCategories = [
  {
    title: "Frontend",
    icon: "Layout",
    skills: ["React", "HTML5", "CSS3", "Tailwind CSS", "Material UI"],
  },
  {
    title: "Backend",
    icon: "Server",
    skills: ["Node.js", "Express.js", "REST APIs", "PostgreSQL", "Prisma ORM"],
  },
  {
    title: "DevOps & Cloud",
    icon: "Cloud",
    skills: ["Docker", "Kubernetes", "Helm", "Git", "GitHub Actions", "CI/CD", "SAP BTP", "Vault"],
  },
  {
    title: "AI & Machine Learning",
    icon: "Brain",
    skills: ["PyTorch", "NLP", "Computer Vision", "RAG", "LLM Orchestration", "Multi-Agent Systems", "MCP", "FAISS", "AI Automation"],
  },
];

export const experiences = [
  {
    company: "SAP Labs India",
    awardIndex: -1,
    tags: ["AI", "DevOps", "CI/CD", "SAP BTP", "Cloud"],
  },
  {
    company: "SAP — MD's Office",
    awardIndex: -1,
    tags: ["React", "TypeScript", "Node.js", "PostgreSQL", "RAG", "SAP BTP"],
  },
  {
    company: "SERT Globe",
    awardIndex: -1,
    tags: ["Software Engineering"],
  },
  {
    company: "Hindustan Aeronautics Limited",
    awardIndex: -1,
    tags: ["Software Engineering", "Aerospace"],
  },
  {
    company: "Estah Society",
    awardIndex: -1,
    tags: ["Deep Learning", "Python"],
  },
  {
    company: "Bharat Electronics Limited",
    awardIndex: 1,
    tags: ["Computer Vision", "PyTorch", "Deep Learning"],
  },
  {
    company: "Bharat Electronics Limited",
    awardIndex: -1,
    tags: ["AI", "Python", "Machine Learning"],
  },
  {
    company: "Kohli Media LLP",
    awardIndex: -1,
    tags: ["Web Development", "JavaScript"],
  },
];

export const projects = [
  {
    tags: ["React", "Node.js", "PostgreSQL", "NLP", "WebSockets", "Docker", "CI/CD"],
    github: "https://github.com/mehwish-sultana",
    demo: "#",
    featured: true,
    accent: "from-brand-blue to-brand-purple",
    status: "inProgress",
  },
  {
    tags: ["React", "Node.js", "PostgreSQL", "RBAC", "Docker"],
    github: "https://github.com/mehwish-sultana",
    demo: "#",
    featured: true,
    accent: "from-brand-purple to-brand-teal",
  },
  {
    tags: ["PyTorch", "Computer Vision", "Deep Learning", "Object Detection"],
    github: "https://github.com/mehwish-sultana",
    demo: "#",
    featured: true,
    accent: "from-brand-teal to-brand-blue",
  },
  {
    tags: ["NLP", "Python", "Accessibility", "React"],
    github: "https://github.com/mehwish-sultana",
    demo: "#",
    featured: false,
    accent: "from-brand-blue to-brand-teal",
  },
  {
    tags: ["Jenkins", "CI/CD", "GitHub", "DevOps"],
    github: "https://github.com/mehwish-sultana",
    demo: "#",
    featured: false,
    accent: "from-brand-purple to-brand-blue",
  },
  {
    tags: ["Git", "GitHub", "Version Control", "DevOps"],
    github: "https://github.com/mehwish-sultana",
    demo: "#",
    featured: false,
    accent: "from-brand-teal to-brand-purple",
  },
];

export const education = [
  { school: "BITS Pilani" },
  { school: "Christ University" },
  { school: "Jyoti Nivas College Autonomous" },
  { school: "Good Samaritan Public School" },
];

export const certificates = [
  {
    issuer: "IBM / Coursera",
    icon: "Brain",
    year: "2024",
  },
  {
    issuer: "IBM / Coursera",
    icon: "Layers",
    year: "2024",
  },
  {
    issuer: "HackerRank",
    icon: "Code2",
    year: "2023",
  },
  {
    issuer: "IBM / Coursera",
    icon: "Zap",
    year: "2024",
  },
  {
    issuer: "IBM / Coursera",
    icon: "Cpu",
    year: "2024",
  },
];

export const publications = [
  { venue: "Biomedical Journal" },
  { venue: "Biomedical Journal" },
  { venue: "International Conference" },
  { venue: "International Conference" },
];
