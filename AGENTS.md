# Agents

## Local Development Setup

This project uses pnpm. To develop against a local checkout of `@berget-ai/ui` (at `../ui`):

1. Build the UI package:
   ```bash
   cd ../ui && pnpm build
   ```
2. Link it locally:
   ```bash
   pnpm link ../ui/packages/ui
   ```
   This adds a `pnpm.overrides` entry to `package.json` pointing `@berget-ai/ui` to the local path.
3. Run `pnpm dev` to verify.

To revert, remove the `pnpm.overrides` entry from `package.json` and run `pnpm install`.

**IMPORTANT:** Never commit `package.json` with the local `pnpm.overrides` link. It breaks Docker and CI builds.
