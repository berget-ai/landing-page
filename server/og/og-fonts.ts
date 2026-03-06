import { readFileSync } from "fs";
import { join } from "path";

const root = process.cwd();

let fontsCache:
  | { name: string; data: Buffer; weight: number; style: string }[]
  | null = null;

export function loadFonts() {
  if (fontsCache) return fontsCache;

  fontsCache = [
    {
      name: "DM Sans",
      data: readFileSync(join(root, "public/fonts/DMSans-Regular.woff")),
      weight: 400,
      style: "normal" as const,
    },
    {
      name: "DM Sans",
      data: readFileSync(join(root, "public/fonts/DMSans-Bold.woff")),
      weight: 700,
      style: "normal" as const,
    },
    {
      name: "Ovo",
      data: readFileSync(join(root, "public/fonts/Ovo-Regular.woff")),
      weight: 400,
      style: "normal" as const,
    },
  ];

  return fontsCache;
}
