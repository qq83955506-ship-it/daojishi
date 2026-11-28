// Serves the static countdown page. The built output (dist/) must contain
// everything the app reads at run time, so index.html is copied there.
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import service from './service.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const index = readFile(path.join(here, 'index.html'));

const server = createServer(async (req, res) => {
  try {
    const html = await index;
    res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
    res.end(html);
  } catch (error) {
    res.writeHead(500, { 'content-type': 'text/plain; charset=utf-8' });
    res.end(String(error));
  }
});

server.listen(service.port(), '0.0.0.0');
