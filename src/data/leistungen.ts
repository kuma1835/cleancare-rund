/**
 * Beschreibungstexte für Unterhalts-, Treppenhaus-, Glas- und Grundreinigung
 * sowie Hygieneartikelservice stammen wörtlich von cleancare-service.de.
 * Fassade, Dach und Solar führt die bestehende Seite nur namentlich; die
 * Texte dort beschreiben die Leistung, ohne Zusagen zu erfinden.
 */

export type Leistung = {
  slug: string;
  name: string;
  kurz: string;
  nutzung: 'buero' | 'verkehr' | 'sanitaer' | 'glas' | 'technik';
  takt: string;
  text: string;
  umfang: string[];
  fuer: string[];
  bild?: string;
  bildAlt?: string;
  original: boolean;
};

export const leistungen: Leistung[] = [
  {
    slug: 'unterhaltsreinigung',
    name: 'Unterhaltsreinigung',
    kurz: 'Der feste Rhythmus, der ein Objekt in Betrieb hält.',
    nutzung: 'buero',
    takt: 'täglich bis wöchentlich',
    text: 'Heutzutage wissen wir, wie wichtig Hygiene für die Gesundheit Ihrer MitarbeiterInnnen ist. Doch auch Sauberkeit und Ordnung sind für das Wohlbefinden am Arbeitsplatz und damit die Produktivität Ihres Unternehmens essentiell.',
    umfang: [
      'Büro-, Besprechungs- und Aufenthaltsräume',
      'Sanitärbereiche inklusive Auffüllen der Hygieneartikel',
      'Küchen und Teeküchen',
      'Verkehrsflächen, Flure und Eingangsbereiche',
      'Abfallentsorgung nach Absprache',
    ],
    fuer: ['Büros', 'Praxen', 'Kanzleien', 'Lager', 'Hotels', 'Kitas'],
    bild: 'nastuh-abootalebi-ehd8y1znfpk-unsplash.webp',
    bildAlt: 'Heller Besprechungsraum mit langem Tisch und großer Fensterfront',
    original: true,
  },
  {
    slug: 'treppenhausreinigung',
    name: 'Treppenhausreinigung',
    kurz: 'Der erste Eindruck eines Hauses, jede Woche neu.',
    nutzung: 'verkehr',
    takt: 'wöchentlich bis 14-täglich',
    text: 'Wie heißt es doch so schön? Der erste Eindruck zählt. Ein sauberes Treppenhaus ist der erste Eindruck und damit das Aushängeschild Ihres Unternehmens. Mit unserer professionellen Reinigung sorgen wir dafür, dass Sie von Anfang an überzeugen und sichern damit die Stufen zu Ihrem Erfolg.',
    umfang: [
      'Treppenläufe, Podeste und Handläufe',
      'Eingangsbereiche und Windfang',
      'Aufzugskabine und Aufzugstüren',
      'Briefkastenanlage und Klingeltableau',
      'Kellerflure nach Absprache',
    ],
    fuer: ['Wohnanlagen', 'Hausverwaltungen', 'Bürohäuser', 'Gewerbeobjekte'],
    bild: 'ridwan-d-esk-uibw4ucy9qu-unsplash.webp',
    bildAlt: 'Treppenlauf mit Metallgeländer in einem hellen Treppenhaus',
    original: true,
  },
  {
    slug: 'glas-und-fensterreinigung',
    name: 'Glas- und Fensterreinigung',
    kurz: 'Rahmen und Falz gehören dazu — sonst ist es keine Glasreinigung.',
    nutzung: 'glas',
    takt: 'monatlich bis halbjährlich',
    text: 'Wir lieben glasklare Ergebnisse. Deshalb wissen unsere Glasreiniger ganz genau, was sie tun – und geben Ihren Fenstern mitsamt Rahmen und Falz wieder ihren Glanz zurück. Damit haben Sie wieder den kompletten Durchblick, denn selbst hartnäckige Verschmutzungen beseitigen wir mit Links.',
    umfang: [
      'Glasflächen innen und außen',
      'Rahmen, Falze und Fensterbänke',
      'Glastüren und Trennwände',
      'Schaufenster und Eingangsanlagen',
    ],
    fuer: ['Büros', 'Ladenlokale', 'Praxen', 'Showrooms'],
    bild: 'nastuh-abootalebi-ywwob8kwock-unsplash.webp',
    bildAlt: 'Bürogang mit raumhohen Glastrennwänden',
    original: true,
  },
  {
    slug: 'grundreinigung',
    name: 'Grundreinigung',
    kurz: 'Einmal alles, was der Alltag nicht erreicht.',
    nutzung: 'technik',
    takt: 'ein- bis zweimal jährlich',
    text: 'Trotz regelmäßiger Unterhaltsreinigung sammelt sich hartnäckiger Schmutz an schwer zugänglichen Stellen. Daher empfehlen wir in regelmäßigen Abständen eine gründliche Reinigung durchzuführen.',
    umfang: [
      'Grundreinigung der Bodenbeläge inklusive Pflegefilm',
      'Schwer zugängliche Flächen und Zwischenräume',
      'Heizkörper, Sockelleisten und Türzargen',
      'Sanitärbereiche in der Tiefe',
    ],
    fuer: ['Alle Objektarten', 'Vor Bezug', 'Nach Umbauten'],
    bild: 'garin-chadwick-qvx43bzmcna-unsplash.webp',
    bildAlt: 'Leerer, aufgeräumter Raum mit Tageslicht und Pflanzen',
    original: true,
  },
  {
    slug: 'hygieneartikelservice',
    name: 'Hygieneartikelservice',
    kurz: 'Nachschub, um den sich niemand mehr kümmern muss.',
    nutzung: 'sanitaer',
    takt: 'laufend',
    text: 'Wir sorgen für ein Rundum-Sorglos-Paket. Eine unserer Leistungen beinhaltet nämlich ebenfalls das kontinuierliche Auffüllen Ihrer Hygieneartikel, damit Sie sich entspannt zurücklehnen und auf Ihr Kerngeschäft konzentrieren können.',
    umfang: [
      'Seife, Papierhandtücher und Toilettenpapier',
      'Nachfüllen im Rahmen der Unterhaltsreinigung',
      'Bestandskontrolle ohne Ihr Zutun',
    ],
    fuer: ['Büros', 'Praxen', 'Gastronomie', 'Kitas'],
    bild: 'dan-farrell-cptbmyo2ccm-unsplash.webp',
    bildAlt: 'Seifenspender auf einem Waschtisch',
    original: true,
  },
  {
    slug: 'fassadenreinigung',
    name: 'Fassadenreinigung',
    kurz: 'Werterhalt an der Außenhaut des Gebäudes.',
    nutzung: 'glas',
    takt: 'nach Objektzustand',
    text: 'Fassaden altern sichtbar: Algen, Ruß und Witterung setzen sich in der Oberfläche fest und greifen sie mit der Zeit an. Wir reinigen die Außenhaut Ihres Gebäudes materialgerecht und stimmen Verfahren und Aufwand vorher gemeinsam mit Ihnen ab.',
    umfang: [
      'Materialgerechte Reinigung nach Fassadenart',
      'Beurteilung des Objektzustands vor Beginn',
      'Abstimmung von Verfahren und Zugangstechnik',
    ],
    fuer: ['Gewerbeimmobilien', 'Wohnanlagen', 'Hausverwaltungen'],
    bild: 'priscilla-du-preez-budd1hgco-4-unsplash.webp',
    bildAlt: 'Verglaste Gebäudefassade von außen gesehen',
    original: false,
  },
  {
    slug: 'dachreinigung',
    name: 'Dachreinigung',
    kurz: 'Bevor Moos und Laub zum Bauschaden werden.',
    nutzung: 'technik',
    takt: 'nach Objektzustand',
    text: 'Moos, Laub und Ablagerungen halten Feuchtigkeit auf der Dachfläche und in den Rinnen. Wir nehmen das Dach vorher in Augenschein und legen den Umfang gemeinsam mit Ihnen fest, bevor gearbeitet wird.',
    umfang: [
      'Dachflächen nach Eindeckung',
      'Dachrinnen und Abläufe',
      'Begutachtung und Abstimmung vorab',
    ],
    fuer: ['Gewerbeobjekte', 'Wohnanlagen', 'Hallen'],
    original: false,
  },
  {
    slug: 'solaranlagenreinigung',
    name: 'Solaranlagenreinigung',
    kurz: 'Verschmutzte Module liefern weniger Strom.',
    nutzung: 'technik',
    takt: 'nach Standort und Neigung',
    text: 'Staub, Pollen und Laub legen sich auf die Module und mindern den Ertrag. Wir reinigen Photovoltaik- und Solarthermieflächen schonend und stimmen Zugang und Intervall auf Ihre Anlage ab.',
    umfang: [
      'Schonende Modulreinigung',
      'Abstimmung von Zugang und Sicherung',
      'Intervall nach Standort und Neigung',
    ],
    fuer: ['Gewerbedächer', 'Hallen', 'Freiflächen'],
    original: false,
  },
];

export const byNutzung = (n: string) => leistungen.filter((l) => l.nutzung === n);
export const findLeistung = (slug: string) => leistungen.find((l) => l.slug === slug);
