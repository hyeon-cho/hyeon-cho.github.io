# hyeon-cho.github.io

Personal academic homepage for **Hyunmin Cho** — React + Vite, with an animated
gradient-mesh background and liquid-glass panels.

**Live:** https://hyeon-cho.github.io/

## Develop

Requires Node 18+.

```bash
npm install
npm run dev        # local preview at http://localhost:5173
npm run build      # production build → dist/
npm run preview    # serve the built dist/ locally
```

## Deploy (GitHub Actions)

`.github/workflows/deploy.yml` builds with Node 20 and publishes `dist/` to
GitHub Pages.

- Pushing **any** branch runs the build (a compile check).
- Only **main** actually deploys to the live site.

**One-time setup:** repo **Settings → Pages → Source → "GitHub Actions"**.

Cutover from the old static site = merge `react-liquid-glass` into `main`.

## Structure

- `index.html`, `vite.config.js` — Vite entry / config
- `src/` — React app (`components/`, `data/publications.js`, `styles/base.css`)
- `public/images`, `public/files/cv.pdf` — static assets (served at `/images/…`, `/files/…`)
- `legacy/` — previous hand-written static site (kept as a backup)

## Liquid glass

`src/components/GlassPanel.jsx` layers a guaranteed CSS-glass base with the
cross-browser [`@samasante/liquid-glass`](https://github.com/samasante/liquid-glass)
displacement engine (lazy-loaded and error-guarded). Set `USE_JS_REFRACTION =
false` there for pure CSS glass. The animated mesh lives in
`src/components/MeshBackground.jsx` + `src/styles/base.css`.

Template lineage: [Jon Barron](https://jonbarron.info/).
