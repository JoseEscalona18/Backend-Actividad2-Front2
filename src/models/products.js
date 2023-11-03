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
        data: Buffer, // Campo de tipo Buffer para guardar la imagen
        contentType: String // Tipo de contenido de la imagen (por ejemplo, 'image/jpeg', 'image/png')
    }
},
{
    timestamps: true
});

// Crear el modelo de usuario
const products = model('products', productoEsquema);

// Exportar el modelo de usuario
module.exports = products;