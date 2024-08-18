import Rol from '../models/rol.js';

export const getAllRoles = async (req, res) => {
  try {
    const roles = await Rol.findAll();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createRol = async (req, res) => {
  try {
    const rol = await Rol.create(req.body);
    res.status(201).json(rol);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getRolById = async (req, res) => {
  try {
    const rol = await Rol.findByPk(req.params.id);
    if (rol) {
      res.status(200).json(rol);
    } else {
      res.status(404).json({ message: 'Rol no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateRol = async (req, res) => {
  try {
    const rol = await Rol.findByPk(req.params.id);
    if (rol) {
      await rol.update(req.body);
      res.status(200).json(rol);
    } else {
      res.status(404).json({ message: 'Rol no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteRol = async (req, res) => {
  try {
    const rol = await Rol.findByPk(req.params.id);
    if (rol) {
      await rol.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Rol no encontrado' });
    }
  } catch (error) {
    console.error('Error:', error);    

    res.status(500).json({ error: error.message });
  }
};
