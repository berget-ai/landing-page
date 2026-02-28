/**
 * Vite config for building the SPA shell (React Router).
 * Used in Dockerfile to generate spa.html as nginx fallback
 * for routes not covered by SSG (/models, /blog, /signup etc.)
 */
import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { plugin, Mode } from 'vite-plugin-markdown'
import { imagetools } from 'vite-imagetools'

export default defineConfig({
  plugins: [
    // No vike() here — pure SPA build
    react(),
    imagetools({
      defaultDirectives: new URLSearchParams([
        ['format', 'webp'],
        ['quality', '80'],
        ['progressive', 'true'],
      ]),
    }),
    plugin({
      mode: [Mode.HTML],
      markdownIt: {
        html: true,
        linkify: true,
        typographer: true,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist/spa',
    emptyOutDir: true,
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('scheduler')) return 'vendor-react'
            if (id.includes('@radix-ui') || id.includes('lucide-react')) return 'vendor-ui'
            if (id.includes('framer-motion')) return 'vendor-animations'
            if (id.includes('i18next')) return 'vendor-i18n'
            if (id.includes('markdown-it') || id.includes('mdast') || id.includes('remark')) return 'vendor-markdown'
            return 'vendor-misc'
          }
        },
        chunkFileNames: 'assets/js/[name].[hash].js',
      },
    },
    minify: 'terser',
    terserOptions: {
      compress: { drop_console: true, drop_debugger: true },
    },
  },
  optimizeDeps: {
    include: ['vite-imagetools', 'react-helmet-async'],
  },
})
