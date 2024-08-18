import express from 'express';
import { getAllRoles, createRol, getRolById, updateRol, deleteRol } from '../controllers/rolesController.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Rutas para manejar roles
router.get('/', verifyToken, getAllRoles);
router.post('/', verifyToken, createRol);
router.get('/:id', verifyToken, getRolById);
router.put('/:id', verifyToken, updateRol);
router.delete('/:id', verifyToken, deleteRol);

export default router;
