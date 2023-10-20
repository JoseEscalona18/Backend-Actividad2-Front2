const express = require('express');
const path = require('path')
const cookieParser = require('cookie-parser');

///INICIALIZACIONES
const app = express();

// CONFIGURACIONES
app.set('port', process.env.PORT || 8000 );


// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

// ROUTES
const indexRuta = require('./routes/index');

app.use('/', indexRuta)

module.exports = app;