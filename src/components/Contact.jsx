import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";
import { personal } from "../data";
import { fadeUp, stagger, viewport } from "../motion";
import { useLang } from "../i18n/LanguageContext";
import SectionHeading from "./SectionHeading";

// Get a free access key at https://web3forms.com (paste it below).
// While it stays as the placeholder, the form falls back to opening the
// visitor's mail app instead.
const WEB3FORMS_ACCESS_KEY = "9517da24-6108-49bb-a44c-a756a1fa505b";

const socials = [
  { icon: Linkedin, href: personal.linkedin, label: "LinkedIn" },
  { icon: Github, href: personal.github, label: "GitHub" },
  { icon: Mail, href: `mailto:${personal.email}`, label: "Email" },
];

export default function Contact() {
  const { t } = useLang();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const openMailFallback = () => {
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    const subject = encodeURIComponent(form.subject || t.contact.defaultSubject);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setStatus("success");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status === "sending") return;

    // No key configured yet → open the visitor's mail client instead.
    if (!WEB3FORMS_ACCESS_KEY || WEB3FORMS_ACCESS_KEY === "YOUR_ACCESS_KEY_HERE") {
      openMailFallback();
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: form.name,
          email: form.email,
          subject: form.subject || t.contact.defaultSubject,
          message: form.message,
          from_name: form.name,
          replyto: form.email,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full rounded-2xl border border-slate-200/80 bg-white/60 px-4 py-3 text-sm text-slate-800 outline-none transition-colors placeholder:text-slate-400 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/20 dark:border-white/10 dark:bg-white/5 dark:text-slate-100";

  return (
    <section id="contact" className="section-container">
      <SectionHeading
        eyebrow={t.contact.eyebrow}
        title={t.contact.title}
        subtitle={t.contact.subtitle}
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="mx-auto grid max-w-5xl gap-8 md:grid-cols-5"
      >
        {/* Info panel */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col justify-between rounded-3xl bg-gradient-to-br from-brand-blue via-brand-purple to-brand-teal p-8 text-white md:col-span-2"
        >
          <div>
            <h3 className="text-2xl font-bold">{t.contact.getInTouch}</h3>
            <p className="mt-3 text-sm text-white/80">
              {t.contact.intro}
            </p>
            <a
              href={`mailto:${personal.email}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold underline-offset-4 hover:underline"
            >
              <Mail className="h-4 w-4" /> {personal.email}
            </a>
          </div>

          <div className="mt-10 flex gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-11 w-11 place-items-center rounded-full bg-white/15 backdrop-blur transition-transform hover:-translate-y-1 hover:bg-white/25"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          variants={fadeUp}
          onSubmit={handleSubmit}
          className="rounded-3xl glass p-8 md:col-span-3"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                {t.contact.name}
              </label>
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder={t.contact.namePlaceholder}
                className={inputClass}
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
                {t.contact.email}
              </label>
              <input
                required
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder={t.contact.emailPlaceholder}
                className={inputClass}
              />
            </div>
          </div>

          <div className="mt-4">
            <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
              {t.contact.subject}
            </label>
            <input
              required
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder={t.contact.subjectPlaceholder}
              className={inputClass}
            />
          </div>

          <div className="mt-4">
            <label className="mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300">
              {t.contact.message}
            </label>
            <textarea
              required
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder={t.contact.messagePlaceholder}
              className={`${inputClass} resize-none`}
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-primary mt-6 w-full disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "sending" ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />{" "}
                {t.contact.sending ?? "Sending…"}
              </>
            ) : status === "success" ? (
              <>
                <CheckCircle2 className="h-4 w-4" />{" "}
                {t.contact.sent ?? "Message sent!"}
              </>
            ) : status === "error" ? (
              <>
                <AlertCircle className="h-4 w-4" />{" "}
                {t.contact.error ?? "Something went wrong — try again"}
              </>
            ) : (
              <>
                <Send className="h-4 w-4" /> {t.contact.send}
              </>
            )}
          </button>
        </motion.form>
      </motion.div>
    </section>
  );
}
