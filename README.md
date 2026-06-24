# Stellar Philippines

A community website for Filipino developers, founders, and innovators building on the [Stellar network](https://stellar.org). Stellar Philippines connects builders across the archipelago with official documentation, learning resources, community channels, events, and funding programs — all in one place.

Design and branding follow the [Stellar Design System](https://design-system.stellar.org/): Inter typography, lilac primary palette, and the “Where blockchain meets the real world” aesthetic.

---

## Features

The site uses hash-based tab navigation (`#learn`, `#events`, `#blogs`, `#members`) so each section is bookmarkable and shareable.

### Learn

The main builder hub for getting started on Stellar:

- **Hero** — Rotating headline highlighting payments, remittances, DeFi, tokenization, and real-world use cases
- **Network stats** — Settlement time, transaction cost, global reach, and open-source access
- **Resources** — Curated links to developer docs, tutorials, SDKs, testnet, Discord, and Stack Exchange
- **Build paths** — Guides for Soroban smart contracts, payments, tokenization, and anchors
- **Programs** — Stellar grants, Enterprise Fund, Stellar Quest, and Ambassador Program
- **Call to action** — Links to start building and join the developer community

### Events

Community events across the Philippines:

- Upcoming workshops, meetups, hackathons, and webinars
- Event type badges, dates, locations, and registration CTAs
- Archive of past events

### Blogs

Articles and tutorials from Filipino Stellar builders:

- Featured post highlight
- Grid of posts with category, tags, author, and read time
- Topics include Soroban, remittances, onboarding, and ecosystem updates

### Members

Community member directory:

- Member profiles with role, city, bio, and skills
- Links to GitHub and Twitter/X
- Community stats and a join CTA (Discord + developer docs)

---

## Tech stack

| Layer | Technology |
|-------|------------|
| UI | React 19 + TypeScript |
| Build | Vite 6 |
| Styling | CSS with Stellar Design System color tokens |
| Fonts | Inter, Inconsolata (Google Fonts) |
| Routing | Hash-based tab navigation (no router dependency) |

---

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm

### Install and run

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Production build

```bash
npm run build
npm run preview
```

The production output is written to the `dist/` directory.

---

## Project structure

```
Stellar-Philippines/
├── image/                  # Source brand assets
├── public/                 # Static assets (logo, favicon)
├── src/
│   ├── components/         # Reusable UI (Header, Hero, Footer, Logo, etc.)
│   ├── data/               # Sample events, blogs, and members data
│   ├── pages/              # Tab page views (Learn, Events, Blogs, Members)
│   ├── App.tsx             # Root layout and tab routing
│   ├── index.css           # Global styles and SDS design tokens
│   └── types.ts            # Shared TypeScript types
├── index.html
├── package.json
└── vite.config.ts
```

### Key files

| File | Purpose |
|------|---------|
| `src/App.tsx` | Tab state, hash routing, page switching |
| `src/components/Header.tsx` | Logo, tab nav, “Start building” CTA |
| `src/components/Logo.tsx` | Brand logo (dark/light variants) |
| `src/data/events.ts` | Event listings — edit to add real events |
| `src/data/blogs.ts` | Blog posts — edit to publish new articles |
| `src/data/members.ts` | Member profiles — edit to update the directory |
| `public/stellar-philippines-logo.png` | Header logo (transparent background) |
| `public/stellar-philippines-logo-light.png` | Footer logo for dark backgrounds |

---

## Customization

### Update content

- **Events** — Edit `src/data/events.ts`
- **Blogs** — Edit `src/data/blogs.ts`
- **Members** — Edit `src/data/members.ts`

### Replace the logo

1. Place your source image in `image/`
2. Process it to PNG with a transparent background
3. Update `public/stellar-philippines-logo.png` (header) and `public/stellar-philippines-logo-light.png` (footer)

### Design tokens

Global colors, spacing, and typography live in `src/index.css` under `:root`. Values map to the [Stellar Design System palette](https://design-system.stellar.org/colors) (lilac, gray, gold, navy, teal, mint, green).

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start local dev server with hot reload |
| `npm run build` | Type-check and build for production |
| `npm run preview` | Serve the production build locally |

---

## Disclaimer

Stellar Philippines is a **community initiative**. It is not affiliated with, endorsed by, or operated by the [Stellar Development Foundation](https://stellar.org/foundation).

Official Stellar resources:

- [Developer docs](https://developers.stellar.org/)
- [Stellar Discord](https://discord.gg/stellardev)
- [Grants & funding](https://stellar.org/grants-and-funding)

---

## License

This project is private. See repository settings for licensing details.
