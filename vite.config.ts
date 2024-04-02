import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import sass from "sass";
import path from "path";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "",
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      assets: path.resolve(__dirname, "./src/assets"),
      domains: path.resolve(__dirname, "./src/domains"),
      presentation: path.resolve(__dirname, "./src/presentation"),
      design: path.resolve(__dirname, "./src/design"),
      integration: path.resolve(__dirname, "./src/integration"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        implementation: sass,
      },
    },
  },
});
