/**
 * Farbschema der Mehl Fabrik – die EINZIGE Stelle, an der Farben definiert sind.
 *
 * Jeder Schlüssel wird automatisch
 *  1. als CSS-Variable `--scheme-<name>` gesetzt (siehe ColorSchemeProvider) und
 *  2. als Tailwind-Farbe verfügbar: `bg-<name>`, `text-<name>`, `border-<name>/40` …
 *     (Zuordnung in `src/styles/index.css` unter `@theme inline`).
 *
 * Semantische Flächen:
 *   panel / on-panel     → Navigation (gescrollt), Laufband, Speisekarte, App, Footer
 *   feature / on-feature → Bewertungs-Sektion
 */
const brand = {
  // Flächen
  bg: '#f6f4ec',
  'bg-warm': '#efe9d9',
  cream: '#fffdf5',

  // Text & dunkle Töne
  ink: '#14201a',
  'ink-soft': '#4a5a4a',
  'ink-light': '#2a3a30',
  'ink-deep': '#0a1210',

  // Akzent Grün
  green: '#7fbf3f',
  'green-soft': '#a8dc6f',
  'green-deep': '#2f5411',

  // Akzent Orange
  orange: '#ff7a1a',
  'orange-soft': '#ff9a4a',
  'orange-hover': '#ff8f3d',

  // Neutral
  white: '#ffffff',
  black: '#000000',
  slot: '#7f7f7f',
};

/** Design aus dem Prototyp (project/Mehl Fabrik Redesign.dc.html) */
export const colorScheme = {
  ...brand,
  panel: brand.ink,
  'on-panel': brand.cream,
  feature: brand['green-deep'],
  'on-feature': brand.cream,
};

export type ColorToken = keyof typeof colorScheme;
export type ColorScheme = Record<ColorToken, string>;

/** `{ ink: '#14201a' }` → `:root{--scheme-ink:#14201a;…}` */
export function schemeToCss(scheme: ColorScheme): string {
  const vars = Object.entries(scheme)
    .map(([name, value]) => `--scheme-${name}:${value}`)
    .join(';');
  return `:root{${vars}}`;
}
