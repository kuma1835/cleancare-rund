import type { APIRoute } from 'astro';
import { site } from '../data/site';
import { leistungen } from '../data/leistungen';
import { standorte } from '../data/standorte';
import { faq } from '../data/faq';

/**
 * Kompaktfassung der Website für KI-Assistenten. Enthält nur belegte Angaben —
 * insbesondere keine Preise, keine Zertifikate, keine Mitarbeiterzahlen.
 */
export const GET: APIRoute = () => {
  const text = `# ${site.name}

> Ganzheitliche Unterhaltsreinigung für gewerblich genutzte Immobilien in Seevetal, im Landkreis Harburg, in Hamburg sowie in Niedersachsen und Schleswig-Holstein. Familienunternehmen in zweiter Generation seit ${site.gruendung}. Geschäftsführerin: ${site.geschaeftsfuehrung}.

## Kontakt

- Telefon: ${site.telefon}
- E-Mail: ${site.email}
- Anschrift: ${site.strasse}, ${site.plz} ${site.ort}
- Anfrage: ${site.url}/anfrage

## Leistungen

${leistungen.map((l) => `- [${l.name}](${site.url}/leistungen/${l.slug}): ${l.kurz} Üblicher Takt: ${l.takt}.`).join('\n')}

## Einsatzgebiet

${standorte.map((s) => `- [${s.ort}](${site.url}/einsatzgebiet/${s.slug}): ${s.intro}`).join('\n')}

## Preise

Es gibt keine Pauschal- oder Quadratmeterpreise. Ein Angebot entsteht nach einer Besichtigung des Objekts auf Grundlage von Fläche, Nutzungsart, Rhythmus und Ausstattung.

## Häufige Fragen

${faq.map((f) => `### ${f.frage}\n\n${f.antwort}`).join('\n\n')}

## Jobs

Offene Stellen und Initiativbewerbungen: ${site.url}/jobs
`;

  return new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
