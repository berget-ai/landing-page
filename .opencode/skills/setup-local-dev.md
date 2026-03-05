# Setup Local Dev

Link the `@berget-ai/ui` package to the local checkout for development.

## Steps

1. Ensure the UI package is built by running the following in the UI repo:
   ```bash
   cd ../ui && pnpm build
   ```

2. Link the local UI package:
   ```bash
   pnpm link ../ui/packages/ui
   ```
   This adds a `pnpm.overrides` entry to `package.json` pointing `@berget-ai/ui` to the local path.

3. Verify the setup works by running `pnpm dev` in the landing-page project.

## Reverting

Remove the `pnpm.overrides` section from `package.json` and run `pnpm install` again.

**Important:** Do not commit `package.json` with the `pnpm.overrides` link in place.
