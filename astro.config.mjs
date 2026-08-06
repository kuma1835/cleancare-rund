// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Vorschau-Build für GitHub Pages: die Seite liegt dort unter
// /cleancare-rund/ statt auf einer eigenen Domain. Wird über PAGES=1
// eingeschaltet, damit der normale Build für die echte Domain gilt.
const pages = process.env.PAGES === '1';

export default defineConfig({
  site: pages ? 'https://kuma1835.github.io' : 'https://www.cleancare-service.de',
  ...(pages ? { base: '/cleancare-rund' } : {}),
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
