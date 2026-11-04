# Ad Library — Explore prototype

An interactive prototype of an ad-library **Explore** experience: a masonry grid of
ad creatives, saved **Views**, a brand-aware **Filters** panel, and a rich ad-detail
view with suggestions.

> Prototype / design exploration. Data and images are representative mock content.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build      # outputs to dist/
npm run preview    # serve the build locally
```

## Deploy

Pushing to `main` builds and publishes to **GitHub Pages** via
`.github/workflows/deploy.yml`. Enable it in **Settings → Pages → Source: GitHub Actions**.

## Stack

Vite + React 18 + Tailwind v4. Creatives are bundled locally (`public/creatives`), so
there are no external image dependencies.
