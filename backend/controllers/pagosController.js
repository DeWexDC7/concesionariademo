import Pago from '../models/pago.js';

export const getAllPagos = async (req, res) => {
  try {
    const pagos = await Pago.findAll();
    res.status(200).json(pagos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createPago = async (req, res) => {
  try {
    const pago = await Pago.create(req.body);
    res.status(201).json(pago);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPagoById = async (req, res) => {
  try {
    const pago = await Pago.findByPk(req.params.id);
    if (pago) {
      res.status(200).json(pago);
    } else {
      res.status(404).json({ message: 'Pago no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updatePago = async (req, res) => {
  try {
    const pago = await Pago.findByPk(req.params.id);
    if (pago) {
      await pago.update(req.body);
      res.status(200).json(pago);
    } else {
      res.status(404).json({ message: 'Pago no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deletePago = async (req, res) => {
  try {
    const pago = await Pago.findByPk(req.params.id);
    if (pago) {
      await pago.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Pago no encontrado' });
    }
  } catch (error) {
    console.error('Error:', error);    

    res.status(500).json({ error: error.message });
  }
};
