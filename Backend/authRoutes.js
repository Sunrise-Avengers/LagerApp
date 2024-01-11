// authRoutes.js
import express from 'express';
import authController from './authController.js'; // Passe den Pfad entsprechend an

const router = express.Router();

// Authentifizierungsendpunkt
router.post('/login', authController.login);

export default router;
