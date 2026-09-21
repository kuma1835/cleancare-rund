# Befund: Alte Website cleancare-service.de

Stand: 20.09.2026 · Quellen: Google Analytics (GA4, 01.01.–20.09.2026), Sitemap der Live-Seite

## Ausgangslage

Die alte Seite läuft auf **Squarespace**, kanonische Adresse **www.cleancare-service.de**
(ohne `www` 301-Weiterleitung). Acht Seiten, keine Unterseiten.

**136 Sitzungen in knapp neun Monaten** — rund 15 Besucher im Monat. Davon 9 unzuordenbar
und 2 auf `/wp-admin` (Bot-Scan, existiert auf Squarespace gar nicht).

Folge: Es gibt praktisch keine Rankings zu verlieren. Der Umzug ist ohne SEO-Risiko.

## Standort

Der Seitentitel lautet „CleanCare Gebäudeservice: Gebäudereinigung aus **Seevetal**"
(Landkreis Harburg, südlich von Hamburg). Die neue Seite muss auf Seevetal, die Nachbarorte
und Hamburg als Einzugsgebiet ausgerichtet sein — bei einer lokalen Dienstleistung entscheidet
das über den gesamten Suchverkehr. Die vorhandenen `einsatzgebiet/`-Seiten sind dafür der
richtige Ansatz und müssen mit echten Ortsnamen gefüllt werden.

## Was die Zahlen sagen

| Seite | Aufrufe | Anteil | Verweildauer |
| --- | --- | --- | --- |
| Startseite | 123 | 40,7 % | 31 Sek. |
| Kontakt | 46 | 15,2 % | 11 Sek. |
| Impressum | 45 | 14,9 % | 13 Sek. |
| Über uns | 28 | 9,3 % | 39 Sek. |
| Leistungen | 27 | 8,9 % | 49 Sek. |
| Jobs | 15 | 5,0 % | 21 Sek. |
| Datenschutz / AGB | 13 | 4,3 % | — |

**Impressum ist die drittmeistbesuchte Seite.** Klassisches Zeichen dafür, dass die
Telefonnummer auf der Startseite nicht gefunden wird und die Leute den Umweg gehen.
→ Telefonnummer sichtbar und klickbar in die Kopfleiste, auf jeder Seite.

**Kontakt: nur 11 Sekunden.** Zu kurz zum Formularausfüllen. Die Leute greifen die Nummer ab
und rufen an — die echten Anfragen passieren am Telefon und werden nirgends gemessen.

**Leistungen: längste Verweildauer aller Inhaltsseiten (49 Sek.), aber nur 5 Einstiege.**
Der Inhalt trägt, er ist nur vergraben.
→ Leistungen gehören prominent auf die Startseite, nicht hinter einen Menüpunkt.

**Jobs: 2 von 5 gezählten Schlüsselereignissen** bei nur 15 Aufrufen. Bei Gebäudereinigern
ist Personalgewinnung oft wertvoller als Kundengewinnung. Beim Kunden nachfragen.

**Startseite = 74 % aller Einstiege.** Die neue Startseite muss die gesamte Arbeit leisten:
Was, wo, für wen, und wie man anruft.

## Kanäle

| Kanal | Sitzungen | Anteil |
| --- | --- | --- |
| Organic Search | 88 | 64,7 % |
| Direct | 40 | 29,4 % |
| Referral | 6 | 4,4 % |
| AI Assistant | 2 | 1,5 % |

**Kein Paid Search.** Trotz vorhandenem Google-Ads-Konto kam keine einzige Sitzung aus Ads.
Es lief also entweder nie eine Kampagne oder sie war nicht verknüpft.

## Messung ist nicht eingerichtet

Vorhandene Ereignisse sind ausschließlich Google-Standardwerte: `page_view`, `scroll`,
`session_start`, `user_engagement`, `first_visit`, `click`. Kein Formularversand, kein
Telefonklick.

Einziges Schlüsselereignis: `ads_conversion_Shopping_C…` (5 Auslösungen) — ein Warenkorb-
Ereignis bei einer Gebäudereinigung, also Müll aus einer automatischen Einrichtung. Passend
dazu heißt das Analytics-Konto schlicht „Google Ads-Konto": Die Property wurde beim Anlegen
der Ads-Kampagne automatisch miterzeugt, nicht bewusst eingerichtet.

**Für die neue Seite einplanen:** Telefonklick, E-Mail-Klick und Formularversand als echte
Ereignisse. Sonst steht in einem Jahr wieder niemand vor einer Antwort, was die Seite gebracht hat.

## Search Console

Die Property `cleancare-service.de` ist eine **neu angelegte Domain-Property** — es gibt keine
Historie und wird auch keine geben, da Google nicht rückwirkend nachliefert. Erste laufende
Daten nach etwa drei Tagen, belastbares Bild nach rund vier Wochen.

Sitemap einreichen mit voller Adresse (Domain-Property akzeptiert keinen bloßen Pfad):
`https://www.cleancare-service.de/sitemap.xml`

**Offen:** Beim Kunden nachfragen, ob es eine **ältere** Search-Console-Property gibt
(evtl. über einen früheren Dienstleister oder über Squarespace). Dort läge die echte Historie.

## Weiterleitungen alt → neu

Die Pfade der neuen Seite decken die alten bereits 1:1 ab. Nur eine Weiterleitung ist nötig:

| Alt | Neu |
| --- | --- |
| `/home` | `/` (Squarespace-Dublette, war zweite Startseiten-Adresse) |
| `/leistungen` | `/leistungen` |
| `/ueber-uns` | `/ueber-uns` |
| `/jobs` | `/jobs` |
| `/kontakt` | `/kontakt` |
| `/impressum` | `/impressum` |
| `/datenschutz` | `/datenschutz` |
| `/agb` | `/agb` |

## Offene Fragen an den Kunden

1. Stimmt Seevetal als Standort, und welche Orte im Umkreis werden bedient?
2. Wird Personal gesucht? Wenn ja, wie dringend?
3. Welche Leistung bringt am meisten Umsatz — Unterhaltsreinigung, Bauschlussreinigung,
   Fenster, Treppenhaus?
4. Lieber angerufen werden oder Formularanfragen?
5. Gab es früher schon einen Search-Console-Zugang?
