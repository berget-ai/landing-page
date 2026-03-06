import type { Request, Response } from "express";
import satori from "satori";
import sharp from "sharp";
import { OgImageTemplate } from "./og-template";
import { loadFonts } from "./og-fonts";

export async function handleOgImage(req: Request, res: Response) {
  try {
    const rawTitle = req.query.title;
    const title = typeof rawTitle === "string" ? rawTitle : "Berget AI";
    const rawImage = req.query.image;
    const image =
      typeof rawImage === "string" && rawImage.startsWith("https://")
        ? rawImage
        : undefined;

    const fonts = loadFonts();

    const svg = await satori(OgImageTemplate({ title, image }), {
      width: 1200,
      height: 630,
      fonts,
    });

    const png = await sharp(Buffer.from(svg)).png().toBuffer();

    res.setHeader("Content-Type", "image/png");
    res.setHeader("Cache-Control", "public, max-age=86400, s-maxage=604800");
    res.send(png);
  } catch (error) {
    console.error("OG image generation failed:", error);
    res.redirect("/images/social-default.webp");
  }
}
