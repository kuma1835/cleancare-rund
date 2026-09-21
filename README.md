# CLEANCARE-NEU2

Dritte Designvariante der CleanCare-Website. Baut auf `../CLEANCARE-NEU` auf und ändert
Maß, Typografie und Ausrichtung nach der Referenz `revolut.com/bank-account/`.

- **Port:** 3011
- **Vorgänger:** `../CLEANCARE-NEU` (Port 3009, bleibt unangetastet)
- **Schwesterfassung:** `../CLEANCARE-NEU3` (Port 3012) — dieselbe Fassung mit eckigen
  Bildern und randbündigem Auftaktbild

## Was gegenüber CLEANCARE-NEU anders ist

1. **Mehr Rand.** Textachse von 106 px auf 166 px bei 1440 px Fensterbreite — zwischen
   der Vorfassung und Revolut (220 px).
2. **Typografie nach der Referenz.** H1 von 76 px auf 58 px, Vorspann von 20 px auf 18 px;
   das Verhältnis Überschrift zu Fließtext liegt jetzt bei 3,2 : 1 statt 3,8 : 1.
   Abstand zwischen zwei Blöcken von 80 px auf 111 px.
3. **Mittige Ausrichtung.** Überschriften und Vorspann stehen zentriert; Formulare,
   Stellenausschreibung und zweispaltige Bildblöcke bleiben linksbündig.
4. **Kennzahlen-Streifen** unter dem Auftakt: 15+ Jahre, 08 Leistungsbereiche,
   01 Ansprechperson — alle Angaben belegt.
5. **Kundenstimmen nur noch auf `/` und `/ueber-uns`**, nicht mehr auf jeder Detailseite.
6. **Jobs neu aufgebaut.** Ausschreibung in schmaler Spalte, Beschriftung links und
   Inhalt rechts statt drei ausgefranster Spalten, Bewerbungsformular in fester Breite
   neben der Ansprache statt über die ganze Seite gezogen.
7. **SEO nachgezogen.** Siehe unten.

## SEO-Stand

- Titel-Zusatz von „— CleanCare Gebäudeservice GmbH" auf „— CleanCare" gekürzt; alle 22
  Titel liegen jetzt unter 60 Zeichen (vorher bis 69).
- Alle Meta-Beschreibungen unter 160 Zeichen (vorher elf darüber, bis 192). `Base.astro`
  kürzt zusätzlich an der Wortgrenze, falls später längere Namen dazukommen.
- Stichwort nach vorn: „Kontakt" → „Kontakt und Anfahrt Seevetal", „Jobs" → „Jobs in der
  Gebäudereinigung Seevetal", „Leistungen" → „Acht Leistungen der Gebäudereinigung".
- `og:image:alt` ergänzt, `theme-color` von `#101c5e` auf das Logo-Navy `#16283f` korrigiert.
- Geprüft und in Ordnung: genau ein H1 je Seite, keine Sprünge in der Überschriftenfolge,
  alle Bilder mit Alt-Text, Canonical, Sitemap, robots.txt, llms.txt, Structured Data.
- Entfernt: die Kennzahl „5,0 Sterne bei ProvenExpert" auf der Startseite — der Wert
  liegt nicht belegt vor (siehe REDAKTION.md).
- Korrigiert: „Erfahrung aus fast 15 Jahren" → „über 15 Jahren" (Gründung 2009).

## Seitenbestand

| Bereich | Seiten |
| --- | --- |
| Kern | `/`, `/anfrage`, `/kontakt`, `/ueber-uns`, `/faq`, `/jobs` |
| Leistungen | `/leistungen` + 8 Detailseiten |
| Einsatzgebiet | `/einsatzgebiet` + Seevetal, Hamburg, Landkreis Harburg |
| Recht | `/impressum`, `/datenschutz`, `/agb` (noindex, Texte offen) |
| Technik | `/robots.txt`, `/llms.txt`, `/sitemap-index.xml`, 404 |

## Was diese Variante anders macht

- **Anfrage statt Kontaktformular.** Das Raumbuch erhebt Objektart, Ort, Fläche, Rhythmus,
  Flächenarten und Leistungen — die Angaben, die für ein Angebot ohnehin nötig sind.
- **Telefon, E-Mail und Aktionen klickbar**, dazu eine feste Aktionsleiste auf Mobilgeräten.
- **Structured Data vollständig**: LocalBusiness mit Anschrift und Einsatzgebiet, Service je
  Leistung, FAQPage, JobPosting, BreadcrumbList, ItemList.
- **Offen für KI-Crawler** plus `llms.txt` — die bestehende Squarespace-Seite sperrt GPTBot,
  ClaudeBot und Google-Extended per Voreinstellung aus.
- **Keine erfundenen Fakten.** Preise, Zertifikate, Bewertungsnoten und Erreichbarkeitszeiten
  fehlen bewusst, solange sie nicht belegt sind.

## Formulare

Ohne konfigurierten Endpunkt fallen Anfrage- und Bewerbungsformular auf eine vorbereitete E-Mail
zurück. Für den Livegang:

```bash
PUBLIC_ANFRAGE_ENDPOINT="https://…"
PUBLIC_BEWERBUNG_ENDPOINT="https://…"
```
