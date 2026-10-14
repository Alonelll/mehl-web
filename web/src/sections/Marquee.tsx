import { marquee } from '../content/site';

export function Marquee() {
  // Inhalt doppelt rendern → nahtlose Endlosschleife bei translateX(-50%)
  const items = [...marquee, ...marquee];
  return (
    <div className="overflow-hidden border-b border-on-panel/10 bg-panel py-5 text-on-panel">
      <div className="flex animate-marquee gap-[60px] whitespace-nowrap">
        {items.map((text, i) => (
          <span
            key={i}
            aria-hidden={i >= marquee.length || undefined}
            className="inline-flex items-center gap-[60px] font-serif text-[28px] italic after:text-orange after:not-italic after:content-['✦']"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
