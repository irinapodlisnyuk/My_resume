import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ["import"],
        additionalData: `@use "@/assets/styles/global/_variables.scss" as *;
           @use "@/assets/styles/global/_mixins.scss" as *;
           @use "@/assets/styles/global/_btn.scss" as *;`,
      },
    },
  },
  plugins: [
    tailwindcss(),  
    react(),
  ],
  server: {
    open: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
