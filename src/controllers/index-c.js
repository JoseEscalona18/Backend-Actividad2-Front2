const { json } = require('body-parser');
const products = require('../models/products');

const sharp = require('sharp');
const { Binary } = require('mongodb');

class productosController {
  obtenerProductos = async (req, res) => {
    try {
      const productoscom = await products.find();
      let imagenCompleta
      let data
      let productos = []

      for(let i = 0; i<productoscom.length;i++){

        data = productoscom[i].imagen.data
        imagenCompleta = 'data:'+productoscom[i].imagen.contentType+";base64,"+data.toString('base64')
        console.log(data)

        productos[i] = {
          serial: productoscom[i].serial,
          nombre: productoscom[i].nombre,
          descripcion: productoscom[i].descripcion,
          cantidad: productoscom[i].cantidad,
          precio: productoscom[i].precio,
          categoria: productoscom[i].categoria,
          imagen: imagenCompleta,
  
        }
      }


      console.log(productos)

      if (productos.length === 0) {
        res.status(200).send('No hay productos en la Base de Datos');
      } else {
        res.status(200).json(productos);
      }
    } catch (error) {
      res.status(500).json({ Error: 'Error al obtener productos' });
    }
  };

  agregarProductos = async (req, res) => {
    try {
      const { serial, nombre, descripcion, cantidad, precio, categoria } = req.body;
      const imagenBuffer = req.file.buffer;
      const contentType = req.file.mimetype;
      
      const serialEquipos = await products.findOne({ serial });

      if (serialEquipos) {
        res.status(400).send('Serial de equipo ya registrado');
      } else {
        const nuevoproducto = new products({
          serial,
          nombre,
          descripcion,
          cantidad,
          precio,
          categoria,
          imagen: { data:imagenBuffer , contentType}

        });
        await nuevoproducto.save();
        res.status(201).send('Producto agregado correctamente');
      }
    } catch (error) {
      console.error('Error al agregar producto:', error);
      res.status(500).json({ Error: 'Error al agregar producto' });
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