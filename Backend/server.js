// server.js
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import authRoutes from './authRoutes.js';
import cors from 'cors';  // Füge diese Zeile hinzu

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

// Erlaube Anfragen von allen Domänen
app.use(cors());

mongoose.connect('mongodb://localhost:27017/lagerapp', { useNewUrlParser: true, useUnifiedTopology: true });

// Hauptendpunkte
app.get('/', (req, res) => {
  res.send('Willkommen auf der Hauptseite!');
});

// Authentifizierungsrouten
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
