import type { Image } from '../content/site';
import { cn } from '../lib/cn';

type Props = {
  image: Image;
  shape?: 'rect' | 'circle';
  /** true für Bilder im ersten Viewport (Hero) */
  priority?: boolean;
  /** absolut über den ganzen Eltern-Container legen */
  fill?: boolean;
};

/** Zeigt das Bild – oder, solange keins hinterlegt ist, den Platzhalter aus dem Design. */
export function ImageSlot({ image, shape = 'rect', priority = false, fill = false }: Props) {
  const round = shape === 'circle' && 'rounded-full';

  return (
    <div
      className={cn(
        fill ? 'absolute inset-0' : 'relative',
        'block aspect-[3/2] size-full overflow-hidden bg-slot/8 font-ui text-[13px] leading-[1.3]',
        round,
      )}
    >
      {image.src ? (
        <img
          className="absolute inset-0 size-full object-cover"
          src={image.src}
          alt={image.alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
        />
      ) : (
        <div
          role="img"
          aria-label={image.alt}
          className={cn(
            'absolute inset-0 flex flex-col items-center justify-center gap-1.5 p-3 text-center select-none',
            'after:pointer-events-none after:absolute after:inset-0 after:rounded-[inherit] after:border-[1.5px] after:border-dashed after:border-current after:opacity-35',
            round,
          )}
        >
          <svg className="opacity-45" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="m21 15-5-5L5 21" />
          </svg>
          <div className="max-w-[90%] font-medium tracking-[.01em] opacity-75">{image.alt}</div>
        </div>
      )}
    </div>
  );
}
