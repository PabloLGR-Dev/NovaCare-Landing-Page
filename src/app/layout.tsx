import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/languageContext";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "NovaCare Medical Center — Tu salud en manos expertas",
  description:
    "Clínica moderna en Santo Domingo con más de 12 años ofreciendo atención médica integral. Especialistas certificados, tecnología avanzada y atención 24/7.",
  keywords: [
    "clínica en Santo Domingo",
    "médicos especialistas",
    "clínica moderna",
    "atención médica en República Dominicana",
    "laboratorio clínico",
    "emergencias médicas",
    "NovaCare",
  ],
  openGraph: {
    title: "NovaCare Medical Center",
    description: "Tu salud en manos expertas — Santo Domingo, RD",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${outfit.variable} scroll-smooth`}>
      <body className="min-h-screen antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
