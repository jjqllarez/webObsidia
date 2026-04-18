// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // 1. Cambia 'site' por tu nuevo dominio (o déjalo vacío por ahora)
  site: 'https://obsidialabs.com', 

  // 2. ELIMINA o deja en blanco el 'base'
  // Antes: base: '/webObsidia'
  base: '/', 

  vite: {
    plugins: [tailwindcss()],
    server: {
      host: true,
      allowedHosts: true
    }
  }
});
