import { useEffect, useState } from 'react';
import logo from '../assets/logo.webp';
import { Button, Container } from '../components/ui';
import { contact, links, nav } from '../content/site';
import { cn } from '../lib/cn';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed inset-x-0 top-0 z-100 transition-[background-color,backdrop-filter,padding] duration-300',
        // Über dem Hero immer helle Schrift, gescrollt Farben aus dem Schema
        scrolled ? 'bg-panel/95 py-3 text-on-panel backdrop-blur-[10px]' : 'bg-transparent py-[18px] text-cream',
      )}
    >
      <Container className="flex items-center justify-between gap-8">
        <a href="#">
          <img
            src={logo}
            alt="Mehl Fabrik"
            width={480}
            height={185}
            className={cn('block w-auto transition-[height] duration-300', scrolled ? 'h-11' : 'h-14 max-xl:h-11')}
          />
        </a>
        <div className="flex gap-9 max-xl:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                'relative py-1.5 font-sans text-[14px] font-semibold tracking-[.12em] whitespace-nowrap uppercase transition-colors duration-200 hover:text-orange',
                'after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-orange after:transition-[scale] after:duration-300 hover:after:scale-x-100',
              )}
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-5">
          <a href={contact.phone.href} className="inline-flex items-center gap-2 font-sans text-[14px] font-bold whitespace-nowrap max-xl:hidden">
            ☏ {contact.phone.label}
          </a>
          <Button href={links.order}>Bestellen</Button>
        </div>
      </Container>
    </nav>
  );
}
