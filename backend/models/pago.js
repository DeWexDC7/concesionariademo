import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Cliente from './cliente.js';
import Usuario from './usuario.js';

const Pago = sequelize.define('Pago', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  monto: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  fecha_pago: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  observaciones: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  id_cliente: {
    type: DataTypes.INTEGER,
    references: {
      model: 'clientes',
      key: 'id'
    }
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
  tableName: 'pagos'
});

Pago.belongsTo(Cliente, { foreignKey: 'id_cliente' });
Pago.belongsTo(Usuario, { foreignKey: 'registrado_por' });

export default Pago;
