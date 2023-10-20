const {Schema, model} = require('mongoose');

const productoEsquema = new Schema({
    serial: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    cantidad: {
        type: Number,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    imagen: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

// Crear el modelo de usuario
const products = model('products', productoEsquema);

// Exportar el modelo de usuario
module.exports = products;