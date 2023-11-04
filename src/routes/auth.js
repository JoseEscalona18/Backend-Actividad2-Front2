const express = require("express");
const router = express.Router();
const register = require("../controllers/register.js")
const getUserById = require("../controllers/getUserById.js")
const login = require("../controllers/login.js")
const verifyToken = require("../middlewares/verifytoken.js")



router.post("/register", register);

router.get('/user/:id', verifyToken, getUserById);
router.post("/login", login);




module.exports = router;

