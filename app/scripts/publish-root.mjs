// Copies the production build (app/dist) to the repository root, which GitHub Pages
// serves as-is ("Deploy from a branch" → main / root). Run via `npm run publish`.
import { cpSync, existsSync, readdirSync, rmSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const app = resolve(import.meta.dirname, '..');
const root = resolve(app, '..');
const dist = join(app, 'dist');

// Remove the previous published copy (only build outputs, never source).
for (const name of ['index.html', 'assets', 'covers', 'favicon.png', 'apple-touch-icon.png']) {
  rmSync(join(root, name), { recursive: true, force: true });
}
for (const name of readdirSync(dist)) {
  if (name === 'covers' && existsSync(join(dist, name, 'README.md'))) rmSync(join(dist, name, 'README.md'));
  cpSync(join(dist, name), join(root, name), { recursive: true });
}
// Serve files exactly as built (skip GitHub's Jekyll processing).
writeFileSync(join(root, '.nojekyll'), '');
console.log('Published app/dist to the repository root.');
