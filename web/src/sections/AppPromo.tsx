import { QrCode } from '../components/QrCode';
import { Container, Eyebrow, Section } from '../components/ui';
import { app, links } from '../content/site';
import { cn } from '../lib/cn';

const chip = 'whitespace-nowrap rounded-full px-2.5 py-1 text-[9px] font-bold tracking-[.1em] uppercase';

function PhoneCard({ name, desc, price, thumb }: { name: string; desc: string; price: string; thumb: string }) {
  return (
    <div className="flex items-center gap-2.5 rounded-[10px] bg-cream p-2.5 shadow-card">
      <div className={cn('size-11 shrink-0 rounded-lg bg-linear-135/srgb', thumb)} />
      <div className="min-w-0 flex-1">
        <div className="font-serif text-[13px] font-bold text-ink italic">{name}</div>
        <div className="text-[10px] text-ink-soft">{desc}</div>
      </div>
      <div className="font-serif text-[14px] font-bold text-orange">{price}</div>
    </div>
  );
}

function PhoneMockup() {
  return (
    <div
      aria-hidden="true"
      className="relative aspect-[9/19] w-[320px] rounded-[40px] bg-linear-160/srgb from-ink-light to-ink p-3 shadow-phone before:absolute before:top-5 before:left-1/2 before:z-3 before:h-6 before:w-[100px] before:-translate-x-1/2 before:rounded-full before:bg-ink-deep"
    >
      <div className="relative flex size-full flex-col gap-3 overflow-hidden rounded-[30px] bg-bg px-4 pt-11 pb-4">
        <div className="flex items-center gap-2 font-serif text-[16px] font-bold text-ink italic before:size-2 before:rounded-full before:bg-green">
          Mehl Fabrik
        </div>
        <div className="rounded-xl bg-ink p-3 text-cream">
          <span className="font-script text-[16px] text-orange">Bestellen</span>
          <div className="mt-1 mb-2 font-serif text-[20px] leading-none italic">Frisch aus dem Ofen</div>
          <span className="inline-block rounded-full bg-orange px-3 py-1.5 text-[10px] font-bold tracking-[.1em] text-white uppercase">3€ Rabatt →</span>
        </div>
        <div className="flex gap-2 overflow-hidden">
          <span className={cn(chip, 'bg-orange text-white')}>Pizza</span>
          <span className={cn(chip, 'border border-ink/20 bg-transparent text-ink')}>Pasta</span>
          <span className={cn(chip, 'border border-ink/20 bg-transparent text-ink')}>Baguette</span>
        </div>
        <PhoneCard name="Diavola" desc="Salami, Chili" price="10,90 €" thumb="from-orange to-orange-soft" />
        <PhoneCard name="Margherita" desc="Basilikum, Fior di Latte" price="8,50 €" thumb="from-green to-green-soft" />
        <div className="mt-auto flex items-center justify-between rounded-xl bg-orange p-2.5 font-sans text-[11px] font-bold tracking-[.08em] text-white uppercase">
          <span>3 Artikel</span>
          <span>27,40 € →</span>
        </div>
      </div>
    </div>
  );
}

const storeBtn =
  'inline-flex min-w-[200px] items-center gap-3 rounded-[10px] border-2 border-on-panel bg-on-panel px-5 py-2.5 text-panel transition-[translate,background-color] duration-200 hover:-translate-y-0.5 hover:border-orange hover:bg-orange hover:text-white';

function StoreButton({ href, small, label, icon }: { href: string; small: string; label: string; icon: string }) {
  return (
    <a className={storeBtn} href={href}>
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-7 shrink-0" aria-hidden="true"><path d={icon} /></svg>
      <span className="flex flex-col leading-[1.1]">
        <small className="text-[10px] font-semibold tracking-[.1em] uppercase opacity-70">{small}</small>
        <strong className="font-serif text-[18px] font-bold italic">{label}</strong>
      </span>
    </a>
  );
}

const APPLE_ICON =
  'M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.08zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z';
const PLAY_ICON =
  'M3.6 2.28c-.37.38-.6.99-.6 1.78v15.87c0 .8.23 1.4.62 1.78l.08.07L12.5 12.9v-.2L3.7 2.2l-.1.08zm10.87 9.62l-2.75 2.75.06.03 3.24 1.85c.94.53 1.7.53 1.7-.02-.02-.55-.75-.55-1.7-.02l-3.24 1.85-.06.03zm-.06-.24l2.81-2.81 3.24 1.85c.93.53.93.55.02 1.08l-3.26 1.87-2.81-2.81zM4.6 21.66c.42.44 1.1.5 1.87.06l9.85-5.6-2.83-2.83-8.89 8.37z';

export function AppPromo() {
  return (
    <Section
      id="app"
      className={cn(
        'relative overflow-hidden bg-panel text-on-panel',
        'before:absolute before:-top-[200px] before:-left-[200px] before:size-[500px] before:rounded-full before:bg-radial/srgb before:from-orange/20 before:to-transparent before:to-70%',
        'after:absolute after:-right-[200px] after:-bottom-[200px] after:size-[500px] after:rounded-full after:bg-radial/srgb after:from-green/15 after:to-transparent after:to-70%',
      )}
    >
      <Container className="relative z-2 grid grid-cols-[1fr_1.1fr] items-center gap-20 max-lg:grid-cols-1 max-lg:gap-12">
        <div className="relative flex justify-center">
          <PhoneMockup />
        </div>

        <div>
          <Eyebrow>{app.eyebrow}</Eyebrow>
          <h2 className="mt-4 mb-5 font-serif text-[length:clamp(40px,5vw,68px)] leading-[1.1] italic">
            Bequem über die <span className="text-orange">App</span> bestellen.
          </h2>
          <p className="mt-0 mb-8 max-w-[44ch] text-[17px] leading-[1.6] text-on-panel/75">{app.text}</p>

          <ul className="mt-4 mb-9 flex flex-col gap-3 pl-10">
            {app.features.map((f) => (
              <li
                key={f}
                className="flex list-none items-center gap-3 text-[15px] text-on-panel/90 before:flex before:size-6 before:shrink-0 before:items-center before:justify-center before:rounded-full before:bg-green before:text-[12px] before:font-bold before:text-ink before:content-['✓']"
              >
                {f}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap items-center gap-5">
            <div>
              <div className="size-[120px] shrink-0 rounded-xl bg-cream p-2">
                <QrCode className="block size-full" />
              </div>
              <span className="mt-2 block text-center font-script text-[20px] text-orange">Scan mich!</span>
            </div>
            <div className="flex flex-col gap-2.5">
              <StoreButton href={links.appStore} small="Download im" label="App Store" icon={APPLE_ICON} />
              <StoreButton href={links.googlePlay} small="Jetzt bei" label="Google Play" icon={PLAY_ICON} />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
