# AGENTS.md

## Architecture Overview

**SSR with Vike** — This is not a SPA. The app uses Vike for server-side rendering with file-system routing in `pages/`. Each route is a subdirectory with `+Page.tsx`. Vike special files (`+Layout.tsx`, `+Wrapper.tsx`, `+onBeforeRoute.ts`, etc.) use the `+` prefix convention. The Express server in `server/index.ts` handles SSR in production.

**i18n** — Locale (en/sv) is detected server-side from the `Accept-Language` header in `+onBeforeRoute.ts`, passed through Vike page context, and provided to react-i18next in `+Wrapper.tsx`. Translation files live in `public/locales/{en,sv}/translation.json`.

## Build & Deploy

- Merging to `main` triggers GitHub Actions to build and deploy to stage.berget.ai. Production release is triggered manually via the "Release to Product" workflow. Flux CD pulls new Docker images.
- `src/lib/api.ts` calls the production Berget API in both staging and production.

## @berget-ai/ui

Source in `../ui/packages/ui/`. Uses a brand color palette (moss, lichen, spruce, fjord, peak, cloud, slate, night) and CVA for component variants. Exports CSS via `@berget-ai/ui/styles`.

**Local dev:** `cd ../ui && pnpm build`, then `pnpm link ../ui/packages/ui`. **Never commit `package.json` with the resulting `pnpm.overrides`** — it breaks Docker/CI. Revert by removing the override and running `pnpm install`.
