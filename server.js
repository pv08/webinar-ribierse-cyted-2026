const express = require('express');
const path = require('path');
const PROGRAMA = require('./data');

const app = express();
const PORT = process.env.PORT || 3000;

// ---- View engine (EJS) ----
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// ---- Helpers disponíveis em todos os templates ----
// Iniciais para o avatar de fallback quando não há foto.
app.locals.iniciais = function (nome) {
  const partes = String(nome || '')
    .replace(/^(Prof\.|Sr\.|Sra\.|Dr\.|Dra\.)\s*/, '')
    .trim()
    .split(/\s+/);
  if (!partes[0]) return '👤';
  let s = partes[0][0];
  if (partes.length > 1) s += partes[partes.length - 1][0];
  return s.toUpperCase();
};

// ---- Arquivos estáticos ----
app.use('/files', express.static(path.join(__dirname, 'files')));
app.use('/public', express.static(path.join(__dirname, 'public')));

// ---- Rotas ----
app.get('/', (req, res) => {
  res.render('index', { programa: PROGRAMA });
});

// 404 genérico
app.use((req, res) => res.status(404).render('404'));

app.listen(PORT, () => {
  console.log(`Servidor no ar em http://localhost:${PORT}`);
});
