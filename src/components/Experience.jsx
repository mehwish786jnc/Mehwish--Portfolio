import { motion } from "framer-motion";
import { Briefcase, Award } from "lucide-react";
import { experiences } from "../data";
import { fadeUp, stagger, viewport } from "../motion";
import { useLang } from "../i18n/LanguageContext";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  const { t } = useLang();
  return (
    <section id="experience" className="section-container">
      <SectionHeading eyebrow={t.experience.eyebrow} title={t.experience.title} />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="relative mx-auto max-w-3xl"
      >
        {/* Vertical line */}
        <div className="absolute left-4 top-2 h-full w-px bg-gradient-to-b from-brand-blue via-brand-purple to-brand-teal md:left-1/2" />

        <div className="space-y-10">
          {experiences.map((exp, i) => {
            const tr = t.experience.items[i] ?? {};
            return (
            <motion.div
              key={exp.company + i}
              variants={fadeUp}
              className={`relative flex flex-col md:flex-row md:items-center ${
                i % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Dot */}
              <span className="absolute left-4 top-2 z-10 grid h-8 w-8 -translate-x-1/2 place-items-center rounded-full bg-gradient-to-tr from-brand-blue via-brand-purple to-brand-teal text-white shadow-lg md:left-1/2">
                <Briefcase className="h-4 w-4" />
              </span>

              {/* Card */}
              <div
                className={`ml-12 w-full md:ml-0 md:w-1/2 ${
                  i % 2 === 0 ? "md:pl-10" : "md:pr-10"
                }`}
              >
                <div className="rounded-2xl glass p-6 transition-transform hover:-translate-y-1">
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-teal">
                    {tr.period}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-slate-900 dark:text-white">
                    {tr.role}
                  </h3>
                  <p className="text-sm font-medium text-brand-purple">
                    {exp.company}
                  </p>

                  <ul className="mt-3 space-y-1.5">
                    {(tr.points ?? []).map((p, pi) => (
                      <li
                        key={p}
                        className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                      >
                        {pi === exp.awardIndex ? (
                          <Award className="mt-0.5 h-4 w-4 shrink-0 text-amber-500" />
                        ) : (
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-purple" />
                        )}
                        {p}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-brand-purple/10 px-2.5 py-1 text-xs font-medium text-brand-purple"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="hidden md:block md:w-1/2" />
            </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
