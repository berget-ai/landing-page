import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { plugin, Mode } from 'vite-plugin-markdown'
import { imagetools } from 'vite-imagetools'

export default defineConfig({
  plugins: [
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
    // Optimize chunk size
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // Vendor chunks - förenklade kategorier
          if (id.includes('node_modules')) {
            // React och relaterade bibliotek - håll dessa tillsammans för att undvika interna API-konflikter
            if (id.includes('react') || id.includes('scheduler')) {
              // Gruppera React-core och React-DOM tillsammans för att undvika interna API-konflikter
              return 'vendor-react';
            }
            
            // UI och design
            if (id.includes('@radix-ui') || id.includes('lucide-react')) {
              return 'vendor-ui';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-animations';
            }
            
            // Funktionalitet
            if (id.includes('i18next')) {
              return 'vendor-i18n';
            }
            if (id.includes('markdown-it') || id.includes('mdast') || id.includes('remark')) {
              return 'vendor-markdown';
            }
            
            // Övriga bibliotek
            return 'vendor-misc';
          }
          
          // Applikationskod
          if (id.includes('src/components')) {
            if (id.includes('/ui/')) {
              return 'app-ui';
            }
            if (id.includes('/common/') || id.includes('/sections/')) {
              return 'app-components';
            }
            return 'app-features';
          }
          
          // Standardchunk för övrig kod
          return 'app-core';
        },
        // Förenklade filnamn och struktur
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) return 'assets/[name].[hash][extname]';
          
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (ext === 'css') {
            return `assets/css/[name].[hash][extname]`;
          }
          return `assets/[name].[hash][extname]`;
        },
        // Konsekvent namngivning
        entryFileNames: 'assets/js/[name].[hash].js',
        chunkFileNames: 'assets/js/[name].[hash].js',
      }
    },
    // Enable source maps for production (optional, remove if not needed)
    sourcemap: true,
    // Minify output with terser, men var försiktig med React
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        // Undvik att optimera bort React's interna API
        keep_fnames: /^React|react/,
        keep_classnames: /^React|react/
      },
      mangle: {
        // Undvik att förvränga React's interna API
        keep_fnames: /^React|react/,
        keep_classnames: /^React|react/
      }
    },
  },
  optimizeDeps: {
    include: ['vite-imagetools'],
  },
})
