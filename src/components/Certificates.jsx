import { motion } from "framer-motion";
import { Brain, Layers, Code2, Zap, Cpu, Award } from "lucide-react";
import { certificates } from "../data";
import { fadeUp, stagger, viewport } from "../motion";
import { useLang } from "../i18n/LanguageContext";
import SectionHeading from "./SectionHeading";

const ICONS = { Brain, Layers, Code2, Zap, Cpu };

export default function Certificates() {
  const { t } = useLang();
  const tr = t.certificates;

  return (
    <section id="certificates" className="section-container">
      <SectionHeading eyebrow={tr.eyebrow} title={tr.title} />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {certificates.map((cert, i) => {
          const item = tr.items[i] ?? {};
          const Icon = ICONS[cert.icon] ?? Award;
          return (
            <motion.div
              key={i}
              variants={fadeUp}
              className="relative overflow-hidden rounded-2xl glass p-6 transition-transform hover:-translate-y-1 card-glow"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue via-brand-purple to-brand-teal shadow-md">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-slate-900 dark:text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-brand-purple font-medium">
                    {cert.issuer}
                  </p>
                  <span className="mt-2 inline-block rounded-full bg-brand-blue/10 px-2.5 py-0.5 text-xs font-semibold text-brand-blue">
                    {cert.year}
                  </span>
                </div>
              </div>

              {/* subtle gradient accent bar */}
              <div className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-brand-blue via-brand-purple to-brand-teal opacity-50" />
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
