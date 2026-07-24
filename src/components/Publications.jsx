import { motion } from "framer-motion";
import { FileText, ExternalLink } from "lucide-react";
import { publications } from "../data";
import { fadeUp, stagger, viewport } from "../motion";
import { useLang } from "../i18n/LanguageContext";
import SectionHeading from "./SectionHeading";

export default function Publications() {
  const { t } = useLang();
  return (
    <section id="publications" className="section-container">
      <SectionHeading eyebrow={t.publications.eyebrow} title={t.publications.title} />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2"
      >
        {publications.map((pub, i) => {
          const tr = t.publications.items[i] ?? {};
          return (
          <motion.article
            key={pub.venue + i}
            variants={fadeUp}
            className="group relative overflow-hidden rounded-3xl glass p-7 transition-transform hover:-translate-y-1"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-tr from-brand-blue to-brand-purple text-white shadow-lg">
                <FileText className="h-5 w-5" />
              </span>
              <span className="rounded-full border border-brand-blue/30 bg-brand-blue/10 px-3 py-1 text-xs font-bold text-brand-blue">
                {pub.venue}
              </span>
            </div>
            <h3 className="text-lg font-bold leading-snug text-slate-900 dark:text-white">
              {tr.title}
            </h3>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-purple opacity-0 transition-opacity group-hover:opacity-100">
              {t.publications.readPaper} <ExternalLink className="h-4 w-4" />
            </span>
          </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
