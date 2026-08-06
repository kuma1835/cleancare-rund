/**
 * Nur Fragen, die sich aus belegten Angaben beantworten lassen.
 * Die Fragen, für die Angaben des Kunden fehlen (Vertragslaufzeit,
 * Kündigungsfrist, Versicherungssumme, Schlüsselverwaltung, Vertretung bei
 * Krankheit, Reklamationsweg, Nachhaltigkeit), stehen in REDAKTION.md und
 * werden hier ergänzt, sobald die Antworten vorliegen.
 */

export type Frage = { frage: string; antwort: string };

export const faq: Frage[] = [
  {
    frage: 'Was kostet die Gebäudereinigung bei CleanCare?',
    antwort:
      'Es gibt keinen Pauschalpreis, weil kein Objekt dem anderen gleicht. Die Kalkulation entsteht aus den Flächen, ihrer Nutzung, dem gewünschten Rhythmus und der Ausstattung vor Ort. Deshalb kommen wir vorbei, sehen uns das Objekt an und erstellen danach ein individuelles Angebot.',
  },
  {
    frage: 'In welchem Gebiet ist CleanCare im Einsatz?',
    antwort:
      'Der Sitz ist in Seevetal. Betreut werden Objekte in Seevetal, im Landkreis Harburg und in Hamburg sowie in Niedersachsen und Schleswig-Holstein. Ob Ihr Objekt im Einsatzgebiet liegt, klären wir am schnellsten telefonisch.',
  },
  {
    frage: 'Wie läuft eine Anfrage ab?',
    antwort:
      'In drei Schritten. Sie nehmen Kontakt auf und beschreiben kurz, worum es geht. Anschließend vereinbaren wir einen Besichtigungstermin im Objekt. Auf dieser Grundlage erstellen wir das individuelle Angebot und beantworten offene Fragen.',
  },
  {
    frage: 'Warum ist eine Besichtigung nötig?',
    antwort:
      'Weil sich der Aufwand erst im Objekt zeigt. Bodenbeläge, Verkehrsaufkommen, Sanitäranzahl, Zugänge und Glasflächen entscheiden über Zeit und Verfahren. Ohne diesen Termin wäre jedes Angebot geraten — und Nachverhandlungen wären vorprogrammiert.',
  },
  {
    frage: 'Welche Objekte betreut CleanCare?',
    antwort:
      'Gewerblich genutzte Immobilien: Büros und Verwaltungsgebäude, Praxen, Kanzleien, Lagerflächen, Hotels, Kitas und Schwimmbäder. Der Schwerpunkt liegt auf der ganzheitlichen Unterhaltsreinigung.',
  },
  {
    frage: 'Werden die Hygieneartikel mit aufgefüllt?',
    antwort:
      'Ja. Der Hygieneartikelservice ist Teil des Reinigungskonzepts: Seife, Papierhandtücher und Toilettenpapier werden im Rahmen der Unterhaltsreinigung nachgefüllt, ohne dass Sie den Bestand im Blick behalten müssen.',
  },
  {
    frage: 'Seit wann gibt es CleanCare?',
    antwort:
      'Seit 2009. CleanCare ist ein Familienunternehmen in zweiter Generation, spezialisiert auf die ganzheitliche Unterhaltsreinigung gewerblich genutzter Immobilien. Geschäftsführerin ist Aylin Özcakir.',
  },
  {
    frage: 'Gibt es auch eine Leistung, die nicht aufgeführt ist?',
    antwort:
      'Kommen Sie gern auf uns zu, sollte eine von Ihnen gewünschte Leistung nicht aufgeführt sein. Individuelle Leistungen bieten wir auf Wunsch an.',
  },
  {
    frage: 'Kann ich mich initiativ bei CleanCare bewerben?',
    antwort:
      'Ja. Gesucht werden regelmäßig Reinigungskräfte in der Unterhaltsreinigung (m/w/d), Initiativbewerbungen sind ausdrücklich willkommen. Offene Stellen und Konditionen stehen auf der Jobs-Seite.',
  },
];
