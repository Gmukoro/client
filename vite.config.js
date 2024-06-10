import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/main.jsx",
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    port: 5173,
  },
  build: {
    rollupOptions: {
      external: ["react-redux"],
    },
  },
});
