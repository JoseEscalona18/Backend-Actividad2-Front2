const Usuario = require('../models/user.js'); // Asegúrate de importar correctamente el modelo de usuario
const jwt = require('jsonwebtoken');

const clave = process.env.JWTPRIVATEKEY

const obtenerDatosUsuario = async (req, res) => {
  try {
    const token = req.cookies.token; // Obtén el token de la cookie llamada 'token'

    if (!token) {
      return res.status(401).json({ message: 'Token no provisto' });
    }

    // Verificar y decodificar el token
    const decoded = jwt.verify(token, clave); // Reemplaza 'secret_key' con tu propia clave secreta

    const _id = decoded.id; // Obtén el ID del usuario desde el token decodificado

    // Utiliza el ID del usuario para obtener los datos del usuario desde la base de datos
    const usuario = await Usuario.findById(_id);

    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    return res.json(usuario);
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      return res.status(401).json({ message: 'Token inválido' });
    }

    console.error('Error al obtener los datos del usuario:', error);
    res.status(500).json({ message: 'Error al obtener los datos del usuario' });
  }
};

module.exports = obtenerDatosUsuario;