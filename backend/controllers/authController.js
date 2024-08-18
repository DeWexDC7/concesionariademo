import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Usuario from '../models/usuario.js';

const JWT_SECRET = process.env.JWT_SECRET || 'cec5d3ffb11980e4520ec5f01f03071ea0fddc3c6594e2242729f620b457c7e7b658d7e1c94f71dbfaeac11b45d0aa3f78363e8117cccf5d4b046c1041f895c5';  // Asegúrate de tener el secreto bien configurado en variables de entorno

export const loginSuperAdmin = async (req, res) => {
  const { nombre_usuario, contraseña_usuario } = req.body;

  try {
    // Buscar el usuario en la base de datos
    const usuario = await Usuario.findOne({ where: { nombre_usuario, id_rol: 1 } });
    if (!usuario) {
      console.log('Usuario no encontrado o no es SuperAdmin:', nombre_usuario);
      return res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
    }

    // Verificar la contraseña
    const validPassword = await bcrypt.compare(contraseña_usuario, usuario.contraseña_usuario);
    if (!validPassword) {
      console.log('Contraseña incorrecta para el usuario:', nombre_usuario);
      return res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
    }

    // Generar el token JWT
    const token = jwt.sign({ id_usuario: usuario.id_usuario, id_rol: usuario.id_rol }, JWT_SECRET, { expiresIn: '1h' });
    console.log('Token generado para el usuario:', nombre_usuario);
    res.status(200).json({ token });
  } catch (error) {
    console.error('Error en el proceso de login:', error);  // Para depurar el error
    res.status(500).json({ message: 'Error en el servidor', error: error.message });
  }
};

export const registerUser = async (req, res) => {
  const { nombre_usuario, contraseña_usuario, nombre_completo, correo_electronico, numero_telefono, id_rol } = req.body;

  try {
    // Verificar si el usuario ya existe
    const existingUser = await Usuario.findOne({ where: { nombre_usuario } });
    if (existingUser) {
      console.log('Intento de registro con nombre de usuario ya existente:', nombre_usuario);
      return res.status(400).json({ message: 'El nombre de usuario ya está en uso' });
    }

    // Encriptar la contraseña
    const hashedPassword = await bcrypt.hash(contraseña_usuario, 10);
    console.log('Contraseña encriptada para el nuevo usuario:', nombre_usuario);

    // Crear el nuevo usuario
    const usuario = await Usuario.create({
      nombre_usuario,
      contraseña_usuario: hashedPassword,
      nombre_completo,
      correo_electronico,
      numero_telefono,
      id_rol
    });

    console.log('Usuario registrado con éxito:', nombre_usuario);
    res.status(201).json({ message: 'Usuario registrado con éxito', usuario });
  } catch (error) {
    console.error('Error en el proceso de registro:', error);  // Para depurar el error
    res.status(500).json({ message: 'Error en el servidor', error: error.message });
  }
};

export const verifyToken = (req, res) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(403).json({ message: 'No se proporcionó un token' });
  }

  const token = authHeader.split(' ')[1];  // Extraer el token después de "Bearer"
  
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    console.log('Token válido para el usuario:', decoded.id_usuario);
    res.status(200).json({ message: 'Token válido', user: req.user });
  } catch (error) {
    console.error('Token inválido:', error);  // Para depurar el error
    return res.status(401).json({ message: 'Token inválido' });
  }
};
