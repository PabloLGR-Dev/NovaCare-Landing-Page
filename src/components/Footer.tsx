"use client";

import Image from "next/image";
import Logo from "@/assets/images/NovaCare-logo.png";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeSimpleIcon,
  FacebookLogoIcon,
  InstagramLogoIcon,
  XLogoIcon,
} from "@phosphor-icons/react";
import { useLanguage } from "@/lib/languageContext";

export default function Footer() {
  const { tr } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer style={{ background: "#080F1A" }} className="text-white">
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image src={Logo} alt="NovaCare Medical Center" height={36} className="w-auto brightness-0 invert" />
            </div>
            <p className="text-sm text-white/45 leading-relaxed mb-5 max-w-[28ch]">
              {tr.footer.tagline} — {tr.footer.description}
            </p>
            <div className="flex gap-3">
              {[FacebookLogoIcon, InstagramLogoIcon, XLogoIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#1857BE] flex items-center justify-center transition-colors duration-200"
                >
                  <Icon size={16} className="text-white/70" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm mb-5 text-white/70">{tr.footer.services}</h4>
            <ul className="space-y-2.5">
              {tr.footer.links.services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-white/40 hover:text-white transition-colors duration-200">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-sm mb-5 text-white/70">{tr.footer.company}</h4>
            <ul className="space-y-2.5">
              {tr.footer.links.company.map((s) => (
                <li key={s}>
                  <a href="#" className="text-sm text-white/40 hover:text-white transition-colors duration-200">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours + Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-5 text-white/70">{tr.footer.hours}</h4>
            <ul className="space-y-2 mb-7">
              {tr.footer.hoursData.map((h) => (
                <li key={h} className="text-sm text-white/40">{h}</li>
              ))}
            </ul>
            <div className="space-y-2.5">
              <a href="tel:+18095550000" className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors duration-200">
                <PhoneIcon size={14} /> +1 (809) 555-0000
              </a>
              <a href="mailto:contacto@novacaremed.com" className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors duration-200">
                <EnvelopeSimpleIcon size={14} /> contacto@novacaremed.com
              </a>
              <a href="#" className="flex items-start gap-2 text-sm text-white/40 hover:text-white transition-colors duration-200">
                <MapPinIcon size={14} className="mt-0.5 shrink-0" />
                <span>Av. Winston Churchill #1024, Piantini, Santo Domingo</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-7 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            &copy; {year} {tr.footer.copyright}
          </p>
          <div className="flex gap-5">
            {["Privacidad", "Términos", "Cookies"].map((l) => (
              <a key={l} href="#" className="text-xs text-white/25 hover:text-white/60 transition-colors duration-200">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
