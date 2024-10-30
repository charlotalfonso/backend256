const express = require('express');
const conectarBD = require ('../config/db');
const cors = require('cors');

// creamos la variable app

const app= express();
const port = process.env.PORT || 5000;

//conexion base de datos
conectarBD();
app.use(cors());
app.use(express.json());


//RUTA PARA CONSUMIR LA API CLIENTE

app.use('/api/clientes', require('../routes/rutasCliente'));
app.use('/api/productos', require('../routes/rutasProductos'));


// ruta para verificar nuestro servidor en la web


app.get('/', (req, res) =>{
    res.send (" Conexion a la red, estamos en  linea.............Conexion establecida ")
    
});

// ruta de nuestro servidor 

app.listen(port,() =>{
    console.log("Servidor Conectado http://localhost:5000/");
});