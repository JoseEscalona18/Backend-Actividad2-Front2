const express = require('express');
const path = require('path')
const cookieParser = require('cookie-parser');

///INICIALIZACIONES
const app = express();

// CONFIGURACIONES
app.set('port', process.env.PORT || 8000 );



module.exports = app;