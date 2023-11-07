const express = require('express');
const path = require('path')
const cookieParser = require('cookie-parser');
var cors = require('cors')




///INICIALIZACIONES
const app = express();

// CONFIGURACIONES
app.set('port', process.env.PORT || 8000 );


// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
  }));
  
app.use("/public", express.static(`${__dirname}/uploads/`))

// ROUTES
const indexRuta = require('./routes/index');
const authRutas = require('./routes/auth.js');


app.use('/', indexRuta)
app.use('/auth', authRutas)


module.exports = app;