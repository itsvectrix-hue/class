import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("/node_modules/gsap/")) return "vendor-gsap";
          if (id.includes("/node_modules/motion")) return "vendor-motion";
          if (id.includes("/node_modules/react/") || id.includes("/node_modules/react-dom/")) return "vendor-react";
        },
      },
    },
  },
});
