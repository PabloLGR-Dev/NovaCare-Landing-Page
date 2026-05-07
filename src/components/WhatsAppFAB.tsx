"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WhatsappLogoIcon } from "@phosphor-icons/react";
import { useLanguage } from "@/lib/languageContext";

export default function WhatsAppFAB() {
  const { tr } = useLanguage();
  const [hovered, setHovered] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "circOut" }}
            className="bg-[#0C1B2E] text-white text-xs font-semibold px-3.5 py-2 rounded-xl shadow-lg whitespace-nowrap"
          >
            {tr.whatsapp.tooltip}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href="https://wa.me/18295554411"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="w-14 h-14 rounded-2xl bg-[#25D366] flex items-center justify-center shadow-[0_8px_24px_-4px_rgba(37,211,102,0.4)]"
        aria-label={tr.whatsapp.tooltip}
      >
        <WhatsappLogoIcon size={28} weight="fill" className="text-white" />
      </motion.a>
    </div>
  );
}
