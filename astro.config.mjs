// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Vorschau-Build für GitHub Pages: die Seite liegt dort unter
// /cleancare-rund/ statt auf einer eigenen Domain. Wird über PAGES=1
// eingeschaltet, damit der normale Build für die echte Domain gilt.
//
// `basis` muss exakt dem Namen des GitHub-Repositorys entsprechen, sonst
// zeigen alle Pfade ins Leere. Stand hier bis zum 22.09.2026 auf
// `/cleancare-v2` — der Name aus der Zeit vor der Umbenennung, der zur
// veröffentlichten Fassung nicht mehr passte.
const pages = process.env.PAGES === '1';
const basis = '/cleancare-rund';

export default defineConfig({
  site: pages ? 'https://kuma1835.github.io' : 'https://www.cleancare-service.de',
  ...(pages ? { base: basis } : {}),
  // Rechtsseiten stehen auf noindex — dann haben sie in der Sitemap nichts verloren.
  integrations: [
    sitemap({
      filter: (seite) => !/\/(impressum|datenschutz|agb)\/?$/.test(seite),
    }),
  ],
  server: { port: 3011 },
  // Astros Entwickler-Leiste unten im Bild abschalten — sie stört beim Beurteilen.
  devToolbar: { enabled: false },
  build: { inlineStylesheets: 'auto' },
  // Bildmaße kommen aus dem eigenen CSS; Astros Zusatzstile würden dagegenarbeiten.
  image: { responsiveStyles: false },
  compressHTML: true,
});
