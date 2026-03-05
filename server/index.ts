import express from 'express'
import compression from 'compression'
import { renderPage } from 'vike/server'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const isProduction = process.env.NODE_ENV === 'production'
const port = parseInt(process.env.PORT || '3000', 10)
const root = isProduction ? join(__dirname, '..') : process.cwd()

async function startServer() {
  const app = express()

  app.use(compression())

  // Security headers
  app.use((_req, res, next) => {
    res.setHeader('X-Frame-Options', 'SAMEORIGIN')
    res.setHeader('X-Content-Type-Options', 'nosniff')
    res.setHeader('X-XSS-Protection', '1; mode=block')
    res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin')
    res.setHeader(
      'Content-Security-Policy',
      "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; connect-src 'self' https://api.berget.ai; frame-ancestors 'self';"
    )
    next()
  })

  // Health check endpoint
  app.get('/healthz', (_req, res) => {
    res.status(200).json({ status: 'ok' })
  })

  if (isProduction) {
    // Serve static client assets with long-term caching
    app.use(
      '/assets',
      express.static(join(root, 'client/assets'), {
        maxAge: '1y',
        immutable: true,
      })
    )
    app.use(express.static(join(root, 'client'), { maxAge: '1h' }))
  } else {
    const vite = await import('vite')
    const server = await vite.createServer({
      server: { middlewareMode: true },
      appType: 'custom',
    })
    app.use(server.middlewares)
  }

  // Serve public directory for locales, logos, etc.
  app.use(express.static(join(root, isProduction ? 'client' : 'public'), { maxAge: '1d' }))

  // Vike SSR handler
  app.get('/{*path}', async (req, res) => {
    const pageContextInit = {
      urlOriginal: req.originalUrl,
      headersOriginal: req.headers,
    }
    const pageContext = await renderPage(pageContextInit)
    const { httpResponse } = pageContext

    if (!httpResponse) {
      return res.status(404).send('Not Found')
    }

    const { body, statusCode, headers } = httpResponse
    headers.forEach(([name, value]) => res.setHeader(name, value))
    res.status(statusCode).send(body)
  })

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
  })
}

startServer()
