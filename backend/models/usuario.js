import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Rol from './rol.js';

const Usuario = sequelize.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre_usuario: {
    type: DataTypes.STRING,
    allowNull: false
  },
  contraseña_usuario: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nombre_completo: {
    type: DataTypes.STRING,
    allowNull: true
  },
  correo_electronico: {
    type: DataTypes.STRING,
    allowNull: true
  },
  numero_telefono: {
    type: DataTypes.STRING,
    allowNull: true
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
  tableName: 'usuarios'
});

Usuario.belongsTo(Rol, { foreignKey: 'id_rol' });

export default Usuario;
