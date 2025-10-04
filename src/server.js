// src/server.js
const express = require('express');
const cors = require('cors');
const { addition } = require('./app');

const app = express();
app.use(cors());
const port = 3000;

// Route pour l'addition
app.get('/addition', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);
  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: 'Paramètres a et b doivent être des nombres' });
  }
  const result = addition(a, b);
  res.json({ result });
});

// Route par défaut
app.get('/', (req, res) => {
  res.json({ message: 'Bienvenue sur l\'API d\'addition' });
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});