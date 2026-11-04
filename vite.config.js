import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Vite + React + Tailwind v4 dev setup for the GetCrux ad-library replica.
// base './' + a single JS/CSS bundle make the build easy to inline into one
// self-contained page for hosting.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        entryFileNames: 'assets/app.js',
        assetFileNames: 'assets/[name][extname]',
      },
    },
  },
  server: {
    port: 5173,
    host: true,
  },
})
