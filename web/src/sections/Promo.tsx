import { Container, Section } from '../components/ui';
import { promo } from '../content/site';

const BURST =
  'M100 0 L110 30 L130 10 L128 40 L155 25 L145 55 L180 50 L160 75 L200 80 L170 95 L200 120 L165 120 L185 150 L155 140 L165 175 L135 155 L130 195 L110 165 L100 200 L90 165 L70 195 L65 155 L35 175 L45 140 L15 150 L40 120 L0 120 L30 95 L0 80 L40 75 L20 50 L55 55 L45 25 L72 40 L70 10 L90 30 Z';

/** „Boom“-Banner mit Wochenangebot */
export function Promo() {
  return (
    <Section padded={false} className="relative overflow-hidden bg-orange text-ink">
      <div className="absolute inset-x-0 top-0 overflow-hidden bg-ink py-2 text-orange">
        <div className="flex animate-marquee-fast gap-8 font-sans text-[12px] font-bold tracking-[.3em] whitespace-nowrap uppercase">
          <span>{promo.ticker}</span>
          <span aria-hidden="true">{promo.ticker}</span>
        </div>
      </div>

      <Container className="relative z-2 flex flex-wrap items-center justify-center gap-8 pt-[72px] pb-10">
        <div className="relative size-[220px] shrink-0">
          <svg viewBox="0 0 200 200" className="size-full animate-spin-slow" aria-hidden="true">
            <path d={BURST} className="fill-ink" />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center font-serif font-bold text-orange italic">
            <span className="text-[56px] leading-none">{promo.amount}</span>
            <span className="mt-1 font-sans text-[11px] font-bold tracking-[.25em] text-cream uppercase not-italic">Rabatt · App</span>
          </div>
        </div>

        <div className="max-w-[540px]">
          <div className="mb-2 font-sans text-[12px] font-bold tracking-[.3em] uppercase">{promo.kicker}</div>
          <h2 className="mb-3 font-serif text-[length:clamp(36px,5vw,60px)] leading-[1.05] text-ink italic">
            Jetzt <u className="bg-ink px-3 text-orange no-underline">{promo.amount} sparen</u>
            <br />
            mit der App.
          </h2>
          <p className="mt-0 mb-4 text-[16px] leading-[1.5] text-ink/80">{promo.text}</p>
          <span className="inline-flex items-center gap-3 rounded-full bg-ink px-5 py-2.5 font-sans text-[14px] font-bold tracking-[.2em] text-orange">
            Code · {promo.code}
          </span>
        </div>
      </Container>
    </Section>
  );
}
