const express = require ('express');
const router = express.Router();
const clienteController = require ('../contollers/clienteController');

// RUTAS DEL CRUD 

router.post('/', clienteController.agregarClientes);
router.get('/', clienteController.buscarClientes);
router.get('/:id', clienteController.mostrarCliente);
//router.patch('/:id', clienteController.modificarClientes);//
router.put('/:id', clienteController.actualizarClientes);
router.delete('/:id', clienteController.eliminarClientes);

module.exports = router;