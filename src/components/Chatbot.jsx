import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X, Sparkles } from "lucide-react";
import SiriOrb from "./SiriOrb";
import {
  personal,
  languageSkills,
  skillCategories,
  experiences,
  projects,
  education,
  publications,
  certificates,
} from "../data";
import { useLang } from "../i18n/LanguageContext";

const firstName = personal.name.split(" ")[0];

const fill = (str, vars) =>
  str.replace(/\{(\w+)\}/g, (_, key) => vars[key] ?? "");

export default function Chatbot() {
  const { t, lang } = useLang();
  const c = t.chatbot;

  const [open, setOpen] = useState(false);
  const [thinking, setThinking] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: fill(c.welcome, { name: firstName }) },
  ]);
  const endRef = useRef(null);

  // Reset the conversation to the localized greeting when the language changes.
  useEffect(() => {
    setMessages([{ from: "bot", text: fill(c.welcome, { name: firstName }) }]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, thinking]);

  // Keyword-based response engine grounded in the portfolio data + translations.
  const getResponse = (raw) => {
    const q = raw.toLowerCase();
    const kw = c.keywords;
    const has = (list) => list.some((w) => q.includes(w.toLowerCase()));
    const r = c.responses;
    const vars = {
      name: firstName,
      email: personal.email,
      linkedin: personal.linkedin,
      github: personal.github,
    };

    if (has(kw.greet)) return fill(r.greet, vars);

    if (has(kw.about)) return t.bio;

    if (has(kw.skills)) {
      const langs = languageSkills
        .map((s) => `${s.name} (${s.level}%)`)
        .join(", ");
      const cats = skillCategories
        .map(
          (cat, i) =>
            `• ${t.skills.categories[i] ?? cat.title}: ${cat.skills.join(", ")}`
        )
        .join("\n");
      return `${fill(r.skillsIntro, { langs })}\n\n${cats}`;
    }

    if (has(kw.experience)) {
      return t.experience.items
        .map(
          (it, i) => `• ${it.role} — ${experiences[i].company} (${it.period})`
        )
        .join("\n");
    }

    if (has(kw.projects)) {
      return projects
        .map((p, i) => ({ ...p, tr: t.projects.items[i] }))
        .filter((p) => p.featured)
        .map((p) => `• ${p.tr.title} — ${p.tr.description} [${p.tr.highlight}]`)
        .join("\n");
    }

    if (has(kw.education)) {
      return t.education.items
        .map(
          (it, i) =>
            `• ${it.degree} — ${education[i].school} (${it.period})${
              it.detail ? ` · ${it.detail}` : ""
            }`
        )
        .join("\n");
    }

    if (has(kw.publications)) {
      return t.publications.items
        .map((it, i) => `• [${publications[i].venue}] ${it.title}`)
        .join("\n");
    }

    if (has(kw.certificates)) {
      return t.certificates.items
        .map((it, i) => `• ${it.title} — ${certificates[i].issuer} (${certificates[i].year})`)
        .join("\n");
    }

    if (has(kw.contact)) return fill(r.contact, vars);

    if (has(kw.resume)) return r.resume;

    if (has(kw.thanks)) return r.thanks;

    return fill(r.fallback, vars);
  };

  const send = (text) => {
    const value = (text ?? input).trim();
    if (!value || thinking) return;
    setMessages((m) => [...m, { from: "user", text: value }]);
    setInput("");
    setThinking(true);

    const reply = getResponse(value);
    const delay = Math.min(900 + reply.length * 8, 1800);
    setTimeout(() => {
      setMessages((m) => [...m, { from: "bot", text: reply }]);
      setThinking(false);
    }, delay);
  };

  return (
    <>
      {/* Floating launcher */}
      <div className="fixed bottom-6 right-6 z-[60] flex items-center gap-3">
        {/* Floating hint bubble */}
        <AnimatePresence>
          {!open && (
            <motion.div
              initial={{ opacity: 0, x: 10, scale: 0.8 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.8 }}
              transition={{ delay: 2, type: "spring", stiffness: 200 }}
              className="hidden items-center gap-1.5 rounded-2xl rounded-br-md glass-strong px-3.5 py-2 text-xs font-semibold text-slate-700 shadow-lg dark:text-slate-200 sm:flex"
            >
              <Sparkles className="h-3.5 w-3.5 text-brand-purple" />
              {c.askMeAnything}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setOpen((o) => !o)}
          aria-label={c.askMeAnything}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, type: "spring", stiffness: 200 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.92 }}
          className="group relative grid h-16 w-16 place-items-center"
        >
          {/* Soft floating bloom (no hard edge) */}
          <span className="absolute h-14 w-14 rounded-full bg-brand-purple/40 blur-2xl transition-all duration-500 group-hover:bg-brand-purple/60" />
          <motion.span
            className="absolute h-16 w-16 rounded-full bg-brand-teal/20 blur-2xl"
            animate={{ scale: [1, 1.25, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* The ribbon logo */}
          <span className="relative z-10">
            <SiriOrb size={62} state={open ? "speaking" : "idle"} />
          </span>
        </motion.button>
      </div>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 260, damping: 24 }}
            className="fixed bottom-24 right-4 z-[60] flex h-[70vh] max-h-[560px] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-3xl glass-strong sm:right-6"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-white/10 bg-gradient-to-r from-brand-blue/10 via-brand-purple/10 to-brand-teal/10 px-4 py-3">
              <SiriOrb size={40} state={thinking ? "thinking" : "speaking"} />
              <div className="flex-1">
                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  {firstName}
                  {c.assistant}
                </p>
                <p className="flex items-center gap-1 text-xs text-brand-teal">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-teal" />
                  {thinking ? c.thinking : c.online}
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="grid h-8 w-8 place-items-center rounded-full text-slate-500 transition-colors hover:bg-slate-500/10 dark:text-slate-400"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
              {messages.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${m.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] whitespace-pre-line rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                      m.from === "user"
                        ? "rounded-br-md bg-gradient-to-r from-brand-blue to-brand-purple text-white"
                        : "rounded-bl-md bg-slate-500/10 text-slate-700 dark:bg-white/10 dark:text-slate-200"
                    }`}
                  >
                    {m.text}
                  </div>
                </motion.div>
              ))}

              {thinking && (
                <div className="flex justify-start">
                  <div className="flex gap-1 rounded-2xl rounded-bl-md bg-slate-500/10 px-4 py-3 dark:bg-white/10">
                    {[0, 1, 2].map((d) => (
                      <motion.span
                        key={d}
                        className="h-2 w-2 rounded-full bg-brand-purple"
                        animate={{ y: [0, -5, 0], opacity: [0.4, 1, 0.4] }}
                        transition={{
                          duration: 0.8,
                          repeat: Infinity,
                          delay: d * 0.15,
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>

            {/* Suggestions */}
            {messages.length <= 1 && (
              <div className="flex flex-wrap gap-2 px-4 pb-2">
                {c.suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="inline-flex items-center gap-1 rounded-full border border-brand-purple/30 bg-brand-purple/10 px-3 py-1.5 text-xs font-medium text-brand-purple transition-colors hover:bg-brand-purple/20"
                  >
                    <Sparkles className="h-3 w-3" /> {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send();
              }}
              className="flex items-center gap-2 border-t border-white/10 p-3"
            >
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={c.placeholder}
                className="flex-1 rounded-full border border-slate-200/80 bg-white/60 px-4 py-2.5 text-sm text-slate-800 outline-none transition-colors placeholder:text-slate-400 focus:border-brand-purple dark:border-white/10 dark:bg-white/5 dark:text-slate-100"
              />
              <button
                type="submit"
                disabled={!input.trim() || thinking}
                aria-label="Send message"
                className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-tr from-brand-blue via-brand-purple to-brand-teal text-white shadow-lg transition-transform hover:scale-105 disabled:opacity-40"
              >
                <Send className="h-4 w-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
