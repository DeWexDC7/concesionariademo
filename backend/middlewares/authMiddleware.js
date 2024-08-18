import jwt from 'jsonwebtoken';

const JWT_SECRET = 'cec5d3ffb11980e4520ec5f01f03071ea0fddc3c6594e2242729f620b457c7e7b658d7e1c94f71dbfaeac11b45d0aa3f78363e8117cccf5d4b046c1041f895c5';  // Define tu secreto aquí

export const verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({ message: 'No se proporcionó un token' });
  }

  try {
    const decoded = jwt.verify(token.split(' ')[1], JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Token inválido' });
  }
};
