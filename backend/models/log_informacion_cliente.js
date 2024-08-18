import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Cliente from './cliente.js';
import Usuario from './usuario.js';

const LogInformacionCliente = sequelize.define('LogInformacionCliente', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  cambio_realizado: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  fecha_cambio: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  id_cliente: {
    type: DataTypes.INTEGER,
    references: {
      model: 'clientes',
      key: 'id'
    }
  },
  cambiado_por: {
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
  tableName: 'loginformacionclientes'
});

LogInformacionCliente.belongsTo(Cliente, { foreignKey: 'id_cliente' });
LogInformacionCliente.belongsTo(Usuario, { foreignKey: 'cambiado_por' });

export default LogInformacionCliente;
