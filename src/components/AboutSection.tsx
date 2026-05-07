"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import MedicPhoto from "@/assets/images/Medic.jpg";
import { useLanguage } from "@/lib/languageContext";

function AnimatedNumber({ target }: { target: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const num = parseFloat(target.replace(/[^0-9.]/g, ""));
    const suffix = target.replace(/[0-9.]/g, "");
    if (isNaN(num)) { setDisplay(target); return; }
    let start = 0;
    const step = 16;
    const increment = (num / 1400) * step;
    const timer = setInterval(() => {
      start += increment;
      if (start >= num) { setDisplay(target); clearInterval(timer); }
      else setDisplay(`${Math.floor(start)}${suffix}`);
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);

  return <span ref={ref}>{display}</span>;
}

export default function AboutSection() {
  const { tr } = useLanguage();
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const leftInView = useInView(leftRef, { once: true, margin: "-80px" });
  const rightInView = useInView(rightRef, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 bg-[#F5F8FB]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16 lg:gap-24 items-center">
          {/* Left — image */}
          <motion.div
            ref={leftRef}
            initial={{ opacity: 0, x: -32 }}
            animate={leftInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -32 }}
            transition={{ duration: 0.7, ease: "circOut" }}
            className="relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-[0_24px_64px_-16px_rgba(24,87,190,0.14)]">
              <Image
                src={MedicPhoto}
                alt="Equipo médico NovaCare"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#1857BE]/10 to-transparent" />
            </div>

            {/* Floating stat cards */}
            <div className="absolute -right-5 top-1/2 -translate-y-1/2 grid grid-cols-1 gap-3">
              {tr.about.stats.slice(0, 2).map((s) => (
                <div key={s.label} className="bg-white rounded-2xl shadow-[0_8px_24px_-8px_rgba(0,0,0,0.1)] border border-[#E0E8F4] px-5 py-4 min-w-[120px]">
                  <p className="text-2xl font-extrabold tracking-tight text-[#0C1B2E]">
                    <AnimatedNumber target={s.value} />
                  </p>
                  <p className="text-xs text-[#5A7490] mt-0.5 font-medium leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — text */}
          <motion.div
            ref={rightRef}
            initial={{ opacity: 0, y: 24 }}
            animate={rightInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "circOut" }}
          >
            <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#1857BE] block mb-4">
              {tr.about.label}
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0C1B2E] mb-6 max-w-[20ch] leading-tight">
              {tr.about.title}
            </h2>
            <p className="text-[#5A7490] leading-relaxed mb-4 max-w-[60ch]">{tr.about.body}</p>
            <p className="text-[#5A7490] leading-relaxed mb-10 max-w-[60ch]">{tr.about.body2}</p>

            <div className="grid grid-cols-2 gap-4">
              {tr.about.stats.map((s) => (
                <div key={s.label} className="p-5 rounded-2xl border border-[#E0E8F4] bg-white">
                  <p className="text-3xl font-extrabold tracking-tight text-[#1857BE]">
                    <AnimatedNumber target={s.value} />
                  </p>
                  <p className="text-sm text-[#5A7490] mt-1 font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
