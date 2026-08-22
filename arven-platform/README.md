# ARVEN PLATFORM

GDPR & EU AI Act compliance automation for European SMEs.

## Overview

ARVEN PLATFORM is an automated compliance assessment tool for small and medium-sized businesses. We help you understand and address GDPR and EU AI Act requirements without expensive consultants.

**Current Status:** Early-stage pilot program (TRL 1-2)

## Tech Stack

- **Framework:** Next.js 14 (React 19)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Hosting:** Vercel (recommended)

## Project Structure

```
arven-platform/
├── app/
│  ├── layout.tsx          # Root layout
│  ├── page.tsx            # Homepage (all sections)
│  └── globals.css         # Global styles
├── components/
│  ├── Navigation.tsx      # Header navigation
│  └── Footer.tsx          # Footer
├── public/                # Static assets
├── tailwind.config.ts     # Tailwind configuration
├── tsconfig.json          # TypeScript configuration
├── next.config.js         # Next.js configuration
└── package.json           # Dependencies
```

## Installation

```bash
# Clone or copy project
cd arven-platform

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

## Deploy to Vercel (Recommended)

1. Push to GitHub
2. Connect to Vercel
3. Deploy with one click

See `DEPLOYMENT_GUIDE.md` for detailed instructions.

## Design System

### Colors
- **Dark BG:** #0F0F1E (OLED-optimized)
- **Magenta:** #D946EF (Primary CTA)
- **Cyan:** #00F2FE (Secondary accents)
- **Red:** #FF3333 (Problems/alerts)
- **Green:** #00A86B (Success/checkmarks)

### Typography
- **Headlines:** Montserrat (Bold)
- **Body:** Inter (Regular)

### Animations
- Fade-in on scroll
- Slide-up on load
- Pulse glow on hover

## Features

✅ Honest positioning (early-stage, not "production-ready")
✅ Verified facts (all numbers with sources)
✅ Mobile-responsive
✅ Fast load times
✅ Accessibility-friendly (WCAG 2.1 AA)
✅ SEO-optimized
✅ Dark mode (native)

## Customization

### Update Contact Info
Edit `app/page.tsx` and `components/Footer.tsx`

### Change Colors
Edit `tailwind.config.ts`

### Update Metadata
Edit `app/layout.tsx`

## Content Sections

1. **Hero** - Main pitch + CTA
2. **Why It Matters** - Problem context with sources
3. **How It Works** - 3-module process (EVALUATION → AUDIT → REMEDIATION)
4. **Honest Status** - Transparent about TRL stage
5. **Pilot Program** - Join details
6. **About** - Team mission
7. **Partners** - COVENT TECH + INTITA
8. **Contact** - Form + contact methods

## Contact

- **Email:** hello@arvend.io
- **Phone:** +380 (95) 476-34-06
- **Telegram:** @arven_agency
- **LinkedIn:** Eduard Arbitman

## Partners

**COVENT TECH** (Poland) — European market expansion
**INTITA** (Vinnytsia Technological University) — Research validation

## License

© 2026 ARVEN PLATFORM. All rights reserved.

---

**Built with ❤️ for European SMEs**
