import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, FolderGit2, Mail } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";
import { personal } from "../data";
import { fadeUp, stagger } from "../motion";
import { useLang } from "../i18n/LanguageContext";

const socials = [
  { icon: Linkedin, href: personal.linkedin, label: "LinkedIn" },
  { icon: Github, href: personal.github, label: "GitHub" },
  { icon: Mail, href: `mailto:${personal.email}`, label: "Email" },
];

const orbitBadges = [
  { label: "React",   pos: "left-1/2 top-0 -translate-x-1/2 -translate-y-1/2" },
  { label: "Docker",  pos: "right-0 top-1/2 translate-x-1/2 -translate-y-1/2" },
  { label: "K8s",     pos: "left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2" },
  { label: "PyTorch", pos: "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2" },
];

export default function Hero() {
  const { t } = useLang();
  const roles = t.hero.roles;
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setRoleIndex((i) => (i + 1) % roles.length),
      2600
    );
    return () => clearInterval(id);
  }, [roles.length]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-6 pt-28"
    >
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2"
      >
        {/* Left: text */}
        <div className="text-center md:text-left">
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-brand-teal/30 bg-brand-teal/10 px-4 py-1.5 text-xs font-semibold text-brand-teal"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-teal opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-teal" />
            </span>
            {t.hero.available} {personal.company}
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl"
          >
            {t.hero.greeting} <span className="gradient-text">{personal.name}</span>
          </motion.h1>

          {/* Rotating role */}
          <motion.div
            variants={fadeUp}
            className="mt-4 flex h-9 items-center justify-center gap-2 text-lg font-semibold md:justify-start md:text-xl"
          >
            <span className="font-semibold text-brand-purple opacity-70">{"</>"}</span>
            <AnimatePresence mode="wait">
              <motion.span
                key={roleIndex}
                initial={{ y: 18, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -18, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="gradient-text"
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-xl text-base text-slate-600 dark:text-slate-400 md:mx-0 md:text-lg"
          >
            {t.tagline}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start"
          >
            <a href={personal.resumeUrl} target="_blank" rel="noreferrer" className="btn-primary">
              <Download className="h-4 w-4" /> {t.hero.downloadResume}
            </a>
            <a href="#projects" className="btn-ghost">
              <FolderGit2 className="h-4 w-4" /> {t.hero.viewProjects}
            </a>
            <a href="#contact" className="btn-ghost">
              <Mail className="h-4 w-4" /> {t.hero.contactMe}
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex justify-center gap-3 md:justify-start"
          >
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="group grid h-11 w-11 place-items-center rounded-full glass text-slate-600 transition-all hover:-translate-y-1 hover:text-brand-purple dark:text-slate-300"
              >
                <Icon className="h-5 w-5 transition-transform group-hover:scale-110" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Right: profile */}
        <motion.div
          variants={fadeUp}
          className="relative mx-auto flex items-center justify-center"
        >
          <div className="absolute h-72 w-72 animate-blob rounded-full bg-gradient-to-tr from-brand-blue via-brand-purple to-brand-teal opacity-40 blur-2xl sm:h-80 sm:w-80" />

          {/* Spinning conic glow ring */}
          <div className="animate-spin-slow absolute h-[19rem] w-[19rem] rounded-full opacity-70 blur-[2px] sm:h-[23rem] sm:w-[23rem]" style={{background:"conic-gradient(from 0deg,transparent 0deg,rgb(var(--brand-blue)) 90deg,rgb(var(--brand-purple)) 180deg,rgb(var(--brand-teal)) 270deg,transparent 360deg)"}} />
          <div className="absolute h-[17.5rem] w-[17.5rem] rounded-full bg-slate-50 dark:bg-[#0a0a12] sm:h-[21.5rem] sm:w-[21.5rem]" />

          {/* Orbiting tech badges */}
          <div className="animate-spin-slow absolute h-[19rem] w-[19rem] sm:h-[23rem] sm:w-[23rem]">
            {orbitBadges.map((b) => (
              <span
                key={b.label}
                className={`animate-spin-slow-reverse absolute ${b.pos} rounded-full glass-strong px-3 py-1 text-xs font-semibold text-slate-700 dark:text-slate-200`}
              >
                {b.label}
              </span>
            ))}
          </div>

          <div className="animate-float relative">
            <div className="grid h-56 w-56 place-items-center rounded-full bg-gradient-to-tr from-brand-blue via-brand-purple to-brand-teal p-1.5 shadow-2xl shadow-brand-purple/40 sm:h-72 sm:w-72">
              <div className="grid h-full w-full place-items-center overflow-hidden rounded-full bg-slate-100 dark:bg-[#111121]">
                <img
                  src="/profile.jpg"
                  alt={personal.name}
                  loading="eager"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-label="Scroll down"
      >
        <span className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-slate-400/60 p-1 dark:border-slate-500/60">
          <motion.span
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="h-2 w-1 rounded-full bg-brand-purple"
          />
        </span>
      </motion.a>
    </section>
  );
}
