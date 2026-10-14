# Mehl Fabrik – Website

One-Pager für die Mehl Fabrik (Rotenburg/Wümme), 1:1 umgesetzt nach `../project/Mehl Fabrik Redesign.dc.html`.

## Tech-Stack

| Baustein | Warum |
| --- | --- |
| **Vite 8 + React 19 + TypeScript** | Schneller Dev-Server, kleiner Build, Typen verhindern Tippfehler in Inhalten |
| **Tailwind CSS 4** | Styles direkt am Markup, ungenutzte Klassen landen nicht im Build, keine Runtime-Kosten |
| **React-Farbschema** (`src/theme/`) | Alle Farben in einer TS-Datei → CSS-Variablen → Tailwind-Farben (`bg-ink`, `text-orange/70` …) |
| **Build-Time-Prerendering** (`scripts/prerender.js`) | Fertiges HTML im `dist/index.html` → Inhalt sofort sichtbar, gut für SEO, React hydriert nur |
| **Selbst gehostete Fonts** (`@fontsource`, nur latin + benötigte Schnitte) | Kein Google-Fonts-Request, DSGVO-freundlich |
| **Optimierte Assets** | Logo als WebP (12 KB statt 855 KB), Bilder `loading="lazy"`, Hero mit `fetchpriority="high"` |

Keine weiteren Laufzeit-Abhängigkeiten außer React.

## Befehle

```bash
npm install
npm run dev       # Entwicklung → http://localhost:5173
npm run build     # Typecheck + Build + Prerender → dist/
npm run preview   # fertigen Build lokal ansehen
```

`dist/` ist eine rein statische Seite und kann auf jedem Webspace / Netlify / Vercel / Cloudflare Pages liegen.

## Struktur

```
src/
  content/site.ts      ← ALLE Texte, Preise, Öffnungszeiten, Links, Bilder
  theme/colorScheme.ts ← ALLE Farben (einzige Quelle)
  theme/ColorSchemeProvider.tsx ← setzt die Farben als CSS-Variablen, Hook useColorScheme()
  styles/index.css     ← Tailwind-Theme: Farben-Mapping, Fonts, Breakpoints, Schatten, Animationen
  styles/fonts.ts      ← Webfont-Imports
  sections/            ← eine Datei pro Seitenabschnitt
  components/ui.tsx    ← Bausteine: Container, Section, Eyebrow, Button
  components/ImageSlot ← Bild oder Platzhalter
  hooks/useFadeIn.ts   ← Einblend-Animation beim Scrollen
  entry-server.tsx     ← nur für das Prerendering
```

## Pflege

- **Text / Preis / Öffnungszeit ändern:** `src/content/site.ts` bearbeiten.
- **Gericht hinzufügen:** neuen Eintrag in `dishes` anlegen.
- **Bild einsetzen:** Datei nach `src/assets/images/` legen, in `site.ts` importieren und als `src` setzen:
  ```ts
  import margherita from '../assets/images/margherita.webp';
  // …
  image: { src: margherita, alt: 'Pizza Margherita von oben' },
  ```
  Ohne `src` erscheint der Platzhalter aus dem Design.
- **Farbe ändern:** Wert in `src/theme/colorScheme.ts` anpassen – wirkt überall.
- **Neue Farbe:** Schlüssel in `colorScheme.ts` ergänzen und in `src/styles/index.css` unter `@theme inline` als `--color-<name>: var(--scheme-<name>);` eintragen.
- **Dunkle Flächen:** Die semantischen Farben `panel`/`on-panel` (Nav gescrollt, Laufband, Speisekarte, App, Footer) und `feature`/`on-feature` (Bewertungen) steuern diese Bereiche zentral.
- **Browser-Dark-Mode:** Die Seite hat ein festes Design (`color-scheme: only light`) und wird vom automatischen Dunkelmodus des Browsers nicht umgefärbt.
- **Breakpoints** (desktop-first wie im Design): `max-sm:` < 700px, `max-md:` < 780px, `max-lg:` < 900px, `max-xl:` < 1080px.
- **Links** (Bestellsystem, App Stores, Route): `links` und `contact.routeUrl` in `site.ts` – aktuell `#`.

## Abweichungen vom Prototyp

- Galerie-Mosaik unter 700 px: Das 4. Bild geht jetzt über die volle Breite (im Prototyp entstanden durch `grid-column: 3 / span 2` zusätzliche Spalten und das Layout brach).
- `prefers-reduced-motion` wird respektiert (Animationen aus).
- Menü-Tabs markieren wie im Prototyp nur die Auswahl; echtes Filtern ist in `sections/Menu.tsx` als Einzeiler vorbereitet.
