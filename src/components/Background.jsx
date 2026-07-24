import { motion } from "framer-motion";
import { useMemo } from "react";

function Particles() {
  const dots = useMemo(
    () =>
      Array.from({ length: 18 }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 8 + 8,
        delay: Math.random() * 6,
      })),
    []
  );

  return (
    <>
      {dots.map((d) => (
        <motion.span
          key={d.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.6, 0], y: [0, -40, 0] }}
          transition={{ duration: d.duration, delay: d.delay, repeat: Infinity, ease: "easeInOut" }}
          style={{ left: `${d.left}%`, top: `${d.top}%`, width: d.size, height: d.size, background: "var(--brand-purple)" }}
          className="absolute rounded-full"
        />
      ))}
    </>
  );
}

export default function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 transition-all duration-700 light-bg dark:dark-bg" />

      <div className="absolute -left-24 top-[-6rem] h-96 w-96 rounded-full blur-3xl animate-blob transition-[background] duration-700 blob-1" />
      <div className="absolute right-[-6rem] top-40 h-96 w-96 rounded-full blur-3xl animate-blob [animation-delay:3s] transition-[background] duration-700 blob-2" />
      <div className="absolute bottom-[-8rem] left-1/3 h-[28rem] w-[28rem] rounded-full blur-3xl animate-blob [animation-delay:6s] transition-[background] duration-700 blob-3" />

      <Particles />

      <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06] [background-image:linear-gradient(to_right,#8884_1px,transparent_1px),linear-gradient(to_bottom,#8884_1px,transparent_1px)] [background-size:56px_56px]" />
    </div>
  );
}
