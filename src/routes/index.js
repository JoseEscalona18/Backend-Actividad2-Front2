const express = require('express');
const router = express.Router();
const controller = require('../controllers/index-c');

module.exports = (upload) => {
  router.get('/', (req, res) => {
    controller.obtenerProductos(req, res);
  });

  router.post('/', upload.single('imagen'), (req, res) => {
    controller.agregarProductos(req, res);
  });

  router.delete('/', (req, res) => {
    controller.eliminarProducto(req, res);
  });

  router.put('/', (req, res) => {
    controller.editarProducto(req, res);
  });

  return router;
};