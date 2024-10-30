const mongoose = require ('mongoose');

const productoSchema = mongoose.Schema({

    articulo:{
        type: String,
        required: true
        
    },
    referencia:{
        type: Number,
        required: true
    },
    tamaño:{
        type: String,
        required: true
    },
    tipo:{
        type: String,
        required: true
    },
    medida:{
        type: String,
        required: true
    },
    ubicacion:{
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },

    

},{versionkey:false});

module.exports = mongoose.model('Producto',productoSchema);


