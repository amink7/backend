const express = require('express');

const app = express();

// MIDDLEWARE
app.use(express.json());    

// SERVIDOR WEB
app.listen(3000, () => console.log("Servidor iniciado..."));

const path = require('path');

app.use(express.static(path.join(__dirname , 'public')));

const cors = require('cors');

app.use(cors()); 


require('dotenv').config();

const PORT   = process.env.PORT || 3000;
const DB_URI = process.env.DB_URI;


const mongoose = require('mongoose');

// CONEXIÓN A BASE DE DATOS
mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(db => console.log("Conexión a BD correcta"))
    .catch(error => console.log("Error al conectarse a la BD" + error));


const apiRoutes = require('./routes');

app.use('/api', apiRoutes);    

