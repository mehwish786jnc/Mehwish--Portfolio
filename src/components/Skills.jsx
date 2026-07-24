import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { Code, Layout, Server, Cloud, Brain } from "lucide-react";
import { languageSkills, skillCategories } from "../data";
import { fadeUp, stagger, viewport } from "../motion";
import { useLang } from "../i18n/LanguageContext";
import SectionHeading from "./SectionHeading";

const iconMap = { Layout, Server, Cloud, Brain, Code };

function ProgressBar({ name, level }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, level, {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, level]);

  return (
    <div ref={ref}>
      <div className="mb-1.5 flex items-center justify-between text-sm">
        <span className="font-medium text-slate-700 dark:text-slate-200">
          {name}
        </span>
        <span className="font-semibold tabular-nums text-brand-purple">
          {display}%
        </span>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-slate-200/80 dark:bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-brand-blue via-brand-purple to-brand-teal"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { t } = useLang();
  return (
    <section id="skills" className="section-container">
      <SectionHeading
        eyebrow={t.skills.eyebrow}
        title={t.skills.title}
        subtitle={t.skills.subtitle}
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="grid gap-6 lg:grid-cols-3"
      >
        {/* Languages with progress bars */}
        <motion.div
          variants={fadeUp}
          className="rounded-3xl glass p-7 lg:row-span-1"
        >
          <div className="mb-6 flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-blue/10 text-brand-blue">
              <Code className="h-5 w-5" />
            </span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              {t.skills.programmingLanguages}
            </h3>
          </div>
          <div className="space-y-5">
            {languageSkills.map((s) => (
              <ProgressBar key={s.name} {...s} />
            ))}
          </div>
        </motion.div>

        {/* Categorized skill cards */}
        {skillCategories.map((cat, i) => {
          const Icon = iconMap[cat.icon] ?? Code;
          return (
            <motion.div
              key={cat.title}
              variants={fadeUp}
              className="rounded-3xl glass p-7 transition-transform hover:-translate-y-1"
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-purple/10 text-brand-purple">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {t.skills.categories[i] ?? cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-200/80 bg-white/50 px-3 py-1.5 text-sm font-medium text-slate-700 transition-colors hover:border-brand-purple hover:text-brand-purple dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
