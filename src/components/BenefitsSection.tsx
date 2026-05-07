"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  CertificateIcon,
  CpuIcon,
  TimerIcon,
  UserCircleIcon,
  CarIcon,
  ClockClockwiseIcon,
  ClockIcon,
} from "@phosphor-icons/react";
import { useLanguage } from "@/lib/languageContext";

const ICONS = [CertificateIcon, CpuIcon, TimerIcon, UserCircleIcon, CarIcon, ClockClockwiseIcon];

export default function BenefitsSection() {
  const { tr } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-16 items-start">
          {/* Left — sticky copy */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
            transition={{ duration: 0.65, ease: "circOut" }}
            className="lg:sticky lg:top-28"
          >
            <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#1857BE] block mb-4">
              {tr.benefits.label}
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0C1B2E] leading-tight mb-6 max-w-[18ch]">
              {tr.benefits.title}
            </h2>
            <p className="text-[#5A7490] leading-relaxed text-[15px] max-w-[42ch] mb-8">
              {tr.benefits.subtitle}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#1857BE] text-white font-semibold text-sm hover:bg-[#1348A0] active:scale-[0.98] transition-all duration-200 shadow-[0_6px_20px_-4px_rgba(24,87,190,0.4)]"
            >
              <ClockIcon size={17} weight="bold" />
              {tr.nav.cta}
            </a>
          </motion.div>

          {/* Right — benefits grid */}
          <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tr.benefits.items.map((b, i) => {
              const Icon = ICONS[i];
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.1 + i * 0.08, duration: 0.55, ease: "circOut" }}
                  className="group p-6 rounded-2xl border border-[#E0E8F4] bg-[#F8FAFB] hover:bg-white hover:border-[#1857BE]/25 hover:shadow-[0_8px_24px_-8px_rgba(24,87,190,0.1)] transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#EBF2FF] flex items-center justify-center mb-4 group-hover:bg-[#1857BE] transition-colors duration-300">
                    <Icon size={20} weight="duotone" className="text-[#1857BE] group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="font-bold text-[#0C1B2E] text-[14px] leading-snug mb-2">{b.title}</h3>
                  <p className="text-[#5A7490] text-sm leading-relaxed">{b.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
