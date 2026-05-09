# NovaCare Medical Center — Landing Page

Modern, responsive landing page for NovaCare Medical Center, a healthcare clinic in Santo Domingo, Dominican Republic. Built with Next.js, TypeScript, and Tailwind CSS — featuring bilingual support (ES/EN), smooth animations, and conversion-focused design.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Animations | Framer Motion 12 |
| Icons | Phosphor Icons |
| Font | Outfit (Google Fonts) |

---

## Features

- **Bilingual (ES/EN)** — Auto-detects browser language; toggle in navbar without page reload
- **Responsive** — Mobile-first layout with hamburger navigation
- **Animated sections** — Scroll-triggered entrance animations via Framer Motion
- **WhatsApp FAB** — Floating action button for direct patient contact
- **Contact form** — Client-side validated form with specialty selector
- **SEO ready** — Open Graph metadata, semantic HTML, optimized images
- **Vercel ready** — Zero-config deployment

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, metadata, LanguageProvider
│   ├── page.tsx            # Home page (composes all sections)
│   └── globals.css         # Tailwind imports + theme variables
├── components/
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── ServicesSection.tsx
│   ├── AboutSection.tsx
│   ├── BenefitsSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── FAQSection.tsx
│   ├── CTASection.tsx
│   ├── ContactForm.tsx
│   ├── Footer.tsx
│   └── WhatsAppFAB.tsx
├── assets/
│   └── images/             # Logo, hero images
└── lib/
    ├── languageContext.tsx  # i18n context provider
    └── translations.ts     # All ES/EN strings
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd landing-clinic

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## Deployment

This project is optimized for deployment on **Vercel**:

1. Push the repository to GitHub
2. Import the project in [vercel.com](https://vercel.com)
3. Deploy — no environment variables required

For other platforms, run `npm run build` and serve the `.next/` output with a Node.js server.

---

## Customization

### Clinic Information

Update contact details, address, and branding in:

- `src/lib/translations.ts` — all visible text (both languages)
- `src/app/layout.tsx` — page title, meta description, Open Graph
- `src/components/WhatsAppFAB.tsx` — WhatsApp phone number
- `src/assets/images/` — logo and hero images

### Theme Colors

Primary colors are defined as CSS variables in `src/app/globals.css`:

```css
--color-primary: #1a5fad;
--color-muted:   #6b7280;
--color-border:  #e2e8f0;
```