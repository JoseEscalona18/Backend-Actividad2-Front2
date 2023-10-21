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
        const serialEquipos = JSON.stringify(await products.find({serial: serial}))
        if (serialEquipos == '[]'){
            const nuevoproducto = new products({serial, nombre, descripcion, cantidad, precio, categoria, imagen});
            await nuevoproducto.save()
            res.status(201).send('Producto agregado correctamente');

        }else{
            res.status(400).send('Serial de equipo ya registrado');
        }

    } catch (error) {
      res.status(404).json({Error: 'Error al obtener productos'})
    }
  };

  busquedaProductos = async (req, res) => {
    try {

        const serial = req.params.serial;
        const productos = await products.findById(serial);


        if (productos == ''){
            res.status(200).send('No hay productos en la Base de Datos');
        } else {
            res.status(200).send(productos);
        }

    } catch (error) {
      res.status(404).json({Error: 'Error al obtener productos'})
    }
  };

  eliminarProducto = async (req, res) => {
    try {
      const serial = req.body.serial;

      const producto = await products.findOne({ serial });
      if (!producto) {
        return res.status(404).json({ mensaje: 'Producto no encontrado' });
      }

      await products.deleteOne({'serial': serial});

      res.json({ mensaje: 'Producto eliminado correctamente' });
      
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
      res.status(500).json({ mensaje: 'Error al eliminar el producto' });
    }
  };


  editarProducto = async (req, res) => {
    try {
      const { serial, datosActualizados } = req.body;
      const producto = await products.findOne({ serial });
      if (!producto) {
        return res.status(404).json({ mensaje: 'Producto no encontrado' });
      }

      await products.findOneAndUpdate({ serial },datosActualizados,{ new: true })

      res.json({ mensaje: 'Producto editado correctamente' });
      
    } catch (error) {
      console.error('Error al editae el producto:', error);
      res.status(500).json({ mensaje: 'Error al editar el producto' });
    }
  };


}

const productosC = new productosController();

module.exports = productosC;