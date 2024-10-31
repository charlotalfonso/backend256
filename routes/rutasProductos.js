const express = require ('express');
const router = express.Router();
const productoController = require ('../contollers/productoController');

// RUTAS DEL CRUD 

router.post('/', productoController.agregarProductos);
router.get('/', productoController.buscarProductos);
router.get('/:id', productoController.mostrarProductos);
router.patch('/:id', productoController.modificarProductos);
//router.put('/:id', productoController.actualizarProductos);
router.delete('/:id', productoController.eliminarProductos);

module.exports = router;