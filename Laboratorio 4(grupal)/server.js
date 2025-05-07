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

// Obtener contenido de un archivo Markdown
app.get('/api/file/:name', (req, res) => {
    const filePath = path.join(MARKDOWN_DIR, req.params.name);
    fs.readFile(filePath, 'utf8', (err, content) => {
      if (err) return res.status(404).json({ error: 'Archivo no encontrado' });
      res.json({ content });
    });
  });