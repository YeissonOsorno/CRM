const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Cors permite que un cliente se conecta a otro servidor para el intercambio de recursos

const cors = require('cors');

// conectar mongo
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://admin:9hCMfnDz2yivh3sx@cluster0-gy0dk.mongodb.net/restapis?retryWrites=true&w=majority', {
    useNewUrlParser: true
},()=>{
    console.log('CONexion establecida con mongo atlas')
});

// crear el servidor
const app = express();

// habilitar bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Habilitar cors
app.use(cors());

// Rutas de la app
app.use('/', routes());

// carpeta publica
app.use(express.static('uploads'));

// puerto
app.listen(5000);