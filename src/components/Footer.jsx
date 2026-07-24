import { motion } from "framer-motion";
import { Mail, ArrowUp, Heart } from "lucide-react";
import { Github, Linkedin } from "./BrandIcons";
import { personal } from "../data";
import { useLang } from "../i18n/LanguageContext";

const socials = [
  { icon: Linkedin, href: personal.linkedin, label: "LinkedIn" },
  { icon: Github, href: personal.github, label: "GitHub" },
  { icon: Mail, href: `mailto:${personal.email}`, label: "Email" },
];

export default function Footer() {
  const { t } = useLang();
  const scrollTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative border-t border-slate-200/70 dark:border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-12">
        <button
          onClick={scrollTop}
          aria-label="Back to top"
          className="group grid h-12 w-12 place-items-center rounded-full bg-gradient-to-tr from-brand-blue via-brand-purple to-brand-teal text-white shadow-lg shadow-brand-purple/30 transition-transform hover:-translate-y-1"
        >
          <ArrowUp className="h-5 w-5 transition-transform group-hover:-translate-y-0.5" />
        </button>

        <div className="flex gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-full glass text-slate-600 transition-all hover:-translate-y-1 hover:text-brand-purple dark:text-slate-300"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-slate-500 dark:text-slate-400"
        >
          © {new Date().getFullYear()} {personal.name}. {t.footer.rights}
        </motion.p>

        <p className="flex items-center gap-1.5 text-xs text-slate-400 dark:text-slate-500">
          {t.footer.builtWith}{" "}
          <Heart className="h-3.5 w-3.5 fill-red-500 text-red-500" />{" "}
          {t.footer.using}
        </p>
      </div>
    </footer>
  );
}
