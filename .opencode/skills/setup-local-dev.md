# Setup Local Dev

Link the `@berget-ai/ui` package to the local checkout for development.

## Steps

1. Update `package.json` to use a local file reference for the UI package:

   Change the `@berget-ai/ui` dependency from its npm version to:
   ```
   "@berget-ai/ui": "file:../ui/packages/ui"
   ```

2. Run `npm install` to regenerate `package-lock.json` with the local file reference.

3. Ensure the UI package is built by running the following in the UI repo:
   ```bash
   cd ../ui && pnpm build
   ```

4. Verify the setup works by running `npm run dev` in the landing-page project.

## Reverting

To go back to the published package, restore the original version specifier in `package.json` (e.g. `"@berget-ai/ui": "^0.1.16"`) and run `npm install` again.
