const Cliente = require ('../models/Cliente');

//funcion agregar clientes

exports.agregarClientes = async (req, res) =>{
    try {
        let clientes;
        clientes = new Cliente(req.body);
        await clientes.save();
        res.json(clientes);

    }catch (error){
        console.log(error);
        res.status(500).send ("error al agregar cliente")
    }

}
//FUNCION BUSCAR CLIENTES

exports.buscarClientes = async (req, res) => {
    try{
        const clientes = await Cliente.find();
        res.json(clientes)
        

    }catch(error){
        console.log(error);
        res.status(500).send ("error al buscar cliente")
    }
}

//BUSCAR UB CLIENTE 

exports.mostrarCliente = async (req, res) =>{
    try{
        let clientes = await Cliente.findById(req.params.id);
        if(!clientes){
            res.status(404).send({msg: "Cliente no se encuentra con ese ID "})
        }else{
            res.json(clientes);
        }
    }catch(error){
        
        res.status(500).send ("error al buscar UN cliente")

    }
    

}

//ACTUALIZAR CLIENTE CON PATCH

exports.modificarClientes = async (req, res) =>{
    try{
        const clientes = await Cliente.findByIdAndUpdate(req. params.id, req.body,{new:true});
        if(!clientes){
            res.status(404).send({msg: "Cliente no se encuentra con ese ID"});
        }else{
            res.json(clientes);
        }


    }catch(error){
        console.log(error);
        res.status(500).send ("error al modificar los clientes")
    }

}

exports.actualizarClientes = async(req, res) =>{
    try{
        const clientes = await Cliente.findOneAndUpdate({_id: req.params.id}, req.body, {new:true});

        if(!clientes){
            res.status(404).send({msg: "Cliente no se encuentra con ese ID"});
        }else{
            res.json(clientes);
        }

    }catch(error){
        console.log(error);
        res.status(500).send ("error al actualizar los clientes")

    }
}

exports.eliminarClientes = async (req, res) =>{

    try{
        const cliente = await Cliente.findById(req.params.id);
        if(!cliente){
            res.status(404).send({msg: "Cliente no se encuentra con ese ID"});
        }else{
            await Cliente.findOneAndDelete({_id: req.params.id});
            res.json({msg : " cliente eliminado "});
        }

    }catch(error){
        console.log(error);
        res.status(500).send ("error al eliminar los clientes")

    }
}