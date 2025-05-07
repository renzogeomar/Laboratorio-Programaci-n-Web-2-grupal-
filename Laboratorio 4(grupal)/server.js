// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

const MARKDOWN_DIR = path.join(__dirname, 'markdowns');

app.use(express.static('public'));
app.use(express.json());

// Listar archivos Markdown
app.get('/api/files', (req, res) => {
    fs.readdir(MARKDOWN_DIR, (err, files) => {
      if (err) return res.status(500).json({ error: 'Error al leer directorio' });
      const mdFiles = files.filter(file => file.endsWith('.md'));
      res.json(mdFiles);
    });
  });