"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { CalendarBlankIcon } from "@phosphor-icons/react";
import { useLanguage } from "@/lib/languageContext";

export default function CTASection() {
  const { tr } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-[#F5F8FB]">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7, ease: "circOut" }}
          className="relative rounded-[2.5rem] overflow-hidden bg-[#1857BE] px-10 md:px-20 py-20 md:py-28"
        >
          {/* Decorative circles */}
          <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-white/5 pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-white/5 pointer-events-none" />
          <div className="absolute top-12 right-1/3 w-2 h-2 rounded-full bg-white/30 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 items-center">
            <div>
              <span className="text-xs font-semibold tracking-[0.12em] uppercase text-white/50 block mb-4">
                {tr.cta.label}
              </span>
              <h2 className="text-4xl md:text-5xl xl:text-6xl font-extrabold tracking-tighter text-white mb-5 max-w-[22ch]">
                {tr.cta.title}
              </h2>
              <p className="text-white/65 leading-relaxed max-w-[56ch]">
                {tr.cta.subtitle}
              </p>
            </div>

            <div className="flex flex-col gap-3 shrink-0">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-[#1857BE] font-bold text-sm hover:bg-[#EBF2FF] active:scale-[0.98] transition-all duration-200 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.2)]"
              >
                <CalendarBlankIcon size={18} weight="bold" />
                {tr.cta.button}
              </a>
              <a
                href="tel:+18095550000"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border-2 border-white/30 text-white font-semibold text-sm hover:bg-white/10 active:scale-[0.98] transition-all duration-200"
              >
                +1 (809) 555-0000
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
