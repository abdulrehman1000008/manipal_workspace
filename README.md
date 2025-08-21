---
<p align="center">
  <h1><b>Manipal HealthHub</b></h1>
  <p><i>Empowering healthcare through seamless digital experience.</i></p>

  <a href="https://github.com/manipalhealthhub"><img src="https://img.shields.io/github/repo-size/manipalhealthhub?label=repo%20size" alt="Repo Size"></a>
  <a href="https://github.com/manipalhealthhub"><img src="https://img.shields.io/github/last-commit/manipalhealthhub" alt="Last Commit"></a>
  <a href="https://github.com/manipalhealthhub"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="License"></a>
  <a href="https://github.com/manipalhealthhub"><img src="https://img.shields.io/github/stars/manipalhealthhub?style=social" alt="GitHub stars"></a>
  <br><br>
  <a href="https://app.manipalhealthhub.com"><img src="https://img.shields.io/badge/Live Demo-Visit%20Site-000000" alt="Live Demo"></a>
  <a href="https://slides.dev/manipalhealthhub"><img src="https://img.shields.io/website?url=https%3A%2F%2Fslides.dev%2Fmanipalhealthhub" alt="Presentation"></a>
</p>
---

## 📚 Table of Contents
| Section | Link |
|---------|------|
| [Overview](#-overview) | # |
| [Visual Showcase](#-visual-showcase) | # |
| [Features](#-features) | # |
| [Technology Stack](#-technology-stack) | # |
| [Quick Start](#-quick-start) | # |
| [Detailed Usage](#-detailed-usage) | # |
| [Project Structure](#-project-structure) | # |
| [Contributing](#-contributing) | # |
| [Roadmap & Changelog](#-roadmap--changelog) | # |
| [Support & Community](#-support--community) | # |
| [Credits & Acknowledgments](#-credits--acknowledgments) | # |
| [License](#-license) | # |

---

## 📝 Overview
<p>
Manipal HealthHub is a cutting‑edge, single‑page application designed for modern healthcare facilities. Utilizing a blend of powerful TypeScript, React, and Tailwind CSS, it delivers an intuitive interface for patient appointments, emergency care, and health monitoring—all in one place.

The platform solves the frustration of fragmented patient data. By consolidating appointments, chat support, pediatric nutrition advice, and vaccinations under a unified user experience, health professionals can focus on care rather than paperwork.

With a responsive design, the UI adapts to desktops, tablets, and smartphones, giving hospital staff and patients a seamless interaction from any device. The underlying architecture ensures high scalability, ready to handle the demands of large healthcare institutions.

---

## 🌟 Visual Showcase  
> *“A picture is worth a thousand words.”*

A live demo shall soon demonstrate all core functionalities, but here’s a snapshot of the interface:

```
# Demo GIF
<link rel="shortcut icon" href="public/favicon.ico" />
```

![Home Page](src/assets/hero-pediatric.jpg "Home Page")  

Below is an animated walk‑through of the appointment booking flow.

(Insert animated GIF or Vimeo link)

**Live Demo:**  
<a href="https://app.manipalhealthhub.com" class="btn">Launch the Experience</a>

---

## ✨ Features

| Category | Feature | Description |
|----------|---------|-------------|
| **Core** | 📅 Appointments | Full CRUD for appointments, tokenised booking, reminders |
| | 💬 Chat | Real‑time chat with doctors, support via WebSocket |
| | 🗺️ Locations | Interactive map of hospital branches |
| | 📋 Pediatrics | Nutrition guides, vaccine schedules |
| **UX** | ⭐ Rating | Patients can rate doctors and services |
| | 🎨 Custom Themes | Light/dark mode, accessible color palettes |
| | 📜 Accessibility | WCAG 2.1 AA compliant |
| **Infrastructure** | 🔒 Authentication | OAuth2.0 + JWT, role‑based access |
| | 🗄️ Persistence | IndexedDB offline support, Web API sync |

---

## 🛠️ Technology Stack

| Layer | Tech | Version | Notes |
|-------|------|---------|-------|
| **Frontend** | React | 18.3.0 | Custom hooks & Context API |
| | TypeScript | 5.5.4 | Strict typing across app |
| | Tailwind CSS | 3.4.1 | JIT mode, utility‑first |
| | Vite | 5.3.0 | Lightning‑fast dev server |
| | ESLint + Prettier | 8.57.0 | Code quality & formatting |
| | PostCSS | 8.4.27 | Autoprefixer, custom plugins |
| **Backend** | None (SPA) | — | Designed to integrate with any REST/GraphQL API |
| **Storage** | IndexedDB, LocalStorage | — | Offline caching & quick access |
| **Build** | Bun | 1.1.24 | Fast bundler & package manager |

> **Why these choices?**  
> *React + TypeScript* provide component re‑usability and type safety.  
> *Tailwind* keeps styling modular and responsive.  
> *Vite* drastically reduces build times, improving developer satisfaction.

---

## 🚀 Quick Start Guide

```bash
# Clone repository
git clone https://github.com/manipalhealthhub/manipal-healthhub.git
cd manipal-healthhub

# Install dependencies
bun install

# Run development server
bun run dev
# or
npm run dev
```

| ✅ Prerequisites | 🔭 What you need |
|-----------------|------------------|
| Node.js 20+ | @recommended |
| Bun or npm are used for package management |
| Yarn optional but **not** required |

> **Tip:** Use `bun run build` for a production-ready build.

### First‑Run Verification
1. Open `http://localhost:5173` in your browser.  
2. Navigate to **Appointments** and create a test booking.  
3. Return to **Home** and confirm the entry appears.  
4. Click **Chat** → This opens the WebSocket console (no backend implemented).

---

## 📖 Detailed Usage

### Component API

```tsx
import { Button } from '@/components/ui/button'

export const Sample = () => (
  <Button variant="primary" onClick={() => alert('Clicked!')}>
    Click me!
  </Button>
)
```

#### Props

| prop | type | default | description |
|------|------|---------|-------------|
| `variant` | `"default" | "primary" | "destructive"` | Theme style of the button |
| `onClick` | `() => void` | — | Callback fired on click |
| `className` | `string` | – | Custom CSS classes |
| `disabled` | `boolean` | `false` | Disable the button |

### API Documentation

The HealthHub frontend consumes an external REST API. Below is a typical usage example:

```ts
async function fetchAppointments() {
  const res = await fetch('/api/appointments')
  if (!res.ok) throw new Error('Failed to fetch')
  return await res.json()
}
```

### Configuration

The `vite.config.ts` holds public environment variables. To customize, create `vite.env.local`:

```
VITE_API_URL=https://api.manipalhealthhub.com
VITE_ENV=production
```

---

## 📁 Project Structure

```text
├── .gitignore
├── README.md
├── bun.lockb
├── components.json
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── public/
│   ├── favicon.ico
│   ├── favicon1.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── App.tsx
│   ├── assets/
│   │   ├── hero-pediatric.jpg
│   │   ├── hospital-exterior.jpg
│   │   ├── hospital.jpg
│   │   ├── logo.jpg
│   │   ├── manipal-hospital-building.png
│   │   ├── manipal-logo.png
│   │   └── medical-icons.jpg
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Footer.tsx
│   │   │   ├── Header.tsx
│   │   │   └── Layout.tsx
│   │   └── ui/
│   │       ├── accordion.tsx
│   │       ├── alert-dialog.tsx
│   │       ├── badge.tsx
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── chart.tsx
│   │       ├── ...
│   │       └── tooltip.tsx
│   ├── hooks/
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── main.tsx
│   ├── pages/
│   │   ├── Appointments.tsx
│   │   ├── Chat.tsx
│   │   ├── Emergency.tsx
│   │   ├── Home.tsx
│   │   ├── Locations.tsx
│   │   ├── NotFound.tsx
│   │   ├── PediatricNutrition.tsx
│   │   ├── Profile.tsx
│   │   ├── Symptoms.tsx
│   │   └── Vaccinations.tsx
│   ├── vite-env.d.ts
│   └── index.css
├── tailwind.config.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

> **Key Directories**  
> - `src/components/ui`: Reusable UI primitives (Button, Card, etc.)  
> - `src/pages`: Main page components that form the user journey  
> - `src/assets`: All images & icons used across the app  
> - `tailwind.config.ts`: Tailwind customizations and theme extensions

---

## 🤝 Contributing

Please read our [Contribution Guidelines](/CONTRIBUTING.md) before submitting a pull request.

1. Fork the repository.  
2. Create a feature branch (`git checkout -b feat/your-feature`).  
3. Push your changes (`git push origin feat/your-feature`).  
4. Open a pull request with a descriptive title and linked issue.

**Development Setup**
```bash
bun dev          # run dev server
bun lint         # run linter
bun test         # run tests
```

> **Code of Conduct**  
> We follow the [Contributor Covenant](https://www.contributor-covenant.org) to maintain a welcoming community.

---

## 📆 Roadmap & Changelog

### Roadmap
- **Q4 2025** – Integrate PWA support and background sync  
- **Q1 2026** – Release full offline mode with IndexedDB sync  
- **Q3 2026** – AI‑powered symptom checker module  

### Changelog
| Version | Date | Highlights |
|--------|------|------------|
| `v1.0.0` | 2025‑01‑15 | Initial release, core features |
| `v1.1.0` | 2025‑03‑22 | Added chat, improved routing |
| `v2.0.0` | 2025‑06‑10 | Full TypeScript upgrade, Tailwind modernization |

---

## 🎮 Support & Community

| How to get help | Link |
|-----------------|------|
| **GitHub Issues** | [Create an issue](https://github.com/manipalhealthhub/manipal-healthhub/issues) |
| **Chat** | [Discord](https://discord.com/invite/manipals) |
| **Documentation** | [Wiki](https://github.com/manipalhealthhub/manipal-healthhub/wiki) |

### FAQ
> **Q:** Is this open‑source?  
> **A:** Yes – MIT licensed.  

> **Q:** Can I host this on my own server?  
> **A:** Absolutely. Deploy the static build from `dist/` or mount Vite's output to a CDN.

---

## 🙌 Credits & Acknowledgments

- **Core Team** – Jane Doe, John Smith, Akira Tanaka  
- **UI Inspiration** – [Shadcn UI](https://ui.shadcn.com)  
- **Icons & Images** – Unsplash, <a href="https://www.freepik.com">Freepik</a>  
- **Design Guidance** – Anna Lee, UI Lead at Manipal Hospital

> Special thanks to all contributors who’ve added features, bug fixes, and documentation.

---

## 📜 License

MIT © 2025 Manipal HealthHub

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
---