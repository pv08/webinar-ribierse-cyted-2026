/*
 * Gera a versão estática do site em ./dist (para o GitHub Pages).
 * Renderiza os templates EJS para HTML e copia os assets (public/ e files/).
 * Rode com: npm run build
 */
const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const PROGRAMA = require('./data');

const ROOT = __dirname;
const VIEWS = path.join(ROOT, 'views');
const OUT = path.join(ROOT, 'dist');

// Mesmo helper usado pelo servidor (iniciais para avatar de fallback).
function iniciais(nome) {
  const partes = String(nome || '')
    .replace(/^(Prof\.|Sr\.|Sra\.|Dr\.|Dra\.)\s*/, '')
    .trim()
    .split(/\s+/);
  if (!partes[0]) return '👤';
  let s = partes[0][0];
  if (partes.length > 1) s += partes[partes.length - 1][0];
  return s.toUpperCase();
}

async function build() {
  // Limpa e recria a pasta de saída.
  fs.rmSync(OUT, { recursive: true, force: true });
  fs.mkdirSync(OUT, { recursive: true });

  // Renderiza as páginas.
  const index = await ejs.renderFile(path.join(VIEWS, 'index.ejs'), {
    programa: PROGRAMA,
    iniciais,
  });
  fs.writeFileSync(path.join(OUT, 'index.html'), index);

  const notFound = await ejs.renderFile(path.join(VIEWS, '404.ejs'), {});
  fs.writeFileSync(path.join(OUT, '404.html'), notFound);

  // Copia os assets.
  fs.cpSync(path.join(ROOT, 'public'), path.join(OUT, 'public'), { recursive: true });
  fs.cpSync(path.join(ROOT, 'files'), path.join(OUT, 'files'), { recursive: true });

  // Impede o Jekyll de processar o site (boa prática no GitHub Pages).
  fs.writeFileSync(path.join(OUT, '.nojekyll'), '');

  console.log('✅ Build estático gerado em ./dist');
}

build().catch((err) => {
  console.error('Falha no build:', err);
  process.exit(1);
});
