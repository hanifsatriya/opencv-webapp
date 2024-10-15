/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => ({
  plugins: [react()],
  test: {
    environment: "jsdom",
    global: true,
    setupFiles: ["./vitest.setup.ts"],
  },
  base: "/",
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  // esbuild: {
  //   drop: ["console", "debugger"],
  // },
  preview: {
    port: 3007,
    strictPort: true,
  },
  server: {
    port: 3007,
    strictPort: true,
    host: true,
  },
}));
