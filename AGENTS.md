# AGENTS.md

## Architecture Overview

**SSR with Vike** — This is not a SPA. The app uses Vike for server-side rendering with file-system routing in `pages/`. Each route is a subdirectory with `+Page.tsx`. Vike special files (`+Layout.tsx`, `+Wrapper.tsx`, `+onBeforeRoute.ts`, etc.) use the `+` prefix convention. The Express server in `server/index.ts` handles SSR in production.

**i18n** — Locale (en/sv) is detected server-side from the `Accept-Language` header in `+onBeforeRoute.ts`, passed through Vike page context, and provided to react-i18next in `+Wrapper.tsx`. Translation files live in `public/locales/{en,sv}/translation.json`.

## Build & Deploy

- Merging to `main` triggers GitHub Actions to build and deploy to stage.berget.ai. Production release is triggered manually via the "Release to Product" workflow. Flux CD pulls new Docker images.
- `src/lib/api.ts` calls the production Berget API in both staging and production.

## Copy and style

All user-facing copy must follow the rules in `STYLEGUIDE.md`. This covers capitalisation, British English, brand name usage, punctuation, and Swedish-specific conventions. All copy must exist in both `src/locales/en/translation.json` and `src/locales/sv/translation.json` — never hardcode English strings in components.

## URL Management

- Always use **kebab-case** for filenames that produce URL slugs (e.g. blog post markdown files, page directories). Never use underscores or spaces.
- When renaming a route or file that changes a URL, always add a redirect from the old URL to the new one in `pages/+config.ts` using the `redirects` config, and update `public/sitemap.xml`.
