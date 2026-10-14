import { useState } from 'react';
import { ImageSlot } from '../components/ImageSlot';
import { Button, Container, Eyebrow, Section } from '../components/ui';
import { dishes, links, menuCategories, type Dish, type MenuCategory } from '../content/site';
import { cn } from '../lib/cn';

function DishCard({ dish }: { dish: Dish }) {
  return (
    <article className="group flex flex-col gap-4 transition-[translate] duration-300 hover:-translate-y-2">
      <div className="relative aspect-square overflow-hidden rounded-full border-4 border-on-panel/5 group-hover:border-orange">
        <ImageSlot image={dish.image} shape="circle" />
      </div>
      <div className="flex flex-wrap gap-2">
        {dish.tags.map((t) => (
          <span
            key={t.label}
            className={cn(
              'rounded-full border px-2.5 py-1 text-[10px] font-semibold tracking-[.15em] uppercase',
              t.accent ? 'border-orange/60 text-orange' : 'border-green/40 text-green',
            )}
          >
            {t.label}
          </span>
        ))}
      </div>
      <div className="flex items-baseline justify-between gap-3 border-t border-dashed border-on-panel/20 pt-2">
        <h3 className="font-serif text-[28px] italic">{dish.name}</h3>
        <span className="font-serif text-[24px] font-bold text-orange">{dish.price}</span>
      </div>
      <p className="my-[1em] text-[14px] leading-[1.6] text-on-panel/70">{dish.description}</p>
    </article>
  );
}

export function Menu() {
  // Wie im Design: Der Tab markiert nur die Auswahl, der Auszug zeigt alle Gerichte.
  // Für echtes Filtern: `dishes.filter((d) => d.category === active)` rendern.
  const [active, setActive] = useState<MenuCategory>('Pizza');

  return (
    <Section
      id="menu"
      className="relative overflow-hidden bg-panel text-on-panel before:pointer-events-none before:absolute before:-top-[100px] before:-right-[100px] before:size-[400px] before:rounded-full before:bg-radial/srgb before:from-green/15 before:to-transparent before:to-70%"
    >
      <Container>
        <div className="mb-20 text-center max-lg:mb-12">
          <Eyebrow>Unsere Spezialitäten</Eyebrow>
          <h2 className="mt-3 mb-5 font-serif text-[length:clamp(48px,7vw,88px)] leading-none italic">
            Aus dem <span className="text-green">Ofen</span>,<br />
            <em>mit Liebe</em>.
          </h2>
          <p className="mx-auto my-0 max-w-[52ch] text-[17px] leading-[1.6] text-on-panel/70">
            Ein Auszug aus unserer Karte. Vollständige Auswahl mit allen Belägen, Zusatzstoffen und Allergen-Kennzeichen findest du im Bestellsystem.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap justify-center gap-3" role="tablist">
          {menuCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={cat === active}
              onClick={() => setActive(cat)}
              className={cn(
                'cursor-pointer rounded-full border px-6 py-3 font-sans text-[13px] font-semibold tracking-[.12em] uppercase transition-all duration-200',
                cat === active
                  ? 'border-orange bg-orange text-white'
                  : 'border-on-panel/20 bg-transparent text-on-panel hover:border-orange hover:text-orange',
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-10 max-lg:grid-cols-1 max-lg:gap-8">
          {dishes.map((dish) => <DishCard key={dish.name} dish={dish} />)}
        </div>

        <div className="mt-16 text-center">
          <Button href={links.fullMenu}>Vollständige Karte →</Button>
        </div>
      </Container>
    </Section>
  );
}
