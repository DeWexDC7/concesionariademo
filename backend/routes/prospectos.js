import express from 'express';
import { getAllProspectos, createProspecto, getProspectoById, updateProspecto, deleteProspecto } from '../controllers/prospectosController.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Rutas para manejar prospectos
router.get('/', verifyToken, getAllProspectos);
router.post('/', verifyToken, createProspecto);
router.get('/:id', verifyToken, getProspectoById);
router.put('/:id', verifyToken, updateProspecto);
router.delete('/:id', verifyToken, deleteProspecto);

export default router;
