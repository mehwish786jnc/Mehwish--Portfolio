import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Moon, Sun, Menu, X, Globe, Check } from "lucide-react";
import { navLinks, personal } from "../data";
import { useLang } from "../i18n/LanguageContext";

export default function Navbar({ theme, toggle }) {
  const { t, lang, setLang, languages } = useLang();
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onClick = (e) => {
      if (langRef.current && !langRef.current.contains(e.target))
        setLangOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const handleClick = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300 ${
          scrolled ? "glass-strong" : "border border-transparent"
        } mx-4 md:mx-auto`}
      >
        <button
          onClick={() => handleClick("home")}
          className="flex items-center gap-2.5 group"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-blue via-brand-purple to-brand-teal shadow-lg shadow-brand-purple/30 transition-shadow duration-300 group-hover:shadow-brand-purple/50">
            <span className="text-sm font-black tracking-tight text-white">MS</span>
          </div>
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleClick(link.id)}
                className={`relative rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                  active === link.id
                    ? "text-brand-purple"
                    : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
                }`}
              >
                {t.nav[link.id]}
                {active === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-brand-purple/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {/* Language switcher */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen((o) => !o)}
              aria-label={t.language}
              aria-expanded={langOpen}
              className="flex h-10 items-center gap-1.5 rounded-full glass px-3 text-slate-700 transition-transform hover:scale-105 dark:text-slate-200"
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm font-semibold uppercase">{lang}</span>
            </button>
            <AnimatePresence>
              {langOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -8, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -8, scale: 0.96 }}
                  transition={{ duration: 0.15 }}
                  className="absolute right-0 top-12 z-50 w-44 overflow-hidden rounded-2xl border border-white/10 bg-black p-1.5 shadow-xl"
                >
                  {languages.map((l) => (
                    <li key={l.code}>
                      <button
                        onClick={() => {
                          setLang(l.code);
                          setLangOpen(false);
                        }}
                        className={`flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-left text-sm transition-colors ${
                          lang === l.code
                            ? "bg-brand-purple/20 font-semibold text-brand-purple"
                            : "text-slate-200 hover:bg-white/10"
                        }`}
                      >
                        <span className="text-base">{l.flag}</span>
                        <span className="flex-1">{l.label}</span>
                        {lang === l.code && <Check className="h-4 w-4" />}
                      </button>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>

          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="grid h-10 w-10 place-items-center rounded-full glass text-slate-700 transition-transform hover:scale-105 dark:text-slate-200"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </motion.span>
            </AnimatePresence>
          </button>

          <a
            href={personal.resumeUrl}
            download
            className="btn-primary hidden !px-5 !py-2 sm:inline-flex"
          >
            {t.hero.resume}
          </a>

          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-full glass text-slate-700 dark:text-slate-200 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="mx-4 mt-2 rounded-2xl glass-strong p-4 lg:hidden"
          >
            <ul className="grid gap-1">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleClick(link.id)}
                    className={`w-full rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                      active === link.id
                        ? "bg-brand-purple/10 text-brand-purple"
                        : "text-slate-600 hover:bg-slate-500/5 dark:text-slate-300"
                    }`}
                  >
                    {t.nav[link.id]}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX: progress }}
        className="mx-4 mt-2 h-0.5 origin-left rounded-full bg-gradient-to-r from-brand-blue via-brand-purple to-brand-teal md:mx-auto md:max-w-6xl"
      />
    </motion.header>
  );
}
