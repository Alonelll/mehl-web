import { useFadeIn } from './hooks/useFadeIn';
import { AppPromo } from './sections/AppPromo';
import { Footer } from './sections/Footer';
import { Gallery } from './sections/Gallery';
import { Hero } from './sections/Hero';
import { Marquee } from './sections/Marquee';
import { Menu } from './sections/Menu';
import { Nav } from './sections/Nav';
import { Promo } from './sections/Promo';
import { Reviews } from './sections/Reviews';
import { Story } from './sections/Story';
import { Visit } from './sections/Visit';
import { ColorSchemeProvider } from './theme/ColorSchemeProvider';

export function App() {
  useFadeIn();

  return (
    <ColorSchemeProvider>
      <Nav />
      <Hero />
      <Marquee />
      <main>
        <Story />
        <Menu />
        <Gallery />
        <Promo />
        <AppPromo />
        <Reviews />
        <Visit />
      </main>
      <Footer />
    </ColorSchemeProvider>
  );
}
