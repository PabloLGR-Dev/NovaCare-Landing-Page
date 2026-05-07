"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Logo from "@/assets/images/NovaCare-logo.png";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import { useLanguage } from "@/lib/languageContext";

export default function Navbar() {
  const { lang, toggle, tr } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#services", label: tr.nav.services },
    { href: "#about", label: tr.nav.about },
    { href: "#benefits", label: tr.nav.benefits },
    { href: "#testimonials", label: tr.nav.testimonials },
    { href: "#contact", label: tr.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-[#E0E8F4] shadow-[0_2px_20px_-4px_rgba(26,95,173,0.08)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#">
          <Image src={Logo} alt="NovaCare Medical Center" height={72} className="w-auto" />
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[#5A7490] hover:text-[#0C1B2E] transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="hidden md:flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-[#5A7490] hover:text-[#0C1B2E] transition-colors duration-200 px-2"
          >
            <span className={lang === "es" ? "text-[#1857BE]" : ""}>ES</span>
            <span className="opacity-30">/</span>
            <span className={lang === "en" ? "text-[#1857BE]" : ""}>EN</span>
          </button>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-4 py-2 rounded-lg bg-[#1857BE] text-white text-sm font-semibold hover:bg-[#1348A0] active:scale-[0.98] transition-all duration-200"
          >
            {tr.nav.cta}
          </a>

          <button
            className="md:hidden p-2 text-[#0C1B2E]"
            onClick={() => setOpen((o) => !o)}
            aria-label="menu"
          >
            {open ? <XIcon size={22} /> : <ListIcon size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white/95 backdrop-blur-md border-b border-[#E0E8F4] px-6 pb-6 pt-2"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-sm font-medium text-[#5A7490] border-b border-[#E0E8F4] last:border-0"
              >
                {l.label}
              </a>
            ))}
            <div className="flex items-center gap-4 mt-4">
              <button
                onClick={toggle}
                className="text-xs font-semibold tracking-widest uppercase text-[#5A7490]"
              >
                <span className={lang === "es" ? "text-[#1857BE]" : ""}>ES</span>
                {" / "}
                <span className={lang === "en" ? "text-[#1857BE]" : ""}>EN</span>
              </button>
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="flex-1 text-center px-4 py-2.5 rounded-lg bg-[#1857BE] text-white text-sm font-semibold"
              >
                {tr.nav.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
