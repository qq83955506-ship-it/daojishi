// Copies the app's run-time files into the build output (dist/): the server,
// its service declaration and the static page it serves.
import { copyFileSync, mkdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const dist = path.join(root, 'dist');

mkdirSync(dist, { recursive: true });
for (const file of ['src/server.mjs', 'src/service.mjs', 'index.html']) {
  copyFileSync(path.join(root, file), path.join(dist, path.basename(file)));
}
console.log('Built dist/:', 'server.mjs, service.mjs, index.html');
