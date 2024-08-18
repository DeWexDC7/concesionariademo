import LogInformacionCliente from '../models/log_informacion_cliente.js';

export const getAllLogs = async (req, res) => {
  try {
    const logs = await LogInformacionCliente.findAll();
    res.status(200).json(logs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createLog = async (req, res) => {
  try {
    const log = await LogInformacionCliente.create(req.body);
    res.status(201).json(log);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getLogById = async (req, res) => {
  try {
    const log = await LogInformacionCliente.findByPk(req.params.id);
    if (log) {
      res.status(200).json(log);
    } else {
      res.status(404).json({ message: 'Log no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateLog = async (req, res) => {
  try {
    const log = await LogInformacionCliente.findByPk(req.params.id);
    if (log) {
      await log.update(req.body);
      res.status(200).json(log);
    } else {
      res.status(404).json({ message: 'Log no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteLog = async (req, res) => {
  try {
    const log = await LogInformacionCliente.findByPk(req.params.id);
    if (log) {
      await log.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ message: 'Log no encontrado' });
    }
  } catch (error) {
    console.error('Error:', error);    

    res.status(500).json({ error: error.message });
  }
};
