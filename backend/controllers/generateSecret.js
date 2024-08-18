import crypto from 'crypto';

const generateJWTSecret = () => {
  return crypto.randomBytes(64).toString('hex');
};

const JWT_SECRET = generateJWTSecret();
console.log(JWT_SECRET);