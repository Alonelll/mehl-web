/**
 * Alle pflegbaren Inhalte der Seite an einem Ort.
 * Texte, Preise, Öffnungszeiten oder Bilder ändern? → Nur diese Datei anfassen.
 *
 * Bilder: Datei nach `src/assets/images/` legen, oben importieren und beim
 * passenden Eintrag als `image` setzen. Ohne Bild wird der Platzhalter angezeigt.
 */

export type Image = { src?: string; alt: string };

export const contact = {
  phone: { label: '04261 / 41 969 17', href: 'tel:0426141969917' },
  mobile: { label: '01520 / 31 55 989', href: 'tel:0152031555989' },
  city: 'Rotenburg (Wümme)',
  zipCity: '27356 Rotenburg (Wümme)',
  routeUrl: '#',
};

export const links = {
  order: '#',
  fullMenu: '#',
  appStore: '#',
  googlePlay: '#',
};

export const nav = [
  { label: 'Über uns', href: '#story' },
  { label: 'Speisekarte', href: '#menu' },
  { label: 'Galerie', href: '#gallery' },
  { label: 'App', href: '#app' },
  { label: 'Besuchen', href: '#visit' },
];

export const hero = {
  eyebrow: '✦ Frisch aus dem Steinofen',
  sub: 'Handgemacht, mit frischen Zutaten und viel Zeit. Zum Abholen, zur Lieferung — oder direkt bei uns in Rotenburg.',
  image: { alt: 'Hero-Foto (Pizza aus dem Ofen, dunkel, warmes Licht)' } as Image,
};

export const marquee = [
  'Frisch belegt',
  'Steinofen · 380°C',
  'Täglich gebacken',
  'Lieferung 30 min',
  'Original italienisch',
];

export const story = {
  eyebrow: 'Unsere Geschichte',
  paragraphs: [
    'In der Mehl Fabrik geht\'s nicht um Schnelligkeit — es geht um Zeit. Zeit, die der Teig braucht, um zu reifen. Zeit, die Tomaten brauchen, um süß zu werden. Zeit, die wir uns nehmen, damit jede Pizza wie eine eigene wird.',
    'Frische Zutaten aus der Region, italienische Handwerkskunst, ein 380 Grad heißer Steinofen. Kein Schnickschnack — nur ehrliches Essen, das schmeckt.',
  ],
  signature: '— Familie Mehl Fabrik',
  badge: { top: 'Seit', small: '2019 · Rotenburg', year: "'19" },
  image: { alt: 'Foto: Pizzabäcker, Teig, Ofen' } as Image,
};

export const menuCategories = ['Pizza', 'Pasta', 'Baguette', 'Salate', 'Desserts'] as const;
export type MenuCategory = (typeof menuCategories)[number];

export type Dish = {
  name: string;
  price: string;
  description: string;
  category: MenuCategory;
  /** `accent: true` → orangefarbener Tag (z. B. „Scharf“, „Neu“) */
  tags: { label: string; accent?: boolean }[];
  image: Image;
};

export const dishes: Dish[] = [
  {
    name: 'Margherita',
    price: '8,50 €',
    description: 'Tomate, Fior di Latte, frisches Basilikum, kaltgepresstes Olivenöl.',
    category: 'Pizza',
    tags: [{ label: 'Klassiker' }, { label: 'Vegetarisch' }],
    image: { alt: 'Pizza Margherita von oben' },
  },
  {
    name: 'Diavola',
    price: '10,90 €',
    description: 'Tomate, Mozzarella, scharfe Salami, Chili, Oregano, Peperoni.',
    category: 'Pizza',
    tags: [{ label: 'Scharf', accent: true }, { label: 'Beliebt' }],
    image: { alt: 'Pizza Diavola' },
  },
  {
    name: 'Tartufo',
    price: '13,90 €',
    description: 'Trüffelcreme, Mozzarella, Champignons, Rucola, Parmigiano.',
    category: 'Pizza',
    tags: [{ label: 'Neu', accent: true }],
    image: { alt: 'Pizza Tartufo mit Rucola' },
  },
  {
    name: 'Carbonara',
    price: '11,50 €',
    description: 'Guanciale, Pecorino Romano, Eigelb, schwarzer Pfeffer — ohne Sahne.',
    category: 'Pasta',
    tags: [{ label: 'Pasta' }],
    image: { alt: 'Pasta Carbonara' },
  },
  {
    name: 'Salami Speciale',
    price: '7,90 €',
    description: 'Salami, Mozzarella, Tomate, Zwiebel, Peperoni — überbacken.',
    category: 'Baguette',
    tags: [{ label: 'Baguette' }],
    image: { alt: 'Baguette überbacken' },
  },
  {
    name: 'Tiramisu',
    price: '4,50 €',
    description: 'Mascarpone, Espresso, Löffelbiskuit, Marsala, Kakao.',
    category: 'Desserts',
    tags: [{ label: 'Hausgemacht' }],
    image: { alt: 'Tiramisu' },
  },
];

