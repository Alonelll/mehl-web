import { ImageSlot } from '../components/ImageSlot';
import { Container, Eyebrow, Section } from '../components/ui';
import { gallery } from '../content/site';
import { cn } from '../lib/cn';

/** Position im Mosaik: 1 groß links, 2 + 3 klein, 4 breit (mobil: 1 und 4 volle Breite) */
const cellClass = [
  'col-[1/span_2] row-[1/span_2] max-sm:col-[1/-1] max-sm:row-auto max-sm:h-[300px]',
  '',
  '',
  'col-[3/span_2] max-sm:col-[1/-1]',
];

export function Gallery() {
  return (
    <Section id="gallery" className="bg-bg-warm">
      <Container>
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>{gallery.eyebrow}</Eyebrow>
            <h2 className="max-w-[14ch] text-[length:clamp(40px,5vw,68px)] italic">
              Ein Blick <em className="text-green">hinter</em> den Ofen.
            </h2>
          </div>
          <p className="my-4 max-w-[40ch] text-[16px] leading-[1.6] text-ink-soft">{gallery.text}</p>
        </div>

        <div className="grid grid-cols-4 grid-rows-[240px_240px] gap-4 max-sm:grid-cols-2 max-sm:grid-rows-[auto]">
          {gallery.images.map((img, i) => (
            <div
              key={i}
              className={cn(
                'relative overflow-hidden rounded-[4px]',
                'after:pointer-events-none after:absolute after:inset-0 after:bg-ink/0 after:transition-colors after:duration-300 hover:after:bg-ink/20',
                cellClass[i],
              )}
            >
              <ImageSlot image={img} />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
