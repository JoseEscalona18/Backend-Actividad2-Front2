const { model, Schema } = require("mongoose");

const UsuarioSchema = new Schema({
  nombre: { type: String, required: true },
  apellido: {type: String, required: true},
  correo: { type: String, required: true, unique: true },
  contraseña: { type: String, required: true },
  descripción: { type: String },
  telefono: {type: Number},
});

const usuarios = model("Usuario", UsuarioSchema);

module.exports = usuarios