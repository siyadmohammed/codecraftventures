# Codecraft — The Art of Intelligent Software

> Official repository for **Codecraft Ventures** ([www.plusone.today](http://www.plusone.today/)). Engineering high-performance web platforms and autonomous agentic systems.

---

## ⚡ Overview

**Codecraft** brings a disciplined **50/50 balance** between:
1. **Full-Stack Web & Software Engineering**: Next-Gen React/Next.js platforms, distributed microservices, low-latency WebSockets, and zero-trust cloud infrastructure.
2. **Agentic Systems & Automations**: Autonomous multi-agent swarms, cognitive document pipelines, private domain RAG, and self-healing DevOps sentinels.

## 🚀 Key Features

- **Interactive 3D Hero Scene**: Three.js WebGL software core with gyroscopic rings and mouse inertia. Skipped gracefully when WebGL is unavailable, and rendered as a still frame for reduced-motion users.
- **Dual-Engine Services**: Filterable bento grid with cursor-following spotlight cards.
- **Interactive Architecture Visualizer**: Animated beam diagram of web client ➔ edge gateway ➔ agent swarm ➔ data execution; select a node to see its specification.
- **Featured Product Showcase**: Highlights **PlusOne** ([plusone.today](http://www.plusone.today/)) — Codecraft's flagship social discovery & real-time matching platform.
- **Working Contact System**: Direct email (`codecraftventures@gmail.com`), direct phone (`+91 83010 53212`), interactive project brief form with validation, and celebration effects.
- **Static by default**: the page is prerendered at build time and deployed on Vercel.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS, with effects modelled on Magic UI (blur fade, border beam, magic card, marquee, number ticker, animated beam) in `src/components/ui/`
- **Animation**: Motion (`motion/react`), honouring the OS reduced-motion setting
- **3D Graphics**: Three.js (WebGL)
- **Icons**: Lucide React
- **Effects**: Canvas Confetti

---

## 💻 Local Development

```bash
# Clone the repository
git clone https://github.com/siyadmohammed/codecraftventures.git
cd codecraftventures

# Install dependencies
npm install

# Start development server
npm run dev

# Run unit tests
npm test

# Build and serve the production bundle
npm run build
npm start
```

---

## 📁 Structure

```
src/
  app/          Next.js App Router: layout (fonts, metadata), page, global styles
  components/   Page sections (Hero, Services, ...) and ui/ effect primitives
  data/         Site copy: services, case studies, process steps, contact details
  lib/          Shared helpers (cn class-name merge)
  types/        Shared TypeScript types
public/         Static assets served from the site root
```

## ▲ Deployment

Deployed on Vercel. Import the repository in Vercel and keep the detected Next.js defaults
(build command `next build`). No environment variables are required.

---

## 🌐 Contact

- **Email**: [codecraftventures@gmail.com](mailto:codecraftventures@gmail.com)
- **Phone**: [+91 83010 53212](tel:8301053212)
- **Flagship Product**: [PlusOne](http://www.plusone.today/)
