const Usuario = require("../models/user.js");

class usuariosController {

    obtenerUsuarios = async (req, res) => {
  try {
    const usuariosCompletos = await Usuario.find();
    let usuarios = [];

    for (let i = 0; i < usuariosCompletos.length; i++) {
      const usuario = {
        nombre: usuariosCompletos[i].nombre,
        apellido: usuariosCompletos[i].apellido,
        correo: usuariosCompletos[i].correo,
        contraseña: usuariosCompletos[i].contraseña,
        descripción: usuariosCompletos[i].descripción,
        telefono: usuariosCompletos[i].telefono
      };

      usuarios.push(usuario);
    }

    if (usuarios.length === 0) {
      res.status(200).send('No hay usuarios en la Base de Datos');
    } else {
      res.status(200).json(usuarios);
    }
  } catch (error) {
    res.status(500).json({ Error: 'Error al obtener usuarios' });
  }; 
}
editarUsuario = async (req, res) => {
  try {
    const { correo, datosActualizados } = req.body;
    const usuario = await Usuario.findOne({ correo });
    console.log(correo)

    if (!usuario) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    await User.findOneAndUpdate({ correo }, datosActualizados, { new: true });

    res.json({ mensaje: 'Usuario editado correctamente' });
  } catch (error) {
    console.error('Error al editar el usuario:', error);
    res.status(500).json({ mensaje: 'Error al editar el usuario' });
  }
};   

};



const usuariosC = new usuariosController();

module.exports = usuariosC;