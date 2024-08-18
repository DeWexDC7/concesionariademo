import express from 'express';
import { getAllUsuarios, createUsuario, getUsuarioById, updateUsuario, deleteUsuario } from '../controllers/usuariosController.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Rutas para manejar usuarios
router.get('/', verifyToken, getAllUsuarios);
router.post('/', verifyToken, createUsuario);
router.get('/:id', verifyToken, getUsuarioById);
router.put('/:id', verifyToken, updateUsuario);
router.delete('/:id', verifyToken, deleteUsuario);

export default router;
