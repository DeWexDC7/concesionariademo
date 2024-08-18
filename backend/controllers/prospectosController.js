import Prospecto from '../models/prospecto.js';

export const getAllProspectos = async (req, res) => {
  try {
    const prospectos = await Prospecto.findAll();
    res.status(200).json(prospectos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createProspecto = async (req, res) => {
  try {
    const prospecto = await Prospecto.create(req.body);
    res.status(201).json(prospecto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getProspectoById = async (req, res) => {
  try {
    const prospecto = await Prospecto.findByPk(req.params.id);
    if (prospecto) {
      res.status(200).json(prospecto);
    } else {
      res.status(404).json({ message: 'Prospecto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateProspecto = async (req, res) => {
  try {
    const prospecto = await Prospecto.findByPk(req.params.id);
    if (prospecto) {
      await prospecto.update(req.body);
      res.status(200).json(prospecto);
    } else {
      res.status(404).json({ message: 'Prospecto no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteProspecto = async (req, res) => {
  try {
    const prospecto = await Prospecto.findByPk(req.params.id);
    if (prospecto) {
      await prospecto.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Prospecto no encontrado' });
    }
  } catch (error) {
    console.error('Error:', error);    

    res.status(500).json({ error: error.message });
  }
};
