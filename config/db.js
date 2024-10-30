const mongoose = require('mongoose');
require('dotenv').config();



//conexion con mongo 

const conectarBD = () =>{
    mongoose
    .connect(process.env.DB_MONGO)
    .then(() => console.log ("Conexion establecida con MongoDB"))
    .catch((err) => console.log(err));
}

module.exports = conectarBD;