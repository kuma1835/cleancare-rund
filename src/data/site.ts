/**
 * Alle Angaben hier stammen von cleancare-service.de bzw. dem Impressum.
 * Nichts in dieser Datei ist geraten. Was fehlt, steht in REDAKTION.md.
 */

export const site = {
  name: 'CleanCare Gebäudeservice GmbH',
  kurz: 'CleanCare',
  url: 'https://www.cleancare-service.de',
  strasse: 'Eddelsener Str. 48',
  plz: '21218',
  ort: 'Seevetal',
  land: 'DE',
  telefon: '+49 1575 329 63 53',
  telefonLink: '+4915753296353',
  email: 'hallo@cleancare-service.de',
  gruendung: 2009,
  geschaeftsfuehrung: 'Aylin Özcakir',
  linkedin: 'https://www.linkedin.com/company/cleancare-gebaeudeservice-gmbh',
  provenexpert: 'https://www.provenexpert.com/cleancare-gebaeudeservice-gmbh/',
  gebiet: ['Seevetal', 'Landkreis Harburg', 'Hamburg', 'Niedersachsen', 'Schleswig-Holstein'],
} as const;

export const nav = [
  { href: '/leistungen', text: 'Leistungen' },
  { href: '/einsatzgebiet', text: 'Einsatzgebiet' },
  { href: '/ueber-uns', text: 'Über uns' },
  { href: '/faq', text: 'Fragen' },
  { href: '/jobs', text: 'Jobs' },
] as const;

/** Die Legende des Raumbuchs. Jede Flächenart wird anders getaktet. */
export const nutzungen = [
  { id: 'buero', name: 'Büro- und Aufenthaltsflächen', kurz: 'Büro', farbe: 'buero' },
  { id: 'verkehr', name: 'Verkehrsflächen und Treppenhäuser', kurz: 'Verkehr', farbe: 'verkehr' },
  { id: 'sanitaer', name: 'Sanitärbereiche', kurz: 'Sanitär', farbe: 'sanitaer' },
  { id: 'glas', name: 'Glas, Fenster und Fassade', kurz: 'Glas', farbe: 'glas' },
  { id: 'technik', name: 'Technik-, Lager- und Sonderflächen', kurz: 'Technik', farbe: 'technik' },
] as const;

export const ablauf = [
  {
    schritt: 'Schritt 1',
    titel: 'Kontaktaufnahme',
    text: 'Per Mail oder telefonisch — wir freuen uns, von Ihnen zu hören! Nehmen Sie gern Kontakt zu uns auf und beschreiben Sie kurz, worum es geht.',
  },
  {
    schritt: 'Schritt 2',
    titel: 'Besichtigungstermin',
    text: 'Gemeinsam vereinbaren wir einen Besichtigungstermin, auf dessen Grundlage wir Ihnen ein individuelles Angebot erstellen.',
  },
  {
    schritt: 'Schritt 3',
    titel: 'Individuelles Angebot',
    text: 'Nach der Besichtigung erstellen wir Ihnen ein individuelles Angebot und beantworten Ihnen gerne alle noch offenen Fragen.',
  },
] as const;

/**
 * Wörtlich von der bestehenden Website übernommen (Quelle: ProvenExpert).
 * `sterne`: Die tatsächlichen Notenwerte liegen nicht vor — 5 ist eine Annahme
 * und muss vor Livegang gegen das ProvenExpert-Profil geprüft werden.
 * Siehe REDAKTION.md.
 */
export const stimmen = [
  {
    text: 'Zuverlässig und kompetent. Wir arbeiten seit einigen Jahren mit CleanCare zusammen und können unsere höchsten Empfehlungen aussprechen. Vielen Dank für die gute Zusammenarbeit.',
    sterne: 5,
    name: 'Patrick Hausherr',
  },
  {
    text: 'Sehr freundliche Ansprache, kurzfristige und unkomplizierte Terminfindung und sehr zufriedenstellendes Arbeitsergebnis! Absolut zu empfehlen.',
    sterne: 5,
    name: 'Ina Eskelsen',
  },
  {
    text: 'Wir haben CleanCare seit einigen Jahren mit der Unterhaltsreinigung unserer Geschäftsräume betraut und sind nach wie vor sehr zufrieden. Der Kontakt ist ebenfalls immer unkompliziert und kompetent.',
    sterne: 5,
    name: 'Nils Puk',
  },
  {
    text: 'Absolut zuverlässiger Partner in der Unterhaltsreinigung, der es schafft flexibel auf Bedürfnisse seiner KundInnen einzugehen und einen einzigartigen Service zu fairen Preisen bietet.',
    sterne: 5,
    name: 'Sarah Martens',
  },
  {
    text: 'Pünktlich, sauber, zuverlässig. Gutes Preis-Leistungsverhältnis. Empfehlenswert.',
    sterne: 5,
    name: 'Michael Kiehn',
  },
  {
    text: 'Ich bin sehr zufrieden! Schnelle professionelle Abwicklung und super Endergebnis.',
    sterne: 5,
    name: 'Anna-Lena Fünfstück',
  },
  {
    text: 'Professionell, sehr gründlich und durchweg freundliche Mitarbeiter.',
    sterne: 5,
    name: 'Martina Lange',
  },
] as const;
