import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': path.resolve("./"),
      '@src': path.resolve("./src"),
      '@components': path.resolve("./src/components"),
      '@page': path.resolve("./src/page"),
      '@img': path.resolve("./src/assets/imgs"),
    }
  }
})
