# Cargill AgLab — Open Data Innovation Platform

A multi-page website built with **Vite + Vanilla JS + Tailwind CSS**, deployable to Netlify.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build locally
npm run preview
```

## 📁 Project Structure

```
cargill-aglab/
├── index.html              # Single HTML entry point
├── package.json            # Dependencies & scripts
├── vite.config.js          # Vite config
├── tailwind.config.js      # Tailwind theme (colors, fonts, animations)
├── postcss.config.js       # PostCSS for Tailwind
├── netlify.toml            # Netlify build + SPA redirect rules
└── src/
    ├── main.js             # App entry: mounts nav, footer, router
    ├── router.js           # Hash-based SPA router + page scripts
    ├── style.css           # Global styles, Tailwind directives, components
    ├── components/
    │   ├── nav.js          # Fixed nav with ticker tape
    │   └── footer.js       # Footer with newsletter signup
    └── pages/
        ├── home.js         # Landing page
        ├── challenges.js   # Challenge listings
        ├── data.js         # Open data explorer
        ├── leaderboard.js  # Team rankings
        └── community.js    # Team matching, mentors, alumni
```

## 🌐 Deploy to Netlify

### Option A — Netlify CLI
```bash
npm install -g netlify-cli
netlify login
netlify deploy --build --prod
```

### Option B — GitHub + Netlify Dashboard
1. Push this repo to GitHub
2. Go to [netlify.com](https://netlify.com) → New Site from Git
3. Select your GitHub repo
4. Build settings are auto-detected from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy**

## 🎨 Design System

| Token | Value | Usage |
|-------|-------|-------|
| `forest-900` | `#0A2218` | Primary background |
| `forest-800` | `#112D1E` | Card backgrounds |
| `lime-400` | `#4ADE80` | Primary accent, CTAs |
| `gold-400` | `#F5C842` | Secondary accent |
| `soil-400` | `#C4763A` | Tertiary/invite-only accent |
| Font: Display | Bebas Neue | Headlines |
| Font: Body | Lato | Body text |
| Font: Mono | JetBrains Mono | Data, labels, tags |

## 📄 Pages

| Route | Page |
|-------|------|
| `/#/` | Home — hero, how it works, stats, challenge tiers |
| `/#/challenges` | Active challenge listings with team matchmaking |
| `/#/data` | Open data explorer with live API preview |
| `/#/leaderboard` | Team rankings, impact scores, alumni outcomes |
| `/#/community` | Student matching, mentor profiles, professor hub |

## 🔧 Adding a New Page

1. Create `src/pages/mypage.js` and export `renderMyPage()`
2. Add the route in `src/router.js`:
   ```js
   import { renderMyPage } from './pages/mypage.js'
   const routes = {
     // ...existing routes
     '/mypage': renderMyPage,
   }
   ```
3. Add a nav link in `src/components/nav.js`

## 📦 Dependencies

- **vite** — Dev server + bundler
- **tailwindcss** — Utility-first CSS
- **autoprefixer** — CSS vendor prefixes
- **postcss** — CSS processing pipeline

No runtime JS dependencies. Zero frameworks. Pure vanilla JS with Tailwind.
