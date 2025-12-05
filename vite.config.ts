import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],

  resolve: {
    alias: {
      "@packages": path.resolve(__dirname, "../../Packages"),
      "@backend": path.resolve(__dirname, "../../Apps/Back-End"),
      "@frontend": path.resolve(__dirname, "../../Apps/Front-End"),
      "@dashboard": path.resolve(__dirname, "../../Apps/Dashboard"),
    },
    dedupe: ["react", "react-dom"]
  },

  optimizeDeps: {
    include: ["react", "react-dom"],
  },
})
