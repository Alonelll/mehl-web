import { createContext, use, type ReactNode } from 'react';
import { colorScheme, schemeToCss, type ColorScheme } from './colorScheme';

const ColorSchemeContext = createContext<ColorScheme>(colorScheme);

/**
 * Schreibt das Farbschema als CSS-Variablen in die Seite. Läuft auch beim
 * Prerendering → die Farben stehen schon im ausgelieferten HTML, ohne Flackern.
 */
export function ColorSchemeProvider({ children }: { children: ReactNode }) {
  return (
    <ColorSchemeContext value={colorScheme}>
      <style>{schemeToCss(colorScheme)}</style>
      {children}
    </ColorSchemeContext>
  );
}

/** Zugriff auf die Farbwerte in JS, z. B. für Canvas, Charts oder Meta-Tags. */
export function useColorScheme(): ColorScheme {
  return use(ColorSchemeContext);
}
