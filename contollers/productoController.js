//const Producto = require ('../models/Producto.js');
const Producto = require ('../models/producto')



exports.agregarProductos = async (req, res) =>{
    try {
        let productos;
        productos = new Producto(req.body);
        await productos.save();
        res.json(productos);

    }catch (error){
        console.log(error); 
        res.status(500).send ("error al agregar producto")
    }

}


exports.buscarProductos = async (req, res) => {
    try{
        const productos = await Producto.find();
        res.json(productos)
        

    }catch(error){
        console.log(error);
        res.status(500).send ("error al buscar producto")
    }
}



exports.mostrarProductos = async (req, res) =>{
    try{
         let productos = await Producto.findById(req.params.id);
        if(!productos){
            res.status(404).send({msg: "Producto no se encuentra con ese ID "})
        }else{
            res.json(productos);
        }
    }catch(error){
        
        res.status(500).send ("error al buscar UN producto")

    }
    

}



exports.modificarProductos = async (req, res) =>{
    try{
        const productos = await Producto.findByIdAndUpdate(req. params.id, req.body,{new:true});
        if(!productos){
            res.status(404).send({msg: "Producto no se encuentra con ese ID"});
        }else{
            res.json(productos);
        }


    }catch(error){
        console.log(error);
        res.status(500).send ("error al modificar los productos")
    }

}

exports.actualizarProductos = async(req, res) =>{
    try{
        const productos = await Producto.findOneAndUpdate({_id: req.params.id}, req.body, {new:true});

        if(!productos){
            res.status(404).send({msg: "Producto no se encuentra con ese ID"});
        }else{
            res.json(productos);
        }

    }catch(error){
        console.log(error);
        res.status(500).send ("error al actualizar los productos")

    }
}

exports.eliminarProductos = async (req, res) =>{

    try{
        const productos = await Producto.findById(req.params.id);
        if(!productos){
            res.status(404).send({msg: "Producto no se encuentra con ese ID"});
        }else{
            await Producto.findOneAndDelete({_id: req.params.id});
            res.json({msg : " Producto eliminado "});
        }

    }catch(error){
        console.log(error);
        res.status(500).send ("error al eliminar los Productos")

    }
}