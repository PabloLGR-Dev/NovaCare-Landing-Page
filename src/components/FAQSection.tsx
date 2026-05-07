"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { PlusIcon, MinusIcon } from "@phosphor-icons/react";
import { useLanguage } from "@/lib/languageContext";

export default function FAQSection() {
  const { tr } = useLanguage();
  const [open, setOpen] = useState<number | null>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const leftInView = useInView(leftRef, { once: true, margin: "-80px" });
  const rightInView = useInView(rightRef, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-[#F5F8FB]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16 items-start">
          {/* Left — sticky label */}
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, y: 20 }}
            animate={leftInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "circOut" }}
            className="lg:sticky lg:top-24"
          >
            <span className="text-xs font-semibold tracking-[0.12em] uppercase text-[#1857BE] block mb-4">
              {tr.faq.label}
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-[#0C1B2E] mb-6 max-w-[16ch]">
              {tr.faq.title}
            </h2>
            <a
              href="https://wa.me/18295554411"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border-2 border-[#1857BE] text-[#1857BE] text-sm font-semibold hover:bg-[#EBF2FF] active:scale-[0.98] transition-all duration-200"
            >
              {tr.hero.ctaWhatsapp}
            </a>
          </motion.div>

          {/* Right — accordion */}
          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, y: 24 }}
            animate={rightInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "circOut" }}
            className="space-y-3"
          >
            {tr.faq.items.map((faq, i) => (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  open === i
                    ? "border-[#1857BE]/40 bg-white shadow-[0_4px_24px_-8px_rgba(26,95,173,0.1)]"
                    : "border-[#E0E8F4] bg-white hover:border-[#1857BE]/30"
                }`}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <span className="font-semibold text-[#0C1B2E] text-[15px] leading-snug">
                    {faq.q}
                  </span>
                  <span className="shrink-0 w-7 h-7 rounded-lg bg-[#EBF2FF] flex items-center justify-center text-[#1857BE]">
                    {open === i ? <MinusIcon size={14} weight="bold" /> : <PlusIcon size={14} weight="bold" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "circOut" }}
                    >
                      <p className="px-6 pb-5 text-sm text-[#5A7490] leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
