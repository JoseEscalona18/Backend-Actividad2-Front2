const bcrypt = require("bcrypt");
const Usuario = require("../models/user.js");

const register = async (req, res) => {
  const { nombre, apellido, correo, contraseña } = req.body;

  Usuario.findOne({ correo }).then((usuario) => {
    if (usuario) {
      return res.json({ mensaje: "Ya existe un usuario con ese correo" });
    } else if (!nombre || !apellido || !correo || !contraseña) { // Se agrega la validación para el campo "apellido"
      return res.json({ mensaje: "Falta el nombre / apellido / correo / contraseña" });
    } else {
      bcrypt.hash(contraseña, 10, (error, contraseñaHasheada) => {
        if (error) res.json({ error });
        else {
          const nuevoUsuario = new Usuario({
            nombre,
            apellido, // Se agrega el campo "apellido" al nuevo usuario
            correo,
            contraseña: contraseñaHasheada,
          });

          nuevoUsuario
            .save()
            .then((usuario) => {
              res.json({ mensaje: "Usuario creado correctamente", usuario });
            })
            .catch((error) => console.error(error));
        }
      });
    }
  });
};

module.exports = register;