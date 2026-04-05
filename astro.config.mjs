// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://jjqllarez.github.io',   // ← tu usuario de GitHub
  base: '/webObsidia',                   // ← nombre del repositorio
  vite: {
    plugins: [tailwindcss()],
    server: {
      host: true,
      allowedHosts: true
    }
  }
});