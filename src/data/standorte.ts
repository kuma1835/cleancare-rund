/**
 * Nur Orte, die die bestehende Website selbst als Einsatzgebiet nennt.
 * Keine erfundenen Referenzobjekte, keine Kundennamen.
 */

export type Standort = {
  slug: string;
  ort: string;
  titel: string;
  intro: string;
  text: string;
  schwerpunkte: string[];
  entfernung?: string;
};

export const standorte: Standort[] = [
  {
    slug: 'seevetal',
    ort: 'Seevetal',
    titel: 'Gebäudereinigung in Seevetal',
    intro: 'Der Sitz von CleanCare. Kurze Wege, feste Teams, dieselben Gesichter im Objekt.',
    text: 'CleanCare sitzt in der Eddelsener Straße in Seevetal. Für Objekte in der Gemeinde bedeutet das kurze Anfahrten, kurzfristig mögliche Besichtigungstermine und eine Ansprechpartnerin, die das Gebiet kennt. Betreut werden Büroflächen, Praxen, Kanzleien und Wohnanlagen im gesamten Gemeindegebiet.',
    schwerpunkte: ['Unterhaltsreinigung', 'Treppenhausreinigung', 'Glas- und Fensterreinigung'],
    entfernung: 'Sitz',
  },
  {
    slug: 'hamburg',
    ort: 'Hamburg',
    titel: 'Gebäudereinigung in Hamburg',
    intro: 'Vom Süden der Stadt aus im ganzen Stadtgebiet unterwegs.',
    text: 'Hamburg grenzt direkt an das Einsatzgebiet: Über die A1 und die B75 sind Harburg, die City Süd und die Innenstadt schnell erreichbar. Für Hamburger Büroetagen, Praxen und Kanzleien gilt derselbe Ablauf wie im Umland — Kontakt, Besichtigung vor Ort, individuelles Angebot auf Basis der tatsächlichen Flächen.',
    schwerpunkte: ['Büroreinigung', 'Praxisreinigung', 'Glas- und Fensterreinigung'],
  },
  {
    slug: 'landkreis-harburg',
    ort: 'Landkreis Harburg',
    titel: 'Gebäudereinigung im Landkreis Harburg',
    intro: 'Von Winsen bis Buchholz, von der Halle bis zur Kanzlei.',
    text: 'Der Landkreis Harburg ist gewachsenes Stammgebiet. Die Objekte reichen von Gewerbehallen und Lagerflächen über Arztpraxen bis zu Wohnanlagen in Verwaltung. Gerade dort zahlt sich ein fester Rhythmus aus: dieselben Reinigungskräfte, dieselbe Route, ein bekanntes Objekt.',
    schwerpunkte: ['Unterhaltsreinigung', 'Treppenhausreinigung', 'Grundreinigung'],
  },
];

export const findStandort = (slug: string) => standorte.find((s) => s.slug === slug);
