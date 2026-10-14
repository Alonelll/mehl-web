import { ImageSlot } from '../components/ImageSlot';
import { Container, Eyebrow, Section } from '../components/ui';
import { contact, hours, visit } from '../content/site';

const label = 'text-[11px] font-semibold tracking-[.18em] text-ink-soft uppercase';
const value = 'font-serif text-[20px] text-orange italic';

export function Visit() {
  return (
    <Section id="visit" className="relative bg-bg">
      <Container className="grid grid-cols-[1.2fr_1fr] items-stretch gap-16 max-lg:grid-cols-1 max-lg:gap-8">
        <div className="py-12">
          <Eyebrow>{visit.eyebrow}</Eyebrow>
          <h2 className="mb-8 text-[length:clamp(40px,5vw,68px)] leading-none italic">
            Direkt bei uns <span className="text-orange">an der Theke</span>.
          </h2>

          {hours.map((h) => (
            <div key={h.day} className="grid grid-cols-[140px_1fr] items-baseline gap-4 border-b border-ink/10 py-5">
              <span className="font-sans text-[12px] font-semibold tracking-[.18em] text-ink-soft uppercase">{h.day}</span>
              <span className="font-serif text-[22px] text-ink italic">{h.time}</span>
            </div>
          ))}

          <div className="mt-8 flex flex-wrap gap-8">
            <div>
              <small className={`mb-1 block ${label}`}>Festnetz</small>
              <a className={value} href={contact.phone.href}>{contact.phone.label}</a>
            </div>
            <div>
              <small className={`mb-1 block ${label}`}>Mobil</small>
              <a className={value} href={contact.mobile.href}>{contact.mobile.label}</a>
            </div>
            <div>
              <small className={`mb-1 block ${label}`}>Adresse</small>
              <span className={value}>{contact.city}</span>
            </div>
          </div>
        </div>

        <div className="relative min-h-[480px] overflow-hidden rounded-[4px] bg-panel">
          <ImageSlot image={visit.image} fill />
          <div className="absolute right-6 bottom-6 left-6 z-3 rounded-[4px] bg-cream p-6 shadow-float">
            <h4 className="mb-1 font-serif text-[22px] italic">Mehl Fabrik</h4>
            <p className="mt-0 mb-3 text-[14px] text-ink-soft">{contact.zipCity}</p>
            <a href={contact.routeUrl} className="text-[13px] font-bold tracking-[.1em] text-orange uppercase">Route planen →</a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
