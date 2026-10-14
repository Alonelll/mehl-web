import type { ComponentProps } from 'react';
import { cn } from '../lib/cn';

/** Zentrierte Inhaltsbreite (1280px + 32px Rand) */
export function Container({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn('mx-auto max-w-[1280px] px-8', className)} {...props} />;
}

type SectionProps = ComponentProps<'section'> & {
  /** Standard-Abstand oben/unten (120px, mobil 80px) */
  padded?: boolean;
  /** beim Scrollen einblenden */
  fade?: boolean;
};

export function Section({ className, padded = true, fade = true, ...props }: SectionProps) {
  return <section className={cn(padded && 'py-[120px] max-lg:py-20', fade && 'fade', className)} {...props} />;
}

/** Handschriftliche Überzeile mit Strich davor */
export function Eyebrow({ className, ...props }: ComponentProps<'span'>) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2.5 font-script text-[24px] font-bold text-orange',
        'before:inline-block before:h-0.5 before:w-8 before:bg-orange',
        className,
      )}
      {...props}
    />
  );
}

const buttonVariants = {
  primary: 'bg-orange text-white shadow-btn hover:-translate-y-0.5 hover:bg-orange-hover hover:shadow-btn-hover',
  outline: 'border-2 border-cream bg-transparent text-cream hover:bg-cream hover:text-ink',
  dark: 'bg-ink text-cream hover:-translate-y-0.5 hover:bg-green-deep',
};

/** Runder Call-to-Action als Link */
export function Button({ variant = 'primary', className, ...props }: ComponentProps<'a'> & { variant?: keyof typeof buttonVariants }) {
  return (
    <a
      className={cn(
        'inline-flex cursor-pointer items-center gap-2.5 rounded-full px-[26px] py-3.5 font-sans text-[14px] font-bold tracking-[.1em] uppercase',
        'transition-[translate,box-shadow,background-color] duration-200',
        buttonVariants[variant],
        className,
      )}
      {...props}
    />
  );
}
