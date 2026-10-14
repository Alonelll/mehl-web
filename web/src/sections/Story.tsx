import { ImageSlot } from '../components/ImageSlot';
import { Container, Eyebrow, Section } from '../components/ui';
import { story } from '../content/site';
import { cn } from '../lib/cn';

export function Story() {
  return (
    <Section id="story" className="bg-bg">
      <Container className="grid grid-cols-[1fr_1.1fr] items-center gap-20 max-lg:grid-cols-1 max-lg:gap-10">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[4px]">
          <ImageSlot image={story.image} />
          <div className="absolute -right-10 -bottom-10 z-3 flex size-[180px] animate-spin-badge flex-col items-center justify-center rounded-full bg-orange p-5 text-center text-white shadow-badge">
            <span className="font-serif text-[26px] leading-none italic">{story.badge.top}</span>
            <small className="mt-1.5 font-sans text-[10px] tracking-[.2em] uppercase">{story.badge.small}</small>
            <span className="font-serif text-[36px] leading-none italic">{story.badge.year}</span>
          </div>
        </div>

        <div>
          <Eyebrow>{story.eyebrow}</Eyebrow>
          <h2 className="mt-5 mb-6 text-[length:clamp(40px,5vw,68px)] leading-[1.05] italic">
            Von der Fabrik <em className="text-green italic">direkt zu dir</em>.
          </h2>
          {story.paragraphs.map((p, i) => (
            <p key={p} className={cn('my-[1em] max-w-[52ch] text-[17px] leading-[1.7] text-ink-soft', i > 0 && 'mt-[18px]')}>
              {p}
            </p>
          ))}
          <span className="mt-8 block font-script text-[34px] text-ink">{story.signature}</span>
        </div>
      </Container>
    </Section>
  );
}
