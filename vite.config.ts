import path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { plugin, Mode } from 'vite-plugin-markdown'

export default defineConfig({
  plugins: [
    react(),
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
            // React och relaterade bibliotek
            if (id.includes('react-dom')) {
              return 'vendor-react-dom';
            }
            if (id.includes('react-router')) {
              return 'vendor-react-router';
            }
            if (id.includes('react')) {
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
    // Minify output with terser
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
  },
  optimizeDeps: {},
})
