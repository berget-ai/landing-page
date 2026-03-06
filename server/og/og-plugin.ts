import type { Plugin } from "vite";

export function ogImagePlugin(): Plugin {
  return {
    name: "og-image",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const parsedUrl = new URL(req.url || "/", "http://localhost");
        if (parsedUrl.pathname !== "/api/og") return next();

        try {
          const { OgImageTemplate } = await import("./og-template");
          const satori = (await import("satori")).default;
          const sharp = (await import("sharp")).default;
          const { loadFonts } = await import("./og-fonts");

          const rawTitle = parsedUrl.searchParams.get("title");
          const title = rawTitle || "Berget AI";
          const rawImage = parsedUrl.searchParams.get("image");
          const image =
            rawImage && rawImage.startsWith("https://") ? rawImage : undefined;

          const fonts = loadFonts();

          const svg = await satori(OgImageTemplate({ title, image }), {
            width: 1200,
            height: 630,
            fonts,
          });

          const png = await sharp(Buffer.from(svg)).png().toBuffer();

          res.setHeader("Content-Type", "image/png");
          res.setHeader("Cache-Control", "no-cache");
          res.end(png);
        } catch (error) {
          console.error("OG image generation failed:", error);
          res.writeHead(302, { Location: "/images/social-default.webp" });
          res.end();
        }
      });
    },
  };
}
