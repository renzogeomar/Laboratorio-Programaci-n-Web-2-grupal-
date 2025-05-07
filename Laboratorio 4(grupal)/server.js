// server.js
const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

const MARKDOWN_DIR = path.join(__dirname, 'markdowns');

app.use(express.static('public'));
app.use(express.json());