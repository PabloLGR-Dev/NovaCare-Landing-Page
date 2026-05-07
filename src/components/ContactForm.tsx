"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  MapPinIcon,
  PhoneIcon,
  WhatsappLogoIcon,
  EnvelopeSimpleIcon,
  ClockIcon,
  WarningIcon,
} from "@phosphor-icons/react";
import { useLanguage } from "@/lib/languageContext";

type FormState = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const { tr } = useLanguage();
  const f = tr.contact.form;
  const info = tr.contact.info;

  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [values, setValues] = useState({ name: "", phone: "", email: "", specialty: "", message: "" });

  const set = (k: keyof typeof values) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setValues((v) => ({ ...v, [k]: e.target.value }));
      setErrors((er) => ({ ...er, [k]: "" }));
    };

  const validate = () => {
    const e: Record<string, string> = {};
    if (!values.name.trim()) e.name = "Requerido";
    if (!values.phone.trim()) e.phone = "Requerido";
    if (!values.email.includes("@")) e.email = "Email inválido";
    if (!values.specialty || values.specialty === f.specialtyOptions[0]) e.specialty = "Requerido";
    return e;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setState("sending");
    await new Promise((r) => setTimeout(r, 1400));
    setState("success");
  };

  const inputBase =
    "w-full rounded-xl border bg-white px-4 py-3 text-sm text-[#0C1B2E] placeholder:text-[#9FB3CA] outline-none transition-all duration-200 focus:border-[#1857BE] focus:shadow-[0_0_0_3px_rgba(24,87,190,0.12)]";

  const INFO_ROWS = [
    { Icon: MapPinIcon,         label: "Dirección / Address",      value: info.address,                       href: undefined },
    { Icon: PhoneIcon,          label: "Teléfono / Phone",          value: info.phone,                         href: "tel:+18095550000" },
    { Icon: WhatsappLogoIcon,   label: "WhatsApp",                  value: info.whatsapp,                      href: "https://wa.me/18295554411" },
    { Icon: EnvelopeSimpleIcon, label: "Email",                     value: info.email,                         href: `mailto:${info.email}` },
    { Icon: ClockIcon,          label: "Horario / Hours",           value: info.hours,                         href: undefined },
    { Icon: WarningIcon,        label: "Emergencias / Emergency",   value: info.emergency,                     href: undefined },
  ];

  return (
    <section id="contact" className="py-24 bg-white" ref={ref}>
      <div className="max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "circOut" }}
          className="mb-14"
        >
          <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#1857BE] block mb-3">
            {tr.contact.label}
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#0C1B2E] max-w-[18ch] leading-tight">
              {tr.contact.title}
            </h2>
            <p className="text-[#5A7490] max-w-[44ch] md:text-right text-[15px]">
              {tr.contact.subtitle}
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-10">
          {/* Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "circOut" }}
            className="space-y-5"
          >
            {INFO_ROWS.map(({ Icon, label, value, href }) => (
              <div key={label} className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#EBF2FF] flex items-center justify-center shrink-0">
                  <Icon size={18} weight="duotone" className="text-[#1857BE]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#5A7490] mb-0.5">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[#0C1B2E] hover:text-[#1857BE] transition-colors duration-200"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-[#0C1B2E]">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Map embed */}
            <div className="rounded-2xl overflow-hidden border border-[#E0E8F4] mt-2">
              <iframe
                title="NovaCare location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.1234567890!2d-69.93456!3d18.47654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ea561b16e34c50f%3A0x123456789abcdef!2sAv.+Winston+Churchill%2C+Piantini%2C+Santo+Domingo!5e0!3m2!1ses!2sdo!4v1234567890"
                width="100%"
                height="200"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 24 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "circOut" }}
            className="bg-[#F5F8FB] rounded-3xl p-8 border border-[#E0E8F4]"
          >
            {state === "success" ? (
              <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M5 14l7 7L23 7" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="font-semibold text-[#0C1B2E] text-lg">{f.success}</p>
                <button
                  onClick={() => { setState("idle"); setValues({ name: "", phone: "", email: "", specialty: "", message: "" }); }}
                  className="text-sm text-[#1857BE] font-medium hover:underline"
                >
                  {f.submit} ↗
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#0C1B2E]">{f.name}</label>
                  <input type="text" value={values.name} onChange={set("name")} placeholder={f.placeholders.name}
                    className={`${inputBase} ${errors.name ? "border-red-400" : "border-[#E0E8F4]"}`} />
                  {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#0C1B2E]">{f.phone}</label>
                    <input type="tel" value={values.phone} onChange={set("phone")} placeholder={f.placeholders.phone}
                      className={`${inputBase} ${errors.phone ? "border-red-400" : "border-[#E0E8F4]"}`} />
                    {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#0C1B2E]">{f.email}</label>
                    <input type="email" value={values.email} onChange={set("email")} placeholder={f.placeholders.email}
                      className={`${inputBase} ${errors.email ? "border-red-400" : "border-[#E0E8F4]"}`} />
                    {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#0C1B2E]">{f.specialty}</label>
                  <select value={values.specialty} onChange={set("specialty")}
                    className={`${inputBase} ${errors.specialty ? "border-red-400" : "border-[#E0E8F4]"}`}>
                    {f.specialtyOptions.map((opt) => (
                      <option key={opt} value={opt === f.specialtyOptions[0] ? "" : opt}>{opt}</option>
                    ))}
                  </select>
                  {errors.specialty && <p className="text-xs text-red-500">{errors.specialty}</p>}
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-[#0C1B2E]">{f.message}</label>
                  <textarea rows={4} value={values.message} onChange={set("message")}
                    placeholder={f.placeholders.message}
                    className={`${inputBase} resize-none border-[#E0E8F4]`} />
                </div>

                {state === "error" && <p className="text-sm text-red-500 font-medium">{f.error}</p>}

                <button
                  type="submit"
                  disabled={state === "sending"}
                  className="w-full py-3.5 rounded-xl bg-[#1857BE] text-white font-semibold text-sm hover:bg-[#1348A0] active:scale-[0.98] disabled:opacity-70 transition-all duration-200"
                >
                  {state === "sending" ? f.sending : f.submit}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
