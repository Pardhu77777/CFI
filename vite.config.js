import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serves this repo at https://pardhu77777.github.io/CFI/
export default defineConfig(({ command, isPreview }) => ({
  plugins: [react()],
  base: command === "build" || isPreview ? "/CFI/" : "/",
  server: {
    port: 61287,
    strictPort: false,
  },
  preview: {
    port: 61287,
    strictPort: false,
  },
}));
