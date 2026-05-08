# Farrel Brest — Portfolio v3

Refined B2B PMM portfolio. Static site, GitHub Pages ready.

## Files

- `index.html` — single-page layout (hero, stats, projects, about, footer)
- `styles.css` — design system + responsive
- `script.js` — renders projects from JSON, scroll reveal, footer year
- `projects.json` — 6 projects (single source of truth)

## What changed from v2

- **Hero**: Tighter typography. Headline reads as one confident line, not five stretched ones.
- **Color discipline**: Single purple accent (`#A259FF`). Killed the green inconsistency.
- **Background**: Deeper black (`#0A0A0A`) + subtle dot grid + film grain for depth.
- **Stats**: Consistent treatment, dividers between, only the unit is purple.
- **Projects**: 2-column grid (was 3). Bigger cards, more breathing room per project. Each card shows a metric chip in the header.
- **Filters removed**: 13 tags for 6 projects was overhead. Cleaner without.
- **About**: Tighter, left-aligned, controlled width.
- **Footer**: Refined with brand + links + meta line.
- **Motion**: Scroll-triggered staggered reveals. Card hover with gradient-border glow.

## Deploy to GitHub Pages

1. Push these 4 files to the repo root (`main` branch).
2. Repo → **Settings → Pages** → Source: `Deploy from a branch`, Branch: `main`, Folder: `/ (root)`.
3. Save. Live in ~1–2 minutes at `https://<user>.github.io/<repo>/`.
4. Hard refresh (`Cmd+Shift+R`) if you see cached v2.

## Updating projects

Edit `projects.json`. Each entry needs:
- `id`, `company`, `title`, `description`, `metric`, `cta`, `url`, `tags`

No HTML edits needed — cards render automatically.

## Local preview

```bash
# any static server works; example:
python3 -m http.server 8000
# open http://localhost:8000
```

`projects.json` won't load via `file://` (CORS). You need a local server.
