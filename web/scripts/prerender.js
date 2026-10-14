// Rendert die App beim Build einmal auf dem Server und schreibt das fertige
// HTML in dist/index.html → sofort sichtbarer Inhalt, gutes SEO, kein leerer
// Bildschirm bis das JS geladen ist.
import { readFile, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const { render } = await import(`${root}dist-ssr/entry-server.js`);

const file = `${root}dist/index.html`;
const template = await readFile(file, 'utf8');
await writeFile(file, template.replace('<!--app-html-->', render()));
await rm(`${root}dist-ssr`, { recursive: true, force: true });

console.log('✓ dist/index.html vorgerendert');
