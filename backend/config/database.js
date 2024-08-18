import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('concesionaria', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',  // O 'mariadb' si estás usando MariaDB
  port: 3306,        // Verifica que este sea el puerto correcto
});

export default sequelize;
