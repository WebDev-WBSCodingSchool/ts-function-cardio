import { defineConfig } from 'vite';
import checker from "vite-plugin-checker"
import tailwindcss from '@tailwindcss/vite';
export default defineConfig({
  plugins: [tailwindcss(), checker({typescript: true})]
});
