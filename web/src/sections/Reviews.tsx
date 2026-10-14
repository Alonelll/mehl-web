import { Container, Eyebrow, Section } from '../components/ui';
import { review } from '../content/site';

export function Reviews() {
  return (
    <Section className="bg-feature text-center text-on-feature">
      <Container>
        <Eyebrow>{review.eyebrow}</Eyebrow>
        <div className="mb-4 text-[24px] tracking-[4px] text-orange" aria-label="5 von 5 Sternen">★ ★ ★ ★ ★</div>
        <h2 className="mx-auto mt-4 mb-10 max-w-[20ch] text-[length:clamp(36px,4.5vw,60px)] leading-[1.1] italic">{review.headline}</h2>
        <p className="mx-auto mt-0 mb-6 max-w-[26ch] font-serif text-[length:clamp(24px,3vw,34px)] leading-[1.4] italic">{review.quote}</p>
        <p className="my-[1em] font-script text-[26px] text-orange">{review.cite}</p>
      </Container>
    </Section>
  );
}
