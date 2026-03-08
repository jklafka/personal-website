# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Use `bun` as the package manager and runtime.

```bash
bun dev          # Start dev server
bun run build    # Type-check + build for production (tsc -b && vite build)
bun run lint     # Run ESLint
bun run preview  # Preview production build locally
```

## Architecture

React 19 + TypeScript personal portfolio site, built with Vite, styled with Tailwind CSS 4, and routed with React Router v7. All content is hardcoded in components—no backend or external data.

**Routing** is defined in `src/App.tsx`, which renders `<Nav>` and 4 routes:
- `/` → `src/pages/Home.tsx`
- `/resume` → `src/pages/Resume.tsx`
- `/tools` → `src/pages/Tools.tsx`
- `/bits` → `src/pages/Bits.tsx`

**Theme (dark/light mode)** is managed via `ThemeContext` in `App.tsx`, toggled through `<Nav>`, and applied by adding/removing a `dark` class on `document.documentElement`. The dark variant is defined as a custom Tailwind variant in `src/index.css`.

**Animated background** is rendered by `src/components/ThemeBackground.tsx`, which renders a fixed, full-screen background behind all content (`-z-10`). In dark mode it shows a deep space scene (stars, planets, CSS animations). In light mode it shows a daytime sky (sun, animated clouds). CSS keyframes for these animations (`twinkle`, `cloud-float`, `sun-pulse`) live in `src/index.css`.

**Page content** (resume entries, tools, bits posts) is typed and stored as arrays/objects directly in the page components—no CMS or external data source.
