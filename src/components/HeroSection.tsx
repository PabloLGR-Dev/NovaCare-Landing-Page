"use client";

import { motion } from "framer-motion";
import type { Easing } from "framer-motion";
import Image from "next/image";
import MedicTeam from "@/assets/images/Medic-team.png";
import Logo from "@/assets/images/NovaCare-logo.png";
import {
  CalendarBlankIcon,
  WhatsappLogoIcon,
  ShieldCheckIcon,
  ClockIcon,
  UsersFourIcon,
} from "@phosphor-icons/react";
import { useLanguage } from "@/lib/languageContext";

const rise = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.65, ease: "circOut" as Easing },
});

export default function HeroSection() {
  const { tr } = useLanguage();

  return (
    <section className="min-h-[100dvh] relative flex items-center overflow-hidden pt-16">
      {/* Background image */}
      <Image
        src={MedicTeam}
        alt="Equipo médico NovaCare"
        fill
        priority
        quality={100}
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Gradient overlay — white on left, transparent on right */}
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/30" />
      {/* Extra bottom fade for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/10" />

      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.7fr] gap-12 xl:gap-20 items-center">

          {/* Left — copy */}
          <div>
            <motion.div {...rise(0.05)} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EBF2FF] border border-[#C7DAFF] mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#1857BE] animate-pulse" />
              <span className="text-xs font-semibold text-[#1857BE] tracking-wide">{tr.hero.badge}</span>
            </motion.div>

            <motion.p {...rise(0.12)} className="text-base font-normal text-[#5A7490] mb-2 tracking-wide">
              {tr.hero.headline1}
            </motion.p>
            <motion.h1 {...rise(0.20)} className="text-5xl md:text-[3.6rem] xl:text-[4.2rem] font-extrabold tracking-tight leading-[1.05] text-[#0C1B2E] mb-1">
              {tr.hero.headline2}
            </motion.h1>
            <motion.h1 {...rise(0.27)} className="text-5xl md:text-[3.6rem] xl:text-[4.2rem] font-extrabold tracking-tight leading-[1.05] text-[#1857BE] mb-7">
              {tr.hero.headline3}
            </motion.h1>

            <motion.p {...rise(0.34)} className="text-[#5A7490] text-base leading-relaxed mb-9 max-w-[50ch]">
              {tr.hero.subtitle}
            </motion.p>

            <motion.div {...rise(0.41)} className="flex flex-wrap gap-3 mb-10">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#1857BE] text-white font-semibold text-sm hover:bg-[#1348A0] active:scale-[0.98] transition-all duration-200 shadow-[0_6px_20px_-4px_rgba(24,87,190,0.45)]"
              >
                <CalendarBlankIcon size={18} weight="bold" />
                {tr.hero.ctaPrimary}
              </a>
              <a
                href="https://wa.me/18295554411"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl border-2 border-[#1857BE] text-[#1857BE] font-semibold text-sm hover:bg-[#EBF2FF] active:scale-[0.98] transition-all duration-200"
              >
                <WhatsappLogoIcon size={18} weight="bold" />
                {tr.hero.ctaWhatsapp}
              </a>
            </motion.div>

            <motion.div {...rise(0.48)} className="flex flex-wrap gap-3">
              {[
                { Icon: ShieldCheckIcon, text: tr.hero.tag1 },
                { Icon: UsersFourIcon,   text: tr.hero.tag3 },
                { Icon: ClockIcon,       text: tr.hero.tag2 },
              ].map(({ Icon, text }) => (
                <span key={text} className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/80 backdrop-blur-sm border border-[#E0E8F4] text-xs font-medium text-[#5A7490]">
                  <Icon size={13} weight="bold" className="text-[#1857BE]" />
                  {text}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Right — stats card floating over image */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.7, ease: "circOut" as Easing }}
            className="hidden lg:block"
          >
            <div className="bg-white/85 backdrop-blur-md rounded-[2.5rem] border border-white/70 p-10 shadow-[0_24px_64px_-16px_rgba(0,0,0,0.18)]">
              <div className="mb-8">
                <Image src={Logo} alt="NovaCare Medical Center" height={78} className="w-auto" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {tr.about.stats.map((s, i) => (
                  <motion.div
                    key={s.value}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55 + i * 0.08, duration: 0.5, ease: "circOut" as Easing }}
                    className="bg-white rounded-2xl border border-[#E0E8F4] px-5 py-5 shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06)]"
                  >
                    <p className="text-3xl font-extrabold text-[#1857BE] tracking-tight">{s.value}</p>
                    <p className="text-xs text-[#5A7490] mt-1 font-medium leading-tight">{s.label}</p>
                  </motion.div>
                ))}
              </div>

              <p className="text-xs text-[#9FB3CA] text-center mt-8 tracking-widest uppercase font-semibold">
                Santo Domingo, República Dominicana
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
