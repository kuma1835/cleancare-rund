import type { APIRoute } from 'astro';
import { site } from '../data/site';

/**
 * Bewusst offen für KI-Crawler: Ein lokaler Dienstleister gewinnt mehr durch
 * Sichtbarkeit in KI-Antworten, als er durch Ausschluss schützt. Die bestehende
 * Squarespace-Seite sperrt GPTBot, ClaudeBot und Google-Extended per Voreinstellung aus.
 */
export const GET: APIRoute = () =>
  new Response(
    `User-agent: *
Allow: /

Sitemap: ${site.url}/sitemap-index.xml
`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
