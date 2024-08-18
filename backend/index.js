import express from 'express';
import cors from 'cors';  // Importa el middleware cors
import sequelize from './config/database.js';

import authRoutes from './routes/auth.js';
import usuariosRoutes from './routes/usuarios.js';
import rolesRoutes from './routes/roles.js';
import clientesRoutes from './routes/clientes.js';
import pagosRoutes from './routes/pagos.js';
import prospectosRoutes from './routes/prospectos.js';
import logsRoutes from './routes/logs.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Habilitar CORS para permitir solicitudes desde el frontend en http://localhost:3001
app.use(cors({
  origin: 'http://localhost:3001'  // Permitir solicitudes desde este origen
}));

app.use(express.json());

app.use('/auth', authRoutes);
app.use('/usuarios', usuariosRoutes);
app.use('/roles', rolesRoutes);
app.use('/clientes', clientesRoutes);
app.use('/pagos', pagosRoutes);
app.use('/prospectos', prospectosRoutes);
app.use('/logs', logsRoutes);

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
  });
}).catch(error => {
  console.error('Error al sincronizar la base de datos:', error);
});
