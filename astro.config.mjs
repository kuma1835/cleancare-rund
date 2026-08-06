// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.cleancare-service.de',
  // Rechtsseiten stehen auf noindex — dann haben sie in der Sitemap nichts verloren.
  integrations: [
    sitemap({
      filter: (seite) => !/\/(impressum|datenschutz|agb)\/?$/.test(seite),
    }),
  ],
  server: { port: 3009 },
  // Astros Entwickler-Leiste unten im Bild abschalten — sie stört beim Beurteilen.
  devToolbar: { enabled: false },
  build: { inlineStylesheets: 'auto' },
  // Bildmaße kommen aus dem eigenen CSS; Astros Zusatzstile würden dagegenarbeiten.
  image: { responsiveStyles: false },
  compressHTML: true,
});
