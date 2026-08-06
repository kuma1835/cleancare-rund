# CleanCare — Designsystem „Panelfläche"

Aufgezeichnet aus der gebauten Fassung. Die Bauweise folgt einer vom Kunden gesetzten Referenz
(aura.build-Template „Lala"); übernommen wurden **Designelemente**, nicht deren Farbwelt.

**Übernommen:** heller Grund mit großen weißen Panels, weite Radien, sehr weiche Versatzschatten,
schwebende Pill-Navigation, Pill-Aktionen mit kleinem Icon, Fotos in gerundeten Karten,
nummerierte Schrittkarten, kleine gesperrte Labels, großzügige Abstände.

**Nicht übernommen:** Schwarz-Weiß-Monochromie, die Logo-Wortmarke in Script, die Bildsprache.
Farbe kommt aus dem CleanCare-Logo (`CC_LOGO3.svg`): Navy `#16283f`, Mittelblau `#2f6fb2`.

## Farbe

Strategie: **zurückhaltend** — Neutrale plus genau eine Aktionsfarbe. Heller Grund, weil die Seite
am Vormittag am Schreibtisch gelesen wird, wenn Angebote verglichen werden.

| Rolle | Wert | Verwendung |
| --- | --- | --- |
| `--grund` | `oklch(97.2% 0.006 245)` | Seitengrund, kühl unterlegtes Papier |
| `--panel` | `oklch(100% 0 0)` | die großen Panels und Karten |
| `--panel-2` | `oklch(98.4% 0.005 245)` | Karten innerhalb eines Panels |
| `--ink` | `oklch(28.5% 0.045 253)` | Tinte, entspricht dem Logo-Navy |
| `--ink-2` / `--ink-3` | `oklch(46% 0.03 253)` / `oklch(60% 0.022 253)` | Fließtext, Labels |
| `--blau` | `oklch(53% 0.115 254)` | einzige Aktionsfarbe, entspricht `#2f6fb2` |
| `--blau-sanft` | `oklch(94.5% 0.025 250)` | Icon-Kästchen, Schrittnummern, aktiver Navipunkt |

Nutzungsfarben aus der ersten Fassung (Büro/Verkehr/Sanitär/Glas/Technik) sind entfallen; die
Flächenlogik lebt nur noch als Inhalt im Anfrageformular weiter, nicht als Farbsystem.

## Typografie

- **Geist Variable** — Überschriften, Navigation, Buttons, Zahlen. Gewicht 620, Tracking −0.03em,
  Zeilenhöhe 1.05.
- **Inter Variable** — Fließtext, 16 px, Zeilenhöhe 1.6, Maß 68 Zeichen.
- Die H1 der Startseite ist auf `max-width: 15ch` und `hyphens: manual` gestellt: deutsche
  Komposita würden sonst als „Objek-te" brechen.
- `.label` — 11 px Geist, 0.16em gesperrt, Versalien, `--ink-3`.

## Form

| Token | Wert | Wofür |
| --- | --- | --- |
| `--r-panel` | 30px | Panels, Hero-Bild, Footer, CTA-Band |
| `--r-karte` | 20px | Karten innerhalb der Panels |
| `--r-klein` | 12px | Bilder in Karten, Icon-Kästchen |
| `--r-pill` | 999px | Navigation, alle Aktionen, Chips |

Drei Schattenstufen (`--schwebe-1/2/3`), alle mit Versatz und weicher Streuung, aus dem Navy
gefärbt. Ränder sind 1 px `--linie`; Panels tragen Schatten statt Rand.

## Bausteine

- **`.panel`** — weiße Fläche mit 30 px Radius und großzügigem Innenabstand. Trägt jeden großen
  Abschnitt.
- **`.btn` / `.btn-2` / `.btn-3`** — Pill in Markenblau, in Hellgrau, in Weiß mit Kontur.
- **`.icon-feld`** — 36 px Kästchen in `--blau-sanft` für gezeichnete SVG-Icons.
- **Schwebende Kopfleiste** — Pill über dem Inhalt, `backdrop-filter`, klebt beim Scrollen.
- **Feste Aktionsleiste** unten auf Mobilgeräten: Anrufen und Angebot anfordern.
- **Leistungskarte** — Titel mit Pfeil-Icon, Kurzsatz, Foto in 12 px Radius; ohne Foto eine
  gleich hohe Ersatzfläche mit dem üblichen Takt, damit Reihen ruhig bleiben.

## Bewegung

Kein inszenierter Auftritt. Nur Zustandswechsel unter 0.25 s mit `cubic-bezier(0.16, 1, 0.3, 1)`:
Karten heben sich um 3 px, Aktionen um 1 px, Schatten wächst eine Stufe.
`prefers-reduced-motion` schaltet alles ab.

## Zugänglichkeit

Ein H1 je Seite, Sprunglink, sichtbare Fokusringe (3 px `--blau`), `aria-current` in der
Navigation, `aria-live` auf der Anfragezusammenfassung, `role="alert"` für Fehler, echte
Alt-Texte, die beschreiben was zu sehen ist — nicht was behauptet wird.

## Grenzen

- Kein Preis ohne Besichtigung, also nirgends eine Zahl, die eine Kalkulation vortäuscht.
- Keine Bewertungsnote im Structured Data, solange die echte nicht vorliegt.
- Fotos sind Unsplash-Aufnahmen aus dem Altauftritt und zeigen fremde Objekte; Alt-Texte
  beschreiben deshalb neutral die Szene.
