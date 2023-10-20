const products = require('../models/products');


class productosController {

    obtenerProductos = async (req, res) => {
    try {

        const productos = await products.find()

        if (productos == ''){
            res.status(200).send('No hay productos en la Base de Datos');
        } else {
            res.status(200).send(productos);
        }

    } catch (error) {
      res.status(404).json({Error: 'Error al obtener productos'})
    }
  };

  agregarProductos = async (req, res) => {
    try {

        const {serial, nombre, descripcion, cantidad, precio, imagen, categoria} = req.body;

        console.log({serial, nombre, descripcion, cantidad, precio, imagen, categoria})

        const nuevoproducto = new products({serial, nombre, descripcion, cantidad, precio, categoria, imagen});
        await nuevoproducto.save()

        res.status(200).send('Producto agregado correctamente');


    } catch (error) {
      res.status(404).json({Error: 'Error al obtener productos'})
    }
  };

}

const productosC = new productosController();

module.exports = productosC;