const express = require('express');
const path = require('path')
const cookieParser = require('cookie-parser');
var cors = require('cors')

const multer = require('multer');

const storage = multer.diskStorage({

    destination: (req, file, cb) => {
        cb(null, 'Images')
    },

    filename: (req, file, cb) => {
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({storage: storage})


///INICIALIZACIONES
const app = express();

// CONFIGURACIONES
app.set('port', process.env.PORT || 8000 );


// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(cors());

// ROUTES
const indexRuta = require('./routes/index');
const authRutas = require('./routes/auth.js');


app.use('/', indexRuta(upload))
app.use('/auth', authRutas)


module.exports = app;