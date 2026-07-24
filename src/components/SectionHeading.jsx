import { motion } from "framer-motion";
import { fadeUp, viewport } from "../motion";

export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className="mx-auto mb-14 max-w-2xl text-center"
    >
      {eyebrow && (
        <span className="mb-3 inline-block rounded-full border border-brand-purple/30 bg-brand-purple/10 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-brand-purple">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white md:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base text-slate-600 dark:text-slate-400">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
