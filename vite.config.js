import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import { defineConfig } from "vite";
import tailwind from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";

const basePath = process.env.VITE_BASE_PATH || "/";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svgr(),
    react(),
    tailwind(),
    babel({ presets: [reactCompilerPreset()] }),
  ],
  base: basePath,
  //   base: '/invertor-energy/',
});
