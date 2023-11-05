const express = require("express");
const router = express.Router();
const register = require("../controllers/register.js")
const getUserById = require("../controllers/getUserById.js")
const login = require("../controllers/login.js")
const verifyToken = require("../middlewares/verifytoken.js")
const obtenerDatosUsuario = require("../controllers/pfp.js")
const controller = require('../controllers/user-c.js');




router.post("/register", register);

router.get("/users", controller.obtenerUsuarios)

router.get('/user', obtenerDatosUsuario);

router.put('/users/editar/', (req, res) => {
    controller.editarProducto(req, res);
  });
  
router.get('/user/:id', verifyToken, getUserById);
router.post("/login", login);




module.exports = router;

