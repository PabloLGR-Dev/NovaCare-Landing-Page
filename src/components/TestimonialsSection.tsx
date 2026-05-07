"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { StarIcon, QuotesIcon } from "@phosphor-icons/react";
import { useLanguage } from "@/lib/languageContext";

const AVATAR_COLORS = ["#1857BE", "#059669", "#D97706"];

export default function TestimonialsSection() {
  const { tr } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="testimonials" className="py-24" style={{ background: "#0C1B2E" }}>
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "circOut" }}
          className="text-center mb-14"
        >
          <span className="text-xs font-semibold tracking-[0.14em] uppercase text-white/40 block mb-3">
            {tr.testimonials.label}
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            {tr.testimonials.title}
          </h2>
          <p className="text-white/50 max-w-[48ch] mx-auto text-[15px]">
            {tr.testimonials.subtitle}
          </p>
        </motion.div>

        {/* Cards: first two side-by-side, third full-width */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {tr.testimonials.items.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
              transition={{ delay: 0.15 + i * 0.12, duration: 0.6, ease: "circOut" }}
              className={`rounded-3xl p-8 flex flex-col gap-5 ${i === 2 ? "md:col-span-2" : ""}`}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.09)",
              }}
            >
              <div className="flex items-start justify-between">
                <QuotesIcon size={32} weight="fill" className="text-[#1857BE]/60" />
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <StarIcon key={s} size={13} weight="fill" className="text-amber-400" />
                  ))}
                </div>
              </div>

              <p className={`text-white/80 leading-relaxed flex-1 ${i === 2 ? "text-lg" : "text-[15px]"}`}>
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0"
                  style={{ backgroundColor: AVATAR_COLORS[i] }}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-sm text-white">{t.name}</p>
                  <p className="text-xs text-white/40">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
