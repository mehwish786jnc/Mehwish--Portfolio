import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { Star } from "lucide-react";
import { projects } from "../data";
import { fadeUp, stagger, viewport } from "../motion";
import { useLang } from "../i18n/LanguageContext";
import SectionHeading from "./SectionHeading";

function ProjectCard({ project, tr, labels }) {
  const ref = useRef(null);

  // Cursor-tracking 3D tilt + spotlight
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [8, -8]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-8, 8]), {
    stiffness: 200,
    damping: 20,
  });
  const glowX = useTransform(mx, (v) => `${v * 100}%`);
  const glowY = useTransform(my, (v) => `${v * 100}%`);

  const handleMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };
  const handleLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <motion.article
      ref={ref}
      variants={fadeUp}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="card-glow group relative flex flex-col overflow-hidden rounded-3xl glass p-6 transition-shadow duration-300 hover:shadow-2xl hover:shadow-brand-purple/20"
    >
      {/* Spotlight following cursor */}
      <motion.div
        aria-hidden="true"
        style={{
          background: useTransform(
            [glowX, glowY],
            ([x, y]) =>
              `radial-gradient(220px circle at ${x} ${y}, rgba(139,92,246,0.18), transparent 70%)`
          ),
        }}
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      {/* Gradient top bar */}
      <div
        className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${project.accent}`}
      />

      <div style={{ transform: "translateZ(40px)" }}>
        <div className="mb-4 flex items-start justify-between">
          <div
            className={`grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-tr ${project.accent} text-white shadow-lg transition-transform duration-300 group-hover:scale-110`}
          >
            <Star className="h-5 w-5" />
          </div>
          <div className="flex flex-col items-end gap-1">
            {project.status === "inProgress" && (
              <span className="rounded-full border border-brand-blue/40 bg-brand-blue/10 px-3 py-1 text-xs font-semibold text-brand-blue">
                {labels.inProgress}
              </span>
            )}
            <span className="rounded-full border border-brand-teal/30 bg-brand-teal/10 px-3 py-1 text-xs font-semibold text-brand-teal">
              {tr.highlight}
            </span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white">
          {tr.title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
          {tr.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-500/10 px-2.5 py-1 text-xs font-medium text-slate-600 dark:text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const { t } = useLang();
  const labels = {
    code: t.projects.code,
    liveDemo: t.projects.liveDemo,
    comingSoon: t.projects.comingSoon,
    inProgress: t.projects.inProgress,
  };
  return (
    <section id="projects" className="section-container">
      <SectionHeading
        eyebrow={t.projects.eyebrow}
        title={t.projects.title}
        subtitle={t.projects.subtitle}
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((p, i) => (
          <ProjectCard
            key={i}
            project={p}
            tr={t.projects.items[i] ?? {}}
            labels={labels}
          />
        ))}
      </motion.div>
    </section>
  );
}
