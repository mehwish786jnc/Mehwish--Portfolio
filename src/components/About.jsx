import { motion } from "framer-motion";
import { GitBranch, Cloud, Code2, Box } from "lucide-react";
import { fadeUp, stagger, viewport } from "../motion";
import { useLang } from "../i18n/LanguageContext";
import SectionHeading from "./SectionHeading";

const highlightIcons = [GitBranch, Cloud, Code2, Box];

export default function About() {
  const { t } = useLang();
  return (
    <section id="about" className="section-container">
      <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="grid items-center gap-10 md:grid-cols-5"
      >
        <motion.div variants={fadeUp} className="md:col-span-2 flex justify-center">
          <img
            src="/mascot.png"
            alt="Developer mascot"
            className="w-full max-w-xs"
          />
        </motion.div>

        <motion.div variants={fadeUp} className="md:col-span-3">
          <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            {t.bio}
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {t.about.highlights.map((label, i) => {
              const Icon = highlightIcons[i] ?? Sparkles;
              return (
                <div
                  key={label}
                  className="flex flex-col items-center gap-2 rounded-2xl glass p-4 text-center transition-transform hover:-translate-y-1"
                >
                  <Icon className="h-6 w-6 text-brand-purple" />
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
