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
          // Vendor chunks
          if (id.includes('node_modules')) {
            // React och relaterade bibliotek
            if (id.includes('react-dom')) {
              return 'vendor-react-dom';
            }
            if (id.includes('react-router')) {
              return 'vendor-react-router';
            }
            
            // Dela upp React-core i mindre delar
            if (id.includes('node_modules/react/')) {
              return 'vendor-react-base';
            }
            if (id.includes('node_modules/@types/react')) {
              return 'vendor-react-types';
            }
            if (id.includes('react-hook-form')) {
              return 'vendor-react-forms';
            }
            // Dela upp flaggorna i mindre paket
            if (id.includes('react-world-flags') && id.includes('/svg/')) {
              // Gruppera flaggor efter första bokstaven i filnamnet
              const fileName = id.split('/').pop() || '';
              const firstChar = fileName.charAt(0).toLowerCase();
              if (/[a-m]/.test(firstChar)) {
                return 'vendor-flags-a-m';
              } else {
                return 'vendor-flags-n-z';
              }
            }
            if (id.includes('react-world-flags') && !id.includes('/svg/')) {
              return 'vendor-react-flags-core';
            }
            if (id.includes('react-markdown')) {
              return 'vendor-react-markdown';
            }
            if (id.includes('react-')) {
              return 'vendor-react-misc';
            }
            
            // UI-bibliotek
            if (id.includes('@radix-ui')) {
              return 'vendor-radix';
            }
            if (id.includes('lucide-react')) {
              return 'vendor-icons';
            }
            
            // Animationsbibliotek - dela upp i mindre delar
            if (id.includes('framer-motion/dist/es/animation')) {
              return 'vendor-animations-core';
            }
            if (id.includes('framer-motion/dist/es/motion')) {
              return 'vendor-animations-motion';
            }
            if (id.includes('framer-motion')) {
              return 'vendor-animations-utils';
            }
            
            // Formulärbibliotek
            if (id.includes('react-hook-form') || id.includes('zod')) {
              return 'vendor-forms';
            }
            
            // Övriga stora bibliotek
            if (id.includes('i18next') || id.includes('react-i18next')) {
              return 'vendor-i18n';
            }
            if (id.includes('recharts') || id.includes('d3')) {
              return 'vendor-charts';
            }
            
            // Dela upp misc i mindre delar
            if (id.includes('markdown-it') || id.includes('mdast') || id.includes('remark')) {
              return 'vendor-markdown';
            }
            if (id.includes('date-fns') || id.includes('dayjs')) {
              return 'vendor-date';
            }
            if (id.includes('clsx') || id.includes('class-variance-authority') || id.includes('tailwind')) {
              return 'vendor-styling';
            }
            
            // Övriga mindre bibliotek
            return 'vendor-misc';
          }
          
          // Feature chunks
          if (id.includes('src/components/ui')) {
            return 'feature-components';
          }
          if (id.includes('src/components/common')) {
            return 'feature-common';
          }
          if (id.includes('src/components/sections')) {
            return 'feature-sections';
          }
          if (id.includes('src/components/wizards')) {
            return 'feature-wizards';
          }
        },
        // Ensure CSS is extracted properly
        assetFileNames: (assetInfo) => {
          if (!assetInfo.name) return 'assets/[name]-[hash][extname]';
          
          const info = assetInfo.name.split('.');
          const ext = info[info.length - 1];
          if (ext === 'css') {
            return `assets/css/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
        // Optimize JS output
        entryFileNames: 'assets/js/[name]-[hash].js',
        chunkFileNames: 'assets/js/[name]-[hash].js',
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
