import type { ReactNode } from 'react';
import logo from '../assets/logo.webp';
import { Container } from '../components/ui';
import { contact, footer } from '../content/site';

function Column({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h5 className="mt-[1.67em] mb-4 font-sans text-[11px] font-bold tracking-[.2em] text-orange uppercase">{title}</h5>
      <ul className="m-0 flex list-none flex-col gap-2.5 p-0 text-[14px] text-on-panel/75">{children}</ul>
    </div>
  );
}

function LinkItems({ items }: { items: { label: string; href: string }[] }) {
  return items.map((l) => (
    <li key={l.label}><a href={l.href} className="hover:text-orange">{l.label}</a></li>
  ));
}

export function Footer() {
  return (
    <footer className="bg-panel pt-20 pb-8 text-on-panel">
      <Container>
        <div className="mb-12 grid grid-cols-[2fr_1fr_1fr_1fr] gap-12 max-md:grid-cols-2 max-md:gap-8">
          <div>
            <img src={logo} alt="Mehl Fabrik" width={480} height={185} loading="lazy" className="mb-5 inline h-[60px] w-auto align-baseline" />
            <p className="my-[1em] max-w-[32ch] text-[14px] leading-[1.6] text-on-panel/60">{footer.about}</p>
          </div>
          <Column title="Menü"><LinkItems items={footer.menu} /></Column>
          <Column title="Info"><LinkItems items={footer.info} /></Column>
          <Column title="Kontakt">
            <li>{contact.phone.label}</li>
            <li>{contact.mobile.label}</li>
            <li>{contact.city}</li>
          </Column>
        </div>
        <div className="flex flex-wrap justify-between gap-4 border-t border-on-panel/10 pt-6 text-[12px] tracking-[.08em] text-on-panel/40">
          <span>{footer.copyright}</span>
          <span>
            {footer.legal.map((l) => <a key={l.label} href={l.href} className="ml-5">{l.label}</a>)}
          </span>
        </div>
      </Container>
    </footer>
  );
}