export const gallery = {
  eyebrow: 'Aus der Fabrik',
  text: 'Alles frisch, alles bei uns. Der Teig ruht 24 Stunden, die Tomaten kommen ganz aus Italien, der Basilikum aus dem eigenen Topf.',
  /** Reihenfolge = Mosaik-Position: 1 groß links, 2 + 3 klein, 4 breit */
  images: [
    { alt: 'Pizza im Ofen, Feuer' },
    { alt: 'Teigkugel' },
    { alt: 'Frische Zutaten' },
    { alt: 'Fertige Pizza, Draufsicht' },
  ] as Image[],
};

export const promo = {
  code: 'MEHL3',
  amount: '3€',
  ticker: '✦ Boom · 3€ Rabatt in der App ✦ Nur diese Woche ✦ Code MEHL3 ✦ Boom · 3€ Rabatt in der App ✦ Nur diese Woche ✦ Code MEHL3',
  kicker: '✦ Boom! Angebot der Woche',
  text: 'Erste Bestellung über die Mehl Fabrik App? Wir schenken dir 3€ Rabatt auf deinen Warenkorb. Ab 15€ Mindestbestellwert.',
};

export const app = {
  eyebrow: 'Mehl Fabrik App',
  text: 'Speisekarte, Warenkorb, Bezahlung — alles in einer App. Keine Wartezeit am Telefon, keine Missverständnisse, immer die aktuellen Angebote.',
  features: [
    'Bestellhistorie & Lieblingsgerichte speichern',
    'Live-Status: Bestellt · Im Ofen · Unterwegs · Da',
    'Exklusive App-Rabatte & Treuepunkte',
    'Kontaktlos zahlen mit Karte, PayPal oder Apple Pay',
  ],
};

export const review = {
  eyebrow: 'Was Gäste sagen',
  headline: '4,8 von 5 bei über 300 Bewertungen.',
  quote: '„Beste Pizza in Rotenburg. Teig perfekt, Zutaten frisch, Lieferung immer pünktlich."',
  cite: '— Sabine · Google Review',
};

export const hours = [
  { day: 'Mo – Do', time: '11:00 – 22:00' },
  { day: 'Fr – Sa', time: '11:00 – 23:00' },
  { day: 'Sonntag', time: '12:00 – 22:00' },
  { day: 'Feiertage', time: 'nach Ankündigung' },
];

export const visit = {
  eyebrow: 'Komm vorbei',
  image: { alt: 'Karte / Foto vom Restaurant außen' } as Image,
};

export const footer = {
  about: 'Handgemachte Pizza, Pasta und Baguettes. Frisch aus dem Steinofen — jeden Tag ab 11:00.',
  menu: [
    { label: 'Pizza', href: '#menu' },
    { label: 'Pasta', href: '#menu' },
    { label: 'Baguette', href: '#menu' },
    { label: 'Getränke', href: '#menu' },
  ],
  info: [
    { label: 'Über uns', href: '#story' },
    { label: 'Öffnungszeiten', href: '#visit' },
    { label: 'Lieferung', href: '#' },
    { label: 'Catering', href: '#' },
  ],
  legal: [
    { label: 'Impressum', href: '#' },
    { label: 'Datenschutz', href: '#' },
    { label: 'AGB', href: '#' },
  ],
  copyright: '© 2026 Mehl Fabrik. Alle Rechte vorbehalten.',
};
