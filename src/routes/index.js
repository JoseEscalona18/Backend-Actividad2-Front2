const express = require('express');
const router = express.Router();
const controller = require('../controllers/index-c');
const path = require('path');

const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = path.join(__dirname, '../uploads');
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    console.log(file);
    cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage: multer.memoryStorage() });

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

module.exports = router;