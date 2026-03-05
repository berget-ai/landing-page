<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="public/logos/berget-logo-white.svg" />
    <source media="(prefers-color-scheme: light)" srcset="public/logos/berget-logo-black.svg" />
    <img src="public/logos/berget-logo-black.svg" alt="Berget AI" width="300" />
  </picture>

  <h3>Secure & Sustainable AI Infrastructure for Europe</h3>

  <p>
    <a href="https://berget.ai">Website</a> ·
    <a href="https://api.berget.ai">Documentation</a> ·
    <a href="https://berget.ai/blog">Blog</a>
  </p>
</div>

---

Berget AI provides a secure, GDPR-compliant AI platform built for European businesses. All data stays within the EU, powered by 100% renewable energy.

## Getting Started

Install dependencies and start the development server.

```bash
pnpm install
pnpm dev
```

## Development

Set up your local environment and work with the codebase.

### Prerequisites

Make sure you have the following installed.

- Node.js 18+
- pnpm

### Working with `@berget-ai/ui`

The landing page depends on the [`@berget-ai/ui`](https://github.com/berget-ai/ui) package. To develop against a local copy:

```bash
# Build the UI package
cd ../ui
pnpm build

# Link it into the landing page
cd ../landing-page
pnpm link ../ui/packages/ui
```

> **Important:** Linking adds a `pnpm.overrides` entry to `package.json`. Never commit this change — it will break Docker and CI builds. To revert, remove the override and run `pnpm install`.

### Build for Production

Generate a production-ready build with SSR support.

```bash
pnpm build
```

### Run Production Server

Start the Express SSR server locally.

```bash
pnpm server:prod
```

## License

Copyright © 2026 Berget AI AB. All rights reserved.
