import express from 'express';
import { getAllPagos, createPago, getPagoById, updatePago, deletePago } from '../controllers/pagosController.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Rutas para manejar pagos
router.get('/', verifyToken, getAllPagos);
router.post('/', verifyToken, createPago);
router.get('/:id', verifyToken, getPagoById);
router.put('/:id', verifyToken, updatePago);
router.delete('/:id', verifyToken, deletePago);

export default router;
