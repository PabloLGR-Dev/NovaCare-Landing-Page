"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { Easing } from "framer-motion";
import {
  StethoscopeIcon,
  BabyIcon,
  HeartIcon,
  GenderFemaleIcon,
  BandaidsIcon,
  FlaskIcon,
  SirenIcon,
  ScanIcon,
} from "@phosphor-icons/react";
import { useLanguage } from "@/lib/languageContext";

const ICONS = [StethoscopeIcon, BabyIcon, HeartIcon, GenderFemaleIcon, BandaidsIcon, FlaskIcon, SirenIcon, ScanIcon];

const ICON_COLORS = [
  { bg: "#EBF2FF", icon: "#1857BE" },
  { bg: "#F0FDF4", icon: "#16A34A" },
  { bg: "#FFF7ED", icon: "#EA580C" },
  { bg: "#FDF4FF", icon: "#9333EA" },
  { bg: "#FFF1F2", icon: "#E11D48" },
  { bg: "#F0FDFA", icon: "#0D9488" },
  { bg: "#FEF2F2", icon: "#DC2626" },
  { bg: "#EEF2FF", icon: "#4F46E5" },
];

function ServiceCard({ svc, i, inView }: { svc: { name: string; desc: string }; i: number; inView: boolean }) {
  const Icon = ICONS[i];
  const color = ICON_COLORS[i];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ delay: i * 0.07, duration: 0.55, ease: "circOut" as Easing }}
      className="group relative bg-white rounded-2xl border border-[#E0E8F4] p-6 hover:border-[#1857BE]/30 hover:shadow-[0_12px_32px_-8px_rgba(24,87,190,0.12)] transition-all duration-300 cursor-default flex flex-col"
    >
      <span className="absolute top-5 right-5 text-xs font-bold text-[#C8D8EE] tracking-widest tabular-nums">
        {String(i + 1).padStart(2, "0")}
      </span>

      <div
        className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: color.bg }}
      >
        <Icon size={20} weight="duotone" style={{ color: color.icon }} />
      </div>

      <h3 className="font-bold text-[#0C1B2E] text-[15px] mb-2 leading-snug">
        {svc.name}
      </h3>
      <p className="text-sm text-[#5A7490] leading-relaxed flex-1">
        {svc.desc}
      </p>
    </motion.div>
  );
}

export default function ServicesSection() {
  const { tr } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-24 bg-[#F5F8FB]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14">
          <div>
            <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#1857BE] block mb-3">
              {tr.nav.services}
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0C1B2E] max-w-[14ch] leading-tight">
              {tr.services.title}
            </h2>
          </div>
          <p className="text-[#5A7490] leading-relaxed max-w-[48ch] md:text-right text-[15px]">
            {tr.services.subtitle}
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"
        >
          {tr.services.items.map((svc, i) => (
            <ServiceCard key={svc.name} svc={svc} i={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
