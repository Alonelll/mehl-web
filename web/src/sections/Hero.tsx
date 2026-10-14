import { ImageSlot } from '../components/ImageSlot';
import { Button } from '../components/ui';
import { hero, links } from '../content/site';

export function Hero() {
  return (
    <header className="relative flex h-screen min-h-[640px] items-end overflow-hidden text-cream">
      <div className="absolute inset-0 after:pointer-events-none after:absolute after:inset-0 after:bg-linear-to-b/srgb after:from-ink/55 after:via-ink/35 after:via-40% after:to-ink/92">
        <ImageSlot image={hero.image} priority />
      </div>

      <div className="relative z-2 mx-auto w-full max-w-[1280px] px-8 pb-20 max-lg:pb-[60px]">
        <span className="mb-2 inline-block -rotate-2 font-script text-[32px] font-bold text-orange">{hero.eyebrow}</span>
        <h1 className="mb-6 max-w-[12ch] font-serif text-[length:clamp(48px,8vw,108px)] leading-[1.25] font-bold italic">
          Pizza. <span className="text-green not-italic">Pasta.</span>
          <br />
          <span className="text-orange not-italic">Baguette.</span>
        </h1>
        <p className="mt-0 mb-9 max-w-[42ch] text-[18px] leading-[1.5] text-cream/85">{hero.sub}</p>
        <div className="flex flex-wrap gap-4">
          <Button href={links.order}>Jetzt bestellen →</Button>
          <Button href="#menu" variant="outline">Speisekarte ansehen</Button>
        </div>
      </div>

      <div className="absolute right-8 bottom-8 z-2 flex items-center gap-3 font-sans text-[11px] tracking-[.2em] text-cream/60 uppercase [writing-mode:vertical-rl] after:h-10 after:w-px after:animate-scroll-line after:bg-cream/40">
        Scroll
      </div>
    </header>
  );
}
