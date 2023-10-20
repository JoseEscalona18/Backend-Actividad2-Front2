const express = require('express');
const router = express.Router();
const controller = require('../controllers/index-c')


router.get('/', (req, res) => {
    controller.obtenerProductos(req, res);
});

router.post('/', (req, res) => {
    controller.agregarProductos(req, res);
});


module.exports = router;