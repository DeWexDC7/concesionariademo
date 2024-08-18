import express from 'express';
import { getAllLogs, createLog, getLogById, updateLog, deleteLog } from '../controllers/logInformacionClientesController.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Rutas para manejar logs de información de clientes
router.get('/', verifyToken, getAllLogs);
router.post('/', verifyToken, createLog);
router.get('/:id', verifyToken, getLogById);
router.put('/:id', verifyToken, updateLog);
router.delete('/:id', verifyToken, deleteLog);

export default router;
