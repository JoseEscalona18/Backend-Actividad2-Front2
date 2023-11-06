const jwt = require('jsonwebtoken');

const secreto = process.env.JWTPRIVATEKEY;

const decodificarTokenMiddleware = (req, res, next) => {
  // Obtener el token de la cabecera de autorización o de otro lugar en la solicitud
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: 'Token no provisto' });
  }

  try {
    // Verificar y decodificar el token
    const decoded = jwt.verify(token, secreto);

    // Agregar los datos decodificados al objeto de solicitud para su uso posterior en las rutas
    req.usuario = decoded;

    next();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({ message: 'Token inválido' });
    }

    console.error('Error al decodificar el token:', error);
    res.status(500).json({ message: 'Error al decodificar el token' });
  }
};

module.exports = decodificarTokenMiddleware;