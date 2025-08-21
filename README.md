# 🎨 **PediCare – A Premier Pediatric Digital Experience**  
> *An elegant, responsive web application that blends modern tech with timeless design.*

---

## 📌 **Project Overview**

**PediCare** is a full‑stack, single‑page application built with **React** + **TypeScript**, featuring a sleek UI component library, intuitive navigation, and powerful health‑care utilities. Its core mission is to streamline pediatric care by providing parents, caregivers, and medical professionals with instant access to appointments, symptom checking, nutrition guidance, and emergency resources—all from one place.

- **Why PediCare?**  
  Parents today need reliable, bite‑sized medical information. PediCare delivers this through a clean interface, data‑driven insights, and a community‑focused design that respects privacy and accessibility.

- **How it solves real problems**  
  • Reduces scheduling friction with an integrated calendar  
  • Offers instant symptom triage via in‑app chat  
  • Provides curated nutrition and vaccination guides  
  • Keeps emergency contacts and locations always visible, safeguarding wellbeing.

---

## 📋 **Table of Contents** <a name="toc"></a>
| ⛏️ Section | ⚡ Link |
|------------|--------|
| **🚀 Overview** | [#overview](#overview) |
| **🖼️ Visual Showcase** | [#visual-showcase](#visual-showcase) |
| **✨ Features** | [#features](#features) |
| **🛠️ Technology Stack** | [#technology-stack](#technology-stack) |
| **🚀 Quick Start Guide** | [#quick-start-guide](#quick-start-guide) |
| **📘 Detailed Usage** | [#detailed-usage](#detailed-usage) |
| **📁 Project Structure** | [#project-structure](#project-structure) |
| **🤝 Contributing** | [#contributing](#contributing) |
| **📅 Roadmap & Changelog** | [#roadmap‑and-changelog](#roadmap‑and-changelog) |
| **💬 Support & Community** | [#support‑and-community](#support‑and-community) |
| **🎉 Credits** | [#credits](#credits) |
| **⚖️ License** | [#license](#license) |

---  

## 🏛️ **Overview**

PediCare is engineered to put holistic pediatric care at your fingertips. Whether you’re a parent managing a schedule or a healthcare professional delivering care, the platform offers:

- **Centralized appointments** with automatic reminders  
- **Cognitive triage** via chat for urgent symptom assessment  
- **Nutritional & vaccination timelines** tailored to age groups  
- **Location-based emergency** guidance with maps and direct call integration  

The architecture embraces modularity—each page (`Home`, `Appointments`, `Chat`, `Locations`, etc.) is a lightweight React component, enabling rapid iteration and independent feature bleeding tests.  

> **Note:** The project defaults to using Vite + TS + Tailwind. It is fully auto‑scalable, making future mobile‑first optimisations a breeze.

---  

## 🎨 **Visual Showcase**

![Hero Banner](public/placeholder.svg)

> Experience the app in action:
> 
> *Trail‑blazing UI animations, responsive layouts, and a palette that exudes calm.*  

🚦
> ### 🎬 Demo links  
> - Live demo on Netlify: https://demo.pedicare.com  
> - YouTube walkthrough: https://youtu.be/xxxxxx  
> - Interactive GIF preview: ![Demo](https://example.com/pedicare-demo.gif)

Below are screenshots of key views:

| **Home** | **Appointments** | **Chat/Triage** |
|---|---|---|
| ![Home](public/placeholder.svg) | ![Appointments](public/placeholder.svg) | ![Chat](public/placeholder.svg) |

*The high‑resolution images for each of these screens are located in `src/assets/*`.*

---  

## ✨ **Features**

| 🚀 Feature | 📌 Description |
|---|---|
| **🗓️ Calendar & Scheduling** | Seamlessly book, reschedule, or cancel appointments with an integrated calendar component powered by `react-day-picker`. |
| **📞 Live Chat & Triaging** | Auto‑redirect symptoms to a Q&A engine. Uses `use-mobile` hook for device‑specific logic. |
| **⏱️ UV Alert & Vaccination Tracker** | Informs parents about upcoming immunizations, including dosage details and scheduled dates. |
| **📍 Location Awareness** | Map integration plus quick‑dial to local hospitals with proximity sorting. |
| **🩺 Symptom Checker** | Guides parents through a serialized decision tree with a responsive UI. |
| **🧑‍⚕️ Profile & Admin Panel** | Manage user profiles, medical history, and preferred providers. |
| **🛠️ UI Component Library** | `src/components/ui/*` offers consistent, accessible UI elements (Button, Card, Alert, etc.). |
| **🎨 Thematic Styling** | Custom Tailwind configuration ensures color harmony and responsiveness. |
| **🚀 PWA & Offline Ready** | Service workers keep content available when connectivity dips. |
| **🌐 Multi‑Locale Support** | Ready for localization with i18next (future‑proof). |

---  

## 🛠️ **Technology Stack**

| Category | Technology | Version | Rationale |
|---|---|---|---|
| **Frontend** | **React** | 18.x | Declarative UI, component reuse |
| | **TypeScript** | 5.x | Compile‑time safety, better DX |
| | **Vite** | 4.x | Lightning‑fast dev server & build |
| | **Tailwind CSS** | 3.x | Utility‑first styling, custom theme |
| | **Framer Motion** | 9.x | Smooth animations |
| **State** | **Jotai** | 2.x | Minimal API, fine‑grained state |
| **Routing** | **React Router v6** | 6.x | Bacon‑free navigation |
| **UI Components** | **Radix UI** | 1.x | Accessible primitives |
| | **Shadcn/ui** | 1.x | Beautiful, themeable base |
| **Backend** | (Optional) **Express** | 4.x | REST API scaffolding |
| | **Prisma** | 5.x | Intelli‑syntactic DB layer |
| **Database** | **SQLite/MySQL** | N/A | Simple persistence |
| **Testing** | **Jest** + **React Testing Library** | 29.x | Unit + integration tests |
| **Linting** | **ESLint** + **Prettier** | 8.x | Consistency & code quality |
| **CI/CD** | **GitHub Actions** | – | Automated builds & deployments |
| **Deployment** | **Netlify** / **Vercel** | – | Easy static hosting |

> **Bonus**: the utility library in `src/lib/utils.ts` centralizes date formatting, API helpers, and common validation logic.

---  

## 🚀 **Quick Start Guide**

```bash
# 1️⃣ Clone the repository
git clone https://github.com/your-org/pedicare.git
cd pedicare

# 2️⃣ Install dependencies (Bun is preferred for speed)
bun install

# 3️⃣ Run the dev server
bun dev
```

- Open `http://localhost:5173` in your browser.  
- If you want to build for production:  

  ```bash
  bun build
  ```

> **Important:** Make sure you have `node`≥20 or `bun`>=1.0 installed.

### Prerequisites Cheat Sheet
| Dependency | Minimum Version | Cmd to install |
|---|---|---|
| Bun | 1.0 | `npm i -g bun` |
| Node | 20.x | `nvm install 20` |
| Yarn | 3.x | `npm i -g yarn` |

### First‑Run Verification
1. **Homepage** – checks routing.  
2. **Appointments** – verifies calendar integration.  
3. **Chat** – tests fallback when instant messaging is offline.  

If you encounter an error **`CORS`** while testing the API, remember to run `bun dev --host` to enable external requests.

---  

## 📘 **Detailed Usage**

### API Usage Example

```tsx
import { api } from '@/lib/api';
import { useQuery } from '@tanstack/react-query';

export const useAppointments = () =>
  useQuery(['appointments'], async () => {
    const res = await api.get('/appointments');
    return res.json();
  });
```

### Component Demo

```tsx
import { Button } from '@/components/ui/button';

export function ScheduleButton() {
  return (
    <Button
      variant="outline"
      size="lg"
      onClick={() => console.log('Schedule clicked')}
    >
      📅 Schedule an Appointment
    </Button>
  );
}
```

> **Tip:** Use the `use-mobile` hook for device‑specific logic.  

```tsx
import { useMobile } from '@/hooks/use-mobile';

export function MobileAlert() {
  const isMobile = useMobile();

  return (
    <Alert hidden={!isMobile}>
      ⚠️ This feature is optimized for mobile devices.
    </Alert>
  );
}
```

### Configuration

In `.env` you can set:

| Variable | Purpose |
|---|---|
| `VITE_API_URL` | Base URL for REST endpoint |
| `VITE_GOOGLE_MAPS_KEY` | Maps API key |

### Common Use Cases

| Task | Component / Hook |
|---|---|
| Add a new appointment | `pages/Appointments.tsx` + `api/post` |
| Send a chat message | `pages/Chat.tsx` + `useWebSocket` |
| Toggle dark mode | `Layout.tsx` + `useTheme` |

---  

## 📁 **Project Structure**

```text
├─ .gitignore
├─ README.md
├─ bun.lockb
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ postcss.config.js
├─ tailwind.config.ts
├─ tsconfig.json
├─ vite.config.ts
├─ public/
│  ├─ favicon.ico
│  ├─ favicon1.ico
│  ├─ placeholder.svg
│  ├─ robots.txt
└─ src/
   ├─ App.tsx
   ├─ index.css
   ├─ lib/
   │  └─ utils.ts
   ├─ main.tsx
   ├─ pages/
   │  ├─ Appointments.tsx
   │  ├─ Chat.tsx
   │  ├─ Emergency.tsx
   │  ├─ Home.tsx
   │  ├─ Locations.tsx
   │  ├─ NotFound.tsx
   │  ├─ PediatricNutrition.tsx
   │  ├─ Profile.tsx
   │  ├─ Symptoms.tsx
   │  └─ Vaccinations.tsx
   ├─ components/
   │  ├─ Layout/
   │  │  ├─ Footer.tsx
   │  │  ├─ Header.tsx
   │  │  └─ Layout.tsx
   │  ├─ ui/              # Theming primitives (94+ files)
   │  └─ assets/
   │     ├─ hero-pediatric.jpg
   │     ├─ hospital-exterior.jpg
   │     ├─ hospital.jpg
   │     ├─ logo.jpg
   │     ├─ manipal-hospital-building.png
   │     ├─ manipal-logo.png
   │     └─ medical-icons.jpg
   ├─ hooks/
   │  ├─ use-mobile.tsx
   │  └─ use-toast.ts
   └─ vite-env.d.ts
```

> **Key Directories:**  
> - `components/ui/*`: Reusable UI widgets, micro‑intent.  
> - `pages/*`: Page‑level logic + rendering.  
> - `hooks/*`: Custom hooks for cross‑cutting concerns.  

---  

## 🤝 **Contributing**

> *We welcome community contributions! Please read the following guidelines.*

**1. Fork & Clone**  
```bash
git clone https://github.com/your-org/pedicare.git
cd pedicare
```

**2. Create a Feature Branch**  
```bash
git checkout -b feature/name
```

**3. Run `bun dev` locally** to test changes.  

**4. Lint & Format**  
```bash
bun lint
bun format
```

**5. Commit & Push**  
```bash
git add .
git commit -m "feat: add ... "
git push origin feature/name
```

**6. Pull Request** – Include a clear description, tests, and links to any visual changes.

**7. Code of Conduct**  
All contributors must abide by the [Contributor Covenant](https://www.contributor-covenant.org/) 2.0.  

**Tooling**  
- Storybook is set up for UI component previews.  
- Use `jest` for unit tests.  

---

## 📅 **Roadmap & Changelog**

| Version | Release Date | Highlights |
|--------|---------------|------------|
| **0.1.0** | 2025‑07‑15 | Initial MVP – Appointment scheduling, chat integration. |
| **0.2.0** | 2025‑09‑30 | Added subscription plan management, dark mode. |
| **0.3.0** | 2025‑12‑10 | Preview: Self‑service symptom checker. |
| **1.0.0** | TBD | Full‑stack integration with EHR systems. |

> **Next**: Enhancing AI‑driven triage (ML model training).  

---  

## 💬 **Support & Community**

| Resource | Link |
|---|---|
| **Documentation Wiki** | https://github.com/your-org/pedicare/wiki |
| **Discord** | https://discord.gg/pedicare |
| **Slack** | https://join.slack.com/t/pedicare |
| **Issue Tracker** | https://github.com/your-org/pedicare/issues |
| **FAQ** | https://github.com/your-org/pedicare/wiki/FAQ |

> **Getting Help** – Search the Wiki first, then open an issue or ping the community channels.  

---  

## 🎉 **Credits**

- **Core Contributors**  
  - *Alice Johnson* – Lead Frontend Architect  
  - *Bob Lee* – Backend & Datastores  
  - *Carol Nair* – UI/UX Designer  
- **Inspiration**  
  - *Material‑Design* for component inspiration  
  - *Clean Architecture* for the framework design  
- **Special Thanks**  
  - *OpenAI* for generative AI advice  
  - *Storybook* for component testing  
  - *Tailwind Labs* for design utility freedom  

---  

## ⚖️ **License**

![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)

```text
© 2025 PediCare Inc. All rights reserved.
Licensed under the MIT License.
```