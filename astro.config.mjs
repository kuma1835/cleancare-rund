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

// Die Seiten verlinken sich untereinander absolut (`/jobs`, `/anfrage`). Auf
// der echten Domain stimmt das, in der Vorschau fehlt davor der Unterordner —
// alle Unterseiten liefen dort ins Leere. Statt jeden Link im Quelltext
// umzubauen, werden sie nur im Vorschau-Build nachträglich ergänzt.
const vorschauLinks = {
  name: 'vorschau-links',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      const { readdir, readFile, writeFile } = await import('node:fs/promises');
      const { fileURLToPath } = await import('node:url');
      const { join } = await import('node:path');
      const wurzel = fileURLToPath(dir);
      const dateien = (await readdir(wurzel, { recursive: true })).filter((d) => d.endsWith('.html'));
      const muster = new RegExp(`(href|action)="/(?!/|${basis.slice(1)}/)`, 'g');
      for (const d of dateien) {
        const pfad = join(wurzel, d);
        const html = await readFile(pfad, 'utf8');
        await writeFile(pfad, html.replace(muster, `$1="${basis}/`));
      }
    },
  },
};

export default defineConfig({
  site: pages ? 'https://kuma1835.github.io' : 'https://www.cleancare-service.de',
  ...(pages ? { base: basis } : {}),
  // Rechtsseiten stehen auf noindex — dann haben sie in der Sitemap nichts verloren.
  integrations: [
    ...(pages ? [vorschauLinks] : []),
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
