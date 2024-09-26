import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/client"),
    },
  },
  build: {
    outDir: "./dist",
    // manifest: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "src/client/index.html"),
      },
    },
  },
})
