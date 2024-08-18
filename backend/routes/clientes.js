import express from 'express';
import { getAllClientes, createCliente, getClienteById, updateCliente, deleteCliente } from '../controllers/clientesController.js';
import { verifyToken } from '../middlewares/authMiddleware.js';

const router = express.Router();

// Rutas para manejar clientes
router.get('/', verifyToken, getAllClientes);
router.post('/', verifyToken, createCliente);
router.get('/:id', verifyToken, getClienteById);
router.put('/:id', verifyToken, updateCliente);
router.delete('/:id', verifyToken, deleteCliente);

export default router;
