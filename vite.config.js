import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    port: 61287,
    strictPort: false,
  },
  preview: {
    port: 61287,
    strictPort: false,
  },
});
