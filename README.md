# ◈ Sovera Everyday Trading — Premium 3D Animated Platform

**Global Trade Intelligence with Real-Time Market Analytics**

A premium-grade, 3D animated web application providing real-time demand vs supply intelligence across 5 global markets.

---

## Premium Features

### 3D Animations & Visual Design
- **Animated 3D Globe** — Canvas-rendered rotating globe with live market nodes, lat/lng dots, ring pulses, and glow effects
- **Particle System** — 120+ animated particles with connection lines and radial glow
- **3D Card Transforms** — Perspective-based hover effects with `rotateX/rotateY` and dynamic shadows
- **Glassmorphism UI** — Frosted glass panels with backdrop-filter blur
- **Animated Backgrounds** — Gradient orbs, grid mesh, noise texture overlay
- **CSS Shimmer Effects** — Smooth gradient shimmer on interactive elements
- **Count-Up Animations** — Animated stats with easeOutExpo easing
- **Floating Badges** — Orbital info cards around the globe
- **Live Ticker** — Auto-scrolling market data bar with real-time styling

### Trading Intelligence
- 50 high-demand products across 5 global markets
- Real-time demand vs supply gap analysis with color-coded bars
- Star ratings with half-star precision
- Supply shortage alerts and trend indicators
- Filter by market, category, or keyword search
- Sort by demand, supply gap, or rating

### Markets Covered
🇦🇪 Dubai · 🇮🇳 India · 🇨🇦 Canada · 🇺🇸 US · 🇬🇧 UK

---

## Tech Stack

- **React 18** — Component-based UI with hooks
- **Canvas API** — Custom 3D globe rendering
- **CSS3 3D Transforms** — Perspective, rotateX/Y, translateZ
- **CSS Animations** — 20+ @keyframes for fluid motion
- **Glassmorphism** — backdrop-filter: blur()
- **Space Grotesk / JetBrains Mono** — Premium typography
- **Responsive Design** — Mobile-first with adaptive layouts

---

## Run Locally

```bash
npm install
npm start
```

## Deploy

```bash
npm run build
# Deploy /build folder to Vercel, Netlify, or any static host
```

---

## Architecture

```
src/
├── App.js                  # Main application orchestrator
├── index.js                # React entry point
└── components/
    ├── Globe3D.js          # Canvas-rendered 3D rotating globe
    ├── Navbar.js           # Glassmorphism navigation bar
    ├── HeroSection.js      # Hero with globe, stats, CTAs
    ├── Ticker.js           # Live market data ticker
    ├── MarketFilter.js     # Filter controls & stat chips
    ├── ProductCard.js      # 3D animated product cards
    └── Footer.js           # Premium footer with newsletter
```

---

&copy; 2025 Sovera Everyday Trading
