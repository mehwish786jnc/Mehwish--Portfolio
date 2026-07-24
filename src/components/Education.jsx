import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "../data";
import { fadeUp, stagger, viewport } from "../motion";
import { useLang } from "../i18n/LanguageContext";
import SectionHeading from "./SectionHeading";

export default function Education() {
  const { t } = useLang();
  return (
    <section id="education" className="section-container">
      <SectionHeading eyebrow={t.education.eyebrow} title={t.education.title} />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="relative mx-auto max-w-2xl"
      >
        <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-brand-blue via-brand-purple to-brand-teal" />

        <div className="space-y-8">
          {education.map((edu, i) => {
            const tr = t.education.items[i] ?? {};
            return (
            <motion.div
              key={edu.school + i}
              variants={fadeUp}
              className="relative pl-14"
            >
              <span className="absolute left-4 top-1 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full bg-gradient-to-tr from-brand-blue via-brand-purple to-brand-teal text-white shadow-lg">
                <GraduationCap className="h-4 w-4" />
              </span>
              <div className="rounded-2xl glass p-6 transition-transform hover:-translate-y-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-brand-teal">
                  {tr.period}
                </span>
                <h3 className="mt-1 text-lg font-bold text-slate-900 dark:text-white">
                  {tr.degree}
                </h3>
                <p className="text-sm font-medium text-brand-purple">
                  {edu.school}
                </p>
                {tr.detail && (
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    {tr.detail}
                  </p>
                )}
              </div>
            </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
