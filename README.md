<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# Hardbooks.shop

Frontend-only React + Vite bookstore experience.

## Current Scope

- Public marketing pages
- Book browsing and book detail views
- Client-side cart flow
- Static mock data (no backend yet)

## Tech Stack

- React 19
- Vite 8
- React Router 7
- Tailwind CSS

## Local Development

```bash
cd frontend
npm ci
npm run dev
```

## Production Build

```bash
cd frontend
npm run build
```

## Vercel Deployment (Unified Config)

This repo uses a single Vercel config at the repository root:

- [vercel.json](./vercel.json)

Expected Vercel project setup:

- Root Directory: repository root (`Hardbooks.shop`)
- Install Command: `cd frontend && npm ci`
- Build Command: `cd frontend && npm run build`
- Output Directory: `frontend/dist`

## Git Setup Guidance

This project should be managed from the root repository only.

- Use Git from `Hardbooks.shop`.
- Do not run Git commands inside `frontend`.

If `frontend/.git` exists from earlier setup and you want a single clean repo, remove it once:

```powershell
Remove-Item -Recurse -Force frontend/.git
```

Then always run:

```powershell
git status
```

from the root folder.

## Notes

- Keep import path casing exact (Linux deploys are case-sensitive).
- Keep all deployment settings in root `vercel.json` to avoid split config drift.
>>>>>>> 0c12131 (Clean project structure, unify Vercel config, and refresh docs)
