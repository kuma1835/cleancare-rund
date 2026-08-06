# CLEANCARE-NEU

Zweite Designvariante der CleanCare-Website, gebaut als Vergleichsstand zum bestehenden Projekt
`../CLEANCARE`. Beide Ordner sind unabhängig; dieser hier fasst den anderen nicht an.

- **Port:** 3009
- **Stack:** Astro 5, handgeschriebenes CSS mit OKLCH-Tokens, keine UI-Bibliothek
- **Optik:** helle Panelfläche in CleanCare-Blau; Bauweise nach einer vom Kunden gesetzten
  Referenz, Farbwelt aus dem Logo `CC_LOGO3.svg` (Navy `#16283f`, Blau `#2f6fb2`)
- **Ausgabe:** statisch, 23 Seiten
- **Designsystem:** siehe [DESIGN.md](DESIGN.md)
- **Offene Kundenangaben:** siehe [REDAKTION.md](REDAKTION.md)

```bash
npm install
npm run dev
```

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
