import type { APIRoute } from 'astro';
import { site } from '../data/site';

/**
 * Bewusst offen für KI-Crawler: Ein lokaler Dienstleister gewinnt mehr durch
 * Sichtbarkeit in KI-Antworten, als er durch Ausschluss schützt. Die bestehende
 * Squarespace-Seite sperrt GPTBot, ClaudeBot und Google-Extended per Voreinstellung aus.
 */
/**
 * Ausnahme: der Vorschau-Build für GitHub Pages (PAGES=1) sperrt alles aus.
 * Solange die Rechtstexte nicht geprüft sind, soll der Entwurf nicht in
 * Suchergebnissen auftauchen. Schützt nicht vor Aufruf über den Link.
 */
const vorschau = process.env.PAGES === '1';

export const GET: APIRoute = () =>
  new Response(
    vorschau
      ? `User-agent: *
Disallow: /
`
      : `User-agent: *
Allow: /

Sitemap: ${site.url}/sitemap-index.xml
`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
