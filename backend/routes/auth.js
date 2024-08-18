import express from 'express';
import { loginSuperAdmin, registerUser, verifyToken } from '../controllers/authController.js';

const router = express.Router();

// Ruta para el login del superadmin
router.post('/login', loginSuperAdmin);

// Ruta para registrar un nuevo usuario
router.post('/register', registerUser);

// Ruta para verificar el token
router.get('/verify', verifyToken);

export default router;
