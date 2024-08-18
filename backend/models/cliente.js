import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Usuario from './usuario.js';

const Cliente = sequelize.define('Cliente', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre_completo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  numero_documento: {
    type: DataTypes.STRING,
    allowNull: false
  },
  puntaje_credito: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  direccion: {
    type: DataTypes.STRING,
    allowNull: true
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: true
  },
  correo_electronico: {
    type: DataTypes.STRING,
    allowNull: true
  },
  estado_cliente: {
    type: DataTypes.ENUM('Activo', 'Inactivo'),
    defaultValue: 'Activo'
  },
  registrado_por: {
    type: DataTypes.INTEGER,
    references: {
      model: 'usuarios',
      key: 'id'
    }
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'clientes'
});

Cliente.belongsTo(Usuario, { foreignKey: 'registrado_por' });

export default Cliente;
