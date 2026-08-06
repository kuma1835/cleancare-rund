# Was vor einem Livegang noch gebraucht wird

Diese Fassung enthält **keine erfundenen Fakten**. Alles, was auf den Seiten steht, stammt
entweder aus dem bestehenden Auftritt cleancare-service.de oder beschreibt nachprüfbar, was diese
Website technisch tut. Was fehlt, steht hier — und fehlt bewusst.

## Vom Kunden zwingend nötig

| Thema | Wofür | Wo es einschlägt |
| --- | --- | --- |
| Handelsregister, USt-IdNr. | Rechtspflicht | `/impressum` |
| Datenschutzerklärung (juristisch geprüft) | Rechtspflicht | `/datenschutz` |
| Geltende AGB | Rechtspflicht | `/agb` |
| Versanddienst für Formulare + AV-Vertrag | Anfrage- und Bewerbungsformular | `PUBLIC_ANFRAGE_ENDPOINT`, `PUBLIC_BEWERBUNG_ENDPOINT` |
| Eigene Objektfotos | Ersetzt die Unsplash-Bilder aus dem Altauftritt | alle Seiten |
| Erreichbarkeitszeiten | Aktuell bewusst nicht behauptet | `/kontakt` |
| ProvenExpert-Gesamtnote + Anzahl | Für `AggregateRating` im Structured Data | `/` |
| **Echte Sternwerte je Bewertung** | Das Laufband zeigt bei jeder Stimme 5 Sterne — das ist eine **Annahme**, kein belegter Wert | `src/data/site.ts`, Feld `sterne` |

## Für Vertrauen und Ranking wertvoll

- Betriebshaftpflicht inkl. Deckungssumme, Innungsmitgliedschaft, Meisterbetrieb, Zertifikate
- Mitarbeiterzahl, betreute Objekte, m² pro Monat, durchschnittliche Kundenbindungsdauer
- Vertragslaufzeiten, Kündigungsfristen, Schlüsselverwaltung, Vertretung bei Krankheit,
  Reklamationsweg → daraus entstehen sieben weitere FAQ-Einträge (Gerüst steht in `src/data/faq.ts`)
- Nachhaltigkeit konkret: Reinigungsmittel, Dosiersysteme, Fuhrpark, Zertifikate.
  **Solange das offen ist, behauptet diese Fassung nichts über Nachhaltigkeit außer dem, was der
  Altauftritt selbst schreibt.**
- Referenzkunden mit Freigabe — auch anonymisiert („Steuerkanzlei in Harburg, 480 m²")
- Weitere offene Stellen mit Lohn, Umfang, Einsatzort

## Bewusst nicht enthalten

- **Keine Preise, keine Quadratmetersätze.** Der Rechner erzeugt ein strukturiertes Raumbuch,
  keine Preisauskunft. Sobald belastbare Sätze vorliegen, kann daraus eine Spanne werden.
- **Keine Sternebewertung im Structured Data.** Die sieben Kundenstimmen sind wörtlich übernommen,
  aber ohne Notenwerte — eine erfundene 4,9 wäre ein Rich-Snippet-Verstoß.
  **Achtung:** Sichtbar im Laufband stehen bei jeder Stimme fünf Sterne. Die stammen aus dem Feld
  `sterne` in `src/data/site.ts` und sind auf Wunsch gesetzt, **nicht** aus ProvenExpert übernommen.
  Vor Livegang gegen das Profil prüfen und je Bewertung korrigieren — dargestellte Bewertungen,
  die nicht der echten Bewertung entsprechen, sind wettbewerbsrechtlich angreifbar (§ 5 UWG).
- **Kein `datePosted` bei der Stellenanzeige.** Für Google-Jobs-Rich-Results nötig, aber nur mit
  echtem Datum sinnvoll.
- **Keine Geokoordinaten** im LocalBusiness-Schema, solange sie nicht verifiziert sind.

## Bilder

Alle Fotos stammen aus dem bestehenden Auftritt und sind Unsplash-Aufnahmen (nastuh abootalebi,
redd f, ron mcclenny, brooke cagle, dan farrell, garin chadwick, priscilla du preez, ridwan d esk,
microsoft 365). Sie zeigen fremde Büros, nicht CleanCare-Objekte. Für den Livegang gehört hier
eigenes Material hin — das ist der größte einzelne Vertrauensgewinn, den die Seite noch holen kann.

Logo und Wortmarke stammen im Original vom bestehenden Auftritt.

## Formulare anschließen

```bash
# .env
PUBLIC_ANFRAGE_ENDPOINT="https://…"
PUBLIC_BEWERBUNG_ENDPOINT="https://…"
```

Ohne Endpunkt fallen beide Formulare auf eine vorbereitete E-Mail zurück. Das funktioniert, ist
aber die schwächere Variante: Für den Livegang gehört ein echter Endpunkt dahinter
(eigene Route, Resend, Formspree o. ä.) inklusive serverseitiger Validierung und Spam-Schutz.
