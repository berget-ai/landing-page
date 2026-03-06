import express from "express";
import compression from "compression";
import { renderPage } from "vike/server";
import { join } from "path";
import { handleOgImage } from "./og/og-route";

const isProduction = process.env.NODE_ENV === "production";
const port = parseInt(process.env.PORT || "3000", 10);
const root = process.cwd();
const clientDir = isProduction
  ? join(root, "dist/client")
  : join(root, "public");

async function startServer() {
  const app = express();

  app.use(compression());

  // Security headers (CSP is managed by nginx ingress configmap per environment)
  app.use((_req, res, next) => {
    res.setHeader("X-Frame-Options", "SAMEORIGIN");
    res.setHeader("X-Content-Type-Options", "nosniff");
    res.setHeader("X-XSS-Protection", "1; mode=block");
    res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
    next();
  });

  // Health check endpoint
  app.get("/healthz", (_req, res) => {
    res.status(200).json({ status: "ok" });
  });

  app.get("/api/og", handleOgImage);

  if (isProduction) {
    // Serve static client assets with long-term caching
    app.use(
      "/assets",
      express.static(join(clientDir, "assets"), {
        maxAge: "1y",
        immutable: true,
      }),
    );
    app.use(express.static(clientDir, { maxAge: "1h", redirect: false }));
  } else {
    const vite = await import("vite");
    const server = await vite.createServer({
      server: { middlewareMode: true },
      appType: "custom",
    });
    app.use(server.middlewares);
  }

  // Vike SSR handler
  app.get("/{*path}", async (req, res) => {
    const pageContextInit = {
      urlOriginal: req.originalUrl,
      headersOriginal: req.headers,
    };
    const pageContext = await renderPage(pageContextInit);
    const { httpResponse } = pageContext;

    if (!httpResponse) {
      return res.status(404).send("Not Found");
    }

    const { body, statusCode, headers } = httpResponse;
    headers.forEach(([name, value]) => res.setHeader(name, value));
    res.status(statusCode).send(body);
  });

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

startServer();
